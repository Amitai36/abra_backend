import dotenv from "dotenv";
dotenv.config();

export const mongoDBConnection = process.env["MONGO_DB_CONNECTION"] ?? "";
export const port = process.env["PORT"];
export const weather = process.env["OPEN_WEATHE_MAP_TOCKEN"];