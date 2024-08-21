import express from "express";

import places from "./routes/places"

const app = express();

app.use("/place", places);

export default app;