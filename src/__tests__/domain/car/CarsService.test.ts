import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.174.0/testing/asserts.ts";
import { Car } from "../../../domain/car/Car.ts";
import CarsService from "../../../domain/car/CarsService.ts";
import EntityRepository from "../../../domain/shared/EntityRepository.ts";

type MockResultScenarios = {
  hasError?: boolean;
  emptyData?: boolean;
};

Deno.test("CarsService", async (t) => {
  class CarsMemoryRepository implements EntityRepository<Car> {
    private mockResultScenarios: MockResultScenarios;

    constructor({ hasError, emptyData }: MockResultScenarios) {
      this.mockResultScenarios = { hasError, emptyData };
    }

    create(entity: Car): Promise<Car> {
      throw new Error("Not implement yet!");
    }

    async findAll(): Promise<Car[]> {
      const { hasError, emptyData } = this.mockResultScenarios;

      if (hasError) throw Error("Error");
      if (emptyData) return await Promise.resolve([]);

      return await Promise.resolve([
        {
          brand: "Ford",
          color: "red",
          id: "avasda",
          name: "Fusion",
          year: 2045,
        },
      ]);
    }
  }

  await t.step("returns all cars", async () => {
    const mockRepository = new CarsMemoryRepository({});

    const cars = await new CarsService(mockRepository).findAll();

    assertEquals(cars.length, 1);
  });

  await t.step("returns empty cars", async () => {
    const mockRepository = new CarsMemoryRepository({ emptyData: true });

    const cars = await new CarsService(mockRepository).findAll();

    assertEquals(cars.length, 0);
  });

  await t.step("throws error", () => {
    const mockRepository = new CarsMemoryRepository({ hasError: true });

    assertRejects(async () => await new CarsService(mockRepository).findAll());
  });
});
