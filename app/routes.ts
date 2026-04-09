import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("layouts/shell.tsx", [
    index("routes/home.tsx"),
    route("services", "routes/services.tsx"),
    route("stack", "routes/stack.tsx"),
    route("work", "routes/work.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("privacy", "routes/privacy.tsx"),
    route("terms", "routes/terms.tsx"),
    route("cookies", "routes/cookies.tsx"),
  ]),
] satisfies RouteConfig;
