"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="contact relative border-gray-200 w-[full] h-[820px] md:h-[645px] overflow-hidden"
      style={{
        backgroundImage: "url('/assets/footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="w-full pt-16 pb-60 md:pb-16">
        <div className="max-w-8xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 items-start mb-10">
            {/* Left Section */}
            <div className="grid md:flex justify-between w-full max-w-sm order-2 md:order-1">
              <div className="space-y-2">
                <p className="grid font-bold text-xl m-0">
                  ADDRESS
                </p>
                <p className="w-[260px] md:w-[250px] text-[18px] text-[#8D8D8D] font-[500] leading-[inherit]">
                  Office 210, Al Serkal Avenue, Al Quoz Industrial Area 1, Dubai, United Arab Emirates
                </p>
                <p className="grid font-bold text-xl m-0">
                  EMAIL
                </p>
                <p className="w-[260px] text-[18px] text-[#8D8D8D] font-[500] leading-[inherit]">
                  ABCDEFG@gmail.com
                </p>
                <p className="grid font-bold text-xl m-0">
                  PHONE
                </p>
                <p className="w-[260px] text-[18px] text-[#8D8D8D] font-[500] leading-[inherit]">
                  +971 4 123 4567
                  <br></br>
                  +971 4 122 4524
                </p>
                {/* Social Icons */}
                <div className="hidden md:flex gap-3 pt-4">
                  <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/assets/dribbble.svg"
                      alt="Dribbble"
                      width={28}
                      priority height={28}
                    />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/assets/linkedin.svg"
                      alt="LinkedIn"
                      width={28}
                      priority height={28}
                    />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/assets/instagram.svg"
                      alt="Instagram"
                      width={28}
                      priority height={28}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {/* <p className="font-bold text-xl">
                  WORK
                  <sup className="text-[12px] text-gray-400">(17)</sup>
                </p> */}
                <p className="font-bold text-xl">
                  ABOUT
                  {/* <sup className="text-[12px] text-gray-400">STUDIO</sup> */}
                </p>
                <p className="font-bold text-xl">
                  PACKAGES
                  {/* <sup className="text-[12px] text-gray-400"> SERVICES</sup> */}
                </p>
                {/* <p className="font-bold text-xl">
                  CLIENTS
                  <sup className="text-[12px] text-gray-400">CORE</sup>
                </p>*/}
                <p className="font-bold text-xl">
                  BLOG
                </p> 
                <p className="font-bold text-xl">
                  CONTACT
                </p>
                {/* Social Icons */}
                <div className="md:hidden flex gap-3 pt-4">
                  <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/assets/dribbble.svg"
                      alt="Dribbble"
                      width={28}
                      priority height={28}
                    />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/assets/linkedin.svg"
                      alt="LinkedIn"
                      width={28}
                      priority height={28}
                    />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/assets/instagram.svg"
                      alt="Instagram"
                      width={28}
                      priority height={28}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="flex flex-col items-end order-1 md:order-2 w-full justify-end">
              <Image
                src="/assets/icon2.svg"
                alt="Yacht Hub Dubai"
                width={300}
                height={100}
                priority className="object-contain !w-[225px]"
              />
              <p className="text-[8.45px] md:text-sm text-gray-500 mt-3">
                © 2025, Yacht Hub Dubai. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
