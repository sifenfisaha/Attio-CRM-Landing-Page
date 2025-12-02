import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";
import ScreenShot from "@/assets/images/Container.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="rounded-full bg-neutral-100 pr-4 mx-auto flex gap-4 items-center justify-center w-fit">
        <button className="bg-black py-0.5 px-2 text-white rounded-full">
          New
        </button>
        <p className="flex items-center justify-center text-sm md:text-base text-neutral-800">
          <span>How Pallet uses Attio to power their GTM</span>
          <span className="flex items-center justify-center ml-2">
            <ChevronRight size={16} />
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-8 mx-auto max-w-5xl">
        <h1 className="md:text-6xl lg:text-8xl text-3xl font-bold">
          Cusomer relationships magic.
        </h1>
        <p className="md:text-2xl text-xl mt-8 text-neutral-800 max-w-2xl">
          Powerful, flexible and data-driven, Attio makes it easy to build the
          exact CRM your business needs.
        </p>
        <div className="flex gap-6 mt-10">
          <Button variant="primary" size="large">
            Start for free
          </Button>
          <Button variant="secondary" size="large">
            Talk to sales
          </Button>
        </div>
      </div>
      <div className="mt-16 mx-auto flex justify-center items-center bg-[url('/Background.svg')] w-full bg-no-repeat bg-center bg-cover">
        <div className="max-w-7xl px-6 py-12  backdrop-blur-2xl bg-white">
          <Image
            src={ScreenShot}
            alt="screen shot of the dashboard"
            className="shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
