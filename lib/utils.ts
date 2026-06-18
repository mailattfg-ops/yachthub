// lib/utils.ts
import { createClient } from "@supabase/supabase-js";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/** Fetch all blogs */
export async function fetchAllBlogs() {
  const { data, error } = await supabase.from("blog").select("*");
  console.log("asdj", data);

  if (error) {
    console.error("Error fetching all blogs:", error);
    return [];
  }

  return data;
}

export async function fetchBlogBySlug(slug: string) {
  const cleanSlug = slug.toString().trim().toLowerCase();

  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("slug", cleanSlug)
    .single();

  return data || null;
}

export async function fetchAllPackages() {
  const { data, error } = await supabase.from("packages").select("*");

  if (error) {
    console.error("Error fetching packages:", error);
    return [];
  }

  return data;
}

export async function fetchPackageBySlug(slug: string) {
  if (!slug) return null;

  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching package:", error);
    return null;
  }

  return data;
}
