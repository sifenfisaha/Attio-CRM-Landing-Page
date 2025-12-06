import CTA from "@/sections/CTA";
import CTA2 from "@/sections/CTA2";
import Footer from "@/sections/Fotter";
import Hero from "@/sections/Hero";
import LogoTwicker from "@/sections/LogoTwicker";
import NavBar from "@/sections/NavBar";
import Testimonials from "@/sections/Testimonials";
import ValuePropsition from "@/sections/ValueProposition";
import ValuePropositionTwo from "@/sections/ValuePropositionTwo";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoTwicker />
      <ValuePropsition />
      <CTA />
      <ValuePropositionTwo />
      <Testimonials />
      <CTA2 />
      <Footer />
    </>
  );
}
