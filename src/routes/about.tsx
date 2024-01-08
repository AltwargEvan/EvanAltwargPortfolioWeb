import { FileRoute } from "@tanstack/react-router";
import React from "react";

const AboutComponent = () => {
  return <div>About</div>;
};

export const Route = new FileRoute('/about').createRoute({
  component: AboutComponent,
});
