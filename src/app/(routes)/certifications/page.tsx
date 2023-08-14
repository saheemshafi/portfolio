import { buttonVariants } from "@/components/ui/Button/_buttonVariants";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import supabase from "@/lib/supabase/supabase";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { formatDate } from "@/lib/utils";

interface CertificationsPageProps {}
export const revalidate = 43200; // Revalidate after 12 hours : 43200 seconds;

const CertificationsPage = async ({}: CertificationsPageProps) => {
  const certifications = await supabase.from("certifications").select();
  if (certifications.error) {
    throw new Error(certifications.error.message);
  }
  return (
    <Container className="pt-12">
      <Heading>
        <Heading.SubHeading>Certifications</Heading.SubHeading>
        <Heading.Element>All Certifications</Heading.Element>
        <Heading.Description>
          All the certificates I have earned after learning some technologies.
        </Heading.Description>
      </Heading>
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.data.map((certification) => (
          <Card key={certification.id}>
            <Card.Image src={certification.image} alt={certification.course} />
            <Card.Content>
              <Card.Info>
                <Card.Title>{certification.course}</Card.Title>
                <Card.Description>
                  This certificate is issued by{" "}
                  <strong>{certification.issuer}</strong> on{" "}
                  <strong>{formatDate(certification.issued_on)}</strong> for
                  completing <strong>{certification.course}</strong> course.
                </Card.Description>
              </Card.Info>
              <Card.Actions>
                <Link
                  href={certification.verify_url}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className={cn(
                    buttonVariants({ size: "sm", variant: "secondary" }),
                  )}
                >
                  Verify Certificate
                  <CgArrowsExpandUpRight />
                </Link>
              </Card.Actions>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default CertificationsPage;
