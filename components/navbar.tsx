"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }, // Use popup
  ];

  function openContactPopup() {
    window.dispatchEvent(new Event("open-contact"));
    console.log("clicked")
  }

  function sendWhatsAppMessage() {
    const phoneNumber = "919745004161";
    const message = "Hello there! I would like to book a yacht.";
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  }

  return (
    <>
      <nav
        className="absolute top-0 left-0 w-full z-50 font-absans flex items-center justify-between 
        px-2 lg:px-4 py-6 text-white bg-transparent"
      >
        {/* LEFT — Logo + Desktop Nav */}
        <div className="flex items-center">
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
            style={{ width: "2px", height: "40px", backgroundColor: "white" }}
          ></span>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex md:ml-2 items-center">
            {navLinks.map((link) =>
              link.href === "/contact" ? (
                <p
                  key={link.label}
                  onClick={openContactPopup}
                  className="font-[Absans] md:text-[16px] lg:text-[20px] font-normal md:px-1 lg:px-2 py-1 
                  hover:bg-white hover:text-[#00313F] cursor-pointer"
                >
                  {link.label}
                </p>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[Absans] md:text-[16px] lg:text-[20px] font-normal 
                  md:px-1 lg:px-2 py-1 hover:bg-white hover:text-[#00313F]"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#00313F] border-t border-white flex flex-col 
          items-center space-y-4 py-6 lg:hidden z-50">
            {navLinks.map((link) =>
              link.href === "/contact" ? (
                <p
                  key={link.label}
                  onClick={() => {
                    openContactPopup();
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

            {/* Mobile Brochure */}
            <Button className="md:hidden block bg-white text-black hover:bg-[#dbdbdb] 
              w-fit h-[45px] cursor-pointer rounded-none font-medium transition">
              Download Brochure
            </Button>
          </div>
        )}

        {/* RIGHT — WhatsApp + Brochure + Mobile Icon */}
        <div className="flex items-center md:space-x-4">
          <Button
            className="bg-[#02CE1A] hover:bg-[#03a41b] w-[119px] h-[30px] md:w-fit md:h-[45px] 
            rounded-none text-white flex items-center"
            onClick={sendWhatsAppMessage}
          >
            <img src="/assets/whatsapp.svg" className="w-[13px] h-[13px] md:w-5 md:h-5" />
            <span className="text-[9px] md:text-[13px]">Book on WhatsApp</span>
          </Button>

          <Button className="hidden md:block bg-white text-black hover:bg-[#dbdbdb] w-fit h-[45px] 
            cursor-pointer rounded-none font-medium transition">
            Download Brochure
          </Button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
    </>
  );
}
