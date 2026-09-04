import { useEffect, useState } from "react";
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
import Preloader from "./Component/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

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