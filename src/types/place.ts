export interface Place{
    Name:String,
    _id:string,
    Creation_timestamp:Date,
    Type:"Restaurant"|"Hotle"|"Park",
    Address:string
}

export type FilteringType =  "Restaurant"|"Hotle"|"Park"|"all"