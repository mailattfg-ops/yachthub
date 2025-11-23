"use client";

import { useContact } from "@/app/providers";

export default function ContactModal() {
  const { open, setOpen } = useContact();

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-[#00313F] text-white w-[90%] max-w-lg p-6 rounded-xl shadow-xl relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

        <form className="grid gap-4">
          <input className="p-3 rounded-md bg-white/10 border border-white/20" placeholder="Your Name" />
          <input className="p-3 rounded-md bg-white/10 border border-white/20" placeholder="Your Email" />
          <input className="p-3 rounded-md bg-white/10 border border-white/20" placeholder="Subject" />
          <textarea rows={4} className="p-3 rounded-md bg-white/10 border border-white/20" placeholder="Your Message"></textarea>

          <button className="bg-white text-[#00313F] font-medium p-3 rounded-md w-full hover:bg-gray-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
