import { Building, ChartColumnStacked, Copy, Sparkles } from "lucide-react";
import Container from "./Container";
import DashBoard1 from "@/assets/images/Dashboard.svg";
import DashBoard2 from "@/assets/images/Templates.svg";
import Avatar1 from "@/assets/images/Avatar.svg";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import Header from "./Header";

const section_one: {
  title: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    title: "Build",
    icon: <Building />,
    description:
      "create your dream CRM, with powerful, flexible templetes for  every use case.",
  },
  {
    title: "refine",
    icon: <Copy />,
    description:
      "Use Attio’s intuitive UI and ultra-customizable blocks to craft your ideal workflows.",
  },
  {
    title: "Work",
    icon: <Sparkles />,
    description:
      "Help your business scale with enriched data, custom attributes, and integrations.",
  },
  {
    title: "Report",
    icon: <ChartColumnStacked />,
    description:
      "Analyze, track and share reports built on real-time data from across your workspace.",
  },
];

export default function SectionOne() {
  return (
    <div className="mb-30">
      <Header
        title="A CRM created to be your own"
        subtitle="Tweak anything and everything to ensure Attio fits your business, not
          the other way around."
      />

      <Container className="p-12 pb-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8 mb-20">
          {section_one.map((item, index) => (
            <div key={index} className="">
              <div className="flex items-center gap-4 mb-3">
                <div className="">{item.icon}</div>
                <h3 className="">{item.title}</h3>
              </div>
              <p className="">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute inset-0 z-12 bg-black/20 rounded-xl" />
          <Image
            src={DashBoard1}
            alt="Dashboard Image"
            className="mt-12 w-full z-10"
            priority
          />
          <Image
            src={DashBoard2}
            alt="DashBoard2"
            className="z-20 absolute bottom-0 left-1/2 transform -translate-x-1/2"
            priority
          />
        </div>
      </Container>
      <TestimonialCard
        image={Avatar1}
        role="Chief of Staff, Pallet"
        testimonial="My team loves Attio’s reporting system because it’s so dynamic. We can splice our data in so many different ways and combinations."
        author="DeGrasse Schrader"
      />
    </div>
  );
}
