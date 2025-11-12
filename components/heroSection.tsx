"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Mouse } from "lucide-react";

export default function HeroSection() {
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [howMany, setHowMany] = useState("");
  const [yachtType, setYachtType] = useState("");


  return (
    <section className="relative w-full h-[101vh] pt-20 flex flex-col justify-around md:justify-between text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/hero-bg.mp4"
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" ></div>

      {/* ======= TOP LEFT HEADING ======= */}
      <div className="relative z-10 text-left pb-8 pt-8 md:pt-8 px-6 md:px-12 md:mt-30 lg:mt-8">
        <h1
          className="font-[Absans] grid text-center text-[33px] md:text-[66px] letterSpacing-[-6] md:text-left lineHeight-[2] "
        >
          <span className=""
            style={{fontFamily: "var(--font-awesome-serif)",}}
          >
            Experience Luxury on the
          </span>
          Dubai Marina Waters
        </h1>
      </div>

      {/* ======= BOOKING FORM ======= */}
      <div className="relative z-10 flex justify-center mt-4 px-12 md:mb-40 lg:mb-30 gap-4">
        <div
          className="grid md:flex items-center bg-white shadow-sm w-full lg:w-[849px] p-[26px] gap-[10px] md:justify-between">
          {/* Input Section */}
          <div className="grid md:flex lg:items-center md:justify-between border border-[#E5E7EB] w-full md:w-[560.058px] md:h-[80px]">
            {/* Where */}
            {/* <Popover>
              <PopoverTrigger asChild>
                <button
                  className="
                    md:flex-1
                    text-gray-700 text-left cursor-pointer
                    hover:bg-gray-50 transition
                    font-[Absans] font-normal
                    text-[13px] lg:text-[18.61px] leading-[100%]
                    h-13 md:h-[80px]
                    px-[20px]
                  "
                >
                  {where || "Where"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <Input
                  placeholder="Search location..."
                  value={where}
                  onChange={(e) => setWhere(e.target.value)}
                />
                <ul className="mt-2 text-sm space-y-1">
                  {["Dubai Marina", "Palm Jumeirah", "Bluewaters Island"].map((loc) => (
                    <li
                      key={loc}
                      onClick={() => setWhere(loc)}
                      className="p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover> */}

            {/* Divider */}
            {/* <span className="inline-block w-full md:w-px h-px md:h-[40px] bg-gray-400 self-center"></span> */}

            {/* When */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="
                    md:flex-1
                    text-gray-700 text-left cursor-pointer
                    hover:bg-gray-50 transition
                    font-[Absans] font-normal
                    text-[13px] lg:text-[18.61px] leading-[100%]
                    h-13 md:h-[80px]
                    px-[20px]
                  "
                >
                  {when || "When"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <Input
                  type="date"
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                />
              </PopoverContent>
            </Popover>

            {/* Divider */}
            <span className="inline-block w-full md:w-px h-px md:h-[40px] bg-gray-400 self-center"></span>

            {/* How Many */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="
                    md:flex-1
                    text-gray-700 text-left cursor-pointer
                    hover:bg-gray-50 transition
                    font-[Absans] font-normal
                    text-[13px] lg:text-[18.61px] leading-[100%]
                    h-13 md:h-[80px]
                    px-[20px]
                  "
                >
                  {howMany || "How Many"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <Input
                  type="number"
                  placeholder="Enter number of guests"
                  value={howMany}
                  onChange={(e) => setHowMany(e.target.value)}
                />
              </PopoverContent>
            </Popover>

            {/* Divider */}
            <span className="inline-block w-full md:w-px h-px md:h-[40px] bg-gray-400 self-center"></span>

            {/* Yacht Type */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="
                  flex-1
                  text-gray-700 text-left cursor-pointer
                  hover:bg-gray-50 transition
                  font-[Absans] font-normal
                  text-[12px] lg:text-[18.61px] leading-[100%]
                  h-13 md:h-[80px]
                  px-[13px]
                "
                >
                  {yachtType || "Yacht Type"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <ul className="text-sm space-y-1">
                  {["Luxury", "Sport", "Party", "Family"].map((type) => (
                    <li
                      key={type}
                      onClick={() => setYachtType(type)}
                      className="p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>


          {/* Blue Button */}
          <Button
            className="rounded-none text-white cursor-pointer transition w-full md:w-[205px] h-[47px] md:h-[80px] text-[18px] md:text-[14px]"
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
            Book your Dream Trip
          </Button>
        </div>
      </div>
      <div className="absolute bottom-2 inset-0 md:flex justify-center items-end float-animation hidden ">
        <Mouse width={50} height={50} />
      </div>

    </section>
  );
}
