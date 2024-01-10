import PageTransitionLayout from "@/components/PageTransitionLayout";
import { FileRoute } from "@tanstack/react-router";
import React from "react";

const AboutComponent = () => {
  return (
    <PageTransitionLayout>
      <div className="pt-32">About</div>
    </PageTransitionLayout>
  );
};

export const Route = new FileRoute('/about').createRoute({
  component: AboutComponent,
});
