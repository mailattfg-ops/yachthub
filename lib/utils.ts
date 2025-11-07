import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";
import Papa from "papaparse";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgqRTZETFKFiJV-TyoBX43wInYGAcqqvK1Rf3yX2dEcKJuvOv_HCMqMKjLk0m7wvbWTBLSs6887Jwf/pub?gid=0&single=true&output=csv";
export async function fetchAllBlogs(slug:any) {
  try {
    const response = await axios.get(`${GOOGLE_SHEET_CSV_URL}&t=${Date.now()}`, {
  responseType: "text",
});
    console.log("adasdasd",response)
    const parsed = Papa.parse(response.data, {
      header: true,
      skipEmptyLines: true,
    });
    console.log("parsed",parsed)
    console.log("parsed",parsed)
    const blogs = parsed.data
      // .filter((row:any) => row.slug && row.title)
      .map((row:any) => ({
        slug: row.slug || "",
        img: row.img || "",
        title: row.title || "",
        date: row.date || "",
        desc: row.desc || "",
      }));
      console.log("blogs",blogs);
      
    return blogs;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}
export async function fetchBlogBySlug(slug:any) {
  try {
    const blogs = await fetchAllBlogs(slug);
    return blogs || null;
  } catch (err) {
    console.error("Error fetching blog by slug:", err);
    return null;
  }
}
