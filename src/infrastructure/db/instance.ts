import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_KEY, SUPABASE_URL } from "../../config.ts";

const db = createClient(SUPABASE_URL, SUPABASE_KEY);

export default db;
