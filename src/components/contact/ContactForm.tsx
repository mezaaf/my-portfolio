"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
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

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
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

  useEffect(() => {
    const input = inputRefs.current[stepIndex];
    input?.focus();
  }, [stepIndex]);

  return (
    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(onContactSubmit)}
    //     className="flex flex-col gap-4 sm:gap-6 lg:gap-8"
    //   >
    //     <FormField
    //       control={form.control}
    //       name="name"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Name</FormLabel>
    //           <FormControl>
    //             <Input
    //               {...field}
    //               type="text"
    //               placeholder="Enter your name..."
    //             />
    //           </FormControl>
    //           <FormDescription />
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <FormField
    //       control={form.control}
    //       name="email"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Email Address</FormLabel>
    //           <FormControl>
    //             <Input
    //               {...field}
    //               type="email"
    //               placeholder="Enter your email address..."
    //             />
    //           </FormControl>
    //           <FormDescription />
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <FormField
    //       control={form.control}
    //       name="message"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Message</FormLabel>
    //           <FormControl>
    //             <Textarea {...field} placeholder="Enter your message here..." />
    //           </FormControl>
    //           <FormDescription />
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <Button
    //       disabled={isLoading}
    //       className="w-fit cursor-pointer border-sky-400 hover:bg-sky-400 hover:text-gray-100 dark:border-sky-400 dark:hover:bg-sky-400"
    //     >
    //       {isLoading ? "Sending message..." : "Send"}
    //     </Button>
    //   </form>
    // </Form>

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
                          ref={(el) => {
                            field.ref(el);
                            inputRefs.current[index] = el;
                          }}
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
