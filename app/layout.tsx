import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactProvider } from "./providers";
import ContactModal from "@/components/ContactModal";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yacht Rental Dubai | Luxury Yachts for Private Cruises & Events",
  description:
    "Experience the best Yacht Rental Dubai services with luxury yachts perfect for private cruises, celebrations, and unforgettable sea adventures",
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ContactProvider>
          {children}
          <ContactModal />
        </ContactProvider>
      </body>
    </html>
  );
}
