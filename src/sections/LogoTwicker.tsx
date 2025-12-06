import * as motion from "motion/react-client";
import Bravado from "@/assets/logos/Bravado.svg";
import OpenAi from "@/assets/logos/openAi.svg";
import Hyperline from "@/assets/logos/Hyperline.svg";
import Causal from "@/assets/logos/Causal.svg";
import CocaCola from "@/assets/logos/CocaCola.svg";
import Ondeck from "@/assets/logos/On Deck.svg";
import Pallet from "@/assets/logos/pallet.svg";
import Passionfroot from "@/assets/logos/passionfroot.svg";
import Plain from "@/assets/logos/plain.svg";
import Image from "next/image";
import React from "react";

const logos = [
  { name: "Bravado", component: Bravado },
  { name: "OpenAi", component: OpenAi },
  { name: "Hyperline", component: Hyperline },
  { name: "Causal", component: Causal },
  { name: "CocaCola", component: CocaCola },
  { name: "Ondeck", component: Ondeck },
  { name: "Pallet", component: Pallet },
  { name: "Passionfroot", component: Passionfroot },
  { name: "Plain", component: Plain },
];

export default function LogoTwicker() {
  return (
    <section className="pb-20">
      <div className="container mx-auto ">
        <div className="w-[90%] max-w-8xl overflow-hidden mx-auto  bg-white p-6">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex items-center flex-row flex-nowrap shrink-0 w-auto"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  className="pr-12 h-6 md:h-10 w-auto"
                  src={logo.component}
                  alt={logo.name}
                  key={index}
                  priority
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
