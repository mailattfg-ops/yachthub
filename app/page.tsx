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
      <div className="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28908.383815816876!2d55.139899400000004!3d25.083305449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sDubai%20Marina%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1763542807127!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
      </div>
      <Footer />
    </main>
  );
}
