import { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";

export default async function errorHandler(
  context: Context,
  nextFn: () => unknown
) {
  try {
    await nextFn();
  } catch (err) {
    context.response.status = 500;
    context.response.body = { message: err.message };
  }
}
