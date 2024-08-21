import { Router } from "express";

import {  getWeather} from "../controllers/weather";

const router = Router();
//create getweather func by send in the params x, y
router.get("/:x/:y", getWeather);

export default router;