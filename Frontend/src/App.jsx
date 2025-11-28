import Navbar from "./components/home/navbar";
import Hero from "./components/home/hero";
import QuickAccess from "./components/home/quickAccess";
import AwarenessSection from "./components/home/awarenessSection"
import "./App.css";
import Footer from "./components/home/footer";

function App() {
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

export default App;
