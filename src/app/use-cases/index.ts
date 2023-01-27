import CarsService from "../services/CarsService.ts";
import QueryAllCars from "./QueryCars.ts";

const queryAllCars = new QueryAllCars(new CarsService());

export { queryAllCars };
