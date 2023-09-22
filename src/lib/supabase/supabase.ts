import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

/**
 * @description Supabase client used in handling `database` and `storage buckets`.
 * @type {Database}
 * @link https://supabase.com
 */
const supabase = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

export default supabase;
