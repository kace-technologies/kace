import type { MetaFunction } from "react-router";
import ServiceDetail from "~/components/ServiceDetail";
import { serviceData } from "~/data/serviceData";

export const meta: MetaFunction = () => [
  { title: "Technical Consulting — Kace Technologies" },
  { name: "description", content: "Strategic technology advisory for CTOs and founders. Stack selection, team structure, roadmaps, and code audits." },
];

export default function TechnicalConsulting() {
  return <ServiceDetail {...serviceData["technical-consulting"]} />;
}
