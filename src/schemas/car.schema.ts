import { z } from "zod";

export const carSchema = z.object({
    id: z.number().positive(),
    model: z.string().min(1),
    km: z.number(),
    year: z.date(),
    brand: z.string().min(1),
    price: z.number().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const carCreateBodySchema = carSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export const carUpdateBodySchema = carCreateBodySchema.partial();