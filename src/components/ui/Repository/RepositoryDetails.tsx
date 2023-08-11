import octokit from "@/lib/octokit";
import { cn, formatDate } from "@/lib/utils";
import Avatar from "@/components/ui/Avatar";
import Link from "next/link";
import { headingVariants } from "../Heading";
import { GithubInitials } from "./repository.types";

async function RepositoryDetails({ username, repositoryName }: GithubInitials) {
  const { data: repository } = await octokit.rest.repos.get({
    owner: username,
    repo: repositoryName,
  });
  return (
    <>
      <div className="flex items-center gap-2">
        <Link
          target="_blank"
          href={repository.owner.html_url}
          className="focus-visble:ring-offset-1 rounded-full shadow-sm outline-none transition-shadow hover:ring hover:ring-slate-500/20 focus-visible:ring focus-visible:ring-zinc-500/50"
        >
          <Avatar
            className="w-[30px]"
            src={repository.owner.avatar_url}
            name={repository.owner.login}
          ></Avatar>
        </Link>
        <div className="flex flex-1 flex-col flex-wrap items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
          <Link
            className={cn(
              headingVariants({ level: "h6" }),
              "flex lowercase hover:from-gray-100 hover:to-white focus-visible:from-gray-100 focus-visible:to-white",
            )}
            target="_blank"
            href={repository.html_url}
          >
            {repository.owner.login}/{repository.name}
          </Link>
          <span className="rounded-full border border-theme/20 bg-zinc-800 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-theme ">
            {repository.language}
          </span>
        </div>
      </div>
      <div className="mt-3 text-sm text-zinc-300">
        Updated {formatDate(repository.updated_at)}
      </div>
    </>
  );
}

export default RepositoryDetails;
