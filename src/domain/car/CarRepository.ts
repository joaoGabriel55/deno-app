// deno-lint-ignore-file no-explicit-any
import { Car } from "./Car.ts";
import db from "../../infrastructure/db.ts";
import EntityRepository from "../shared/EntityRepository.ts";

export class CarRepository implements EntityRepository<Car> {
  create(entity: Car): Promise<Car> {
    throw new Error("Not implement yet!");
  }

  async findAll(): Promise<Car[]> {
    const { data, error } = await db.from("cars").select();

    if (!data) return [];

    return data?.map(this.parseToCar);
  }

  private parseToCar(data: any): Car {
    return {
      id: data.id,
      brand: data.brand,
      color: data.color,
      name: data.name,
      year: data.year,
    };
  }
}
