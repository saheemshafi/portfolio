import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { FC } from "react";

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = ({}) => {
  return (
    <Container className="pt-12">
      <Heading>
        <Heading.SubHeading>Projects</Heading.SubHeading>
        <Heading.Element>All Projects</Heading.Element>
        <Heading.Description>Every project I have worked on.</Heading.Description>
      </Heading>
    </Container>
  );
};

export default ProjectsPage;
