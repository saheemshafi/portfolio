import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { FC } from "react";

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = ({}) => {
  return (
    <Container className="pt-12">
      <Heading.Root>
        <Heading.SubHeading>Projects</Heading.SubHeading>
        <Heading>All Projects</Heading>
        <Heading.Description>Every project I have worked on.</Heading.Description>
      </Heading.Root>
    </Container>
  );
};

export default ProjectsPage;
