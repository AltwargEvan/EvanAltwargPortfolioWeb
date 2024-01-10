import { FileRoute, Link } from "@tanstack/react-router";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectData, ProjectType } from "@/data/projects";

type ProjectProps = {
  project: ProjectType;
};
const Project = ({ project }: ProjectProps) => {
  return (
    <Link to={`/project/$id`} params={{ id: project.id }} className="group">
      <div className="rounded border border-neutral-800 flex justify-center">
        {project.thumbnail}
      </div>

      <div className="bg-stone-950 rounded  py-1 px-2 flex flex-col text-stone-300 mt-2 h-24 border-neutral-800 border">
        <span className="font-bold group-hover:underline">{project.name}</span>
        <span className="font-light justify-start h-full">
          {project.description}
        </span>
      </div>
    </Link>
  );
};
const ProjectsComponent = () => {
  return (
    <div className="pt-32 flex h-screen items-center flex-col gap-y-12">
      <span className="text-7xl md:text-9xl">Projects</span>
      <Carousel className="w-5/6">
        <CarouselContent>
          {ProjectData.map((project) => (
            <CarouselItem className="md:basis-1/2  xl:basis-1/3">
              <Project project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="xl:hidden" />
        <CarouselNext className="xl:hidden" />
      </Carousel>
    </div>
  );
};

export const Route = new FileRoute('/projects').createRoute({
  component: ProjectsComponent,
});
