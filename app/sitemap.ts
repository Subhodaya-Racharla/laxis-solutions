import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://laxis.solutions",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["privacy", "terms", "data-deletion"].map((path) => ({
      url: `https://laxis.solutions/${path}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
