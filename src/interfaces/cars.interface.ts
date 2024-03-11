import { z } from "zod";
import { carCreateBodySchema, carSchema, carUpdateBodySchema } from "../schemas/car.schema";

export type TCar = z.infer<typeof carSchema>;
export type TCreateCarBody = z.infer<typeof carCreateBodySchema>;
export type TUpdateCarBody = z.infer<typeof carUpdateBodySchema>;
