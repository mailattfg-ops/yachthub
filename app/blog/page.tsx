"use client";

import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/blogCard";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MoveRight } from "lucide-react";
import NewsLetter from "@/components/newsLetter";
import TopReads from "@/components/topReads";
import Book from "@/components/book";


export default function BlogPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full">
        <Navbar />
        {/* ====== HERO SECTION ====== */}
        <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/blogvid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />


          <h1 className="relative z-10 text-4xl leading-snug md:text-5xl font-light max-w-3xl px-4">
            Read about life aboard the <br /> best yachts in the world
          </h1>
        </section>

        {/* ====== FEATURED BLOG ====== */}
        <section className="w-full max-w-7xl mx-auto my-16">
          {/* Blog Card */}
          <Link href="/blog/details">
            <div className="grid md:grid-cols-2 bg-white border border-[#A6A6A6] cursor-pointer hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
              {/* Left Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-[#2530FF] font-medium mb-2">
                    Explore
                  </p>
                  <h1 className="text-3xl font-bold leading-snug mb-3">
                    A Guide to Affordable Yacht <br /> Hire Options in Dubai
                  </h1>
                  <p className="text-md font-medium">
                    A deep dive into how you can enjoy yacht life without <br />{" "}
                    breaking the bank.
                  </p>
                </div>
                <p className="text-xs font-medium mt-4">March 17, 2025</p>
              </div>

              {/* Right Image */}
              <div className="relative w-full h-68">
                <Image
                  src="/assets/blog-card.jpg"
                  alt="Yacht in Dubai"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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
