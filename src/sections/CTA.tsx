import Button from "@/components/Button";
import Image from "next/image";
import Image1 from "@/assets/CTA/Logo1.svg";
import Image2 from "@/assets/CTA/Logo2.svg";
import Image3 from "@/assets/CTA/Logo3.svg";
import Image4 from "@/assets/CTA/Logo4.svg";

const logos = [
  { src: Image1, alt: "Logo 1" },
  { src: Image2, alt: "Logo 2" },
  { src: Image3, alt: "Logo 3" },
  { src: Image4, alt: "Logo 4" },
];

export default function CTA() {
  return (
    <section className="py-20 px-6 md:px-30">
      <div className="relative w-full border-2 border-neutral-200 inline-block">
        {/* top-left */}
        <span className="absolute -top-0.5 -left-6 w-6 h-0.5 bg-neutral-200"></span>
        <span className="absolute -top-6 -left-0.5 h-6 w-0.5 bg-neutral-200"></span>

        <span className="absolute -top-0.5 -right-6 w-6 h-0.5 bg-neutral-200"></span>
        <span className="absolute -top-6 -right-0.5 h-6 w-0.5 bg-neutral-200"></span>

        <span className="absolute -bottom-0.5 -left-6 w-6 h-0.5 bg-neutral-200"></span>
        <span className="absolute -bottom-6 -left-0.5 h-6 w-0.5 bg-neutral-200"></span>

        <span className="absolute -bottom-0.5 -right-6 w-6 h-0.5 bg-neutral-200"></span>
        <span className="absolute -bottom-6 -right-0.5 h-6 w-0.5 bg-neutral-200"></span>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 max-w-md">
            <h2 className="text-4xl font-bold text-center md:text-start mb-6">
              <span>Sclae with</span>{" "}
              <span className="text-neutral-400">security</span>
            </h2>
            <p className="text-black text-xl mb-7 max-w-sm text-center md:text-start">
              Attio is audited and certified by industry leading Third Party
              standards.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" size="medium">
                Start for free
              </Button>
              <Button variant="secondary" size="medium">
                Contact sales
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 w-full justify-between border-l border-neutral-200 min-h-full">
            <div className=" w-full hidden md:flex">
              {Array.from({ length: 4 }).map((_, index) => (
                <span
                  key={index}
                  className="block w-full h-0.5 border-l border-neutral-200 border-b p-5"
                ></span>
              ))}
            </div>
            <div className="flex justify-center flex-wrap md:border-none border-t border-neutral-200 gap-8 items-center">
              {logos.map((logo, index) => {
                return (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="my-6"
                    priority
                  />
                );
              })}
            </div>
            <div className="md:flex hidden w-full">
              {Array.from({ length: 4 }).map((_, index) => (
                <span
                  key={index}
                  className="block border-neutral-200 w-full border-t border-l h-0.5 p-5"
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
