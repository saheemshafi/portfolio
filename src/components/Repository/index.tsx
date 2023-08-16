import { Fragment, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { VscError } from "react-icons/vsc";
import GradientLine from "../ui/Separator";
import Commits from "./Commits";
import RepositoryDetails from "./RepositoryDetails";
import { GithubInitials } from "./repository.types";
import { ImSpinner8 } from "react-icons/im";

interface RepositoryProps extends GithubInitials {
  commits?: boolean;
}

async function Repository({
  username,
  repositoryName,
  commits,
}: RepositoryProps) {
  return (
    <div className="rounded border border-zinc-800 p-4 transition-colors md:hover:bg-zinc-800/20">
      <ErrorBoundary
        fallback={
          <p className="flex items-center gap-1 font-bold text-red-400">
            <VscError size={20} /> Something went wrong while loading
            repository!
          </p>
        }
      >
        <Suspense
          fallback={
            <p className="flex items-center gap-2 font-semibold">
              <ImSpinner8 className="animate-spin" />
              Loading repository...
            </p>
          }
        >
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

export default Repository;
