"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { image } from "motion/react-client";
import { useRouter } from "next/navigation";

const yachts = [
  {
    text: "Coastal Expedition ",
    subtext: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    gradient: "linear-gradient(180deg, rgba(37, 48, 255, 0) 0%, #2530FF 75.81%)",
    price: "15,000/day",
    image: "/assets/package1.jpg"
  },
  {
    text: "Coastal Expedition ",
    subtext: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    gradient: "linear-gradient(180deg, rgba(159, 59, 57, 0) 0%, #9F3B39 75.81%)",
    price: "15,000/day",
    image: "/assets/package2.jpg"
  },
  {
    text: "Coastal Expedition ",
    subtext: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    gradient: "linear-gradient(180deg, rgba(4, 49, 42, 0) 0%, #04312A 75.81%)",
    price: "15,000/day",
    image: "/assets/package5.jpg"
  },
  {
    text: "Coastal Expedition ",
    subtext: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    gradient: "linear-gradient(180deg, rgba(37, 48, 255, 0) 0%, #A825FF 75.81%)",
    price: "15,000/day",
    image: "/assets/package4.jpg"
  },
  {
    text: "Coastal Expedition ",
    subtext: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    gradient: "linear-gradient(180deg, rgba(159, 59, 57, 0) 0%, #F17508 75.81%)",
    price: "15,000/day",
    image: "/assets/package3.JPG"
  },
  {
    text: "Coastal Expedition ",
    subtext: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    gradient: "linear-gradient(180deg, rgba(28, 136, 183, 0) 0%, #1C88B7 75.81%)",
    price: "15,000/day",
    image: "/assets/package6.jpg"
  },
  
];

export default function PackageSection() {
  const router = useRouter();
  return (
    <section className="w-full pt-10 pb-8 bg-white text-center">
      {/* <h2 className="font-[Absans] text-[36px] md:text-[44px] lg:text-[64px] mb-5">
        Our Premium Fleet
      </h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 max-w-8xl mx-auto px-8 md:px-4 lg:px-10">
        {yachts.map((yacht, index) => (
          <div key={index} className="relative w-[494px] h-[400px] md:h-[615px] overflow-hidden shadow-lg group w-full">
            {/* Yacht Image */}
            <Image
              src={ yacht.image || "/assets/package.jpg" || "/assets/package.JPG"}
              alt={"image"}
              width={900}
              height={500}
              className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
            />
            <div className="absolute top-0 left-0 bg-[#000000] text-white text-sm font-semibold h-[55px] grid items-center justify-center px-2 mb-[-20]">
              <span className="text-[11.39px] text-[#EBEBFF] text-left h-fit">AED</span>
              {yacht.price}
            </div>
            {/* Overlay Gradient */}
            <div className=" bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 w-full text-left text-white" style={{background: `${yacht.gradient}`}}>
              <div className="w-full flex items-center justify-between w-full">
                <div className="w-full grid items-center gap-2 md:gap-2 text-sm opacity-90  p-3">
                  <div className="w-full md:w-1/2 grid items-center">
                    <p className="text-[25px] md:text-[32px] lg:text-[45px] font-semibold">
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
                    onClick={() => router.push("/packages/details")}
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

    </section>
  );
}
