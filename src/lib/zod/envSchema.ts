import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.union([
    z.literal("development"),
    z.literal("production"),
    z.literal("test"),
  ]),
  GITHUB_PAT: z.string(),
  SUPABASE_URL: z.string().url(),
  SUPABASE_KEY: z.string(),
  SUPABASE_BUCKET_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
export type EnvSchema = z.infer<typeof envSchema>;
