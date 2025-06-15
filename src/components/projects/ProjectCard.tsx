import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  pictureUrl: string;
  webLink?: string;
  repoLink?: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="w-full overflow-hidden rounded-3xl p-0">
      <CardContent className="flex flex-col-reverse items-center justify-between p-0 sm:flex-row">
        <div className="flex flex-col justify-between sm:max-w-xl">
          <div className="flex w-full flex-col gap-4 p-4 sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
            <CardTitle className="text-xl font-bold text-gray-800 sm:text-2xl lg:text-3xl dark:text-gray-100">
              {props.title}
            </CardTitle>
            <CardDescription className="text-sm sm:text-base lg:text-lg">
              {props.description}
            </CardDescription>
            <ul className="flex flex-wrap gap-2 text-xs sm:text-sm lg:text-base">
              {props.stack.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))}
            </ul>
          </div>
          <div className="flex w-full gap-4 p-4 sm:gap-3 sm:p-6 lg:gap-4 lg:p-8">
            {props.repoLink !== null ? (
              <Link href={props.repoLink ?? "#"} target="_blank">
                <Button size={"sm"} className="cursor-pointer">
                  <IconBrandGithub /> Repository
                </Button>
              </Link>
            ) : (
              <Link href="/projects">
                <Button size={"sm"} className="cursor-pointer">
                  <IconBrandGithub /> Repository
                </Button>
              </Link>
            )}
            {props.webLink !== null ? (
              <Link href={props.webLink ?? "#"} target="_blank">
                <Button size={"sm"} className="cursor-pointer">
                  <IconLink /> Visit Site
                </Button>
              </Link>
            ) : (
              <Link href="/projects">
                <Button size={"sm"} className="cursor-pointer">
                  <IconLink /> Visit Site
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div>
          <Image
            src={props.pictureUrl}
            alt={props.title}
            width={1000}
            height={1000}
            className="h-full w-full rounded-lg"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
