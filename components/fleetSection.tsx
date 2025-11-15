"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { FormEvent, useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FleetSection() {
  const [data, setData] = useState<any[]>([]);
  const [limit, setLimit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [supabase, setSupabase] = useState<any>(null);

  const fetchPost = async () => {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
    console.log("Supabase ENV:", SUPABASE_URL, SUPABASE_KEY);

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    setSupabase(supabase);
    console.log("Supabase client:", supabase);

    const { data, error } = await supabase
      .from("fleet")
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

  async function handleBookingSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget; // safe in TS
    const formData = new FormData(form);

    const data = {
      fleet: formData.get("fleet") as string,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Optional: simple validation
    if (!data.name || !data.phone || !data.email) {
      alert("Please fill all required fields");
      return;
    }

    const { error } = await supabase
      .from("email_book")
      .insert([data]);

    if (error) {
      console.error(error);
      alert("Something went wrong!");
      return;
    }

    alert("Booking submitted successfully!");

    // Reset or close dialog if needed
    form.reset();
  }
  return (
    <section className="pt-10 pb-8 bg-white text-center">
      <h2 className="font-[Absans] text-[36px] md:text-[44px] lg:text-[64px] mb-5">
        Our Premium Fleet
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 max-w-8xl mx-auto px-8 md:px-4 lg:px-10">
        {data.map((yacht, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg group w-full">
            {/* Yacht Image */}
            <Image
              src={yacht.image}
              alt={yacht.name || "image"}
              width={900}
              height={500}
              priority
              quality={80}
              className="w-full h-[300px] object-cover group-hover:scale-101 transition-transform duration-500"
            />
            <div className="absolute top-0 left-0 bg-[#000] text-white text-sm font-semibold h-[55px] flex items-center justify-center px-2 mb-[-20]">
              {yacht.price}
            </div>
            {/* Overlay Gradient */}
            <div className=" bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Bottom Info */}
            <div className="w-full text-left text-white">
              <div className="w-full flex items-center justify-between w-full">
                <div className="w-full grid items-center gap-2 md:gap-2 text-sm opacity-90  p-3">
                  <div className="w-full md:w-1/2 flex items-center">
                    <p className="text-[25px] md:text-[25px] lg:text-[40px] font-semibold text-black leading-[84%]">
                      {yacht.name}
                    </p>
                  </div>

                  {/* Icon Set (Text below Icon) */}
                  <div className="flex items-center gap-2 md:gap-3 h-full">
                    <div className="flex flex-col items-center text-xs">
                      <Image
                        src="/assets/people.svg"
                        alt="People"
                        width={16}
                        priority 
                        quality={80}
                        height={16}
                      />
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1 text-black">{yacht.capacity}</span>
                    </div>{" "}
                    <span
                      style={{
                        display: "inline-block",
                        width: "1px",
                        height: "40px",
                        backgroundColor: "black",
                      }}
                    ></span>
                    <div className="flex flex-col items-center text-xs">
                      <Image
                        src="/assets/bath.svg"
                        alt="Bath"
                        width={16}
                        priority 
                        quality={80}
                        height={16}
                      />
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1 text-black">{yacht.baths}</span>
                    </div>{" "}
                    <span
                      style={{
                        display: "inline-block",
                        width: "0.5px",
                        height: "40px",
                        backgroundColor: "black",
                      }}
                    ></span>
                    <div className="flex flex-col items-center me-1 text-xs">
                      <Image
                        src="/assets/bed.svg"
                        alt="Bed"
                        width={16}
                        priority 
                        quality={80}
                        height={16}
                      />
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1 text-black">{yacht.beds}</span>
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        width: "0.5px",
                        height: "40px",
                        backgroundColor: "black",
                      }}
                    ></span>
                    <div className="flex flex-col items-center me-1 text-xs">
                      <Image
                        src="/assets/bed.svg"
                        alt="Bed"
                        width={16}
                        priority 
                        quality={80}
                        height={16}
                      />
                      <span className="text-[7.79px] md:text-[8.64px] lg:text-[12.69px] mt-1 text-black">{yacht.crew}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button
                      className="rounded-none text-white cursor-pointer transition flex-1 h-[40px] md:h-[55px] text-[18px] md:text-[25px] mr-2"
                      style={{
                        backgroundColor: "#1597CC",
                        // height: "",
                        fontFamily: "Absans",
                        fontWeight: 400,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        textAlign: "center",
                      }}
                    >
                      Book On
                      <img src="/assets/telegram.svg" className="w-6 h-6" alt="image" />
                    </Button>

                    <Dialog>
                      <DialogTrigger className="rounded-none text-white cursor-pointer transition flex items-center justify-center gap-2 flex-1 h-[40px] md:h-[55px] text-[18px] md:text-[25px]"
                        style={{
                          backgroundColor: "#373737",
                          // height: "",
                          fontFamily: "Absans",
                          fontWeight: 400,
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          textAlign: "center",
                        }}
                      >
                        Book On
                        <img src="/assets/mail.svg" className="w-6 h-6" alt="image" />
                      </DialogTrigger>
                      <form onSubmit={(e) => handleBookingSubmit(e)}>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle><h2 className="text-[24px] text-[#000]">Book Now!</h2></DialogTitle>
                            <DialogDescription>
                              Yacht booking details. Fill the required fields and click save.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="fleet">Fleet</Label>
                              <Input id="fleet" name="fleet" defaultValue={yacht.name} disabled />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="name">Name</Label>
                              <Input id="name" name="name" placeholder="Enter Name" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" name="phone"placeholder="Enter Phone Number" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="email">Email</Label>
                              <Input type="email" id="email" name="email" placeholder="Enter Email" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="message">Message</Label>
                              <Input id="message" name="message" placeholder="Enter Message"/>
                            </div>
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Submit</Button>
                          </DialogFooter>
                        </DialogContent>
                      </form>
                    </Dialog>
                  </div>
                  <Button
                    className="rounded-none text-white cursor-pointer transition w-full h-[40px] md:h-[55px] text-[18px] md:text-[25px]"
                    style={{
                      backgroundColor: "#02CE1A",
                      // height: "",
                      fontFamily: "Absans",
                      fontWeight: 400,
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                    }}
                  >
                    Book On
                    <img src="/assets/whatsapp.svg" className="w-6 h-6" alt="image" />
                  </Button>

                </div>

                {/* Price Box (tight fit, no padding) */}

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="w-full flex justify-center">
        <button className="font-[Absans] hidden md:block mt-8 px-8 py-3 border border-[#A3A3A3] text-[#000] hover:bg-black hover:text-white transition-all">
          View Full Fleet
        </button>
      </div>
    </section>
  );
}
