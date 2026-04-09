import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("layouts/shell.tsx", [
    index("routes/home.tsx"),
    route("services", "routes/services.tsx"),
    route("services/web-engineering", "routes/services/web-engineering.tsx"),
    route("services/mobile-development", "routes/services/mobile-development.tsx"),
    route("services/cloud-devops", "routes/services/cloud-devops.tsx"),
    route("services/ai-data-systems", "routes/services/ai-data-systems.tsx"),
    route("services/security-architecture", "routes/services/security-architecture.tsx"),
    route("services/technical-consulting", "routes/services/technical-consulting.tsx"),
    route("stack", "routes/stack.tsx"),
    route("work", "routes/work.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("privacy", "routes/privacy.tsx"),
    route("terms", "routes/terms.tsx"),
    route("cookies", "routes/cookies.tsx"),
  ]),
] satisfies RouteConfig;
