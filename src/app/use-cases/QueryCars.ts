import CarsService from "../services/CarsService.ts";

export default class QueryAllCars {
  private service;

  constructor(service: CarsService) {
    this.service = service;
  }

  async execute() {
    return await this.service.findAll();
  }
}
