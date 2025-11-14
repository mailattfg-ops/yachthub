"use client";

import Image from "next/image";
import { MapPin } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const yachts = [
    {
        text: "Palm Jumeirah Sightseeing",
        subtext: "Palm Jumeriah , Dubai",
        gradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        image: "/assets/events.jpg"
    },
    {
        text: "Romantic Dinner on Yacht",
        subtext: "Dubai",
        gradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        image: "/assets/events.jpg"
    },
    {
        text: "New Year’s Eve Yacht Rental",
        subtext: "Dubai",
        gradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        image: "/assets/events.jpg"
    },
    {
        text: "Birthday & Anniversary Parties",
        subtext: "Dubai",
        gradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        image: "/assets/events.jpg"
    },
    {
        text: "Corporate Events",
        subtext: "Dubai",
        gradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        image: "/assets/events.jpg"
    },
    {
        text: "Sunset Yacht Cruise Dubai",
        subtext: "Dubai",
        gradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        image: "/assets/events.jpg"
    },

];

export default function MoreContent() {

    return (
        <>
            <section className="w-full pb-8 px-6 md:px-12 md:pb-10 ">
                <h2 className="w-full font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-5 text-center">Popular Yacht Experiences</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 max-w-8xl mx-auto px-8 md:px-4 lg:px-10 pt-8">
                    {yachts.map((yacht, index) => (
                        <div key={index} className="relative w-[494px] h-[350px] md:h-[515px] overflow-hidden shadow-lg group w-full">
                            {/* Yacht Image */}
                            <Image
                                src={yacht.image || "/assets/package.jpg" || "/assets/package.JPG"}
                                alt={"image"}
                                width={900}
                                height={500}
                                className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
                            />
                            {/* Overlay Gradient */}
                            <div className=" bg-gradient-to-t from-black/80 to-transparent"></div>

                            {/* Bottom Info */}
                            <div className="absolute bottom-0 w-full text-left text-white pb-4" style={{ background: `${yacht.gradient}` }}>
                                <div className="w-full flex items-center justify-between w-full">
                                    <div className="w-full grid items-center gap-2 md:gap-2 text-sm opacity-90  p-3">
                                        <div className="w-full grid items-center gap-4">
                                            <p className="text-[29px] md:text-[36px] lg:text-[54px] font-semibold leading-[100%]">
                                                {yacht.text}
                                            </p>
                                            <span className="text-[15px] flex gap-2 ite ms-center">
                                                <MapPin /> {yacht.subtext}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Price Box (tight fit, no padding) */}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            {/* FAQ */}
            <section className="w-full pb-8 px-6 md:px-12 md:pb-10 ">
                <h2 className="w-full font-[Absans] text-[23px] md:text-[29px] lg:text-[49.03px] text-center lg:text-start">Frequently Asked Questions</h2>
                <div className="flex gap-8 md:gap-4 max-w-8xl mx-auto px-8 md:px-4 lg:px-10 pt-8 justify-end">
                    <div className="w-full lg:w-[80%]">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-[20.59px] md:text-[20.59px] lg:text-[34.32px]"> How much does it cost to rent a yacht in Dubai?</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className="text-[14px] md:text-[17px] lg:text-[29.42px]">
                                        Our flagship product combines cutting-edge technology with sleek
                                        design. Built with premium materials, it offers unparalleled
                                        performance and reliability.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-[20.59px] md:text-[20.59px] lg:text-[34.32px]">Do you offer catering or decorations?</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className="text-[14px] md:text-[17px] lg:text-[29.42px]">
                                        Our flagship product combines cutting-edge technology with sleek
                                        design. Built with premium materials, it offers unparalleled
                                        performance and reliability.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-[20.59px] md:text-[20.59px] lg:text-[34.32px]">What is the minimum booking duration?</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className="text-[14px] md:text-[17px] lg:text-[29.42px]">
                                        Our flagship product combines cutting-edge technology with sleek
                                        design. Built with premium materials, it offers unparalleled
                                        performance and reliability.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

            </section>
            {/* Hero Image */}
            {/* <section className="w-full h-[302px] md:h-[392.9835510253906px] lg:h-[877px]  max-w-8xl overflow-hidden">
                <Image
                    src={"/assets/blog-card.jpg"}
                    alt="Yacht image"
                    width={1200}
                    height={100}
                    className="w-full object-cover"
                />
            </section> */}
        </>
    );
}
