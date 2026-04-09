import type { MetaFunction } from "react-router";
import ServiceDetail from "~/components/ServiceDetail";
import { serviceData } from "~/data/serviceData";

export const meta: MetaFunction = () => [
  { title: "Web Engineering — Kace Technologies" },
  { name: "description", content: "Full-stack web applications built with modern frameworks. Performant, secure, and maintainable codebases at any scale." },
];

export default function WebEngineering() {
  return <ServiceDetail {...serviceData["web-engineering"]} />;
}
