import { Octokit } from "octokit";

/**
 * @description Creates a new octokit client to deal with Github Api
 * @link https://api.github.com
 */
const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
});

export default octokit;
