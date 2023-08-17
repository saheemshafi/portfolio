import ContactForm from "@/components/ContactForm";
import LinkTile from "@/components/LinkTile";
import Repository from "@/components/Repository";
import * as Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { buttonVariants } from "@/components/ui/Button/_buttonVariants";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Separator from "@/components/ui/Separator";
import supabase from "@/lib/supabase/supabase";
import Link from "next/link";
import {
  BiLogoDiscordAlt,
  BiLogoDocker,
  BiLogoGmail,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { CgArrowsExpandUpRight, CgFigma } from "react-icons/cg";
import { ImGithub, ImTwitter } from "react-icons/im";
import {
  IoLogoAngular,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { SiSupabase } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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

        <div className="mt-8 grid grid-cols-2 gap-4 font-semibold md:grid-cols-4 xl:grid-cols-5">
          <div className="flex items-center gap-4 p-2">
            <IoLogoReact
              size={40}
              className="shrink-0 rounded-md bg-blue-400/5 p-1.5 text-blue-400"
            />{" "}
            <span>React</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <IoLogoAngular
              size={40}
              className="shrink-0 rounded-md bg-red-500/5 p-1.5 text-red-500"
            />{" "}
            <span>Angular</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <IoLogoSass
              size={40}
              className="shrink-0 rounded-md bg-pink-500/5 p-1.5 text-pink-500"
            />{" "}
            <span>Sass</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <BiLogoTailwindCss
              size={40}
              className="shrink-0 rounded-md bg-sky-500/5 p-1.5 text-sky-500"
            />{" "}
            <span>TailwindCSS</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <IoLogoHtml5
              size={40}
              className="shrink-0 rounded-md bg-orange-500/5 p-1.5 text-orange-500"
            />{" "}
            <span>HTML</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <TbBrandNextjs
              size={40}
              className="shrink-0 rounded-md bg-white/5 p-1.5 text-white"
            />{" "}
            <span>NextJS</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <SiSupabase
              size={40}
              className="shrink-0 rounded-md bg-emerald-500/5 p-1.5 text-emerald-500"
            />{" "}
            <span>Supabase</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <BsGit
              size={40}
              className="shrink-0 rounded-md bg-rose-500/5 p-1.5 text-rose-500"
            />{" "}
            <span>Git</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <BiLogoDocker
              size={40}
              className="shrink-0 rounded-md bg-blue-400/5 p-1.5 text-blue-400"
            />{" "}
            <span>Docker</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <BiLogoTypescript
              size={40}
              className="shrink-0 rounded-md bg-sky-500/5 p-1.5 text-sky-500"
            />{" "}
            <span>Typescript</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <CgFigma
              size={40}
              className="shrink-0 rounded-md bg-violet-400/5 p-1.5 text-violet-400"
            />{" "}
            <span>Figma</span>
          </div>
          <div className="flex items-center gap-4 p-2">
            <BiLogoNodejs
              size={40}
              className="shrink-0 rounded-md bg-lime-500/5 p-1.5 text-lime-500"
            />{" "}
            <span>NodeJS</span>
          </div>
        </div>
        <Separator className="mt-12 max-w-lg" />
      </Container>

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

      <Container id="contact">
        <Heading>
          <Heading.SubHeading>React Out</Heading.SubHeading>
          <Heading.Element level="h2">Let&apos;s Connect</Heading.Element>
          <Heading.Description>
            Reach Out to me for hiring and business inquiries.
          </Heading.Description>
        </Heading>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex-1">
            <Heading className="mb-6">
              <Heading.Element level="h6">Fill out the form</Heading.Element>
            </Heading>
            <ContactForm />
          </div>
          <div className="max-lg:mt-8">
            <Heading className="mb-6">
              <Heading.Element level="h6">
                Connect On Social Media
              </Heading.Element>
            </Heading>
            <div className="grid gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-4 xl:grid-cols-2">
              <LinkTile href="https://github.com/saheemshafi" className="px-0">
                <LinkTile.Icon>
                  <ImGithub size={20} />
                </LinkTile.Icon>
                <div>
                  <LinkTile.Title>Checkout My Github Profile</LinkTile.Title>
                  <LinkTile.Link>github.com/saheemshafi</LinkTile.Link>
                </div>
              </LinkTile>
              <LinkTile
                href="https://linkedin.com/saheemshafi"
                className="px-0"
              >
                <LinkTile.Icon>
                  <ImTwitter size={20} />
                </LinkTile.Icon>
                <div>
                  <LinkTile.Title>Connect On LinkedIn</LinkTile.Title>
                  <LinkTile.Link>linked.com/saheemshafi</LinkTile.Link>
                </div>
              </LinkTile>
              <LinkTile
                href="https://discordapp.com/users/600023174305808384"
                className="px-0"
              >
                <LinkTile.Icon>
                  <BiLogoDiscordAlt size={20} />
                </LinkTile.Icon>
                <div>
                  <LinkTile.Title>Let&apos;s Have A Chat</LinkTile.Title>
                  <LinkTile.Link>discord.com/saheemshafi</LinkTile.Link>
                </div>
              </LinkTile>
              <LinkTile href="mailto:m.saheemshafi@gmail.com" className="px-0">
                <LinkTile.Icon>
                  <BiLogoGmail size={20} />
                </LinkTile.Icon>
                <div>
                  <LinkTile.Title>Email Me</LinkTile.Title>
                  <LinkTile.Link>m.saheemshafi@gmail.com</LinkTile.Link>
                </div>
              </LinkTile>
            </div>
          </div>
        </div>
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
              Grab this open-source portfolio to craft your own. It has an
              awesome collection of features you might love.
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
            Explore and learn from my open-source projects. Dive into a world of
            valuable insights and practical knowledge.
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
