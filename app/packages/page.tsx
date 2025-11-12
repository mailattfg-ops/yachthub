"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbarDark";
import { Mouse, MoveRight } from "lucide-react";
import NewsLetter from "@/components/newsLetter";
import TopReads from "@/components/topReads";
import Book from "@/components/book";
import { useEffect, useState } from "react";
import { fetchBlogBySlug } from "@/lib/utils";
import PackageSection from "@/components/packages";


export default function BlogPage() {

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full">
        <Navbar />
        {/* ====== HERO SECTION ====== */}
        <section className="relative w-full pt-30 md:pt-40 pb-15 md:pb-15 flex items-center justify-center text-center text-white overflow-hidden">
          {/* Background Video */}
          <h2 className="font-[Absans] grid z-10 text-[41px] md:text-[44px] leading-snug md:text-5xl text-black font-light px-20">
            <span style={{fontFamily: "var(--font-awesome-serif)"}}>Experience Luxury on the</span> 
            with our special packages
          </h2>
        </section>

        <PackageSection />

        {/* ====== Book ====== */}
        <Book />
      </main>
      <Footer />
    </>
  );
}
