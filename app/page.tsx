import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import DayOrder from "./components/DayOrder";
import QuickLinks from "./components/QuickLinks";
import NewsEvents from "./components/NewsEvents";
import Stats from "./components/Stats";
import Institutions from "./components/Institutions";
import PlacementPartners from "./components/PlacementPartners";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <QuickLinks />
        <DayOrder />
        <NewsEvents />
        <Stats />
        <Institutions />
        <PlacementPartners />
      </main>
      <Footer />
    </>
  );
}
