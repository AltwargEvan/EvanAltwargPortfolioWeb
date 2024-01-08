import { FileRoute } from "@tanstack/react-router";
import React from "react";

const ContactComponent = () => {
  return <div>Contact</div>;
};

export const Route = new FileRoute('/contact').createRoute({
  component: ContactComponent,
});
