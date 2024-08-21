import { Router } from "express";

import {  addPlace, getPlace} from "../controllers/places";

const router = Router();
//when /api/place as get go to getPlace func
router.get("/:filter", getPlace);

//when /api/place as post go to addPlace func
router.post("/", addPlace);

export default router;