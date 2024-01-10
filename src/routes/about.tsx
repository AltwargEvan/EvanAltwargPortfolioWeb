import { FileRoute } from "@tanstack/react-router";
import React from "react";

const AboutComponent = () => {
  return <div className="pt-32">About</div>;
};

export const Route = new FileRoute('/about').createRoute({
  component: AboutComponent,
});
