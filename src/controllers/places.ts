import { Request, Response } from "express";


export const getPlace = async (_req: Request, res: Response) => {
    try {
        res.json("get").status(200)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}

export const addPlace = async (_req: Request, res: Response) => {
    try {
        res.json("post").status(202)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}