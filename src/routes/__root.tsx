import { Outlet, RootRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import React from "react";

const RootComponent = () => {
  return (
    <div className="bg-neutral-900 font-BebasNeue text-neutral-50 justify-center flex w-screen h-screen overflow-x-hidden">
      <div className="max-w-7xl w-screen h-screen flex flex-col px-8">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
export const Route = new RootRoute({
  component: RootComponent,
});
