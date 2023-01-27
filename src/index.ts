import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import errorHandler from "./app/controllers/shared/errorHandler.ts";
import notFound from "./app/controllers/shared/notFound.ts";
import router from "./app/routes.ts";
import { APP_HOST, APP_PORT } from "./config.ts";

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

console.log(`Listening on port:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
