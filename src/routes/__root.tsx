import { RootRoute } from "@tanstack/react-router";
import Navbar from "../Components/Navbar";
import React from "react";

const RootComponent = () => {
  return (
    <div className="grid justify-center w-full bg-neutral-900 font-BebasNeue">
      <div className="max-w-7xl w-[100vw]">
        <Navbar />
      </div>
    </div>
  );
};
export const Route = new RootRoute({
  component: RootComponent,
});
