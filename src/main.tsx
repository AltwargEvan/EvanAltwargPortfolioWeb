import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Router,
  RouterProvider,
  createMemoryHistory,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
const memoryHistory = createMemoryHistory({
  initialEntries: ["/"],
});
const router = new Router({
  routeTree,
  defaultPreload: "intent",
  history: memoryHistory,
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
