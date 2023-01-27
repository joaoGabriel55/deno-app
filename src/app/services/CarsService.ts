import { Car } from "../../domain/Car.ts";
import { CarRepository } from "../../infrastructure/repositories/CarRepository.ts";
import EntityRepository from "../../infrastructure/repositories/EntityRepository.ts";

export default class CarsService {
  private repository;

  constructor(repository: EntityRepository<Car> = new CarRepository()) {
    this.repository = repository;
  }

  async findAll() {
    return await this.repository.findAll();
  }
}
