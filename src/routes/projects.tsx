import { FileRoute } from "@tanstack/react-router";
import React, { ReactNode } from "react";
import ZenithLogo from "@/assets/Zenith";
import { ScrollArea } from "@/components/ui/scroll-area";

type ProjectProps = {
  name: string;
  description: string;
  thumbnail: ReactNode;
};

const Zenith: ProjectProps = {
  description: "desc",
  name: "Zenith Installer",
  thumbnail: <ZenithLogo className="fill-red-500 bg-black rounded w-full" />,
} as const;

const Projects: Array<ProjectProps> = [Zenith, Zenith, Zenith] as const;
const Project = (props: ProjectProps) => {
  return (
    <div className="w-full max-w-96 gap-2 grid py-2">
      {props.thumbnail}
      <div className="bg-stone-950 rounded  py-1 px-2 grid text-stone-300 ">
        <span className="font-bold">{props.name}</span>
        <span className="font-light">{props.description}</span>
      </div>
    </div>
  );
};
const ProjectsComponent = () => {
  return (
    <div className="pt-32 flex h-screen items-center flex-col gap-y-12">
      <span className="text-7xl md:text-9xl">Projects</span>
      <ScrollArea className="grid md:grid-cols-2 gap-8 w-full">
        {Projects.map((proj) => (
          <Project
            name={proj.name}
            description={proj.description}
            thumbnail={proj.thumbnail}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

export const Route = new FileRoute('/projects').createRoute({
  component: ProjectsComponent,
});
