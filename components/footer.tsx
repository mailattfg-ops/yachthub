"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
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
                  <p className="grid font-bold text-xl m-0">ADDRESS</p>
                  <p className="w-[260px] md:w-[250px] text-[18px] text-[#8D8D8D] font-[500] leading-[inherit]">
                    Office 210, Al Serkal Avenue, Al Quoz Industrial Area 1, Dubai,
                    United Arab Emirates
                  </p>

                  <p className="grid font-bold text-xl m-0">EMAIL</p>
                  <p className="w-[260px] text-[18px] text-[#8D8D8D] font-[500] leading-[inherit]">
                    ABCDEFG@gmail.com
                  </p>

                  <p className="grid font-bold text-xl m-0">PHONE</p>
                  <p className="w-[260px] text-[18px] text-[#8D8D8D] font-[500] leading-[inherit]">
                    +971 4 123 4567
                    <br />
                    +971 4 122 4524
                  </p>

                  {/* Social Icons */}
                  <div className="hidden md:flex gap-3 pt-4">
                    <Image
                      src="/assets/dribbble.svg"
                      alt="Dribbble"
                      width={28}
                      height={28}
                      loading="lazy"
                      quality={80}
                      className="cursor-pointer"
                    />
                    <Image
                      src="/assets/linkedin.svg"
                      alt="LinkedIn"
                      width={28}
                      height={28}
                      loading="lazy"
                      quality={80}
                      className="cursor-pointer"
                    />
                    <Image
                      src="/assets/instagram.svg"
                      alt="Instagram"
                      width={28}
                      height={28}
                      loading="lazy"
                      quality={80}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                {/* Right Nav Links */}
                <div className="space-y-2">
                  <Link href="/about">
                    <p className="font-bold text-xl">ABOUT</p>
                  </Link>

                  <Link href="/packages">
                    <p className="font-bold text-xl">PACKAGES</p>
                  </Link>

                  <Link href="/blog">
                    <p className="font-bold text-xl">BLOG</p>
                  </Link>

                  {/* CONTACT → Opens Popup */}
                  <p
                    className="font-bold text-xl cursor-pointer"
                    onClick={() => setContactOpen(true)}
                  >
                    CONTACT
                  </p>

                  {/* Social Icons Mobile */}
                  <div className="md:hidden flex gap-3 pt-4">
                    <Image
                      src="/assets/dribbble.svg"
                      alt="Dribbble"
                      width={28}
                      height={28}
                      loading="lazy"
                      quality={80}
                      className="cursor-pointer"
                    />
                    <Image
                      src="/assets/linkedin.svg"
                      alt="LinkedIn"
                      width={28}
                      height={28}
                      loading="lazy"
                      quality={80}
                      className="cursor-pointer"
                    />
                    <Image
                      src="/assets/instagram.svg"
                      alt="Instagram"
                      width={28}
                      height={28}
                      loading="lazy"
                      quality={80}
                      className="cursor-pointer"
                    />
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
                  loading="lazy"
                  quality={80}
                  className="object-contain !w-[225px]"
                />
                <p className="text-[8.45px] md:text-sm text-gray-500 mt-3">
                  © 2025, Yacht Hub Dubai. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* CONTACT POPUP */}
      {contactOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="bg-[#00313F] text-white w-[90%] max-w-lg p-6 rounded-xl shadow-xl relative">
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-3 right-3 text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md bg-white/10 border border-white/20"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-white/10 border border-white/20"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 rounded-md bg-white/10 border border-white/20"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="p-3 rounded-md bg-white/10 border border-white/20"
              ></textarea>

              <button className="bg-white text-[#00313F] hover:bg-gray-100 font-medium p-3 rounded-md w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
