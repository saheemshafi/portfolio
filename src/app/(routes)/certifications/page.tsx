import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { FC } from "react";

interface CertificationsPageProps {}

const CertificationsPage: FC<CertificationsPageProps> = ({}) => {
  return (
    <Container className="pt-12">
      <Heading.Root>
        <Heading.SubHeading>Certifications</Heading.SubHeading>
        <Heading>All Certifications</Heading>
        <Heading.Description>
          All the certificates I have earned after learning some technologies.
        </Heading.Description>
      </Heading.Root>
    </Container>
  );
};

export default CertificationsPage;
