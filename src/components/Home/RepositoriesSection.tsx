import supabase from "@/lib/supabase/supabase";
import Repository from "../Repository";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

interface RepositoriesSectionProps {}

const RepositoriesSection = async ({}: RepositoriesSectionProps) => {

  const repos = await supabase.from("repositories").select();
  if (repos.error) {
    throw new Error(repos.error?.message);
  }

  return (
    <Container id="os-repositories">
      <Heading>
        <Heading.SubHeading>Source Code</Heading.SubHeading>
        <Heading.Element level="h2">Projects You Can Explore</Heading.Element>
        <Heading.Description>
          Explore and learn from my open-source projects. Dive into a world of
          valuable insights and practical knowledge.
        </Heading.Description>
      </Heading>
      <div className="grid gap-4 lg:grid-cols-2">
        {repos.data.map(({ id, repositoryName, owner }) => (
          <div key={id}>
            <Repository username={owner} repositoryName={repositoryName} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RepositoriesSection;
