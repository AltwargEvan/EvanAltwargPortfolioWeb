import { Route as rootRoute } from "./routes/__root"
import { Route as ResumeImport } from "./routes/resume"
import { Route as ProjectsImport } from "./routes/projects"
import { Route as AboutImport } from "./routes/about"
import { Route as IndexImport } from "./routes"

const ResumeRoute = ResumeImport.update({
  path: "/resume",
  getParentRoute: () => rootRoute,
} as any)

const ProjectsRoute = ProjectsImport.update({
  path: "/projects",
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: "/about",
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any)

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    "/about": {
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    "/projects": {
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
    "/resume": {
      preLoaderRoute: typeof ResumeImport
      parentRoute: typeof rootRoute
    }
  }
}

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  ProjectsRoute,
  ResumeRoute,
])
