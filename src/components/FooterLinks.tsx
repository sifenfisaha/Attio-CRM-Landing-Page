"use client";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Changelog", href: "/changelog" },
      { name: "Customer stories", href: "/customer-stories" },
      { name: "Security", href: "/security" },
      {
        name: "Chrome extension",
        href: "https://chrome.google.com",
        external: true,
      },
      { name: "iOS App", href: "#", external: true },
      { name: "Android App", href: "#", external: true },
      { name: "Zapier", href: "#", external: true },
      { name: "Integromat", href: "#", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Startup program", href: "#", external: true },
    ],
  },
  {
    title: "Attio for",
    links: [
      { name: "Startups", href: "/startups" },
      { name: "Dear flow", href: "/dear-flow" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help-center" },
      { name: "Talk to support", href: "/support" },
      { name: "API docs", href: "#", external: true },
      { name: "System status", href: "#", external: true },
    ],
  },
];

export default function FooterLinks() {
  const [index, setIndex] = useState<number | null>(null);

  const toggleIndex = (i: number) => {
    setIndex(index === i ? null : i);
  };

  return (
    <div className="flex flex-col gap-4 md:hidden mb-10">
      {footerLinks.map((section, i) => (
        <div key={section.title}>
          <h4
            onClick={() => toggleIndex(i)}
            className="text-neutral-300 mb-4 flex justify-between w-full bg-neutral-800 px-3 py-4 rounded-lg"
          >
            <span>{section.title}</span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                index === i ? "rotate-180" : ""
              }`}
            />
          </h4>

          {/* Motion */}
          <AnimatePresence>
            {index === i && (
              <motion.div
                initial={{ maxHeight: 0, opacity: 0, scale: 0.95 }}
                animate={{ maxHeight: 500, opacity: 1, scale: 1 }}
                exit={{ maxHeight: 0, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="space-y-1 py-2">
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="bg-neutral-800 px-3 py-4 rounded-lg"
                    >
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-neutral-300 flex gap-2 justify-between items-center hover:text-white"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="text-neutral-500" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
