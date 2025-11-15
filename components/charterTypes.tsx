"use client";

import Image from "next/image";
import localFont from "next/font/local";

export default function CharterTypes() {
  const types = [
    {
      title1: "Skippered",
      title2: "Charter",
      desc: "NO EXPERIENCE NECESSARY. HIRE A PROFESSIONAL CAPTAIN TO TAKE THE WHEEL. KICK BACK AND RELAX AS YOU CRUISE IN COMFORT WHILE OUR EXPERT CREW HANDLES IT.",
      tag: "For Everyone",
      image: "/assets/type1.jpg",
    },
    {
      title1: "Bareboat",
      title2: "Charter",

      desc: "THE ULTIMATE ADVENTURE: TAKING THE HELM OF YOUR OWN YACHT, CHARTING YOUR OWN COURSE, AND SAILING INTO THE HORIZON WITH TOTAL FREEDOM AND FLEXIBILITY.",
      tag: "For Adventurers",
      image: "/assets/type2.jpg",
    },
  ];

  return (
    <section className="py-8 md:py-6 text-center bg-[#002BFF] text-white">
      <h2 className="font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-5 px-4">
        Charter Types
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-[1400px] mx-auto px-6">
        {types.map((type, index) => (
          <div
            key={index}
            className="relative w-full h-[350px] md:lg-[481px] lg:h-[688px] max-w-[667px] mx-auto overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <Image
              src={type.image}
              alt="logo"
              fill
              priority 
              quality={80}
              className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            <span className="absolute top-6 right-6 text-sm bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-white font-sans">
              {type.tag}
            </span>
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 text-left">
              <h3
                className="!font-[CalSans] text-[31px] md:text-[43.13px] lg:text-[61px] font-normal grid  leading-[30px] md:leading-[50px] lg:leading-[55px]"
                style={{ fontFamily: "Cal Sans, sans-serif" }}
              >
                {type.title1}
              
                <span>{type.title2}</span>
              </h3>
              <p className="text-[9.47px] md:text-[9.47px] lg:text-[18.7px] text-white/90 max-w-[550px] font-normal">
                {type.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
