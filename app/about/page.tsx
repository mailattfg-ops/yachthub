"use client";

import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbarDark";
import Book from "@/components/book";


export default function BlogPage() {

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full">
        <Navbar />
        {/* ====== HERO SECTION ====== */}
        <section className="w-full bg-white pt-20 pb-4 md:pb-8 mt-12 grid lg:flex  px-6 md:px-12">
          <h2 className="w-full lg:w-1/2 font-[Absans] text-3xl md:text-[64px] font-normal text-[#0F172A] leading-tight">
            Who we are and what we are building
          </h2>

          <p className="w-full lg:w-1/2 text-gray-500 mt-5 text-base md:text-lg leading-relaxed">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
            Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
          </p>

          {/* <p className="text-md font-semibold mt-2 mb-3">March 21, 2025</p> */}
        </section>

        {/* Hero Image */}
        <section className="w-full h-[302px] md:h-[392.9835510253906px] lg:h-[450px] px-6 md:px-12 max-w-8xl overflow-hidden flex items-center">
          <Image
            src={"/assets/blog-card.jpg"}
            alt="Yacht image"
            width={1200}
            height={100}
            priority
            quality={80}
            className="w-full object-cover"
          />
        </section>

        {/* ====== FEATURED BLOG ====== */}
        <section className="w-full pt-8 px-6 md:px-12 md:pt-18 ">
          {/* Blog Card */}
          {/* <Link href={`/blog/details?slug=affordable-yacht`}> */}
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="py-4 pl-4 pr-4 lg:pl-0 lg:pr-4 md:-8 flex flex-col justify-between lg:border-r-1 border-black">
              <div className="pr-4">
                <p className="text-[22px] md:text-[25px] lg:text-[36px] text-[#2530FF] font-medium mb-2">
                  Vision
                </p>
                <h2 className="text-[20px] md:text-[22px] lg:text-[28px] font-normal leading-[103%] tracking-[0%] mb-3">
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </h2>
              </div>
            </div>
            {/* <div className="w-px h-16 bg-gray-300 mb-6"></div> */}
            {/* Right Image */}
            <div className="py-4 px-4 lg:pl-4 md:-8 flex flex-col justify-between">
              <div className="lg:pl-4">
                <p className="text-[22px] md:text-[25px] lg:text-[36px] text-[#2530FF] font-medium mb-2">
                  Mission
                </p>
                <h2 className="text-[20px] md:text-[22px] lg:text-[28px] font-normal leading-[103%] tracking-[0%] mb-3">
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </h2>
              </div>
            </div>

          </div >

          {/* </Link> */}

        </section>
        {/* Team */}
        <section className="w-full py-8 px-6 md:px-4 md:py-10 ">
          <h2 className="font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-5 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
            {Array.from({ length: 6 }).map((blog, i) => (
              // <Link key={i} href={`/blog/details?slug=${i}`}>
              <div className="relative flex h-[300px] lg:h-[545px] xl:h-[545px]
                  hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
                {/* Left Image */}
                <div className="relative w-full">
                  <Image
                    src={"/assets/staff.png"}
                    alt={"logo"}
                    fill
                    priority 
                    quality={80}
                    className="object-fill"
                  />
                </div>

                {/* Right Text */}
                <div className="absolute bottom-0 pl-6 py-6 flex mt-5 flex-col justify-between ">
                  <p className="!font-[CalSans] text-[16.76px] lg:text-[61.61px] xl:text-[61.61px] font-normal leading-[18px] lg:leading-[38px] mb-2 text-white">
                    {/* John Doe */}
                  </p>
                  <p className="text-[18.7px] font-normal mt-4 text-white">
                    {/* Staff */}
                  </p>
                </div>
              </div>
              // </Link>
            ))}
          </div>
        </section>

        {/* ====== Book ====== */}
        <Book />
      </main>
      <Footer />
    </>
  );
}
