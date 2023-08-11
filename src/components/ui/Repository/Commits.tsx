import octokit from "@/lib/octokit";
import Avatar from "@/components/ui/Avatar";
import Link from "next/link";
import { GithubInitials } from "./repository.types";

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
          className="relative my-2 rounded border border-zinc-800 p-2 text-sm first:border-theme/20 first:bg-theme/5"
        >
          <p className="truncate font-semibold" title={commit.message}>
            {commit.message}
          </p>
          <div className="mt-1 flex items-center gap-1">
            <Avatar
              className="w-4 scale-75"
              src={author?.avatar_url || ""}
              name={commit.committer?.name || "AVATAR"}
            ></Avatar>
            <p className="font-normal text-zinc-400">
              Commited by{" "}
              <Link
                className="font-medium underline transition-colors hover:text-theme hover:underline sm:no-underline"
                href={author?.html_url || ""}
              >
                {author?.login}
              </Link>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Commits;
