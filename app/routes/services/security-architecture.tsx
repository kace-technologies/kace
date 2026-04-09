import type { MetaFunction } from "react-router";
import ServiceDetail from "~/components/ServiceDetail";
import { serviceData } from "~/data/serviceData";

export const meta: MetaFunction = () => [
  { title: "Security & Architecture — Kace Technologies" },
  { name: "description", content: "Security-first design, threat modelling, and architectural reviews. We identify vulnerabilities before they become incidents." },
];

export default function SecurityArchitecture() {
  return <ServiceDetail {...serviceData["security-architecture"]} />;
}
