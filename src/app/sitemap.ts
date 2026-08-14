import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { SITE_URL } from "@/lib/site";
import { services, caseStudies } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ["", "/about", "/case-studies", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    priority: 0.9,
  }));

  const projectRoutes = caseStudies.map((c) => ({
    url: `${SITE_URL}/case-studies/${c.slug}`,
    lastModified,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
