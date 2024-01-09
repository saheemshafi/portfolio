import { FC } from "react";
import { BiLogoDiscordAlt, BiLogoGmail } from "react-icons/bi";
import { ImGithub, ImLinkedin2 } from "react-icons/im";
import ContactForm from "../ContactForm";
import LinkTile from "../LinkTile";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

interface ContactSectionProps {}

const ContactSection: FC<ContactSectionProps> = ({}) => {
  return (
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
            <LinkTile href="https://linkedin.com/in/saheemshafi" className="px-0">
              <LinkTile.Icon>
                <ImLinkedin2 size={20} />
              </LinkTile.Icon>
              <div>
                <LinkTile.Title>Connect On LinkedIn</LinkTile.Title>
                <LinkTile.Link>linked.com/in/saheemshafi</LinkTile.Link>
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
  );
};

export default ContactSection;
