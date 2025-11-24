import { fetchBlogBySlug, fetchAllBlogs } from "@/lib/utils";
import BlogDetailsClient from "./BlogDetailsClient";
import { notFound } from "next/navigation";

export default async function BlogDetailsPage({ params }: any) {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);
  if (!blog) {
    return notFound(); 
  }

  const allBlogs = await fetchAllBlogs();

  return <BlogDetailsClient blog={blog} allBlogs={allBlogs} />;
}
