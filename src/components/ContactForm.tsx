"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import { motion } from "framer-motion";
import { FC, HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { BiSend } from "react-icons/bi";
import { z } from "zod";
import Button from "./ui/Button";

interface ContactFormProps extends HTMLAttributes<HTMLDivElement> {}

const ContactForm: FC<ContactFormProps> = ({ className, ...props }) => {
  const contactFormSchema = z.object({
    name: z.string().nonempty("Name is required."),
    email: z.string().email("Email is not valid."),
    message: z.string().min(10, "Message must be atleast 10 characters long."),
  });

  type ContactFormSchema = z.infer<typeof contactFormSchema>;

  const onSubmit = async (values: ContactFormSchema) => {
    console.log(values);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  return (
    <div
      {...props}
      className={cn(
        "border-t border-zinc-800 pt-6 sm:rounded-xl sm:border sm:p-8",
        className,
      )}
    >
      <Form.Root
        className="isolate"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Form.Field name="name">
            <Form.Label
              htmlFor="name"
              className="mb-2 block text-sm text-zinc-300"
            >
              Enter your name
            </Form.Label>

            <Form.Control
              type="text"
              {...register("name")}
              id="name"
              className={
                "w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white outline-none transition-[shadow,border] focus:border-theme/50 focus:bg-transparent focus:ring focus:ring-theme/20"
              }
            />

            {errors.name && (
              <motion.small
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="mt-2 block text-red-400"
              >
                {errors.name.message}
              </motion.small>
            )}
          </Form.Field>

          <Form.Field name="email">
            <Form.Label
              htmlFor="email"
              className="mb-2 block text-sm text-zinc-300"
            >
              Enter your email
            </Form.Label>

            <Form.Control
              type="email"
              {...register("email")}
              id="email"
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white outline-none transition-[shadow,border] focus:border-theme/50 focus:bg-transparent focus:ring focus:ring-theme/20"
            />

            {errors.email && (
              <motion.small
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="mt-2 block text-red-400"
              >
                {errors.email?.message}
              </motion.small>
            )}
          </Form.Field>
        </div>

        <Form.Field name="message" className="my-6">
          <Form.Label
            htmlFor="message"
            className="mb-2 block text-sm text-zinc-300"
          >
            Write a message
          </Form.Label>

          <Form.Control
            id="message"
            {...register("message")}
            className="w-full resize-none rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white outline-none transition-[shadow,border] focus:border-theme/50 focus:bg-transparent focus:ring focus:ring-theme/20"
            asChild
          >
            <textarea rows={3}></textarea>
          </Form.Control>

          {errors.message && (
            <motion.small
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="mt-2 block text-red-400"
            >
              {errors.message?.message}
            </motion.small>
          )}
        </Form.Field>

        <div className="mt-8 flex gap-2">
          <Button
            variant="secondary"
            onClick={() => {
              reset();
            }}
          >
            Cancel
          </Button>
          <Button loading={isSubmitting} type="submit">
            Send message <BiSend />
          </Button>
        </div>

        <p className="mt-4 max-w-xl text-sm text-zinc-400">
          Any details submitted on this form will not be shared with anyone.
          This form is purely for business use, any personal submittions will
          not be looked upon.
        </p>
      </Form.Root>
    </div>
  );
};

export default ContactForm;
