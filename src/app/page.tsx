import ContactForm from "@/components/ContactForm";
import Button from "@/components/ui/Button";
import { buttonVariants } from "@/components/ui/Button/_buttonVariants";
import Container from "@/components/ui/Container";
import GradientLine from "@/components/ui/GradientLine";
import Heading, { textVariants } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CgArrowsExpandUpRight } from "react-icons/cg";

export default function Home() {
  return (
    <main>
      <section className="grid min-h-[calc(100vh_-_64px)] place-items-center text-center">
        <div>
          <div>
            <Heading subHeading="Hello, I am">Mir Saheem Shafi</Heading>
          </div>
          <div
            className="absolute inset-0 -z-[1] flex flex-col items-center justify-center space-y-12"
            aria-hidden
          >
            <img src="/images/design-elements/FULL STACK.png" />
            <img
              src="/images/design-elements/WEB DEVELOPER.png"
              className="scale-150"
            />
          </div>
          <blockquote className="mt-3">
            Doing things I love, A <strong>Fullstack Web Developer.</strong>
          </blockquote>
          <div className="mt-6 flex justify-center gap-4">
            <Button>View Projects</Button>
            <Button variant="outline">About Me</Button>
          </div>
        </div>
      </section>
      <Container id="skills">
        <div className="max-w-md">
          <Heading level="h2" subHeading="SKILLS">
            Technologies i am working with
          </Heading>
        </div>
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
        <Heading level="h2" subHeading="PROJECTS">
          Projects I Have Worked On
        </Heading>

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
                <h6 className={textVariants({ level: "h6" })}>
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
                <h6 className={textVariants({ level: "h6" })}>
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
                <h6 className={textVariants({ level: "h6" })}>
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
        <div className="max-w-md">
          <Heading level="h2" subHeading="SOCIALS">
            Find Me On Social Media
          </Heading>
        </div>
        <div className="relative sm:my-36">
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
                    textVariants({ level: "h6" }),
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
                    textVariants({ level: "h6" }),
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
                    textVariants({ level: "h6" }),
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
        <Heading level="h2" subHeading="React Out">
          Contact Me
        </Heading>
        <ContactForm />
      </Container>
    </main>
  );
}
