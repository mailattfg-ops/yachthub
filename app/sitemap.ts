import { MetadataRoute } from "next";
import { fetchAllBlogs, fetchAllPackages } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await fetchAllBlogs();
  const packages = await fetchAllPackages();

  const base = "https://www.yachthubdubai.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/packages`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
  ];

  const blogPages =
    blogs?.map((b: any) => ({
      url: `${base}/blog/${b.slug}`,
      lastModified: new Date(),
    })) || [];

  const packagePages =
    packages?.map((p: any) => ({
      url: `${base}/packages/${p.slug}`,
      lastModified: new Date(),
    })) || [];

  return [...staticPages, ...blogPages, ...packagePages];
}
