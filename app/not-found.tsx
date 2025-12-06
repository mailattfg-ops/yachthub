"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbarDark";
import Footer from "@/components/footer";

export default function NotFoundPage() {
  return (
    <>
      <Navbar/>

      <main className="flex flex-col items-center text-center mt-28 px-6">
        <h1 className="font-[CalSans] text-5xl text-[#0F172A]">
          Page Not Found
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Image
          src="/assets/404.webp"
          alt="Not Found"
          width={350}
          height={350}
          className="mt-10"
        />

        <Link href="/">
          <button className="mt-10 px-8 py-3 border border-black hover:bg-black hover:text-white transition">
            Back to Home
          </button>
        </Link>
      </main>

      <Footer />
    </>
  );
}
