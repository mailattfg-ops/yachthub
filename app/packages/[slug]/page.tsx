// app/packages/[slug]/page.tsx
import { fetchPackageBySlug } from "@/lib/utils";
import PackageDetailsClient from "./PackageDetailsClient";

export default async function PackageDetailsPage({ params }: any) {
  const { slug } = await params;
  const pkg = await fetchPackageBySlug(slug);

  return <PackageDetailsClient pkg={pkg} />;
}
