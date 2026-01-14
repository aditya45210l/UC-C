import mongoose from "mongoose";
import { MONGO_DB_URL } from "./env.js";

let isConnected = false;

export async function connectToDB() {
  try {
    if (isConnected) {
      console.log("DB allready connected!");
      return;
    }
    await mongoose.connect(MONGO_DB_URL);
    console.log("✅ MongoDB connected");
    isConnected = true;
  } catch (error) {
    isConnected = false;
    console.log(error);
  }
}
