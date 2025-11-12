"use client";

import Image from "next/image";

export default function MoreContent() {

    return (
        <>
            <section className="w-full py-8 px-6 md:px-12 md:py-10 ">
                <h2 className="w-full font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-5 text-center">More Content (Lorem Ipsum)</h2>
                <div className="w-full grid gap-6 md:px-12 lg:px-0 xl:px-12">
                    <div className="grid lg:flex w-full bg-white border border-[#A6A6A6] cursor-pointer 
                        hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
                        <div className="p-4 md:-8 flex flex-col justify-between">
                            <div className="w-[250px] md:w-[450px] lg:w-[400px] xl:w-[590px]">
                                <p className="text-sm text-[#2530FF] font-medium mb-2">
                                    Explore
                                </p>
                                <h2 className="!font-[CalSans] text-[22px] md:text-[25px] lg:text-[40px] font-normal leading-[103%] mb-3">
                                    Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </h2>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative w-[863px] h-68 lg:h-80 xl:h-68">
                            <Image
                                src={"/assets/blog-card.jpg"}
                                alt="Yacht in Dubai"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                    <div className="grid lg:flex bg-white border border-[#A6A6A6] cursor-pointer 
                        hover:scale-[1.01] transition-transform duration-300 overflow-hidden">

                        <div className="relative w-[863px] h-68 lg:h-80 xl:h-68">
                            <Image
                                src={"/assets/blog-card.jpg"}
                                alt="Yacht in Dubai"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4 md:-8 flex flex-col justify-between">
                            <div className="w-[250px] md:w-[450px] lg:w-[400px] xl:w-[590px]">
                                <p className="text-sm text-[#2530FF] font-medium mb-2">
                                    Explore
                                </p>
                                <h2 className="!font-[CalSans] text-[22px] md:text-[25px] lg:text-[40px] font-normal leading-[103%] mb-3">
                                    Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=" text-[22px] md:text-[25px] lg:text-[40px] text-center px-8 py-10 font-normal leading-[103%] mb-3">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
            </section>
            {/* Hero Image */}
            <section className="w-full h-[302px] md:h-[392.9835510253906px] lg:h-[877px]  max-w-8xl overflow-hidden">
                <Image
                    src={"/assets/blog-card.jpg"}
                    alt="Yacht image"
                    width={1200}
                    height={100}
                    className="w-full object-cover"
                />
            </section>
        </>
    );
}
