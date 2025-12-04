import CTA from "@/sections/CTA";
import Hero from "@/sections/Hero";
import LogoTwicker from "@/sections/LogoTwicker";
import NavBar from "@/sections/NavBar";
import Notification from "@/sections/Notification";
import ValuePropsition from "@/sections/ValueProposition";

export default function Home() {
  return (
    <>
      <Notification />
      <NavBar />
      <Hero />
      <LogoTwicker />
      <ValuePropsition />
      <CTA />
    </>
  );
}
