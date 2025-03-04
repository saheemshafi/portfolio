import { buttonVariants } from "@/components/ui/Button/_buttonVariants";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import supabase from "@/lib/supabase/supabase";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import { env } from "@/lib/zod/envSchema";

export const revalidate = 0;
const { title, description } = {
  title: "Mir Saheem Shafi - All Certifications",
  description:
    "Displaying a collection of earned certificates showcasing my proficiency in various technologies.",
};

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: env.APP_URL.concat("/certifications"),
  },
};

interface CertificationsPageProps {}

const CertificationsPage = async ({}: CertificationsPageProps) => {
  const { data: certifications } = await supabase
    .from("certifications")
    .select()
    .throwOnError();

  return (
    <Container className="pt-12">
      <Heading>
        <Heading.SubHeading>Certifications</Heading.SubHeading>
        <Heading.Element>All Certifications</Heading.Element>
        <Heading.Description>
          Displaying a collection of earned certificates showcasing my
          proficiency in various technologies.
        </Heading.Description>
      </Heading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications?.map((certification) => (
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
