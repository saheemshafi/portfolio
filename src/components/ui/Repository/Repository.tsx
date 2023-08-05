import { FC, Fragment, Suspense } from "react";
import { GithubRepository } from "./_repository";
import Avatar from "../Avatar";
import Link from "next/link";
import { textVariants } from "../Heading";
import { cn } from "@/lib/utils";
import GradientLine from "../GradientLine";
import { Octokit } from "octokit";

interface RepositoryProps {
  username: string;
  repositoryName: string;
  commits?: boolean;
}

const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
});

const Repository = async ({
  username,
  repositoryName,
  commits,
}: RepositoryProps) => {
  return (
    <Suspense fallback="loading repository">
      <div className="rounded border border-zinc-800 p-4 transition-colors hover:bg-zinc-800/20">
        <RepositoryDetails
          username={username}
          repositoryName={repositoryName}
        />
        {commits && (
          <Fragment>
            <GradientLine className="mb-4 mt-2" />
            <div className="mt-2">
              <p className="mb-2 font-semibold">Recent Commits</p>
              <Suspense fallback="loading commits">
                <Commits username={username} repositoryName={repositoryName} />
              </Suspense>
            </div>
          </Fragment>
        )}
      </div>
    </Suspense>
  );
};

export async function RepositoryDetails({
  username,
  repositoryName,
}: {
  username: string;
  repositoryName: string;
}) {
  const { data: repository } = await octokit.rest.repos.get({
    owner: username,
    repo: repositoryName,
  });
  return (
    <>
      <div className="flex items-center gap-2">
        <Link target="_blank" href={repository.owner.html_url}>
          <Avatar
            className="w-[30px]"
            src={repository.owner.avatar_url}
            name={repository.owner.login}
          ></Avatar>
        </Link>
        <div className="flex flex-1 flex-wrap items-center justify-between gap-1">
          <Link
            target="_blank"
            className={cn(textVariants({ level: "h6" }), "flex lowercase")}
            href={repository.html_url}
          >
            {repository.owner.login}/{repository.name}
          </Link>
          <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2 py-1 text-xs font-medium uppercase tracking-wide  text-yellow-brand">
            {repository.language}
          </span>
        </div>
      </div>
      <div className="mt-3 text-sm text-zinc-300">
        Updated{" "}
        {new Date(repository.updated_at).toLocaleString("US", {
          dateStyle: "medium",
        })}
      </div>
    </>
  );
}

export async function Commits({
  username,
  repositoryName,
}: {
  username: string;
  repositoryName: string;
}) {
  const { data: commits } = await octokit.rest.repos.listCommits({
    owner: username,
    repo: repositoryName,
  });
  return (
    <ul>
      {commits.splice(0, 3).map((commit) => (
        <li
          key={commit.node_id}
          className="my-2 rounded border border-zinc-800 p-2 text-sm first:border-zinc-700 first:bg-zinc-800"
        >
          <p className="font-semibold">{commit.commit.message}</p>
          <div className="mt-1 flex items-center gap-1">
            <Avatar
              className="w-4"
              src={commit.author?.avatar_url || ""}
              name={commit.committer?.name || "AVATAR"}
            ></Avatar>
            <p className="font-normal text-zinc-400">
              Commited by {commit.author?.login}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Repository;
