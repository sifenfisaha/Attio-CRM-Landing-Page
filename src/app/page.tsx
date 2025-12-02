import Hero from "@/sections/Hero";
import NavBar from "@/sections/NavBar";
import Notification from "@/sections/Notification";

export default function Home() {
  return (
    <>
      <Notification />
      <NavBar />
      <Hero />
    </>
  );
}
