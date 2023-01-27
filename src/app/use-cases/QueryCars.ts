import { CarRepository } from "../../infrastructure/repositories/CarRepository.ts";

export default class QueryCars {
  async execute() {
    const repository = new CarRepository();

    return await repository.findAll();
  }
}
