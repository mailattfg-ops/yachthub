"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  function sendWhatsAppMessage() {
    const phoneNumber = "919745004161";
    const message = "Hello there! I would like to book a yacht.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  }

  return (
    <>
      <nav
        className="absolute top-0 left-0 w-full z-50 font-absans flex items-center justify-between 
      px-2 lg:px-4 py-6 text-white bg-transparent"
      >
        {/* Left section: Logo + Nav Links */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center w-[153px] md:w-[151px] lg:w-[189px]">
            <Link href="/">
              <Image
                src="/assets/icon1.svg"
                alt="Logo"
                width={186}
                height={48}
                priority
                quality={80}
              />
            </Link>
          </div>
          <span
            className="hidden lg:inline-block"
            style={{
              width: "2px",
              height: "40px",
              backgroundColor: "white",
            }}
          ></span>

          {/* Nav Links */}
          <div className="hidden lg:flex md:ml-2 items-center">
            {navLinks.map((link) =>
              link.href === "/contact" ? (
                <p
                  key={link.label}
                  onClick={() => setContactOpen(true)}
                  className="font-[Absans] md:font-[16px] lg:font-[20px] font-normal md:px-1 lg:px-2 py-1 hover:bg-white hover:text-[#00313F] cursor-pointer"
                >
                  {link.label}
                </p>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[Absans] md:font-[16px] lg:font-[20px] font-normal md:px-1 lg:px-2 py-1 hover:bg-white hover:text-[#00313F]"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#00313F] border-t border-white flex flex-col items-center space-y-4 py-6 lg:hidden z-50">
            {navLinks.map((link) =>
              link.href === "/contact" ? (
                <p
                  key={link.label}
                  onClick={() => {
                    setContactOpen(true);
                    setMenuOpen(false);
                  }}
                  className="font-[Absans] font-normal text-lg hover:text-[#00B8D9] transition cursor-pointer"
                >
                  {link.label}
                </p>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-[Absans] font-normal text-lg hover:text-[#00B8D9] transition"
                >
                  {link.label}
                </Link>
              )
            )}

            <Button className="md:hidden block bg-white text-black hover:bg-[#dbdbdb] w-fit h-[45px] cursor-pointer rounded-none font-medium transition mr-0">
              Download Brochure
            </Button>
          </div>
        )}

        {/* Right section: Buttons */}
        <div className="flex items-center md:space-x-4">
          {/* WhatsApp Button */}
          <Button
            className="bg-[#02CE1A] hover:bg-[#03a41b] w-[119px] h-[30px] md:w-fit md:h-[45px] 
          rounded-none text-white cursor-pointer flex items-center md:mr-0 md:mr-4"
            onClick={() => sendWhatsAppMessage()}
          >
            <img
              src="/assets/whatsapp.svg"
              className="w-[13] h-[13] md:w-5 md:h-5"
              alt="image"
            />
            <span className="text-[9px] md:text-[13px] lg:text-[13px] ">
              Book on WhatsApp
            </span>
          </Button>

          {/* Get Started Button */}
          <Button className="hidden md:block bg-white text-black hover:bg-[#dbdbdb] w-fit h-[45px] cursor-pointer  rounded-none font-medium transition mr-0">
            Download Brochure
          </Button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
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
                className="p-3 rounded-md bg-white/10 border border-white/20 focus:border-white outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-white/10 border border-white/20 focus:border-white outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 rounded-md bg-white/10 border border-white/20 focus:border-white outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="p-3 rounded-md bg-white/10 border border-white/20 focus:border-white outline-none"
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
