"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'; // <-- 1. Import useState

interface BlogPost {
  slug: string;
  title: string;
  img: string;
  desc: string;
  date: string;
  alt_tab: string;
}

export default function TopReads({ blogs }: { blogs: BlogPost[] }) {
  if (!blogs || blogs.length === 0) return null;

  const [showAll, setShowAll] = useState(false);
  const displayedBlogs = showAll ? blogs : blogs.slice(0, 4);
  const hasMoreThanFour = blogs.length > 4;

  return (
    <>
      <section className="w-full px-6 pb-8 md:px-18 lg:px-16 lg:mb-20 py-8">
        <h2 className="font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-5 text-center">
          Top Reads
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {displayedBlogs.map((blog, i) => (
            <Link key={i} href={`/blog/${blog.slug}`}>
              <div className="flex h-[232px] lg:h-[500px] xl:h-[475px] bg-white border border-gray-200 cursor-pointer 
                hover:scale-[1.01] transition-transform duration-300 overflow-hidden">

                <div className="relative w-1/2">
                  <Image
                    src={blog.img || ""}
                    alt={blog.alt_tab || "Image"}
                    fill
                    className="object-fill"
                    loading="lazy"
                    quality={80}
                  />
                </div>

                <div className="w-1/2 pl-4 pr-2 py-6 flex mt-8 flex-col justify-between">
                  <div>
                    <p className="text-md text-blue-600 font-medium mb-1">
                      Explore
                    </p>

                    <p className="!font-[CalSans] text-[16.76px] lg:text-[34px] xl:text-[40px] font-normal leading-[18px] lg:leading-[38px] mb-2">
                      {blog.title}
                    </p>

                    <p className="text-[10.05px] lg:text-[24px] leading-[10px] lg:leading-[28px] tracking-[0px] lg:tracking-[-1px]">
                      {blog.desc}
                    </p>
                  </div>

                  <p className="text-sm font-semibold mt-4">{blog.date}</p>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {!showAll && hasMoreThanFour && (
          <div className="flex justify-center mt-4">
            <button
                onClick={() => setShowAll(true)}
                className="font-[Absans] mt-4 px-8 py-3 border cursor-pointer border-[#A3A3A3] text-[#000] hover:bg-black hover:text-white transition-all"
            >
              View all Blogs
            </button>
          </div>
        )}
      </section>
    </>
  );
}