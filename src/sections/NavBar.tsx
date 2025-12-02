import Image from "next/image";
import Logo from "@/assets/images/Logo.svg";
import Button from "@/components/Button";

const navigationLinks: ReadonlyArray<{ name: string; href: string }> = [
  { name: "Customer", href: "#" },
  { name: "Changelog", href: "#" },
  { name: "Help", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function NavBar() {
  return (
    <section className="mx-6 my-4 flex items-center justify-between">
      <div className="flex items-center justify-center gap-16">
        <Image src={Logo} alt="Logo" priority />
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
      >
        <span className="h-1 w-full bg-black rounded"></span>
        <span className="h-1 w-full bg-black rounded"></span>
      </button>
    </section>
  );
}
