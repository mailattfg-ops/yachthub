"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbarDark";
import Newsletter from "@/components/newsLetter";
import Footer from "@/components/footer";
import Book from "@/components/book";
import { useEffect, useState } from "react";
import { fetchBlogBySlug } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import MoreReads from "@/components/moreReads";

interface BlogPost {
  img?: string;
  desc: string;
  title: string;
  date: string;
  slug: string;

}

export default function BlogDetailsClient() {
  const [post, setPost] = useState<BlogPost[] | null>(null);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const slug = searchParams?.get("slug") ?? "";

  // useEffect(() => {
  //   const s = searchParams?.get("slug") || "";
  //   setSlug(s);
  // }, [searchParams]);

  useEffect(() => {

    console.log("sj");

    const handleScroll = () => {
      const sections = document.querySelectorAll("article section");
      const navLinks = document.querySelectorAll("aside ul li");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id; // Get the section's id
        }
      });
      console.log(sections);
      console.log(navLinks);

      navLinks.forEach((link) => {
        link.classList.remove("text-blue-600", "font-semibold");
        const target = link.getAttribute("data-target");
        if (target === current) {
          link.classList.add("text-blue-600", "font-semibold");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount to set initial active state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function loadPost() {
      try {
        const data = await fetchBlogBySlug(slug);
        console.log(data);

        setPost(data);
      } catch (err) {
        console.error("Error loading post:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);
  // if (loading) return <Loader />;
  console.log("post", post);

  return (
    <>
      <main className="flex flex-col items-center w-full">
        <Navbar />
        {/* Header Section */}
        {/* <p className="text-md text-[#3B5BFF] font-medium mb-2">Explore</p> */}
        {post && (() => {
          const blog = post.find((b: any) => b.slug === slug);
          if (!blog) return <p>Blog not found</p>;

          return (
            <>
              <section className="w-full bg-white pt-20 mt-12 flex flex-col items-center text-center px-4">

                <h2 className="!font-[CalSans] text-3xl md:text-5xl font-normal text-[#0F172A] max-w-3xl leading-tight">
                  {blog.title}
                </h2>
                <p className="text-gray-500 mt-3 text-md">{blog.desc}</p>
                <p className="text-md font-semibold mt-2 mb-3">{blog.date}</p>
              </section>
              {/* Hero Image */}
              <section className="w-full h-[302px] md:h-[392.9835510253906px] lg:h-[877px]  max-w-8xl overflow-hidden">
                <Image
                  src={blog.img || "/assets/blog-card.jpg"}
                  alt="Yacht image"
                  width={1200}
                  height={100}
                  className="w-full object-cover"
                />
              </section>

            </>
          );
        })()}

        {/* Content Section */}
        <section className="w-[100%] grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10 text-[#0F172A] px-8 lg:px-12 py-16">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <h3 className="!font-[CalSans] text-2xl mb-4">Contents</h3>
              <ul className="space-y-2 text-md text-gray-500">
                <li className="cursor-pointer" data-target="intro">Introduction</li>
                <li className="cursor-pointer" data-target="start">Start with yacht size and layout</li>
                <li className="cursor-pointer" data-target="duration">Duration matters more than many realize</li>
                <li className="cursor-pointer" data-target="services">Services you can tailor</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <article id="scrollDiv" className="space-y-18 space-x-30 leading-relaxed">
            <section className="m-0 mb-8" id="intro">
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

            <section className="m-0 mb-8" id="start">
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
                A yacht like the Elite Cruiser 50 Yacht represents a good entry
                point. It offers a sweet blend of comfort and practicality for
                shorter outings.
              </p>
            </section>

            <section className="m-0 mb-8" id="duration">
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
                Longer day trips or overnight stays add costs for fuel, crew,
                and catering. Unless you need extended travel, shorter trips are
                the best way to keep yacht hire within budget.
              </p>
            </section>

            <section className="m-0 mb-8" id="services">
              <h2 className="text-4xl mb-2 font-[Absans]">Services you can tailor</h2>
              <p className="text-gray-700">
                Affordability also comes down to services. Most charters let you
                customize what’s included. You can book a private chef for a BBQ
                or bring your own food on board. Opting out of extras helps keep
                costs low while still ensuring comfort and privacy.
              </p>
              <p className="text-gray-700 mt-2">
                The key is to decide which additions truly matter for you. Many
                first-time guests are surprised at how enjoyable even a basic
                yacht hire can be.
              </p>
            </section>
          </article>
        </section>

        {/* Newsletter Section */}
        <Newsletter />

        <MoreReads />

        {/* Book */}
        <Book />
      </main>
      <Footer />
    </>
  );
}
