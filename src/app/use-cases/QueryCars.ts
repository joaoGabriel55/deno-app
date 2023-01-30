import CarsService from "../../domain/car/CarsService.ts";

export default class QueryAllCars {
  private service;

  constructor(service: CarsService) {
    this.service = service;
  }

  async execute() {
    try {
      return await this.service.findAll();
    } catch (error) {
      throw error;
    }
  }
}
