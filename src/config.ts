import { config as dotEnvConfig } from "https://deno.land/x/dotenv@v1.0.1/mod.ts";

dotEnvConfig({ export: true });

export const APP_HOST = Deno.env.get("APP_HOST") || "127.0.0.1";
export const APP_PORT = Deno.env.get("APP_PORT") || 4000;

export const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || '';
export const SUPABASE_KEY = Deno.env.get("SUPABASE_KEY") || '';
