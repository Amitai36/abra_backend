import { Request, Response } from "express";
import { PlaceModule } from "../modules/placesModule";
import { Place } from "../types/place";


export const getPlace = async (_req: Request, res: Response) => {
    try {
        const allPlaces = PlaceModule.find()
        console.log(allPlaces)
        res.json("get").status(200)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}

export const addPlace = async (req: Request<{}, {}, Place>, res: Response) => {
    try {
        const { Name, Address, Creation_timestamp, Type } = req.body
        const exist = await PlaceModule.find({ Name })
        if (exist) {
            res.json({ message: "alredy exist" }).status(409)
        }
        else {
            const addPlace = new PlaceModule({
                Address,
                Creation_timestamp, Name, Type
            })
            addPlace.save().then(async()=>{
                const result = await PlaceModule.find({Name});
                console.log(result)
            })
            res.json("post").status(200)
        }
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}