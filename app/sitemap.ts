import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://forestnfloramiyawaki.com";

  return [
    {
      url: baseUrl,

      lastModified: new Date(),

      changeFrequency: "weekly",

      priority: 1,
    },

    {
      url: `${baseUrl}/miyawaki-forest-nagpur`,

      lastModified: new Date(),

      changeFrequency: "monthly",

      priority: 0.95,

    },
    {
  url: `${baseUrl}/miyawaki-forest-india`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.95,
},
  ];
}