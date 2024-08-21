import { model, Schema } from "mongoose"

const placeSchema = new Schema({
    Name:String,
    Creation_timestamp:Date,
    Type:String,
    Address:String
})


export const PlaceModule = model("places", placeSchema)