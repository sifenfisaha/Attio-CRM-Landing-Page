import HeaderTwo from "@/components/HeaderTwo";
import Ilu1 from "@/assets/section2/ilu1.svg";
import Ilu2 from "@/assets/section2/ilu2.svg";
import Ilu3 from "@/assets/section2/ilu3.svg";
import Ilu4 from "@/assets/section2/ilu4.svg";
import Ilu5 from "@/assets/section2/ilu5.svg";
import Ilu6 from "@/assets/section2/ilu6.svg";
import Image, { StaticImageData } from "next/image";
import Container from "@/components/Container";

export const features: {
  id: number;
  title: string;
  description: string;
  src: StaticImageData;
}[] = [
  {
    id: 1,
    title: "Quick actions",
    description: "Streamline your workflow with customizable shortcuts.",
    src: Ilu1,
  },
  {
    id: 2,
    title: "Automatic enrichment",
    description:
      "Update your contacts with the latest information on autopilot.",
    src: Ilu2,
  },
  {
    id: 3,
    title: "Chrome extension",
    description: "Stay lean with Attio’s lightweight browser extension.",
    src: Ilu3,
  },
  {
    id: 4,
    title: "Contact analysis",
    description: "Get deeper insights into your contacts at a single glance.",
    src: Ilu4,
  },
  {
    id: 5,
    title: "Filters",
    description: "Streamline your workflow with customizable shortcuts.",
    src: Ilu5,
  },
  {
    id: 6,
    title: "Tiered sorting",
    description: "Update your contacts with the latest information on.",
    src: Ilu6,
  },
];

export default function ValuePropositionTwo() {
  return (
    <section className="bg-neutral-900 md:p-20 p-4">
      <HeaderTwo
        first="And so"
        second="much more..."
        subtitle="Your customers are always connected.  Why should your CRM be any different?"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-12 mt-12">
        {features.map((features) => {
          return (
            <Container
              classname="bg-neutral-900 border-neutral-600 border"
              className="bg-neutral-900 border-neutral-800 "
              key={features.id}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <Image
                  src={features.src}
                  alt={features.title}
                  className="mb-8"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-start text-white">
                    {features.title}
                  </h3>
                  <p className="text-lg text-neutral-400 text-start">
                    {features.description}
                  </p>
                </div>
              </div>
            </Container>
          );
        })}
      </div>
    </section>
  );
}
