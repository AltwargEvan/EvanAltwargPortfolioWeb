import { ProjectData } from "@/data/projects";
import { FileRoute } from "@tanstack/react-router";
import React from "react";

const ProjectsComponent = () => {
  const project = Route.useLoaderData();

  if (project === undefined)
    return <div className="pt-32 text-white">Project Not Found</div>;

  return <div className="pt-32 text-white">{project.name}</div>;
};

export const Route = new FileRoute('/project/$id').createRoute({
  loader: ({ params: { id } }) => ProjectData.find((x) => x.id === id),
  component: ProjectsComponent,
});
