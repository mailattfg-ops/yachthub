"use client";

import Image from "next/image";
import { describe } from "node:test";
import { Button } from "./ui/button";

const yachts = [
  {
    text: "Luxury 50ft Yacht",
    subtext: "Perfect for 10–15 guests | Ideal for family gatherings or small celebrations",
    gradient: "linear-gradient(180deg, rgba(37, 48, 255, 0) 0%, #2530FF 75.81%)",
    image: "/assets/fleet1.jpg"
  },
  {
    text: "Majestic 80ft Yacht",
    subtext: "Spacious deck, premium interiors, and professional crew",
    gradient: "linear-gradient(180deg, rgba(37, 48, 255, 0) 0%, #2530FF 75.81%)",
    image: "/assets/fleet1.jpg"
  },
  {
    text: "Sunset Cruise Yacht",
    subtext: "Spacious deck, premium interiors, and professional crew",
    gradient: "linear-gradient(180deg, rgba(37, 48, 255, 0) 0%, #2530FF 75.81%)",
    image: "/assets/fleet1.jpg"
  },
  {
    text: "Coastal Expedition ",
    subtext: "Spacious deck, premium interiors, and professional crew",
    gradient: "linear-gradient(180deg, rgba(37, 48, 255, 0) 0%, #2530FF 75.81%)",
    image: "/assets/fleet1.jpg"
  },

];

export default function YachtRental() {

  return (
    <>
      <section className="py-8 md:pb-12 text-center bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 py-10 mx-auto px-8 md:px-4 lg:px-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="relative w-full border-1 border-[#D5D5D5] grid p-4 gap-4">
              <div className="w-full flex gap-4">
                {/* Yacht Image */}
                <Image
                  src="/assets/staff.png"
                  alt={"User Image"}
                  width={90}
                  height={90}
                  className="w-[90px] h-[90px] object-cover group-hover:scale-101 transition-transform duration-500 rounded-[100%]"
                />
                <div className="grid gap-0 items-center ">
                  <p className="font-semibold text-[29.53px] leading-[35.43px] tracking-[-1.18px] text-left">Leah Andrews</p>
                  <span className="font-normal text-[20.67px] leading-[35.43px] tracking-[-1.18px] text-[#808080] text-left">CEO Techsphere</span>
                </div>
              </div>
              <div>
                <p className="font-normal text-[23.62px] text-left leading-[29.53px] pb-6 tracking-normal">
                  "Whether you're a beginner or an expert,
                  DiveTo.AI provides excellent resources to
                  help you achieve your goals"
                </p>
              </div>
            </div>
          ))}
          <div key={4} className="relative w-full border-1 border-[#D5D5D5] grid p-4 gap-4 hidden md:block lg:hidden">
            <div className="w-full flex gap-4">
              {/* Yacht Image */}
              <Image
                src="/assets/staff.png"
                alt={"User Image"}
                width={90}
                height={90}
                className="w-[90px] h-[90px] object-cover group-hover:scale-101 transition-transform duration-500 rounded-[100%]"
              />
              <div className="grid gap-0 items-center ">
                <p className="font-semibold text-[29.53px] leading-[35.43px] tracking-[-1.18px] text-left">Leah Andrews</p>
                <span className="font-normal text-[20.67px] leading-[35.43px] tracking-[-1.18px] text-[#808080] text-left">CEO Techsphere</span>
              </div>
            </div>
            <div>
              <p className="font-normal text-[23.62px] text-left leading-[29.53px] py-6 tracking-normal">
                "Whether you're a beginner or an expert,
                DiveTo.AI provides excellent resources to
                help you achieve your goals"
              </p>
            </div>
          </div>
        </div>

        <h2 className="font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-5 px-12 md:px-4">
          Yacht Hub Dubai – Luxury Yacht Rental Dubai
        </h2>

        <div className="grid justify-center items-center items-start gap-6 mb-10 px-10 md:px-20">
          <p className="font-[CalSans] text-[20px] md:text-[26px] lg:text-[44px] tracking-[0%] leading-[103%] text-[#2530FF]">Experience the Best Yacht Rental Dubai Has to Offer</p>
          <p className="text-[14px] md:text-[19px] lg:text-[26px] tracking-[0%] text-[#616161]">Welcome to Yacht Hub Dubai, your trusted destination for luxury yacht rental in Dubai. Cruise through the turquoise waters of the Arabian Gulf, explore the stunning skyline of Dubai Marina, and enjoy unforgettable moments aboard our premium yachts.
            Whether it’s a romantic getaway, corporate event, birthday celebration, or sunset cruise — we make every voyage truly special.

          </p>
          <p className="text-[14px] md:text-[19px] lg:text-[26px] tracking-[0%] text-[#616161]">At Yacht Hub Dubai, we specialize in Yacht Rental Dubai, offering top-rated yachts, professional crew, and flexible booking options.
            Discover how easy it is to rent a yacht in Dubai and experience luxury like never before.
          </p>

        </div>
      </section>
      <section className="pb-8 md:pb-12 text-center bg-white">
        <h2 className="font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-5 px-12 md:px-4">
          Featured Yacht Rentals in Dubai
        </h2>

        <div className="grid justify-center items-center items-start gap-6 mb-10 px-8 lg:px-10">
          <p className="text-[14px] md:text-[19px] lg:text-[26px] tracking-[0%] text-[#616161]">Explore our most popular yachts available for Yacht Rental Dubai.
            Choose from sleek motor yachts, luxury catamarans, or party yachts — all designed to provide comfort and elegance on the sea.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 max-w-8xl mx-auto px-8 md:px-4 lg:px-10 pt-8">
            {yachts.map((yacht, index) => (
              <div key={index} className="relative w-[494px] h-[350px] md:h-[515px] overflow-hidden shadow-lg group w-full">
                {/* Yacht Image */}
                <Image
                  src={yacht.image || "/assets/package.jpg" || "/assets/package.JPG"}
                  alt={"image"}
                  width={900}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
                />
                {/* Overlay Gradient */}
                <div className=" bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 w-full text-left text-white" style={{ background: `${yacht.gradient}` }}>
                  <div className="w-full flex items-center justify-between w-full">
                    <div className="w-full grid items-center gap-2 md:gap-2 text-sm opacity-90  p-3">
                      <div className="w-full grid items-center">
                        <p className="text-[25px] md:text-[32px] lg:text-[40px] font-semibold">
                          {yacht.text}
                        </p>
                        <span className="text-[15px]">
                          {yacht.subtext}
                        </span>
                      </div>

                      {/* Icon Set (Text below Icon) */}

                      <Button
                        className="rounded-none font-[CalSans] text-white cursor-pointer transition w-full h-[40px] md:h-[55px] text-[15] md:text-[25px]"
                        style={{
                          backgroundColor: "#FFF",
                          color: "#000",
                          fontWeight: 400,
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          textAlign: "center",
                        }}
                        // onClick={() => router.push("/packages/details")}
                      >
                        View Details
                      </Button>
                    </div>

                    {/* Price Box (tight fit, no padding) */}

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <section className="pb-8 md:pb-12 text-center bg-white">
        <h2 className="font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-8 px-12 md:px-4">
          How to Rent a Yacht in Dubai
        </h2>

        <div className="grid justify-center items-center items-start gap-6 md:gap-11 mb-5 md:mb-6 px-10 md:px-20">
          <p className="font-[CalSans] text-[15px] md:text-[19px] lg:text-[32px] tracking-[0%] leading-[103%] text-[#616161]">
            <span className="text-[#2530FF]">1.&nbsp;Choose Your Yacht </span>– Browse our curated list of luxury yachts.
          </p>
          <p className="font-[CalSans] text-[15px] md:text-[19px] lg:text-[32px] tracking-[0%] leading-[103%] text-[#616161]">
            <span className="text-[#2530FF]">2.&nbsp;Select Time Slot </span>– Pick your preferred date and duration.
          </p>
          <p className="font-[CalSans] text-[15px] md:text-[19px] lg:text-[32px] tracking-[0%] leading-[103%] text-[#616161]">
            <span className="text-[#2530FF]">3.&nbsp;Confirm & Cruise </span>– Complete your yacht booking in Dubai and set sail! 
          </p>
          <p className="text-[14px] md:text-[19px] lg:text-[26px] tracking-[0%] text-[#616161]">
            Our Dubai private yacht rental team is available 24/7 to help you plan your trip, add catering, or arrange a photographer for your event.
          </p>

        </div>
      </section>
    </>
  );
}
