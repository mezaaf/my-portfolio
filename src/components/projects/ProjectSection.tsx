import React from "react";
import { SectionContainer } from "../layouts/SectionContainer";

const ProjectSection = () => {
  return (
    <SectionContainer padded minFullscreen id="projects" className="w-full">
      <div className="relative flex flex-col">
        <h1 className="z-1 text-2xl font-bold text-sky-400 sm:text-3xl lg:text-4xl">
          Featured Projects
        </h1>
        <div className="absolute -top-5 left-0 sm:-top-6 lg:-top-8">
          <h1 className="text-muted z-0 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
            PORTFOLIO
          </h1>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
