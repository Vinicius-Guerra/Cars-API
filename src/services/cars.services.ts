import { carsDatabase, generateCarId } from "../database/cars";
import { TCar, TCreateCarBody, TUpdateCarBody } from "../interfaces/cars.interface";

interface ICarsServices {
    create(body: TCreateCarBody): TCar;
    getMany(search?: string, year?: string): TCar[];
    getOne(id: string): TCar;
    delete(id: string): void;
    update(body: TUpdateCarBody, id: string): TCar;
}

export class CarsServices implements ICarsServices {
    create(body: TCreateCarBody): TCar {
        const date = new Date();

        const newCar: TCar = {
            id: generateCarId(),
            model: body.model,
            year: body.year,
            km: body.km,
            brand: body.brand,
            price: body.price,
            createdAt: date,
            updatedAt: date,
        }

        carsDatabase.push(newCar);
        
        return newCar;
    };

    getMany(search?: string, year?: string): TCar[] {
        const carsList = carsDatabase.filter(car => {
            const searchRule = search ? car.model.toLowerCase().includes(search.toLowerCase()) : true;
            const yearRule = year ? car.year === Number(year) : true;

            return searchRule && yearRule;
        })
        return carsList;
    }

    getOne(id: string): TCar {
        const car = carsDatabase.find(car => car.id === Number(id)) as TCar;

        return car;
    }

    delete(id: string): void {
        const index = carsDatabase.findIndex(car => car.id === Number(id));

        carsDatabase.splice(index, 1);
    }

    update(body: TUpdateCarBody, id: string): TCar {
        const currentCar = carsDatabase.find(car => car.id === Number(id)) as TCar;
        const index = carsDatabase.findIndex(car => car.id === Number(id));
        const data = new Date();

        const newCar = { ...currentCar, ...body, updatedAt: data };
        
        carsDatabase.splice(index, 1, newCar);

        return newCar;
    }
}