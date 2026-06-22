import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils/siteUrl";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/fr/admin/", "/fr/profile/", "/fr/auth/"] }],
    sitemap: `${base}/sitemap.xml`,
  };
}
