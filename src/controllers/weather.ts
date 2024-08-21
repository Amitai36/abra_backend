import axios from "axios";
import { Request, Response } from "express";
import { Weather } from "../types/weather";
import { weather } from "../config";


export const getWeather = async (req: Request, res: Response) => {
    try {
        const { x, y } = req.params
        const weatherRes = await axios.get<Weather>(
            `https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=${weather}`);
        ;
        res.json(weatherRes.data).status(200)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}
