import { Request, Response } from "express";
import { CarsServices } from "../services/cars.services";

export class CarsControllers{
    create(req: Request, res: Response): Response{
        const carsServices = new CarsServices();

        const create = carsServices.create(req.body);

        return res.status(200).json(create);
    }

    getMany(req: Request, res: Response): Response{
        const { search, year } = req.query;
        
        const carsServices = new CarsServices();

        const getMany = carsServices.getMany(search as string, year as string);

        return res.status(200).json(getMany);
    }

    getOne(req: Request, res: Response): Response{
        const carsServices = new CarsServices();
        
        const getOne = carsServices.getOne(req.params.id);

        return res.status(200).json(getOne);
    }

    delete(req: Request, res: Response): Response{
        const carsServices = new CarsServices();

        carsServices.delete(req.params.id);

        return res.status(204).json();
    }

    update(req: Request, res: Response): Response{
        const carsService = new CarsServices();

        const update = carsService.update(req.body, req.params.id);

        return res.status(200).json(update);
    }
}