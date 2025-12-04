import Container from "./Container";
import Header from "./Header";
import SubSectionTitle from "./SubSectionTitle";
import Image1 from "@/assets/images/Part1.svg";
import Image2 from "@/assets/images/Part2.svg";
import Image3 from "@/assets/images/Part3.svg";
import Image4 from "@/assets/images/Part4.svg";
import Image from "next/image";
import Avatar from "@/assets/images/Avatar (3).svg";
import TestimonialCard from "./TestimonialCard";

export default function SectionThree() {
  return (
    <div>
      <Header
        title="Designed for multiplayer."
        subtitle="The first trully multiplayer CRM. After all, the best work doesn’t come from silos."
      />
      <div className="md:grid flex flex-col grid-cols-8 gap-8 pt-10">
        <Container classname="col-span-5">
          <SubSectionTitle
            className="p-12"
            first="Real-time collaboration."
            second="Collaborate with your whole team and nail every task the first time. See each other click, change, and type in real-time."
          />
          <div className="flex items-end justify-end">
            <Image
              src={Image1}
              alt="Part1"
              className="border-3 border-t-neutral-200 border-l-neutral-200 rounded-l-xl"
            />
          </div>
        </Container>

        <Container classname="col-span-3">
          <SubSectionTitle
            className="p-12"
            first="Build from anywhere."
            second="Our world-class mobile app lets you collaborate from anywhere without compromising your workflow."
          />
          <div className="flex items-center justify-center w-full">
            <Image src={Image2} alt="Part2" />
          </div>
        </Container>
        <Container classname="col-span-3">
          <SubSectionTitle
            className="p-12"
            first="Permission control."
            second="Collaborate with your whole team and nail every task the first time. See each other click, change, and type in real-time."
          />
          <div className="flex items-start justify-start w-full">
            <Image src={Image3} alt="Part3" />
          </div>
        </Container>
        <Container classname="col-span-5">
          <SubSectionTitle
            className="p-12"
            first="Hold that thought."
            second=" Never lose another idea with Attio’s real-time collaborative note-taking features."
          />
          <div className="flex items-center justify-end w-full">
            <Image
              src={Image4}
              alt="Part4"
              className="border-3 border-neutral-100 shadow rounded-xl mr-4"
            />
          </div>
        </Container>
      </div>
      <TestimonialCard
        image={Avatar}
        author="Alon Bartur"
        role="Co-founder & CEO, Dopt"
        testimonial="Attio has played a crucial role in scaling, building out and evolving our go-to-market model. It allows my team to easily stay on top of everything."
      />
    </div>
  );
}
