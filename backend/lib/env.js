import dontenv from "dotenv";

dontenv.config();

export const MONGO_DB_URL = process.env.DB_CONNECTIONI_URL;
export const PORT = process.env.PORT;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
