import { FileRoute } from "@tanstack/react-router";
import React from "react";

const ProjectsComponent = () => {
  return <div>Projects</div>;
};

export const Route = new FileRoute('/projects').createRoute({
  component: ProjectsComponent,
});
