import { getProjects } from "@/lib/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects();
  const projectsSiteMap: MetadataRoute.Sitemap = projects.map(
    ({ reference }) => ({
      url: `https://luminal-studio/projects/${reference}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    })
  );
  return [
    ...projectsSiteMap,
    {
      url: "https://luminal-studio/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
