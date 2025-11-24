// app/packages/[slug]/page.tsx
import { fetchPackageBySlug } from "@/lib/utils";
import PackageDetailsClient from "./PackageDetailsClient";
import { notFound } from "next/navigation";

export default async function PackageDetailsPage({ params }: any) {
  const { slug } = await params;
  
  const pkg = await fetchPackageBySlug(slug);
   if (!pkg) {
    return notFound(); 
  }

  return <PackageDetailsClient pkg={pkg} />;
}
