import type { Metadata } from "next";
import ProjectsPageContent from "@/components/projects/projects-page-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software projects by Soufiane Hamdach including full-stack platforms, mobile apps, and APIs. React Native, Next.js, NestJS, and full-stack development.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
