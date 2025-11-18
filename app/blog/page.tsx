"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NewsLetter from "@/components/newsLetter";
import TopReads from "@/components/topReads";
import Book from "@/components/book";
import { Mouse } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchAllBlogs } from "@/lib/utils";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const FEATURED_SLUG = "affordable-yacht";

  useEffect(() => {
    async function load() {
      const data = await fetchAllBlogs();
      setPosts(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  const featured = posts.find((p) => p.slug === FEATURED_SLUG);

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full">
        <Navbar />

        {/* HERO SECTION (unchanged) */}
        <section className="relative w-full h-[101vh] flex items-center justify-center text-center text-white overflow-hidden">
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

        {/* ========= FEATURED BLOG (old design, new routing) ========= */}
        <section className="w-full px-6 py-8 md:px-18 lg:px-22 md:py-18">
          <Link href={`/blog/${FEATURED_SLUG}`}>
            <div className="grid lg:grid-cols-2 bg-white border border-[#A6A6A6] cursor-pointer 
              hover:scale-[1.01] transition-transform duration-300 overflow-hidden">

              {featured ? (
                <>
                  {/* LEFT CONTENT */}
                  <div className="p-4 md:-8 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-[#2530FF] font-medium mb-2">
                        Explore
                      </p>
                      <h2 className="!font-[CalSans] text-[22px] md:text-[25px] lg:text-[40px] font-normal leading-snug mb-3">
                        {featured.title}
                      </h2>
                      <p className="text-md font-medium">
                        {featured.desc}
                      </p>
                    </div>
                    <p className="text-xs font-medium mt-4">
                      {featured.date}
                    </p>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="relative w-full h-68">
                    <Image
                      src={featured.img}
                      alt={featured.title}
                      fill
                      priority
                      quality={80}
                      className="object-cover"
                    />
                  </div>
                </>
              ) : (
                <p className="p-10">Featured blog not found</p>
              )}

            </div>
          </Link>
        </section>

        {/* NewsLetter */}
        <NewsLetter />

        {/* Top Reads (pass blogs to show old design) */}
        <TopReads blogs={posts} />

        {/* Book */}
        <Book />
      </main>

      <Footer />
    </>
  );
}
