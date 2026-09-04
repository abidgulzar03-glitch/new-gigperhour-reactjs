import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import WaitList from "./Component/WaitList";
import WhySection from "./Component/WhySection";
import Compare from "./Component/Compare";
import HowitWorks from "./Component/HowitWorks";
import Launch from "./Component/Launch";
import Footer from "./Component/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // how long each animation takes (ms)
      once: true,    // animate only once, not every time you scroll past it
      offset: 80,    // start animation slightly before element fully enters view
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <WaitList />
      <WhySection />
      <Compare />
      <HowitWorks />
      <Launch />
      <Footer />
    </>
  );
}

export default App;