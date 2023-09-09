import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().nonempty("Name is required."),
  email: z.string().email("Email is not valid."),
  message: z.string().min(10, "Message must be atleast 10 characters long."),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
