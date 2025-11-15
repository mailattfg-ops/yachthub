"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";

function book() {
  return (
    <>        
    <section className="relative w-full h-[650px] flex items-end justify-start text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/book.jpg"
        alt="Yacht CTA"
        fill
        className="object-cover object-bottom"
        quality={80}
        priority
      />

      {/* Text Content */}
      <div className="relative z-10 p-8 mb-2 w-full">
        <h2 className="!font-[CalSans] text-[40.7px] md:text-[71.22px] lg:text-[101.75px] mb-2 leading-tight">
          Book your next <br /> Yacht trip with us
        </h2>

        <p className="text-[15.26px] md:text-xl font-light mb-4 text-gray-200">
          Get the best yachts at the best prices anywhere in Dubai.
        </p>

        <button className="flex items-center gap-2 bg-[#2530FF] hover:bg-[#001FD1] text-white text-base font-semibold rounded-none px-12 py-3 transition-all duration-200">
          Book Now <MoveRight className="w-5 h-5" />
        </button>
      </div>
    </section>
    </>
  )
}

export default book