"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import Loader from "../Loader/Loader";
import { useParams } from "next/navigation";
import { fetchBlogBySlug } from "@/lib/utils";

interface BlogPost {
  img?: string;
  desc: string;
  title: string;
  date: string;
  slug: string;
}


function topReads() {

  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadPost() {
      try {
        const data = await fetchBlogBySlug(slug);
        console.log(data);
        
        setPost(data);
      } catch (err) {
        console.error("Error loading post:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);
  // if (loading) return <Loader />;
  if (!post) {
    return (
      <div className="bg-white text-black min-h-screen pt-40 text-center">
        <h2 className="text-4xl font-bold">Post not found</h2>
        <p className="mt-4">
          <Link href="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </p>
      </div>
    );
  }
  return (
    <>
      <section className="w-full px-6 pb-8 md:px-18 lg:px-16 lg:mb-20 py-8">
        {/* Title */}
        <h2 className="font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-5 text-center">Top Reads</h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {post && post.slice(0, 4).map((blog, i) => (
            <Link key={i} href={`/blog/details?slug=${blog.slug}`}>
              <div className="flex h-[232px] lg:h-[500px] xl:h-[475px] bg-white border border-gray-200 cursor-pointer 
                hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
                {/* Left Image */}
                <div className="relative w-1/2 ">
                  <Image
                    src={blog.img || ""}
                    alt={blog.title || "logo"}
                    fill
                    priority className="object-fill"
                  />
                </div>

                {/* Right Text */}
                <div className="w-1/2 pl-4 pr-2 py-6 flex mt-5 flex-col justify-between ">
                  <div>
                    <p className="text-md text-blue-600 font-medium mb-1">
                      Explore
                    </p>
                    <p className="!font-[CalSans] text-[16.76px] lg:text-[34px] xl:text-[40px] font-normal leading-[18px] lg:leading-[38px] mb-2 ">{blog.title}</p>
                    <p className="text-[10.05px] lg:text-[24px] text-md font-normal leading-[10px] lg:leading-[28px] tracking-[0px] lg:tracking-[-1px]">{blog.desc}</p>
                  </div>
                  <p className="text-sm font-semibold mt-4">{blog.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="flex justify-center mt-4">
          <button className="font-[Absans] mt-4 px-8 py-3 border cursor-pointer border-[#A3A3A3] text-[#000] hover:bg-black hover:text-white transition-all">
            View all Blogs
          </button>
        </div>
      </section>
    </>
  );
}

export default topReads;
