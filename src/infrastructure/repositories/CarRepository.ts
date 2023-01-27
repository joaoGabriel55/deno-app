// deno-lint-ignore-file no-explicit-any
import { Car } from "../../domain/Car.ts";
import db from "../db/instance.ts";
import EntityRepository from "./EntityRepository.ts";

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
