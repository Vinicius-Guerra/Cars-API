import { Router } from "express";
import { CarsControllers } from "../controllers/cars.controllers";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { carUpdateBodySchema } from "../schemas/car.schema";
import { IsCarIdValid } from "../middlewares/isCarIdValid.middleware";

export const carsRouter = Router();

const carsControllers = new CarsControllers();

carsRouter.post("/",carsControllers.create);
carsRouter.get("/", carsControllers.getMany);
carsRouter.get("/:id", IsCarIdValid.execute, carsControllers.getOne);
carsRouter.delete("/:id", IsCarIdValid.execute, carsControllers.delete);
carsRouter.patch("/:id", ValidateRequest.execute({body: carUpdateBodySchema}),IsCarIdValid.execute, carsControllers.update);