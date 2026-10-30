import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://cvsapiens.com", changeFrequency: "monthly", priority: 1 }];
}
