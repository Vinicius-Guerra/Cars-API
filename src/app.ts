import "express-async-errors";
import  helmet  from "helmet";
import express, { json } from "express";
import { carsRouter } from "./routes/cars.routes";
import { HandleErrors } from "./errors/handleErrors";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/cars", carsRouter);

app.use(HandleErrors.execute);