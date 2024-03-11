import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

interface IRequestSchema {
    params?: AnyZodObject;
    body?: AnyZodObject;
    query?: AnyZodObject;
}

export class ValidateRequest{
    static execute(schema: IRequestSchema) {
        return async (req: Request, res: Response, next: NextFunction) => {
            if (schema.params) {
                req.params = await schema.params.parseAsync(req.params);
            }

            if (schema.body) {
                req.body = await schema.body.parseAsync(req.body);
            }

            if (schema.query) {
                req.query = await schema.query.parseAsync(req.query);
            }

            next();
        };
    };
};