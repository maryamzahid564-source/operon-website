import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/what-we-do",
    "/our-work",
    "/our-team",
    "/careers",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/what-we-do/${s.slug}`,
    lastModified,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
