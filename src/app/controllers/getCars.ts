import { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { queryAllCars } from "../use-cases/index.ts";

export const getCars = async (context: Context) => {
  context.response.body = await queryAllCars.execute();
};
