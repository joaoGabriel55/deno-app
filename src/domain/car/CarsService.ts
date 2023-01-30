import EntityRepository from "../shared/EntityRepository.ts";
import { Car } from "./Car.ts";
import { CarRepository } from "./CarRepository.ts";

export default class CarsService {
  private repository;

  constructor(repository: EntityRepository<Car> = new CarRepository()) {
    this.repository = repository;
  }

  async findAll() {
    return await this.repository.findAll();
  }
}
