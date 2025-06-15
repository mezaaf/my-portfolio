import React from "react";
import { SectionContainer } from "../layouts/SectionContainer";
import Lanyard from "../ui/Lanyard/Lanyard";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <SectionContainer
      id="contact"
      className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:grid lg:min-h-115 lg:grid-cols-2 lg:px-0 lg:py-16"
    >
      <div className="relative -mt-75 hidden w-full lg:grid lg:grid-cols-2">
        <div className="absolute w-full">
          <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 lg:pe-45">
        <div className="relative flex flex-col">
          <h1 className="z-1 text-2xl font-bold text-sky-400 sm:text-3xl lg:text-4xl">
            Get In Touch
          </h1>
          <div className="absolute -top-5 left-0 sm:-top-6 lg:-top-8">
            <h1 className="text-muted z-0 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
              Contact
            </h1>
          </div>
        </div>
        <ContactForm />
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
