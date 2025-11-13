"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const yachts = [
  {
    name: "Azimut Grande 35",
    capacity: "Up to 8",
    baths: "2 baths",
    beds: "4 Beds",
    crew: "4 Crew",
    price: "AED 15,000/day",
    image: "/assets/fleet1.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Up to 9",
    baths: "3 baths",
    beds: "5 Beds",
    crew: "4 Crew",
    price: "AED 18,500/day",
    image: "/assets/fleet2.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Up to 12",
    baths: "4 baths",
    beds: "6 Beds",
    crew: "4 Crew",
    price: "AED 22,000/day",
    image: "/assets/fleet1.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Up to 9",
    baths: "2 baths",
    beds: "4 Beds",
    crew: "4 Crew",
    price: "AED 17,000/day",
    image: "/assets/fleet2.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Up to 10",
    baths: "3 baths",
    beds: "5 Beds",
    crew: "4 Crew",
    price: "AED 19,500/day",
    image: "/assets/fleet1.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Up to 14",
    baths: "5 baths",
    beds: "7 Beds",
    crew: "4 Crew",
    price: "AED 30,000/day",
    image: "/assets/fleet2.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Up to 8",
    baths: "2 baths",
    beds: "4 Beds",
    crew: "4 Crew",
    price: "AED 15,000/day",
    image: "/assets/fleet1.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Up to 9",
    baths: "3 baths",
    beds: "5 Beds",
    crew: "4 Crew",
    price: "AED 18,500/day",
    image: "/assets/fleet2.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Up to 12",
    baths: "4 baths",
    beds: "6 Beds",
    crew: "4 Crew",
    price: "AED 22,000/day",
    image: "/assets/fleet1.jpg",
  },
];

export default function FleetSection() {
  return (
    <section className="pt-10 pb-8 bg-white text-center">
      <h2 className="font-[Absans] text-[36px] md:text-[44px] lg:text-[64px] mb-5">
        Our Premium Fleet
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 max-w-8xl mx-auto px-8 md:px-4 lg:px-10">
        {yachts.map((yacht, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg group w-full">
            {/* Yacht Image */}
            <Image
              src={yacht.image}
              alt={yacht.name || "image"}
              width={900}
              height={500}
              className="w-full h-[300px] object-cover group-hover:scale-101 transition-transform duration-500"
            />
            <div className="absolute top-0 left-0 bg-[#000] text-white text-sm font-semibold h-[55px] flex items-center justify-center px-2 mb-[-20]">
              {yacht.price}
            </div>
            {/* Overlay Gradient */}
            <div className=" bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Bottom Info */}
            <div className="w-full text-left text-white">
              <div className="w-full flex items-center justify-between w-full">
                <div className="w-full grid items-center gap-2 md:gap-2 text-sm opacity-90  p-3">
                  <div className="w-full md:w-1/2 flex items-center">
                    <p className="text-[25px] md:text-[25px] lg:text-[40px] font-semibold text-black">
                      {yacht.name}
                    </p>
                  </div>

                  {/* Icon Set (Text below Icon) */}
                  <div className="flex items-center gap-2 md:gap-3 h-full">
                    <div className="flex flex-col items-center text-xs">
                      <Image
                        src="/assets/people.svg"
                        alt="People"
                        width={16}
                        height={16}
                      />
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1 text-black">{yacht.capacity}</span>
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
                        width={16}
                        height={16}
                      />
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1 text-black">{yacht.baths}</span>
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
                        width={16}
                        height={16}
                      />
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1 text-black">{yacht.beds}</span>
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
                        width={16}
                        height={16}
                      />
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1 text-black">{yacht.crew}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="rounded-none text-white cursor-pointer transition flex-1 h-[40px] md:h-[55px] text-[18px] md:text-[25px]"
                      style={{
                        backgroundColor: "#1597CC",
                        // height: "",
                        fontFamily: "Absans",
                        fontWeight: 400,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        textAlign: "center",
                      }}
                    >
                      Book On
                      <img src="/assets/telegram.svg" className="w-6 h-6" alt="image" />
                    </Button>
                    <Button
                      className="rounded-none text-white cursor-pointer transition flex-1 h-[40px] md:h-[55px] text-[18px] md:text-[25px]"
                      style={{
                        backgroundColor: "#373737",
                        // height: "",
                        fontFamily: "Absans",
                        fontWeight: 400,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        textAlign: "center",
                      }}
                    >
                      Book On
                      <img src="/assets/mail.svg" className="w-6 h-6" alt="image" />
                    </Button>
                  </div>
                  <Button
                    className="rounded-none text-white cursor-pointer transition w-full h-[40px] md:h-[55px] text-[18px] md:text-[25px]"
                    style={{
                      backgroundColor: "#02CE1A",
                      // height: "",
                      fontFamily: "Absans",
                      fontWeight: 400,
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                    }}
                  >
                    Book On
                    <img src="/assets/whatsapp.svg" className="w-6 h-6" alt="image" />
                  </Button>

                </div>

                {/* Price Box (tight fit, no padding) */}

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="w-full flex justify-center">
        <button className="font-[Absans] hidden md:block mt-8 px-8 py-3 border border-[#A3A3A3] text-[#000] hover:bg-black hover:text-white transition-all">
          View Full Fleet
        </button>
      </div>
    </section>
  );
}
