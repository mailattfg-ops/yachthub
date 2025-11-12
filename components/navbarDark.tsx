"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 font-absans flex items-center justify-between 
              px-2 lg:px-4 py-6 text-white bg-transparent">
      {/* Left section: Logo + Nav Links */}
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex items-center w-[153px] md:w-[151px] lg:w-[189px]">
          <Link href='/'>
            <Image src="/assets/Group-dark.svg" alt="Logo" width={186} height={48} />
          </Link>
        </div>
        <span className="hidden lg:inline-block"
          style={{
            width: "2px",
            height: "40px",
            backgroundColor: "black",
          }}
        ></span>

        {/* Nav Links */}
        <div className="hidden lg:flex md:ml-2  items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[Absans] md:font-[16px] lg:font-[20px] font-normal md:px-1 lg:px-2 py-1 text-[#000] hover:bg-white hover:text-[#00313F] "
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#00313F] border-t border-white flex flex-col items-center space-y-4 py-6 lg:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[Absans] font-normal text-lg hover:text-[#00B8D9] transition"
            >
              {link.label}
            </Link>
          ))}
          <Button className=" md:hidden block bg-white border border-[#000] text-black hover:bg-[#dbdbdb] w-fit h-[45px] cursor-pointer  rounded-none font-medium transition mr-0">
            Download Brochure
          </Button>
        </div>
      )}

      {/* Right section: Buttons */}
      <div className="flex items-center md:space-x-4">
        {/* WhatsApp Button */}
        <Button className="bg-[#02CE1A] hover:bg-[#03a41b] w-[119px] h-[30px] md:w-fit md:h-[45px] 
                  rounded-none text-white cursor-pointer flex items-center md:mr-0 md:mr-4">
          <img src="/assets/whatsapp.svg" className="w-[13] h-[13] md:w-5 md:h-5" alt="image" />
          <span className="text-[9px] md:text-[13px] lg:text-[13px] ">Book on WhatsApp</span>
        </Button>

        {/* Get Started Button */}
        <Button className="hidden md:block bg-white text-black border border-[#000] hover:bg-[#dbdbdb] w-fit h-[45px] cursor-pointer  rounded-none font-medium transition mr-0">
          Download Brochure
        </Button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-md focus:outline-none"
        >
          {menuOpen ? <X size={28} color="black" /> : <Menu size={28} color="black" />}
        </button>
      </div>
      {/* Hamburger Icon (Mobile) */}

    </nav>

  );
}
