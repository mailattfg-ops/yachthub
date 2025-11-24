"use client";

import { useEffect, useState } from "react";
import { fetchAllBlogs } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NewsLetter from "@/components/newsLetter";
import TopReads from "@/components/topReads";
import Book from "@/components/book";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      const data = await fetchAllBlogs();
      setBlogs(data);
      setLoading(false);
    }

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading blogs...</p>
      </div>
    );
  }

  /** Featured blog (first blog) */
  const featured = blogs[0];

  return (
    <>
      <main className="flex flex-col items-center w-full">
        <Navbar />

        {/* HERO SECTION */}
        <section className="relative w-full h-[101vh] flex items-center justify-center text-center text-white overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/blogvid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <h2 className="relative z-10 text-[44px] md:text-5xl font-light max-w-3xl px-10">
            Read about life aboard the best yachts in the world
          </h2>
        </section>

        {/* FEATURED BLOG CARD */}
        {featured && (
          <section className="w-full px-6 py-12 md:px-18 lg:px-22">
            <Link href={`/blog/${featured.slug}`}>
              <div className="grid lg:grid-cols-2 bg-white border border-gray-300 hover:scale-[1.01] transition overflow-hidden cursor-pointer">

                {/* LEFT CONTENT */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium mb-2">Explore</p>
                    <h2 className="font-[CalSans] text-3xl lg:text-4xl mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-md font-medium">{featured.desc}</p>
                  </div>
                  <p className="text-xs font-medium mt-4">{featured.date}</p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative w-full h-72">
                  <Image
                    src={featured.img || "/assets/blog-card.jpg"}
                    alt={featured.title}
                    fill
                    quality={80}
                    className="object-cover"
                  />
                </div>

              </div>
            </Link>
          </section>
        )}

        <NewsLetter />

        <TopReads blogs={blogs} />

        <Book />
      </main>

      <Footer />
    </>
  );
}
