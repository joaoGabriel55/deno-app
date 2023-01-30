import CarsService from "../../domain/car/CarsService.ts";
import QueryAllCars from "./QueryCars.ts";

const queryAllCars = new QueryAllCars(new CarsService());

export { queryAllCars };
