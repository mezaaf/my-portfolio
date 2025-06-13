import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(1, { message: "Name is required" }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email addres" }),
  message: z.string({ message: "Message is required" }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
