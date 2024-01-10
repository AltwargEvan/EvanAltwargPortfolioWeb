import PageTransitionLayout from "@/components/PageTransitionLayout";
import { FileRoute } from "@tanstack/react-router";
import React from "react";

const ResumeComponent = () => {
  return (
    <PageTransitionLayout>
      <div className="pt-32">Resume</div>
    </PageTransitionLayout>
  );
};

export const Route = new FileRoute('/resume').createRoute({
  component: ResumeComponent,
});
