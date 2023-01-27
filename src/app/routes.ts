import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getCars } from "./controllers/getCars.ts";

const router = new Router();

router.get("/api/cars", getCars);

export default router;
