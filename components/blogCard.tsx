"use client";

import Image from "next/image";

interface BlogCardProps {
  title: string;
  desc: string;
  date: string;
  img: string;
}

export default function BlogCard({ title, desc, date, img }: BlogCardProps) {
  return (
    <div className="flex flex-col sm:flex-row border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition">
      <div className="flex-1 p-6 bg-white">
        <p className="text-sm text-blue-600 mb-2 font-medium">Explore</p>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{desc}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
      <div className="flex-1">
        <Image
          src={img}
          alt={title || "image" }
          width={500}
          height={300}
          priority 
          quality={80}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
