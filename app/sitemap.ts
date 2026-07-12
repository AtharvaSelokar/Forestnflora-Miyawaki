import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://forestnfloramiyawaki.com";

  const lastModified = new Date("2026-07-12");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/miyawaki-forest-nagpur`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${baseUrl}/miyawaki-forest-maharashtra`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.92,
    },

    {
      url: `${baseUrl}/miyawaki-forest-india`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.90,
    },

    {
      url: `${baseUrl}/csr-tree-plantation-nagpur`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.90,
    },
  ];
}