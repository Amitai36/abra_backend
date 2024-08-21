import { Request, Response } from "express";
import { PlaceModule } from "../modules/placesModule";
import { Place, FilteringType } from "../types/place";


export const getPlace = async (req: Request<{ filter: FilteringType }>, res: Response) => {
    try {
        const { filter } = req.params
        console.log(filter)
        if (filter === "all") {
            const place =await PlaceModule.find().sort("Creation_timestamp")
            res.json(place).status(200)
        }
        else {
            const place =await PlaceModule.find({ Type: filter })
            res.json(place).status(200)
        }
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}

export const addPlace = async (req: Request<{}, {}, { args: Place }>, res: Response) => {
    try {
        //get  Name, Address, Creation_timestamp, Type in the body
        const { Name, Address, Creation_timestamp, Type } = req.body.args
        //check exist
        const exist = await PlaceModule.find({ Name })
        if (exist.length > 0) {
            res.json({ message: "alredy exist" }).status(409)
        }
        else {
            //add new place
            const addPlace = new PlaceModule({
                Address,
                Creation_timestamp:new Date(), Name, Type
            })
            addPlace.save().then(async () => {
                const result = await PlaceModule.find({ Name });
                res.json(result).status(200)
            })
        }
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}
