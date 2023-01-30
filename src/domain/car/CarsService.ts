import EntityRepository from "../shared/EntityRepository.ts";
import { Car } from "./Car.ts";
import CarsRepository from "./CarRepository.ts";

export default class CarsService {
  private repository;

  constructor(repository: EntityRepository<Car> = new CarsRepository()) {
    this.repository = repository;
  }

  async findAll() {
    return await this.repository.findAll();
  }
}
