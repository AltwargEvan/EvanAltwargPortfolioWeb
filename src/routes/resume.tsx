import { FileRoute } from "@tanstack/react-router";
import React from "react";

const ResumeComponent = () => {
  return <div className="pt-32">Resume</div>;
};

export const Route = new FileRoute('/resume').createRoute({
  component: ResumeComponent,
});
