import { getAllToolIds } from "@/lib/utils";
import { getAllArticleIds } from "@/lib/articles";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://synthr.online";

  const staticRoutes = [
    "/",
    "/tools/",
    "/newsletter/",
    "/submit/",
    "/toolkit/",
    "/best/",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1.0 : 0.8,
  }));

  const toolRoutes = getAllToolIds().map((id) => ({
    url: `${baseUrl}/tool/${id}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const articleRoutes = getAllArticleIds().map((id) => ({
    url: `${baseUrl}/best/${id}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...toolRoutes, ...articleRoutes];
}
