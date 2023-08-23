import { FC } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import Button from "../ui/Button";
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
        <Button>
          <MdSpaceDashboard size={20} /> View Projects
        </Button>
        <Button variant="ghost">About Me</Button>
      </div>
    </Container>
  );
};

export default HeroSection;
