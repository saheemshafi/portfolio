import { Octokit } from "octokit";
import { env } from "./zod/envSchema";

/**
 * @description Creates a new octokit client to deal with Github Api
 * @link https://api.github.com
 */
const octokit = new Octokit({
  auth: env.GITHUB_PAT,
});

export default octokit;
