import Image, { StaticImageData } from "next/image";
import Container from "./Container";
import Header from "./Header";
import Img from "@/assets/images/Graphic.svg";
import Group from "@/assets/images/Group 8.svg";
import Group2 from "@/assets/images/Group 6.svg";
import Icon1 from "@/assets/icons/icon1.svg";
import Icon2 from "@/assets/icons/icon2.svg";
import Icon3 from "@/assets/icons/icon3.svg";
import Icon4 from "@/assets/icons/icon4.svg";
import Icon5 from "@/assets/icons/icon5.svg";
import Icon6 from "@/assets/icons/icon6.svg";
import Avatar from "@/assets/images/Avatar (2).svg";
import TestimonialCard from "./TestimonialCard";
import SubSectionTitle from "./SubSectionTitle";

const items: { id: number; icon: StaticImageData }[] = [
  { id: 1, icon: Icon1 },
  { id: 2, icon: Icon2 },
  { id: 3, icon: Icon3 },
  { id: 4, icon: Icon4 },
  { id: 5, icon: Icon5 },
  { id: 6, icon: Icon6 },
];

export default function SectionTwo() {
  return (
    <div className="pb-20">
      <Header
        title="Modeled around your data and workflows."
        subtitle="A CRM should go beyond deals. Attio is built for any business process."
      />
      <div className="grid-cols-1 lg:grid-cols-8 lg:grid flex flex-col gap-8 pt-10">
        <Container className="pr-0 p-12 pb-0" classname="col-span-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
            <SubSectionTitle
              first="Always connected to your data."
              second="Continually sync
              your product, billing, and relationship data into your workspace.
"
            />
            <div>
              <Image src={Img} alt="Graphic" />
            </div>
          </div>
        </Container>
        <Container classname="lg:col-span-5 grid-cols-1">
          <div className="">
            <SubSectionTitle
              className="p-12"
              first="A CRM for any use case."
              second="Easily create custom objects that match your business’ unique data
              structure."
            />
            <div className="bg-[url('/Pattern.svg')] flex items-center justify-center p-12 bg-cover bg-center">
              <Image src={Group} alt="Group" />
            </div>
          </div>
        </Container>
        <div className="flex flex-col gap-8 col-span-1 lg:col-span-3 h-full">
          <Container className="flex-1">
            <div className="bg-[url('/Pattern.svg')] flex items-center justify-center p-12 bg-cover bg-center">
              <Image src={Group2} alt="Group2" />
            </div>
          </Container>
          <Container className="flex-1 px-6 py-12">
            <div className="flex flex-wrap items-center w-full justify-center gap-4">
              {items.map((item, index) => (
                <div
                  className={`w-15 flex items-center justify-center h-15 rounded-xl border-2 border-neutral-200 ${index === 4 && "hidden"}`}
                  key={item.id}
                >
                  <Image src={item.icon} alt={`icon ${item.id}`} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
      <TestimonialCard
        author="Filip Mark"
        role="Chief of Staff, Passionfroot"
        testimonial="Attio is an incredibly flexible product, you can build anything on it. It gives you the tools you need to build a CRM that’s exactly right to your business, your data, and your processes."
        image={Avatar}
      />
    </div>
  );
}
