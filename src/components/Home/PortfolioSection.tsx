import supabase from "@/lib/supabase/supabase";
import Repository from "../Repository";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

interface PortfolioSectionProps {}

const PortfolioSection = async ({}: PortfolioSectionProps) => {
  const repos = await supabase.from("repositories").select();
  const portfolio = repos.data?.find(
    ({ repositoryName }) => repositoryName == "portfolio",
  );

  if (repos.error) {
    throw new Error(repos.error?.message);
  }

  return (
    portfolio && (
      <Container id="os-portfolio">
        <Heading>
          <Heading.SubHeading>Open Source</Heading.SubHeading>
          <Heading.Element level="h2">Build From My Portfolio</Heading.Element>
          <Heading.Description>
            Grab this open-source portfolio to craft your own. It has an awesome
            collection of features you might love.
          </Heading.Description>
        </Heading>
        <Repository
          username={portfolio.owner}
          commits={portfolio.with_commits}
          repositoryName={portfolio.repositoryName}
        />
      </Container>
    )
  );
};

export default PortfolioSection;
