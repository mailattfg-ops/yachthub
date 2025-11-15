"use client";

import Image from "next/image";

export default function NewsLetter() {
  return (
    <section className="w-full border-b border-gray-200 px-6 pb-8 md:px-18 lg:px-22 bg-white">
      <div className="w-full max-w-[1324px] grid md:grid-cols-[70%_30%] lg:gap-10 items-start">
        
        {/* ===== Newsletter Section ===== */}
        <div>
          <h3 className="w-full font-[Absans] text-center md:text-left text-[28.8px] md:text-[28.8px] lg:text-[48px] mb-5">
            Subscribe to our newsletter
          </h3>

          <div className="flex items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="enter email"
              className="flex-1 md:max-w-[421] border border-gray-300 px-4 md:px-4 lg:px-6 py-3 text-black text-md focus:outline-none"
            />
            <button className="bg-[#2530FF] text-white text-md font-medium cursor-pointer px-4 md:px-8 py-3 hover:bg-[#001FD1] transition">
              subscribe
            </button>
          </div>
        </div>

        {/* ===== Follow Us Section ===== */}
        <div className="lg:border-l border-gray-200 md:pl-8">
          <h3 className="font-[Absans] md:text-left text-[28.8px] md:text-[28.8px] lg:text-[48px] mt-6 md:mt-0 mb-3">Follow us</h3>
          <p className="text-lg  mb-5 leading-relaxed">
            Follow us on social media to get latest informations
          </p>

          <div className="flex gap-2">
            <div className="w-9 h-9 flex items-center justify-center ">
              <Image
                src="/assets/dribbble.svg"
                alt="Dribbble"
                width={30}
                priority height={30}
              />
            </div>
            <div className="w-9 h-9 flex items-center justify-center ">
              <Image
                src="/assets/instagram.svg"
                alt="Instagram"
                width={30}
                priority height={30}
              />
            </div>
            <div className="w-9 h-9 flex items-center justify-center">
              <Image
                src="/assets/linkedin.svg"
                alt="LinkedIn"
                width={30}
                priority height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
