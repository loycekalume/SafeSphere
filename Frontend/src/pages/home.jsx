import Navbar from "../components/home/navbar";
import Hero from "../components/home/hero";
import QuickAccess from "../components/home/quickAccess";
import AwarenessSection from "../components/home/awarenessSection";
import Footer from "../components/home/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickAccess />
      <AwarenessSection />
      <Footer />
    </>
  );
}
