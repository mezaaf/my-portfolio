import { getProjectBySlug } from "@/actions/server";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ slug: string }>;

const ProjectDetailPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const result = await getProjectBySlug(slug);
  const response = result.data as Project[];
  const project = response[0];
  return (
    <SectionContainer
      padded
      className="w-full gap-4 py-8 sm:gap-6 sm:py-12 lg:gap-8 lg:py-20"
    >
      <div className="relative mt-8 flex items-center justify-between sm:mt-12 lg:mt-16">
        <h1 className="z-1 text-2xl font-bold text-sky-400 sm:text-3xl lg:text-4xl">
          Projects Detail
        </h1>

        <div className="absolute -top-5 left-0 sm:-top-6 lg:-top-8">
          <h1 className="text-muted z-0 text-5xl font-extrabold uppercase sm:text-6xl lg:text-7xl">
            {project?.title}
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {project && (
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center p-4 sm:p-6 lg:justify-start lg:p-8">
                  <h1 className="text-3xl font-extrabold sm:text-6xl lg:text-7xl">
                    {project.title}
                  </h1>
                </div>
                <div className="w-full">
                  <Image
                    src={project.pictureUrl}
                    alt={project.slug}
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 sm:gap-3 lg:gap-4">
              <h1 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                Description
              </h1>
              <p className="text-sm sm:text-base lg:text-lg">
                {project.description}
              </p>
              <h1 className="mt-4 text-xl font-semibold sm:mt-6 sm:text-2xl lg:mt-8 lg:text-3xl">
                Tech Stack
              </h1>
              <ul className="flex flex-wrap gap-2 text-xs sm:text-sm lg:text-base">
                {project.stack.map((item, index) => (
                  <Badge key={index}>{item}</Badge>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 flex w-full flex-col items-center gap-4 sm:mt-12 sm:gap-6 lg:mt-16 lg:gap-8">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Back To All Projects
        </h1>
        <Link href="/projects">
          <Button
            variant={"outline"}
            className="cursor-pointer border-sky-400 hover:bg-sky-400 hover:text-gray-100 dark:border-sky-400 dark:hover:bg-sky-400"
          >
            Back To All Projects
          </Button>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default ProjectDetailPage;
