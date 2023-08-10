namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    GITHUB_PAT: string;
    SUPABASE_URL: string;
    SUPABASE_KEY: string;
  }
}
