import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

import api from "./api";
import { port} from "./config/index"
import { connectDB } from "./db/connect";

const app = express()

dotenv.config();
connectDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", api)

app.listen(port, () => {
    console.log(`listen to port ${port}`)
})