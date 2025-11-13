import HeroSection from "../components/heroSection";
import FleetSection from "../components/fleetSection";
import WhyChooseUs from "../components/whyChooseUs";
import CharterTypes from "../components/charterTypes";
import Footer from "../components/footer";
import Navbar from "@/components/navbar";
import Locations from "@/components/locations";
import MoreContent from "@/components/moreContent";
import YachtRental from "@/components/yachtRental";
import Book from "@/components/book";
import Image from "next/image";


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FleetSection />
      <Locations />
      <WhyChooseUs />
      <CharterTypes />
      <YachtRental />
      <MoreContent />
      <Book />
      <Image
        src="/assets/map.png"
        alt="Map location"
        width={800}
        height={400}
        className="w-full h-[415px] md:h-auto rounded-lg"
      />
      <Footer />
    </main>
  );
}
