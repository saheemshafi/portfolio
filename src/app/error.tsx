"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

interface ErrorProps {
  error: {
    digest: string;
    stack: string;
    message: string;
  };
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <section className="grid h-full min-h-[calc(100vh_-_69.33px)] p-4 place-items-center">
      <div className="max-w-xl rounded-lg border border-zinc-800 p-4">
        <Heading className="mb-6">
          <Heading.SubHeading>
            {error.message.split(": ")[0]}
          </Heading.SubHeading>
          <Heading.Element level="h3">
            {error.message.split(": ")}
          </Heading.Element>
        </Heading>
        <Button variant="secondary">Try Again</Button>
      </div>
    </section>
  );
}

export default Error;
