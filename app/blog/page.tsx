"use client";

import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/blogCard";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Mouse, MoveRight } from "lucide-react";
import NewsLetter from "@/components/newsLetter";
import TopReads from "@/components/topReads";
import Book from "@/components/book";
import { useEffect, useState } from "react";
import { fetchBlogBySlug } from "@/lib/utils";
import { createClient } from '@supabase/supabase-js'


export default function BlogPage() {
  const [post, setPost] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(false);

  const slug = "affordable-yacht";
  const fetchPost = async () => {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
    console.log("Supabase ENV:", SUPABASE_URL, SUPABASE_KEY);

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log("Supabase client:", supabase);

    const { data, error } = await supabase
      .from("blog")
      .select("*");

    if (error) {
      console.error("Error fetching post:", error);
    } else {
      console.log("data", data);
      setPost(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!limit) {
      setLimit(true);
    }
    setLoading(true);


    fetchPost();
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full">
        <Navbar />
        {/* ====== HERO SECTION ====== */}
        <section className="relative w-full h-[101vh] flex items-center justify-center text-center text-white overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/blogvid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <h2 className="relative z-10 text-[44.1px] leading-snug md:text-5xl font-light max-w-3xl px-20">
            Read about life aboard the best yachts in the world
          </h2>
        </section>
        <div className="absolute bottom-2 inset-0 md:flex justify-center items-end float-animation hidden ">
          <Mouse width={50} height={50} color="white" />
        </div>

        {/* ====== FEATURED BLOG ====== */}
        <section className="w-full px-6 py-8 md:px-18 lg:px-22 md:py-18 ">
          {/* Blog Card */}
          <Link href={`/blog/details?slug=affordable-yacht`}>
            <div className="grid lg:grid-cols-2 bg-white border border-[#A6A6A6] cursor-pointer 
              hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
              {/* Left Content */}
              {post && (() => {
                const blog = post.find((b: any) => b.slug === slug);
                if (!blog) return <p>Blog not found</p>;

                return (
                  <>
                    <div className="p-4 md:-8 flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-[#2530FF] font-medium mb-2">
                          Explore
                        </p>
                        <h2 className="!font-[CalSans] text-[22px] md:text-[25px] lg:text-[40px] font-normal leading-snug mb-3">
                          {blog.title}
                        </h2>
                        <p className="text-md font-medium">
                          {blog.desc}
                        </p>
                      </div>
                      <p className="text-xs font-medium mt-4">{blog.date}</p>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full h-68">
                      <Image
                        src={blog.img || "/assets/blog-card.jpg"}
                        alt="Yacht in Dubai"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                );
              })()}

            </div >

          </Link>

        </section>
        {/* Newsletter + Social Section */}

        <NewsLetter />

        {/* ====== TOP READS ====== */}
        <TopReads />

        {/* ====== Book ====== */}
        <Book />
      </main>
      <Footer />
    </>
  );
}
