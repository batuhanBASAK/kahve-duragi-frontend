import Features from "./components/Features"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Gallery from "./components/Gallery"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"



function App() {
  return (
    <div className="mt-16">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App