import express from "express";

import places from "./routes/places"
import weather from "./routes/weather"

const app = express();
//when /api/place to place file
app.use("/place", places);
//when /api/weather to place file
app.use("/weather", weather);

export default app;