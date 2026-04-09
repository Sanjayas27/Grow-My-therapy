import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroBand from "./components/IntroBand";
import Services from "./components/Services";
import About from "./components/About";
import Approach from "./components/Approach";
import Office from "./components/Office";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroBand />
        <Services />
        <About />
        <Approach />
        <Office />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
