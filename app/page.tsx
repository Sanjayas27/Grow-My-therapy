import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import SpecialityCard from "../components/SpecialityCard";
import CTA from "@/components/CTA";
import About from "@/components/About";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Info from "@/components/Info";

export default function Home() {
  return (
    <>
    <main className="bg-secondary text-gray-800">

      <Navbar />
      <Hero />
      <Info/>
      <Specialties />
      <About />
      <Office />
      <FAQ/>
      <CTA />
      <Footer/>
    </main>
    </>
  );
}

