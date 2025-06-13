import { SectionContainer } from "../layouts/SectionContainer";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";
import { projectDatas } from "./projectDatas";

const ProjectSection = () => {
  return (
    <SectionContainer
      padded
      minFullscreen
      id="projects"
      className="flex w-full flex-col gap-4 pt-8 sm:gap-6 sm:pt-12 lg:gap-8 lg:pt-16"
    >
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
      {projectDatas.map((item) => (
        <ProjectCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          link={item.link}
          stack={item.stack}
        />
      ))}
      <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8">
        <h1 className="text-2xl font-bold text-sky-400 sm:text-3xl lg:text-4xl">
          Other Projects
        </h1>
        <Button variant={"outline"}>Load More</Button>
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
