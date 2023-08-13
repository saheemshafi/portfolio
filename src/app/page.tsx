import ContactForm from "@/components/ContactForm";
import * as Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { buttonVariants } from "@/components/ui/Button/_buttonVariants";
import Container from "@/components/ui/Container";
import GradientLine from "@/components/ui/GradientLine";
import Heading, { headingVariants } from "@/components/ui/Heading";
import Repository from "@/components/ui/Repository";
import supabase from "@/lib/supabase/supabase";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CgArrowsExpandUpRight } from "react-icons/cg";

export const revalidate = 43200; // Revalidate after 12 hours : 43200 seconds;

export default async function Home() {
  const { data: repos, error } = await supabase.from("repositories").select();
  const portfolio = repos?.find(
    ({ repositoryName }) => repositoryName == "portfolio",
  );
  if (error) {
    throw new Error(error.message);
  }

  return (
    <main>
      <section className="overflow grid min-h-[calc(100vh_-_64px)] place-items-center text-center">
        <div>
          <div
            className="absolute inset-0 -z-[1] flex select-none flex-col items-center justify-center space-y-4 overflow-hidden sm:space-y-12"
            aria-hidden
          >
            <img src="/images/design-elements/FULL STACK.png" alt="" />
            <img
              src="/images/design-elements/WEB DEVELOPER.png"
              className="scale-150"
              alt=""
            />
          </div>
          <div>
            <Heading.Root className="mb-8 text-center">
              <Heading.SubHeading>Hello, I am</Heading.SubHeading>
              <Heading>Mir Saheem Shafi</Heading>
              <Heading.Description className="max-w-none">
                Doing things I love, A <strong>Fullstack Web Developer.</strong>
              </Heading.Description>
            </Heading.Root>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Button>View Projects</Button>
            <Button variant="outline">About Me</Button>
          </div>
        </div>
      </section>

      <Container id="skills">
        <Heading.Root>
          <Heading.SubHeading>SKILLS</Heading.SubHeading>
          <Heading level="h2">Technologies I Have Expertise In</Heading>
          <Heading.Description>
            I have hands-on experience with a variety of technologies, which you
            can explore in detail through my portfolio.
          </Heading.Description>
        </Heading.Root>
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
        <GradientLine className="max-w-lg" />
      </Container>

      <Container id="projects">
        <Heading.Root>
          <Heading.SubHeading>PROJECTS</Heading.SubHeading>
          <Heading level="h2"> My Contributions</Heading>
          <Heading.Description>
            A Showcase of Projects I&apos;ve Been Part Of.
          </Heading.Description>
        </Heading.Root>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Container.Gradient className="relative rounded-xl shadow">
            <div>
              <img
                src="/images/lycoris recoil.png"
                alt=""
                className="rounded-t-xl grayscale"
              />
            </div>
            <div className="px-3 py-4">
              <div className="isolate flex flex-wrap gap-2 text-xs uppercase">
                <Container.Gradient className="rounded-full px-2 py-1">
                  React
                </Container.Gradient>
                <Container.Gradient className="rounded-full px-2 py-1">
                  DotNet.WebApi
                </Container.Gradient>
                <Container.Gradient className="rounded-full px-2 py-1">
                  Javascript
                </Container.Gradient>
              </div>
              <div className="my-3">
                <h6 className={headingVariants({ level: "h6" })}>
                  Lavist Official - Ecommerce Platform
                </h6>
                <p className="mt-1 text-sm">
                  An Ecommerce Platform for unique fashion.
                </p>
              </div>
              <Button size="sm">
                Live Project
                <CgArrowsExpandUpRight />
              </Button>
            </div>
          </Container.Gradient>
          <Container.Gradient className="rounded-xl shadow">
            <div>
              <img
                src="/images/lycoris recoil.png"
                alt=""
                className="rounded-t-xl grayscale"
              />
            </div>
            <div className="px-3 py-4">
              <div className="isolate flex flex-wrap gap-2 text-xs uppercase">
                <Container.Gradient className="rounded-full px-2 py-1">
                  React
                </Container.Gradient>
                <Container.Gradient className="rounded-full px-2 py-1">
                  DotNet.WebApi
                </Container.Gradient>
                <Container.Gradient className="rounded-full px-2 py-1">
                  Javascript
                </Container.Gradient>
              </div>
              <div className="my-3">
                <h6 className={headingVariants({ level: "h6" })}>
                  Lavist Official - Ecommerce Platform
                </h6>
                <p className="mt-1 text-sm">
                  An Ecommerce Platform for unique fashion.
                </p>
              </div>
              <Button size="sm">
                Live Project
                <CgArrowsExpandUpRight />
              </Button>
            </div>
          </Container.Gradient>
          <Container.Gradient className="relative rounded-xl bg-slate-main shadow">
            <div>
              <img
                src="/images/lycoris recoil.png"
                alt=""
                className="rounded-t-xl grayscale"
              />
            </div>
            <div className="px-3 py-4">
              <div className="isolate flex flex-wrap gap-2 text-xs uppercase">
                <Container.Gradient className="rounded-full px-2 py-1">
                  React
                </Container.Gradient>
                <Container.Gradient className="rounded-full px-2 py-1">
                  DotNet.WebApi
                </Container.Gradient>
                <Container.Gradient className="rounded-full px-2 py-1">
                  Javascript
                </Container.Gradient>
              </div>
              <div className="my-3">
                <h6 className={headingVariants({ level: "h6" })}>
                  Lavist Official - Ecommerce Platform
                </h6>
                <p className="mt-1 text-sm">
                  An Ecommerce Platform for unique fashion.
                </p>
              </div>
              <Button size="sm">
                Live Project
                <CgArrowsExpandUpRight />
              </Button>
            </div>
          </Container.Gradient>
        </div>
        <GradientLine className="max-w-lg" />
        <div className="mt-8 grid place-items-center">
          <Button variant="outline">View All Projects</Button>
        </div>
      </Container>

      <Container id="socials">
        <Heading.Root>
          <Heading.SubHeading>SOCIALS</Heading.SubHeading>
          <Heading level="h2">Stay in Touch</Heading>
          <Heading.Description>
            Let&apos;s Connect on Social Media for Updates, Stories, and a Whole
            Lot of Inspiration!
          </Heading.Description>
        </Heading.Root>

        <div className="relative mb-12 sm:mb-0 sm:mt-36">
          <GradientLine className="absolute left-1/2 hidden -translate-x-1/2 sm:block" />
          <GradientLine
            className="absolute left-1/2 -translate-x-1/2 opacity-25 sm:hidden"
            vertical
          />
          <div className="relative grid place-items-center gap-y-24 sm:-translate-y-1/2 sm:grid-cols-4 sm:gap-y-0">
            <Link
              href="https://github.com/saheemshafi"
              referrerPolicy="no-referrer"
            >
              <Container.Gradient className="relative grid aspect-square w-24 place-items-center rounded-full bg-slate-main p-4">
                <Image
                  src="/images/icons/github.png"
                  alt="github"
                  width={300}
                  height={300}
                />
                <p
                  className={cn(
                    headingVariants({ level: "h6" }),
                    "absolute top-full mt-4 text-center text-base font-semibold uppercase tracking-wide",
                  )}
                >
                  GITHUB
                </p>
              </Container.Gradient>
            </Link>
            <Link
              href="https://linkedin.com/in/saheemshafi"
              referrerPolicy="no-referrer"
            >
              <Container.Gradient className="relative grid aspect-square w-24 place-items-center rounded-full bg-slate-main p-5">
                <Image
                  src="/images/icons/linkedin.png"
                  alt="linkedin"
                  width={300}
                  height={300}
                />
                <p className="absolute top-full mt-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-center font-semibold uppercase tracking-wide text-transparent">
                  LinkedIN
                </p>
              </Container.Gradient>
            </Link>
            {/* TODO: Add twitter and discord link */}
            <Link href="">
              <Container.Gradient className="relative grid aspect-square w-24 place-items-center rounded-full bg-slate-main p-4">
                <Image
                  src="/images/icons/twitter.png"
                  alt="twitter"
                  width={300}
                  height={300}
                />
                <p
                  className={cn(
                    headingVariants({ level: "h6" }),
                    "absolute top-full mt-4 text-center text-base font-semibold uppercase tracking-wide",
                  )}
                >
                  Twitter
                </p>
              </Container.Gradient>
            </Link>
            <Link href="">
              <Container.Gradient className="relative grid aspect-square w-24 place-items-center rounded-full bg-slate-main p-4">
                <Image
                  src="/images/icons/discord.png"
                  alt="discord"
                  width={300}
                  height={300}
                />
                <p
                  className={cn(
                    headingVariants({ level: "h6" }),
                    "absolute top-full mt-4 text-center text-base font-semibold uppercase tracking-wide",
                  )}
                >
                  Discord
                </p>
              </Container.Gradient>
            </Link>
          </div>
        </div>
      </Container>

      <Container id="contact">
        <Heading.Root>
          <Heading.SubHeading>React Out</Heading.SubHeading>
          <Heading level="h2">Let&apos;s Connect</Heading>
          <Heading.Description>
            Reach Out to me for hiring and business inquiries.
          </Heading.Description>
        </Heading.Root>

        <ContactForm />
      </Container>

      <Container id="about-me">
        <Heading.Root>
          <Heading.SubHeading>About Me</Heading.SubHeading>
          <Heading level="h2">Know Me More</Heading>
          <Heading.Description>
            Have questions about me, here are some general ones.
          </Heading.Description>
        </Heading.Root>

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
          <Heading.Root>
            <Heading.SubHeading>Open Source</Heading.SubHeading>
            <Heading level="h2">Build From My Portfolio</Heading>
            <Heading.Description>
              This portfolio is Open Source and you can use it to build your own
              portfolio too.
            </Heading.Description>
          </Heading.Root>
          <Repository
            username={portfolio.owner}
            commits={portfolio.with_commits}
            repositoryName={portfolio.repositoryName}
          />
        </Container>
      )}

      <Container id="os-repositories">
        <Heading.Root>
          <Heading.SubHeading>Source Code</Heading.SubHeading>
          <Heading level="h2">Projects You Can Explore</Heading>
          <Heading.Description>
            Open Source projects you can learn from.
          </Heading.Description>
        </Heading.Root>
        <div className="grid gap-4 lg:grid-cols-2">
          {repos?.map(({ id, repositoryName, owner }) => (
            <div key={id}>
              <Repository username={owner} repositoryName={repositoryName} />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
