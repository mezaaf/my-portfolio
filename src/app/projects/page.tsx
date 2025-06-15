import { getAllProjects } from "@/actions/server";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types/project";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = async () => {
  const result = await getAllProjects();

  const projects = result.data as Project[];
  return (
    <SectionContainer
      padded
      className="w-full gap-4 py-8 sm:gap-6 sm:py-12 lg:gap-8 lg:py-20"
    >
      <div className="relative flex flex-col">
        <h1 className="z-1 text-2xl font-bold text-sky-400 sm:text-3xl lg:text-4xl">
          All Projects
        </h1>
        <div className="absolute -top-5 left-0 sm:-top-6 lg:-top-8">
          <h1 className="text-muted z-0 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
            PROJECTS
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="p-0 pb-5">
            <CardHeader className="p-0">
              <Image
                src={project.pictureUrl}
                alt={project.slug}
                width={1000}
                height={1000}
                priority
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.excerpt}</CardDescription>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Link href={project.repoLink ?? "#"}>
                    <Button size={"sm"} className="cursor-pointer">
                      <IconBrandGithub />
                    </Button>
                  </Link>
                  <Link href={project.webLink ?? "#"}>
                    <Button size={"sm"} className="cursor-pointer">
                      <IconLink />
                    </Button>
                  </Link>
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <Button size={"sm"} className="cursor-pointer">
                    Detail
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsPage;
