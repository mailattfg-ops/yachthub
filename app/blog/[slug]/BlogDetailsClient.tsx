"use client";

import Image from "next/image";
import Navbar from "@/components/navbarDark";
import Newsletter from "@/components/newsLetter";
import Footer from "@/components/footer";
import MoreReads from "@/components/moreReads";
import Book from "@/components/book";
import { useEffect } from "react";

export default function BlogDetailsClient({ blog, allBlogs }: any) {
  if (!blog) return <p className="text-center py-20">Blog not found</p>;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("article section");
      const navLinks = document.querySelectorAll("aside ul li");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("text-blue-600", "font-semibold");
        const target = link.getAttribute("data-target");
        if (target === current) {
          link.classList.add("text-blue-600", "font-semibold");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center w-full">
        <section className="w-full bg-white pt-20 mt-12 flex flex-col items-center text-center px-4">
          <h2 className="!font-[CalSans] text-3xl md:text-5xl font-normal text-[#0F172A] max-w-3xl leading-tight">
            {blog.title}
          </h2>
          <p className="text-gray-500 mt-3 text-md">{blog.desc}</p>
          <p className="text-md font-semibold mt-2 mb-3">{blog.date}</p>
        </section>
        <section className="w-full h-[302px] md:h-[392.9px] lg:h-[877px] overflow-hidden py-4 px-12 items-base">
          <Image
            src={blog.img}
            alt={blog.alt_tab}
            width={1200}
            height={800}
            className="w-full"
            quality={80}
            priority
          />
        </section>
        <section className="w-full grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10 text-[#0F172A] px-8 lg:px-12 py-16">
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <h3 className="!font-[CalSans] text-2xl mb-4">Contents</h3>
              <ul className="space-y-2 text-md text-gray-500">
                <li className="cursor-pointer" data-target="intro">
                  Introduction
                </li>
                <li className="cursor-pointer" data-target="start">
                  Start with yacht size and layout
                </li>
                <li className="cursor-pointer" data-target="duration">
                  Duration matters more than many realize
                </li>
                <li className="cursor-pointer" data-target="services">
                  Services you can tailor
                </li>
              </ul>
            </div>
          </aside>
          <article className="space-y-18 leading-relaxed">
            <section id="intro" className="m-0 mb-8">
              <h2 className="text-4xl mb-2 font-[Absans]">Introduction</h2>
              <p className="text-gray-700">
                Affordable yacht hire in Dubai is possible when you focus on
                your precise needs and match the yacht size, duration, and
                services with it. The idea that every yacht is a superyacht is
                simply a misconception. Many families, couples, and small groups
                find mid-range options more viable as they offer comfort and
                privacy without exceeding their budget.
              </p>
            </section>

            <section id="start" className="m-0 mb-8">
              <h2 className="text-4xl mb-2 font-[Absans]">
                Start with yacht size and layout
              </h2>
              <p className="text-gray-700">
                The single biggest factor in affordability is the size of the
                yacht. Smaller vessels, often ranging between 50 and 65 feet,
                cost much less than larger yachts. For a couple or small family,
                this size is ideal as it offers indoor lounges, shaded decks,
                and enough space without unnecessary extras.
              </p>
              <p className="text-gray-700 mt-2">
                {" "}
                A yacht like the Elite Cruiser 50 Yacht represents a good entry
                point. It offers a sweet blend of comfort and practicality for
                shorter outings.{" "}
              </p>
            </section>

            <section id="duration" className="m-0 mb-8">
              <h2 className="text-4xl mb-2 font-[Absans]">
                Duration matters more than many realize
              </h2>
              <p className="text-gray-700">
                Another way to manage cost is by adjusting the duration of your
                trip. Shorter charters cost less, and many guests find two- or
                three-hour trips sufficient. Cruising around Dubai Marina, JBR,
                or Palm Jumeirah doesn’t always require a full day either.
              </p>
              <p className="text-gray-700 mt-2">
                {" "}
                Longer day trips or overnight stays add costs for fuel, crew,
                and catering. Unless you need extended travel, shorter trips are
                the best way to keep yacht hire within budget.{" "}
              </p>
            </section>

            <section id="services" className="m-0 mb-8">
              <h2 className="text-4xl mb-2 font-[Absans]">
                Services you can tailor
              </h2>
              <p className="text-gray-700">
                Affordability also comes down to services. Most charters let you
                customize what’s included. You can book a private chef for a BBQ
                or bring your own food on board. Opting out of extras helps keep
                costs low while still ensuring comfort and privacy.
              </p>
              <p className="text-gray-700 mt-2">
                {" "}
                The key is to decide which additions truly matter for you. Many
                first-time guests are surprised at how enjoyable even a basic
                yacht hire can be.{" "}
              </p>
            </section>
          </article>
        </section>
        <Newsletter />
        <MoreReads blogs={allBlogs} currentSlug={blog.slug} />

        <Book />
      </main>

      <Footer />
    </>
  );
}
