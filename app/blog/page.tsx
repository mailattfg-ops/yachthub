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

        
      </main>
      <Footer />
    </>
  );
}
