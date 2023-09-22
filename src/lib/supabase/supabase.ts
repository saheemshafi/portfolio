import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";
import { env } from "../zod/envSchema";

/**
 * @description Supabase client used in handling `database` and `storage buckets`.
 * @type {Database}
 * @link https://supabase.com
 */
const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_KEY);

export default supabase;
