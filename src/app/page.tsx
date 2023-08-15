import ContactForm from "@/components/ContactForm";
import * as Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { buttonVariants } from "@/components/ui/Button/_buttonVariants";
import Chip from "@/components/ui/Chip";
import Container from "@/components/ui/Container";
import Separator from "@/components/ui/Separator";
import Heading, { headingVariants } from "@/components/ui/Heading";
import Repository from "@/components/ui/Repository";
import supabase from "@/lib/supabase/supabase";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { ImGithub } from "react-icons/im";
import Card from "@/components/ui/Card";
import { MdSpaceDashboard } from "react-icons/md";

export const revalidate = 43200; // Revalidate after 12 hours : 43200 seconds;

export default async function Home() {
  const repos = await supabase.from("repositories").select();
  const projects = await supabase
    .from("projects")
    .select(`*,repositories(id, owner, repositoryName)`);
  const portfolio = repos.data?.find(
    ({ repositoryName }) => repositoryName == "portfolio",
  );
  if (repos.error || projects.error) {
    throw new Error(repos.error?.message || projects.error?.message);
  }

  return (
    <main>
      <Container className="min-h-[400px] pt-12">
        <Heading className="mb-8">
          <Heading.SubHeading>Hello, I Am</Heading.SubHeading>
          <Heading.Element>Mir Saheem Shafi</Heading.Element>
          <Heading.Description>
            I build awesome stuff on the web. From sleek designs to smooth
            functionality. Got a cool project in mind? Let&apos;s chat and make
            it happen!
          </Heading.Description>
        </Heading>

        <div className="flex gap-3">
          <Button>
            <MdSpaceDashboard size={20} /> View Projects
          </Button>
          <Button variant="ghost">About Me</Button>
        </div>
      </Container>

      <Container id="skills">
        <Heading>
          <Heading.SubHeading>SKILLS</Heading.SubHeading>
          <Heading.Element level="h2">
            Techstack For Seamless Development
          </Heading.Element>
          <Heading.Description>
            I have hands-on experience with a variety of technologies, which you
            can explore in detail through my portfolio.
          </Heading.Description>
        </Heading>
        <div className="relative md:-mt-12">
          <Link
            href="/skills"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            )}
          >
            All Skills
          </Link>
          <img
            src="/images/design-elements/eclipse.png"
            alt="skills"
            className="mx-auto"
          />
        </div>
        <Separator className="max-w-lg" />
      </Container>

      <Container id="projects">
        <Heading>
          <Heading.SubHeading>PROJECTS</Heading.SubHeading>
          <Heading.Element level="h2"> My Contributions</Heading.Element>
          <Heading.Description>
            A Showcase of Projects I&apos;ve Been Part Of.
          </Heading.Description>
        </Heading>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {projects.data.map((project) => (
            <Card key={project.id}>
              <Card.Image src={project.image} alt={project.title} />
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

      <Container id="socials">
        <Heading>
          <Heading.SubHeading>SOCIALS</Heading.SubHeading>
          <Heading.Element level="h2">Stay in Touch</Heading.Element>
          <Heading.Description>
            Let&apos;s Connect on Social Media for Updates, Stories, and a Whole
            Lot of Inspiration!
          </Heading.Description>
        </Heading>

        <div className="relative mb-12 sm:mb-0 sm:mt-36">
          <Separator className="absolute left-1/2 hidden -translate-x-1/2 sm:block" />
          <Separator
            className="absolute left-1/2 -translate-x-1/2 opacity-25 sm:hidden"
            vertical
          />
          <div className="relative grid place-items-center gap-y-24 sm:-translate-y-1/2 sm:grid-cols-4 sm:gap-y-0">
            <Link
              href="https://github.com/saheemshafi"
              referrerPolicy="no-referrer"
            >
              <div className="relative grid aspect-square w-24 place-items-center rounded-full border border-zinc-800 bg-slate-main p-4">
                <Image
                  src="/images/icons/github.png"
                  alt="github"
                  width={300}
                  height={300}
                />
                <p
                  className={cn(
                    headingVariants({ level: "h6" }),
                    "absolute top-full mt-4 text-center text-base font-medium uppercase tracking-wide text-zinc-300",
                  )}
                >
                  GITHUB
                </p>
              </div>
            </Link>
            <Link
              href="https://linkedin.com/in/saheemshafi"
              referrerPolicy="no-referrer"
            >
              <div className="relative grid aspect-square w-24 place-items-center rounded-full border border-zinc-800 bg-slate-main p-5">
                <Image
                  src="/images/icons/linkedin.png"
                  alt="linkedin"
                  width={300}
                  height={300}
                />
                <p
                  className={cn(
                    headingVariants({ level: "h6" }),
                    "absolute top-full mt-4 text-center text-base font-medium uppercase tracking-wide text-zinc-300",
                  )}
                >
                  LinkedIN
                </p>
              </div>
            </Link>
            {/* TODO: Add twitter and discord link */}
            <Link href="">
              <div className="relative grid aspect-square w-24 place-items-center rounded-full border border-zinc-800 bg-slate-main p-4">
                <Image
                  src="/images/icons/twitter.png"
                  alt="twitter"
                  width={300}
                  height={300}
                />
                <p
                  className={cn(
                    headingVariants({ level: "h6" }),
                    "absolute top-full mt-4 text-center text-base font-medium uppercase tracking-wide text-zinc-300",
                  )}
                >
                  Twitter
                </p>
              </div>
            </Link>
            <Link href="">
              <div className="relative grid aspect-square w-24 place-items-center rounded-full border border-zinc-800 bg-slate-main p-4">
                <Image
                  src="/images/icons/discord.png"
                  alt="discord"
                  width={300}
                  height={300}
                />
                <p
                  className={cn(
                    headingVariants({ level: "h6" }),
                    "absolute top-full mt-4 text-center text-base font-medium uppercase tracking-wide text-zinc-300",
                  )}
                >
                  Discord
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>

      <Container id="contact">
        <Heading>
          <Heading.SubHeading>React Out</Heading.SubHeading>
          <Heading.Element level="h2">Let&apos;s Connect</Heading.Element>
          <Heading.Description>
            Reach Out to me for hiring and business inquiries.
          </Heading.Description>
        </Heading>

        <ContactForm />
      </Container>

      <Container id="about-me">
        <Heading>
          <Heading.SubHeading>About Me</Heading.SubHeading>
          <Heading.Element level="h2">Know Me More</Heading.Element>
          <Heading.Description>
            Have questions about me, here are some general ones.
          </Heading.Description>
        </Heading>

        <Accordion.Root type="multiple">
          <Accordion.Item value="who-are-you">
            <Accordion.Trigger>Who Are You?</Accordion.Trigger>
            <Accordion.Content>
              Hello 👋, I&apos;m Mir Saheem Shafi.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="experience">
            <Accordion.Trigger>
              How Much Experience Do You Have?
            </Accordion.Trigger>
            <Accordion.Content>
              I have 2 years of hands-on web development expertise, well-versed
              in diverse frontend technologies like{" "}
              <strong>
                Typescript, React, Angular, NextJS, nodeJS, MongoDB
              </strong>{" "}
              and much more...
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <Accordion.Trigger>Where Do You Live? </Accordion.Trigger>
            <Accordion.Content>
              I am from <strong>Srinagar</strong>, a city in{" "}
              <strong>Kashmir, India.</strong>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-4">
            <Accordion.Trigger>What can you build? </Accordion.Trigger>
            <Accordion.Content>
              I am capable of building flawless user interfaces with great{" "}
              <strong>ui/ux</strong> and awesome performance powered by latest
              technologies like. <strong>React, Angular, NextJS, NodeJS</strong>{" "}
              and much more...
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </Container>

      {portfolio && (
        <Container id="os-portfolio">
          <Heading>
            <Heading.SubHeading>Open Source</Heading.SubHeading>
            <Heading.Element level="h2">
              Build From My Portfolio
            </Heading.Element>
            <Heading.Description>
              This portfolio is Open Source and you can use it to build your own
              portfolio too.
            </Heading.Description>
          </Heading>
          <Repository
            username={portfolio.owner}
            commits={portfolio.with_commits}
            repositoryName={portfolio.repositoryName}
          />
        </Container>
      )}

      <Container id="os-repositories">
        <Heading>
          <Heading.SubHeading>Source Code</Heading.SubHeading>
          <Heading.Element level="h2">Projects You Can Explore</Heading.Element>
          <Heading.Description>
            Open Source projects you can learn from.
          </Heading.Description>
        </Heading>
        <div className="grid gap-4 lg:grid-cols-2">
          {repos.data?.map(({ id, repositoryName, owner }) => (
            <div key={id}>
              <Repository username={owner} repositoryName={repositoryName} />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
