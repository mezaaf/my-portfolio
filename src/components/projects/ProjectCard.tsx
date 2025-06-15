import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  stack: string[];
  pictureUrl: string;
  webLink?: string;
  repoLink?: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="w-full overflow-hidden rounded-3xl p-0">
      <CardContent className="grid grid-cols-1 p-0 sm:grid-cols-2">
        <div className="flex flex-col justify-between">
          <div className="flex w-full flex-col gap-4 p-4 sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
            <CardTitle className="text-xl font-bold text-gray-800 sm:text-2xl lg:text-3xl dark:text-gray-100">
              {props.title}
            </CardTitle>
            <CardDescription className="text-sm sm:text-base lg:text-lg">
              {props.excerpt}
            </CardDescription>
            <ul className="flex flex-wrap gap-2 text-xs sm:text-sm lg:text-base">
              {props.stack.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))}
            </ul>
          </div>
          <div className="flex w-full flex-col gap-4 p-4 sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
            <Link href={`/projects/${props.slug}`}>
              <Button
                size={"sm"}
                variant={"outline"}
                className="w-fit cursor-pointer"
              >
                Detail
              </Button>
            </Link>
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
