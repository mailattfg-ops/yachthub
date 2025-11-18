import { fetchBlogBySlug, fetchAllBlogs } from "@/lib/utils";
import BlogDetailsClient from "./BlogDetailsClient";

export default async function BlogDetailsPage({ params }: any) {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);
  const allBlogs = await fetchAllBlogs();

  return <BlogDetailsClient blog={blog} allBlogs={allBlogs} />;
}
