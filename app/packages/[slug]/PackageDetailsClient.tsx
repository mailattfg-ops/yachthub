"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbarDark";
import Footer from "@/components/footer";
import Book from "@/components/book";


interface BlogPost {
  img?: string;
  desc: string;
  title: string;
  date: string;
  slug: string;

}

export default function PackageDetailsClient({ pkg }: any) {
   if (!pkg) return <p className="text-center py-20">Package not found</p>;

  return (
    <>
      <main className="flex flex-col items-center w-full">
        <Navbar />
        {/* Header Section */}
        {/* <p className="text-md text-[#3B5BFF] font-medium mb-2">Explore</p> */}

        <section className="w-full bg-white pt-20 px-8 lg:px-12 pb-4 md:pb-8 mt-12 flex flex-col items-center text-center">

          <h2 className="w-full !font-[CalSans] text-[35px] md:text-[44.8px] lg:text-[64px] text-[#0F172A] text-left leading-tight">
            {pkg.text}
          </h2>
          {/* <p className="text-gray-500 mt-3 text-md">{blog.desc}</p>
          <p className="text-md font-semibold mt-2 mb-3">{blog.date}</p> */}
        </section>
        {/* Hero Image */}
        <section className="w-full h-[264.0487060546875px] md:h-[393px] lg:h-[877px] md:px-8 lg:px-12 flex justify-center overflow-hidden">
          <Image
            src={pkg.img}
            alt={pkg.alt_tab ||"Yacht image"}
            width={1200}
            height={100}
            quality={80}
            loading="lazy"
            className="w-full object-cover"
          />
        </section>
        <section className="w-full h-fit px-6 lg:px-12 flex justify-center overflow-hidden p-4">
          <div className="w-full h-[100px] md:h-[150] grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className={`overflow-hidden flex justify-center 
                ${i > 1 ? "hidden" : ""} 
                ${i <= 4 ? "md:flex" : "md:hidden"}`}>
                <Image
                  src={`/assets/package${i + 1}.jpg`}
                  alt={`Yacht image ${i + 1}`}
                  width={200}
                  height={100}
                  quality={80}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

        </section>
        {/* Content Section */}
        <section className="w-[100%] grid md:flex  gap-10 text-[#0F172A] px-8 lg:px-12 py-6 lg:py-16">
          {/* Main Content */}
          <div className="w-full md:w-3/5">
            {/* <h2 className="text-4xl mb-2 font-[Absans]">Introduction</h2> */}
            <p className="!font-[Geist] text-[16px] lg:text-[24px]">
             {pkg.subtext}
            </p>
          </div>
          {/* Sidebar */}
          <div className="w-full md:w-2/5 sticky top-20 border-1 border-[#737373] p-4 h-fit justify-center">
            <p className="text-[13.35px] lg:text-[24px] mb-4 flex justify-between">
              Porem ipsum
              <span className="!font-[CalSans]">Porem ipsum</span>
            </p>
            <hr className="border-t-2 border-gray-300 my-4" />
            <p className="text-[13.35px] lg:text-[24px] mb-4 flex justify-between">
              Porem ipsum
              <span className="!font-[CalSans]">Porem ipsum</span>
            </p>
            <hr className="border-t-2 border-gray-300 my-4" />

            <div className="flex items-center gap-2 md:gap-3 h-full justify-center">
              <div className="flex flex-col items-center text-xs">
                <Image
                  src="/assets/people.svg"
                  alt="People"
                  width={26}
                  quality={80}
                  height={26}
                  loading="lazy"
                />
                <span className="text-[14.2px] md:text-[10px] lg:text-[22px] mt-1 text-black">Upto 8</span>
              </div>{" "}
              <span
                style={{
                  display: "inline-block",
                  width: "1px",
                  height: "40px",
                  backgroundColor: "black",
                }}
              ></span>
              <div className="flex flex-col items-center text-xs">
                <Image
                  src="/assets/bath.svg"
                  alt="Bath"
                  width={26}
                  quality={80}
                  height={26}
                  loading="lazy"
                />
                <span className="text-[14.2px] md:text-[10px] lg:text-[22px] mt-1 text-black">4 Baths</span>
              </div>{" "}
              <span
                style={{
                  display: "inline-block",
                  width: "0.5px",
                  height: "40px",
                  backgroundColor: "black",
                }}
              ></span>
              <div className="flex flex-col items-center me-1 text-xs">
                <Image
                  src="/assets/bed.svg"
                  alt="Bed"
                  width={26}
                  quality={80}
                  height={26}
                  loading="lazy"
                />
                <span className="text-[14.2px] md:text-[10px] lg:text-[22px] mt-1 text-black">4 Beds</span>
              </div>
              <span
                style={{
                  display: "inline-block",
                  width: "0.5px",
                  height: "40px",
                  backgroundColor: "black",
                }}
              ></span>
              <div className="flex flex-col items-center me-1 text-xs">
                <Image
                  src="/assets/bed.svg"
                  alt="Bed"
                  width={26}
                  quality={80}
                  height={26}
                  loading="lazy"
                />
                <span className="text-[14.2px] md:text-[10px] lg:text-[22px] mt-1 text-black">4 Crew</span>
              </div>
            </div>
            <hr className="border-t-2 border-gray-300 my-4" />
            <div className="flex items-center gap-2 md:gap-3 h-full justify-center">
              <div className="flex flex-col items-center text-xs">
                <Image
                  src="/assets/people.svg"
                  alt="People"
                  width={26}
                  quality={80}
                  height={26}
                  loading="lazy"
                />
                <span className="text-[14.2px] md:text-[10px] lg:text-[22px] mt-1 text-black">Upto 8</span>
              </div>{" "}
              <span
                style={{
                  display: "inline-block",
                  width: "1px",
                  height: "40px",
                  backgroundColor: "black",
                }}
              ></span>
              <div className="flex flex-col items-center text-xs">
                <Image
                  src="/assets/bath.svg"
                  alt="Bath"
                  width={26}            
                  quality={80}
                  height={26}
                  loading="lazy"
                />
                <span className="text-[14.2px] md:text-[10px] lg:text-[22px] mt-1 text-black">4 Baths</span>
              </div>{" "}
              <span
                style={{
                  display: "inline-block",
                  width: "0.5px",
                  height: "40px",
                  backgroundColor: "black",
                }}
              ></span>
              <div className="flex flex-col items-center me-1 text-xs">
                <Image
                  src="/assets/bed.svg"
                  alt="Bed"
                  width={26}
                  quality={80}
                  height={26}
                  loading="lazy"
                />
                <span className="text-[14.2px] md:text-[10px] lg:text-[22px] mt-1 text-black">4 Beds</span>
              </div>
              <span
                style={{
                  display: "inline-block",
                  width: "0.5px",
                  height: "40px",
                  backgroundColor: "black",
                }}
              ></span>
              <div className="flex flex-col items-center me-1 text-xs">
                <Image
                  src="/assets/bed.svg"
                  alt="Bed"
                  width={26}
                  quality={80}
                  height={26}
                  loading="lazy"
                />
                <span className="text-[14.2px] md:text-[10px] lg:text-[22px] mt-1 text-black">4 Crew</span>
              </div>
            </div>
            <Button
              className="rounded-none text-white cursor-pointer transition w-full h-[40px] md:h-[55px] text-[13.35px] lg:text-[24px] mt-6"
              style={{
                backgroundColor: "#2530FF",
                // height: "",
                fontFamily: "Absans",
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              Book On
              <img src="/assets/whatsapp.svg" className="w-4 h-4" alt="image" />
            </Button>
          </div>
        </section>
        <Book />
      </main>
      <Footer />
    </>
  );
}
