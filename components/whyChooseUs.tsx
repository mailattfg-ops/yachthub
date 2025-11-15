"use client";

import Image from "next/image";
import { describe } from "node:test";

export default function WhyChooseUs() {
  const features = [
    { icon: "/assets/experiences.svg", title: "Wide Range of Yachts", subtitle: "From 40ft to 120ft luxury yachts" },
    { icon: "/assets/team.svg", title: "Professional Crew", subtitle: " Licensed captains and experienced staff" },
    { icon: "/assets/package.svg", title: "Flexible Packages", subtitle: "Hourly, half-day, and full-day yacht rental in Dubai" },
    { icon: "/assets/coins.svg", title: "Best Price Guarantee", subtitle: " Affordable luxury with transparent pricing" },
    { icon: "/assets/safety.svg", title: "Easy Yacht Booking Dubai", subtitle: "Quick online reservations and instant confirmation" },
  ];

  return (
    <section className="py-8 md:pb-12 text-center bg-white">
      <h2 className="font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-5 px-12 md:px-4">
        Why Should You Choose Us?
      </h2>

      <div className="grid lg:flex md:flex-wrap justify-center items-center items-start divide-y divide-x-0 lg:divide-y-0 lg:divide-x divide-gray-500 mb-10">
        {features.map((f, index) => (
          <div
            key={index}
            className="flex flex-col items-center mt-5 justify-center px-8 md:px-5 lg:px-8 w-full h-[-webkit-fill-available] md:w-fit text-center space-y-6  pb-6 lg:pb-0"
          >
            <Image
              src={f.icon}
              alt={f.title || "image"}
              width={36}
              height={36}
              priority className="mb-2"
            />
            <div className="flex flex-col gap-4 leading-tight w-[223px]">
              <span className="font-[CalSans] grid text-gray-900 text-[33.95px]">
                {f.title}
              </span>
              <span className="font-[Absans] text-gray-900 leading-[99%] text-[22px]">
                {f.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[19px] md:text-[26px] lg:text-[30px] font-thin tracking-[0%] px-6">Experience the freedom of the sea with the most trusted name in Yacht Rental Dubai — Yacht Hub Dubai.</p>
    </section>
  );
}
