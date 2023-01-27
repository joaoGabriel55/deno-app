import { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";

export default function notFound(context: Context) {
  context.response.status = 404;
  context.response.body = { message: "Route Not Found" };
}
