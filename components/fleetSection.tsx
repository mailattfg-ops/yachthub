"use client";

import Image from "next/image";

const yachts = [
  {
    name: "Azimut Grande 35",
    capacity: "Upto8",
    baths: "2baths",
    beds: "4Beds",
    price: "AED 15,000/day",
    image: "/assets/fleet1.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Upto9",
    baths: "3baths",
    beds: "5Beds",
    price: "AED 18,500/day",
    image: "/assets/fleet2.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Upto12",
    baths: "4baths",
    beds: "6Beds",
    price: "AED 22,000/day",
    image: "/assets/fleet1.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Upto9",
    baths: "2baths",
    beds: "4Beds",
    price: "AED 17,000/day",
    image: "/assets/fleet2.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Upto10",
    baths: "3baths",
    beds: "5Beds",
    price: "AED 19,500/day",
    image: "/assets/fleet1.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Upto14",
    baths: "5baths",
    beds: "7Beds",
    price: "AED 30,000/day",
    image: "/assets/fleet2.jpg",
  },
];

export default function FleetSection() {
  return (
    <section className="pt-10 pb-8 bg-white text-center">
      <h2 className="text-[36px] md:text-[44px] lg:text-[64px] mb-5">
        Our Premium Fleet
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 max-w-8xl mx-auto px-4 md:px-4 lg:px-10">
        {yachts.map((yacht, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg group w-full aspect-[319.07/158.74]  lg:aspect-[442/158.74]">
            {/* Yacht Image */}
            <Image
              src={yacht.image}
              alt={yacht.name}
              width={900}
              height={500}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 w-full text-left text-white">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 md:gap-2 text-sm opacity-90  pl-3 py-3">
                  <div className="w-[90px] md:w-[108px] flex items-center">
                    <p className="text-[17px] md:text-[18px] font-semibold">
                      {yacht.name}
                    </p>

                    <span
                      style={{
                        display: "inline-block",
                        width: "1px",
                        height: "40px",
                        backgroundColor: "white",
                      }}
                    ></span>
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
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1">{yacht.capacity}</span>
                    </div>{" "}
                    <span
                      style={{
                        display: "inline-block",
                        width: "1px",
                        height: "40px",
                        backgroundColor: "white",
                      }}
                    ></span>
                    <div className="flex flex-col items-center text-xs">
                      <Image
                        src="/assets/bath.svg"
                        alt="Bath"
                        width={16}
                        height={16}
                      />
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1">{yacht.baths}</span>
                    </div>{" "}
                    <span
                      style={{
                        display: "inline-block",
                        width: "1px",
                        height: "40px",
                        backgroundColor: "white",
                      }}
                    ></span>
                    <div className="flex flex-col items-center me-1 text-xs">
                      <Image
                        src="/assets/bed.svg"
                        alt="Bed"
                        width={16}
                        height={16}
                      />
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1">{yacht.beds}</span>
                    </div>
                  </div>
                </div>

                {/* Price Box (tight fit, no padding) */}
                <div className="bg-[#002BFF] text-white text-sm text-left font-semibold px-2 py-[8px] mb-[-20]">
                  {yacht.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="w-full flex justify-center">
        <button className="hidden md:block mt-8 px-8 py-3 border border-[#A3A3A3] text-[#A3A3A3] hover:bg-black hover:text-white transition-all">
          View Full Fleet
        </button>
      </div>
    </section>
  );
}
