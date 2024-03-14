import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import "dotenv/config";
import helmet from "helmet";
import { carRouter } from "./Routes";
import { handleError } from "./middlewares";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/cars", carRouter);

app.use(handleError.execute);

