import Logo from "@/assets/images/darklogo.svg";
import Button from "@/components/Button";
import FooterLinks from "@/components/FooterLinks";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-20 px-10 md:px-30">
      <div className="mb-10 ">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="flex justify-between">
        <div className="flex w-full flex-col md:flex-row justify-between">
          <div className="grid-cols-2 md:grid-cols-4 hidden md:grid gap-12">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-neutral-300 mb-4">{section.title}</h4>
                <ul className="space-y-1">
                  {section.links.map((link, index) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-neutral-600 flex gap-2 items-center justify-start hover:text-white"
                      >
                        <span>{link.name}</span>
                        {index > 2 && <ArrowUpRight width={15} height={15} />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <FooterLinks />

          <div>
            <p className="text-neutral-500 text-xl">Ready to build?</p>
            <div className="mt-4 flex flex-col md:flex-row  gap-4">
              <Button variant="primary" theme="gray">
                Get Started
              </Button>
              <Button variant="secondary" theme="gray">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
