"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { contactFormSchema, type ContactFormSchema } from "./forms/contact";

const ContactForm = () => {
  const steps = [
    {
      name: "name",
      question: "What's your name?",
      placeholder: "Enter your name...",
    },
    {
      name: "email",
      question: "What's your email?",
      placeholder: "Enter your email...",
    },
    {
      name: "message",
      question: "Your message?",
      placeholder: "Type your message...",
    },
  ];

  const [stepIndex, setStepIndex] = useState(0);
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
        className="w-full space-y-1 rounded-md bg-white/30 font-mono text-black shadow-lg ring-1 ring-white/10 backdrop-blur-md dark:bg-slate-900/40 dark:text-white"
        autoComplete="off"
      >
        <div className="flex w-full items-center gap-16 rounded-t-md bg-slate-900 px-1 sm:gap-68 sm:px-2 lg:gap-45 lg:px-3">
          <div className="relative flex items-center gap-0.5 sm:gap-1 lg:gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-amber-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-600"></span>
          </div>
          <h1 className="text-gray-100">contact@mezaaf.dev</h1>
        </div>
        <div className="px-1 sm:px-2 lg:px-3">
          <p className="text-muted-foreground text-xs sm:text-sm">
            #Press enter if you have filled in the form
          </p>
          {steps.map((step, index) =>
            index > stepIndex ? null : (
              <div key={step.name} className="mb-4">
                <p className="text-sky-400">~ {step.question}</p>

                <FormField
                  control={form.control}
                  name={step.name as "name"}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          {...field}
                          type="text"
                          placeholder={step.placeholder}
                          autoComplete="off"
                          className={`mt-1 w-full border-none bg-transparent text-sm placeholder-gray-500 outline-none ${
                            index === stepIndex ? "animate-caret" : "opacity-70"
                          }`}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              if (index < steps.length - 1) {
                                setStepIndex((prev) => prev + 1);
                              } else {
                                void form.handleSubmit(onContactSubmit)();
                              }
                            }
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            ),
          )}

          <Button
            disabled={isLoading}
            type="submit"
            className="mb-2 cursor-pointer sm:mb-3 lg:mb-4"
          >
            {isLoading ? "Sending message..." : "Send"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
