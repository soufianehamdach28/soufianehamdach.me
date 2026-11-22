import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { playgroundItems } from "@/data/playground";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((p) => ({
    url: `https://soufianehamdach.me/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const playgroundUrls = playgroundItems.map((item) => ({
    url: `https://soufianehamdach.me/playground/${item.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://soufianehamdach.me", lastModified: new Date() },
    { url: "https://soufianehamdach.me/projects", lastModified: new Date() },
    { url: "https://soufianehamdach.me/playground", lastModified: new Date() },
    ...projectUrls,
    ...playgroundUrls,
  ];
}
