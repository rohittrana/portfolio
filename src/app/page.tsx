import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Image from "next/image";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}
