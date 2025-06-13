import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: {
    id: number;
    name: string;
  }[];
  image: string;
  link: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="w-full overflow-hidden rounded-3xl p-0">
      <CardContent className="grid grid-cols-1 p-0 sm:grid-cols-2">
        <div className="flex w-full flex-col gap-4 p-4 sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
          <CardTitle className="text-xl font-bold text-gray-800 sm:text-2xl lg:text-3xl dark:text-gray-100">
            {props.title}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base lg:text-lg">
            {props.description}
          </CardDescription>
          <ul className="flex flex-wrap gap-2 text-xs sm:text-sm lg:text-base">
            {props.stack.map((item) => (
              <Badge key={item.id}>{item.name}</Badge>
            ))}
          </ul>
        </div>
        <div>
          <Image
            src={props.image}
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
