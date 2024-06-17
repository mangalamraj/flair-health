import "./App.css";
import About from "./components/about/aboutSection";
import CTA from "./components/cta/cta";
import FeatureSection from "./components/features/featureSection";
import Footer from "./components/footer/footer";
import HeroSection from "./components/hero/heroSection";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing/pricing";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init({
  duration: 500,
  once: true,
});

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <FeatureSection />
      <CTA />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
