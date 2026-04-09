import type { MetaFunction } from "react-router";
import ServiceDetail from "~/components/ServiceDetail";
import { serviceData } from "~/data/serviceData";

export const meta: MetaFunction = () => [
  { title: "Mobile Development — Kace Technologies" },
  { name: "description", content: "Cross-platform and native mobile apps for iOS and Android. From MVPs to enterprise-grade applications with offline-first architecture." },
];

export default function MobileDevelopment() {
  return <ServiceDetail {...serviceData["mobile-development"]} />;
}
