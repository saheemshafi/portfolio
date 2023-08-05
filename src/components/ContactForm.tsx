"use client";

import Container from "@/components/ui/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import { motion } from "framer-motion";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { BiSend } from "react-icons/bi";
import { z } from "zod";
import Button from "./ui/Button";

interface ContactFormProps { }

const ContactForm: FC<ContactFormProps> = ({ }) => {
  const contactFormSchema = z.object({
    name: z.string().nonempty("Name is required."),
    email: z.string().email("Email is not valid."),
    message: z.string().min(10, "Message must be atleast 10 characters long."),
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
  };
  const { register, handleSubmit, formState, getFieldState, reset } = useForm<
    z.infer<typeof contactFormSchema>
  >({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  return (
    <Container.Gradient className="rounded-xl p-4 sm:rounded-3xl sm:p-8">
      <Form.Root
        className="isolate"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Form.Field name="name">
            <Form.Label htmlFor="name" className="mb-2 block">
              Enter your name
            </Form.Label>

            <Container.Gradient className="rounded-sm sm:rounded-full">
              <Form.Control
                type="text"
                {...register("name")}
                id="name"
                className="block w-full rounded-[inherit] bg-zinc-800/40 px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-slate-500/20"
              />
            </Container.Gradient>

            {getFieldState("name").error && (
              <motion.small
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="mt-2 block text-red-400"
              >
                {getFieldState("name").error?.message}
              </motion.small>
            )}
          </Form.Field>

          <Form.Field name="email">
            <Form.Label htmlFor="email" className="mb-2 block">
              Enter your email
            </Form.Label>

            <Container.Gradient className="rounded-sm sm:rounded-full">
              <Form.Control
                type="email"
                {...register("email")}
                id="email"
                className="block w-full rounded-[inherit] bg-zinc-800/40 px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-slate-500/20"
              />
            </Container.Gradient>

            {getFieldState("email").error && (
              <motion.small
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="mt-2 block text-red-400"
              >
                {getFieldState("email").error?.message}
              </motion.small>
            )}
          </Form.Field>
        </div>

        <Form.Field name="message" className="my-6">
          <Form.Label htmlFor="message" className="mb-2 block">
            Write a message
          </Form.Label>

          <Container.Gradient className="rounded-sm sm:rounded-lg">
            <Form.Control asChild>
              <textarea
                id="message"
                rows={3}
                {...register("message")}
                className="block w-full resize-none rounded-[inherit] bg-zinc-800/40 px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-zinc-500/20"
              ></textarea>
            </Form.Control>
          </Container.Gradient>

          {getFieldState("message").error && (
            <motion.small
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="mt-2 block text-red-400"
            >
              {getFieldState("message").error?.message}
            </motion.small>
          )}
        </Form.Field>

        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              reset();
            }}
          >
            Cancel
          </Button>
          <Button loading={formState.isSubmitting} type="submit">
            Send message <BiSend />
          </Button>
        </div>

        <p className="mt-4 max-w-xl text-sm text-zinc-400">
          Any details submitted on this form will not be shared with anyone.
          This form is purely for business use, any personal submittions will
          not be looked upon.
        </p>
      </Form.Root>
    </Container.Gradient>
  );
};

export default ContactForm;
