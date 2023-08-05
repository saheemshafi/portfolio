import { cn, octokit } from "@/lib/utils";
import Link from "next/link";
import { Fragment, Suspense } from "react";
import Avatar from "../Avatar";
import GradientLine from "../GradientLine";
import { textVariants } from "../Heading";
import { ErrorBoundary } from "react-error-boundary";
import { VscError } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";

type GithubInitials = { username: string; repositoryName: string };
interface RepositoryProps extends GithubInitials {
  commits?: boolean;
}

async function Repository({
  username,
  repositoryName,
  commits,
}: RepositoryProps) {
  return (
    <div className="rounded border border-zinc-800 p-4 transition-colors hover:bg-zinc-800/20">
      <ErrorBoundary
        fallback={
          <p className="flex items-center gap-1 font-bold text-red-400">
            <VscError size={20} /> Something went wrong while loading
            repository!
          </p>
        }
      >
        <Suspense fallback="loading repository">
          <RepositoryDetails
            username={username}
            repositoryName={repositoryName}
          />
          {commits && (
            <Fragment>
              <GradientLine className="mb-4 mt-4" />
              <div className="mt-2">
                <p className="mb-2 font-semibold">Recent Commits</p>
                <ErrorBoundary
                  fallback={
                    <p className="flex items-center gap-1 font-bold text-red-400">
                      <VscError size={20} /> We are not able to load commits at
                      the moment!
                    </p>
                  }
                >
                  <Suspense fallback="loading commits">
                    <Commits
                      username={username}
                      repositoryName={repositoryName}
                    />
                  </Suspense>
                </ErrorBoundary>
              </div>
            </Fragment>
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

async function RepositoryDetails({ username, repositoryName }: GithubInitials) {
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
            className={cn(textVariants({ level: "h6" }), "flex lowercase")}
            target="_blank"
            href={repository.html_url}
          >
            {repository.owner.login}/{repository.name}
          </Link>
          <div className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-zinc-300">
            <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2 py-1 ">
              {repository.language}
            </span>
            <Link
              target="_blank"
              href={repository.html_url}
              className="rounded-full border border-zinc-700 bg-zinc-800 p-1 "
            >
              <AiFillGithub size={20} />
            </Link>
          </div>
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

async function Commits({
  username,
  repositoryName,
  range = 3,
}: GithubInitials & { range?: number }) {
  const { data: commits } = await octokit.rest.repos.listCommits({
    owner: username,
    repo: repositoryName,
  });
  return (
    <ul>
      {commits.splice(0, range).map(({ node_id, commit, author }) => (
        <li
          key={node_id}
          className="my-2 rounded border border-zinc-800 p-2 text-sm first:border-zinc-700 first:bg-zinc-800"
        >
          <p className="font-semibold" title={commit.message}>
            {commit.message}
          </p>
          <div className="mt-1 flex items-center gap-1">
            <Avatar
              className="w-4"
              src={author?.avatar_url || ""}
              name={commit.committer?.name || "AVATAR"}
            ></Avatar>
            <p className="font-normal text-zinc-400">
              Commited by {author?.login}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Repository;
export { RepositoryDetails };
