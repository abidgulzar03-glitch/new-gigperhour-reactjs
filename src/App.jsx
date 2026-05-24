import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Hero from './hero-section'
import Waitlist from './waitlist'
import WhySection from './WhySection'
import Compare from './compare'
import HowItWorks from './howitworks'
import Launch from './launch'
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
           <Hero />
<Waitlist/>
   <WhySection />
<Compare />
<HowItWorks/>
<Launch/>
<Footer/>

    </>
  )
}

export default App
