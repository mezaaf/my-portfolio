"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { contactFormSchema, type ContactFormSchema } from "./forms/contact";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<ContactFormSchema>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });

  const onContactSubmit = async (values: ContactFormSchema) => {
    setIsLoading(true);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5c017038-6a03-45b8-8923-eb409554797f",
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      })
        .then(async (response) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const json = await response.json();
          setIsLoading(false);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          console.log(json.message);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

    setIsLoading(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onContactSubmit)}
        className="flex flex-col gap-4 sm:gap-6 lg:gap-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter your name..."
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter your email address..."
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Enter your message here..." />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          variant={"outline"}
          className="cursor-pointer border-sky-400 hover:bg-sky-400 hover:text-gray-100 dark:border-sky-400 dark:hover:bg-sky-400"
        >
          {isLoading ? "Sending message..." : "Send"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
