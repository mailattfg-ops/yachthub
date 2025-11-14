"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { image } from "motion/react-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';



export default function PackageSection() {
  const router = useRouter();
  const [limit, setLimit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [yachts, setData] = useState<any[]>([]);

  const fetchPost = async () => {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
    console.log("Supabase ENV:", SUPABASE_URL, SUPABASE_KEY);

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log("Supabase client:", supabase);

    const { data, error } = await supabase
      .from("packages")
      .select("*");

    if (error) {
      console.error("Error fetching post:", error);
    } else {
      console.log("data", data);
      setData(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!limit) {
      setLimit(true);
    }
    setLoading(true);


    fetchPost();
  }, []);

  return (
    <section className="w-full pt-10 pb-8 bg-white text-center">
      {/* <h2 className="font-[Absans] text-[36px] md:text-[44px] lg:text-[64px] mb-5">
        Our Premium Fleet
      </h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 max-w-8xl mx-auto px-8 md:px-4 lg:px-10">
        {yachts.map((yacht, index) => (
          <div key={index} className="relative w-[494px] h-[400px] md:h-[615px] overflow-hidden shadow-lg group w-full">
            {/* Yacht Image */}
            <Image
              src={yacht.image || "/assets/package.jpg" || "/assets/package.JPG"}
              alt={"image"}
              width={900}
              height={500}
              className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
            />
            <div className="absolute top-0 left-0 bg-[#000000] text-white text-sm font-semibold h-[55px] grid items-center justify-center px-2 mb-[-20]">
              <span className="text-[11.39px] text-[#EBEBFF] text-left h-fit">AED</span>
              {yacht.price}
            </div>
            {/* Overlay Gradient */}
            <div className=" bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 w-full text-left text-white" style={{ background: `${yacht.gradient}` }}>
              <div className="w-full flex items-center justify-between w-full">
                <div className="w-full grid items-center gap-2 md:gap-2 text-sm opacity-90  p-3">
                  <div className="w-full md:w-1/2 grid items-center">
                    <p className="text-[25px] md:text-[32px] lg:text-[45px] font-semibold">
                      {yacht.text}
                    </p>
                    <span className="text-[15px]">
                      {yacht.subtext}
                    </span>
                  </div>

                  {/* Icon Set (Text below Icon) */}

                  <Button
                    className="rounded-none font-[CalSans] text-white cursor-pointer transition w-full h-[40px] md:h-[55px] text-[15] md:text-[25px]"
                    style={{
                      backgroundColor: "#FFF",
                      color: "#000",
                      fontWeight: 400,
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                    }}
                    onClick={() => router.push("/packages/details")}
                  >
                    View Details
                  </Button>
                </div>

                {/* Price Box (tight fit, no padding) */}

              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
