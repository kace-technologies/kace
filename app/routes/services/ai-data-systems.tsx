import type { MetaFunction } from "react-router";
import ServiceDetail from "~/components/ServiceDetail";
import { serviceData } from "~/data/serviceData";

export const meta: MetaFunction = () => [
  { title: "AI & Data Systems — Kace Technologies" },
  { name: "description", content: "Intelligent systems that learn and adapt. We integrate machine learning models, build data pipelines, and ship AI features into production." },
];

export default function AIDataSystems() {
  return <ServiceDetail {...serviceData["ai-data-systems"]} />;
}
