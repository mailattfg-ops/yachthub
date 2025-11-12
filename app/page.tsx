import HeroSection from "../components/heroSection";
import FleetSection from "../components/fleetSection";
import WhyChooseUs from "../components/whyChooseUs";
import CharterTypes from "../components/charterTypes";
import Footer from "../components/footer";
import Navbar from "@/components/navbar";
import Locations from "@/components/locations";
import MoreContent from "@/components/moreContent";

export default function HomePage() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <FleetSection />
      <Locations/>
      <WhyChooseUs />
      <CharterTypes />
      <MoreContent />
      <Footer />
    </main>
  );
}
