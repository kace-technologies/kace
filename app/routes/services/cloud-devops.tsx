import type { MetaFunction } from "react-router";
import ServiceDetail from "~/components/ServiceDetail";
import { serviceData } from "~/data/serviceData";

export const meta: MetaFunction = () => [
  { title: "Cloud & DevOps — Kace Technologies" },
  { name: "description", content: "Infrastructure as code, CI/CD pipelines, and cloud-native deployments. We automate everything so your team ships faster." },
];

export default function CloudDevOps() {
  return <ServiceDetail {...serviceData["cloud-devops"]} />;
}
