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
  return (
    <>
      <Navbar />
      <HeroSection />
      <WaitList />
      <WhySection/>
      <Compare />
      <HowitWorks />
      <Launch />
      <Footer />
    </>
  );
}

export default App;