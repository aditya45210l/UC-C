import cors from "cors";
import express, { urlencoded } from "express";
import { experent } from "./src/controllers/User.controller.js";
import userRouter from "./src/routes/user.route.js";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", experent);

app.use(userRouter);
