"use client";

import Image from "next/image";
import Logo from "@/assets/images/Logo.svg";
import Button from "@/components/Button";
import Notification from "./Notification";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigationLinks = [
  { name: "Customer", href: "#" },
  { name: "Changelog", href: "#" },
  { name: "Help", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex-col my-4 flex items-center justify-between relative px-6">
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-998 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed top-0 left-0 w-2/3 h-full bg-white z-999 shadow-xl border-r border-neutral-200 p-6 md:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <nav>
              <Image src={Logo} className="z-10" alt="Logo" priority />
              <ul className="space-y-6 mt-10">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg text-black hover:text-neutral-600 transition"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      <Notification className="order-2 md:order-1 w-full md:mx-6" />

      <div className=" w-full my-4 flex items-center order-1 md:order-2 justify-between z-50 relative">
        <div className="flex items-center justify-center gap-16">
          <Image src={Logo} className="z-10" alt="Logo" priority />

          <div className="hidden lg:block">
            <nav>
              <ul>
                {navigationLinks.map((link) => (
                  <li key={link.name} className="inline-block ml-8">
                    {link.name !== "Careers" ? (
                      <a
                        href={link.href}
                        className="hover:text-neutral-600 text-black transition"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-neutral-600 text-black transition flex items-center gap-1"
                      >
                        <span>{link.name}</span>
                        <div className="bg-black text-white text-xs font-semibold ml-1 w-4 h-4 flex items-center justify-center rounded-full">
                          4
                        </div>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="items-center gap-4 hidden md:flex">
          <Button variant="secondary" size="medium">
            Sign In
          </Button>
          <Button variant="primary" size="medium" className="ml-4">
            Start For Free
          </Button>
        </div>

        <button
          className="flex flex-col md:hidden gap-1 justify-center items-center w-8 h-6"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <span className="h-1 w-full bg-black rounded"></span>
          <span className="h-1 w-full bg-black rounded"></span>
        </button>
      </div>
    </section>
  );
}
