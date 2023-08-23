import * as Accordion from "@/components/ui/Accordion";
import { FC } from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

interface AboutMeSectionProps {}

const AboutMeSection: FC<AboutMeSectionProps> = ({}) => {
  return (
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
            I have 2 years of hands-on web development expertise, well-versed in
            diverse frontend technologies like{" "}
            <strong>Typescript, React, Angular, NextJS, nodeJS, MongoDB</strong>{" "}
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
  );
};

export default AboutMeSection;
