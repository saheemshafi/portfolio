import { buttonVariants } from "@/components/ui/Button/_buttonVariants";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import supabase from "@/lib/supabase/supabase";
import { env } from "@/lib/zod/envSchema";
import { Metadata } from "next";
import Link from "next/link";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { ImGithub } from "react-icons/im";

export const revalidate = 10800; // Revalidate after 3 hours : 10800 seconds;

const { title, description } = {
  title: "Mir Saheem Shafi - All Projects",
  description:
    "Checkout Every Project Of Mine From Simple To Complex And Personal To Business Use.",
};

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: env.APP_URL.concat("/projects"),
  },
};

interface ProjectsPageProps { }

const ProjectsPage = async ({ }: ProjectsPageProps) => {
  const { data: projects } = await supabase
    .from("projects")
    .select(`*`)
    .throwOnError();

  return (
    <Container className="pt-12">
      <Heading>
        <Heading.SubHeading>Projects</Heading.SubHeading>
        <Heading.Element>All Projects</Heading.Element>
        <Heading.Description>
          Checkout every project of mine from simple to complex and personal to
          business use.
        </Heading.Description>
      </Heading>
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {projects?.map((project) => (
          <Card key={project.id}>
            <Card.Image
              src={env.SUPABASE_BUCKET_URL.concat(project.imagePath)}
              alt={project.title}
            />
            <Card.Content>
              <Card.Tags>
                {project.tags
                  ?.splice(0, 3)
                  .map((tag) => <Chip key={tag}>{tag}</Chip>)}
              </Card.Tags>
              <Card.Info>
                <Card.Title>{project.title}</Card.Title>
                <Card.Description>{project.description}</Card.Description>
              </Card.Info>
              <Card.Actions>
                <Link
                  href={project.repository || ''}
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
    </Container>
  );
};

export default ProjectsPage;
