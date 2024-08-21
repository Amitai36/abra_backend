import { Router } from "express";

import {  addPlace, getPlace} from "../controllers/places";

const router = Router();

router.get("/", getPlace);

router.post("/", addPlace);

export default router;