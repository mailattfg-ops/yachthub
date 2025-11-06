import { Suspense } from "react";
import BlogDetails from "./details";


export default function BlogDetailsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading blog details...</div>}>
      <BlogDetails />
    </Suspense>
  );
}
