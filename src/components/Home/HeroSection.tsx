import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "../ui/Button/_buttonVariants";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <Container className="min-h-[400px] pt-12">
      <Heading className="mb-8">
        <Heading.SubHeading>Hello, I Am</Heading.SubHeading>
        <Heading.Element>Mir Saheem Shafi</Heading.Element>
        <Heading.Description>
          I build awesome stuff on the web. From sleek designs to smooth
          functionality. Got a cool project in mind? Let&apos;s chat and make it
          happen!
        </Heading.Description>
      </Heading>

      <div className="flex gap-3">
        <Link href="/projects" className={buttonVariants()}>
           View Projects
        </Link>
        <Link
          href="/#about-me"
          className={buttonVariants({ variant: "secondary" })}
        >
          About Me
        </Link>
      </div>
    </Container>
  );
};

export default HeroSection;
