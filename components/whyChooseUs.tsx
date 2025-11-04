"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    { icon: "/assets/safety.svg", title: "Safety", subtitle: "First" },
    { icon: "/assets/premium.svg", title: "Premium", subtitle: "Selection" },
    { icon: "/assets/support.svg", title: "24/7", subtitle: "Support" },
    {
      icon: "/assets/experiences.svg",
      title: "Unforgettable",
      subtitle: "Experiences",
    },
  ];

  return (
    <section className="py-8 md:pb-12 text-center bg-white">
      <h2 className="text-[33px] md:text-[44px] lg:text-[64px] mb-5 px-4">
        Why Should You Choose Us?
      </h2>

      <div className="grid md:flex md:flex-wrap justify-center items-center max-w-5xl mx-auto md:divide-x divide-gray-500">
        {features.map((f, index) => (
          <div
            key={index}
            className="flex flex-col items-center mt-5 justify-center px-8 md:px-5 lg:px-14 w-full md:w-fit text-center space-y-6"
          >
            <Image
              src={f.icon}
              alt={f.title}
              width={36}
              height={36}
              className="mb-2"
            />
            <div className="flex flex-col p-4 leading-tight">
              <span className="text-gray-900 text-[24px]">
                {f.title}
              </span>
              <span className="text-gray-900  text-2xl">
                {f.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
