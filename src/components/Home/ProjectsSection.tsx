import Link from "next/link";
import { FC } from "react";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { ImGithub } from "react-icons/im";
import { buttonVariants } from "../ui/Button/_buttonVariants";
import Card from "../ui/Card";
import Chip from "../ui/Chip";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Separator from "../ui/Separator";
import supabase from "@/lib/supabase/supabase";

interface ProjectsSectionProps {}

const ProjectsSection = async ({}: ProjectsSectionProps) => {
  const projects = await supabase
    .from("projects")
    .select(`*,repositories(id, owner, repositoryName)`)
    .limit(6);
  if (projects.error) {
    throw new Error(projects.error?.message);
  }
  return (
    <Container id="projects">
      <Heading>
        <Heading.SubHeading>PROJECTS</Heading.SubHeading>
        <Heading.Element level="h2"> My Contributions</Heading.Element>
        <Heading.Description>
          Check out the some websites I&apos;ve been busy with! It&apos;s all
          about tech coming together in my projects.
        </Heading.Description>
      </Heading>

      <div className="mb-12 grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {projects.data.map((project) => (
          <Card key={project.id}>
            <Card.Image src={project.image} alt={project.title} />
            <Card.Content>
              <Card.Tags>
                {project.tags?.map((tag) => <Chip key={tag}>{tag}</Chip>)}
              </Card.Tags>
              <Card.Info>
                <Card.Title>{project.title}</Card.Title>
                <Card.Description>{project.description}</Card.Description>
              </Card.Info>
              <Card.Actions>
                <Link
                  href={`https://github.com/${project.repositories?.owner}/${project.repositories?.repositoryName}`}
                  className={buttonVariants({
                    size: "sm",
                    variant: "secondary",
                  })}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <ImGithub />
                  Github
                </Link>

                {project.deploy_url && (
                  <Link
                    href={project.deploy_url}
                    className={buttonVariants({ size: "sm" })}
                  >
                    Live Project
                    <CgArrowsExpandUpRight />
                  </Link>
                )}
              </Card.Actions>
            </Card.Content>
          </Card>
        ))}
      </div>
      <Separator className="max-w-lg" />
      <div className="mt-8 grid place-items-center">
        <Link
          href="/projects"
          className={buttonVariants({ variant: "outline" })}
        >
          View All Projects
        </Link>
      </div>
    </Container>
  );
};

export default ProjectsSection;
