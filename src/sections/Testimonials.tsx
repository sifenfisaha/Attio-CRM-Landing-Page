import HeaderTwo from "@/components/HeaderTwo";
import Avatar1 from "@/assets/avatar/Avatar1.svg";
import Avatar2 from "@/assets/avatar/Avatar2.svg";
import Avatar3 from "@/assets/avatar/Avatar3.svg";
import Avatar4 from "@/assets/avatar/Avatar4.svg";
import Avatar5 from "@/assets/avatar/Avatar5.svg";
import Avatar6 from "@/assets/avatar/Avatar6.svg";
import Avatar7 from "@/assets/avatar/Avatar7.svg";
import Avatar8 from "@/assets/avatar/Avatar8.svg";
import Avatar9 from "@/assets/avatar/Avatar9.svg";
import { StaticImageData } from "next/image";
import TestimonialColumn from "@/components/TestimonialColum";

interface Testimonial {
  id: number;
  name: string;
  username: string;
  avatar: StaticImageData;
  content: string;
  date: string;
  time: string;
}

export const testimonialsA: Testimonial[] = [
  {
    id: 1,
    name: "Sebastiaan Debrouwere",
    username: "@iamsebdeb",
    avatar: Avatar1,
    content:
      "We use @attio daily for several internal processes. Incredible flexibility and super intuitive UI.",
    time: "10:01 PM",
    date: "Apr 7, 2022",
  },
  {
    id: 2,
    name: "Alon",
    username: "@alon",
    avatar: Avatar2,
    content:
      "As an early-stage startup, @attio gives us a perfect balance of flexibility and prescriptiveness.",
    time: "6:57 PM",
    date: "Dec 1, 2022",
  },
  {
    id: 3,
    name: "Alexandra Smith",
    username: "@smith_alexandra",
    avatar: Avatar3,
    content:
      "We use @attio as our CRM for sales, fundraising, and recruiting. It’s awesome.",
    time: "1:32 PM",
    date: "Jan 4, 2023",
  },
  {
    id: 4,
    name: "Khrisna",
    username: "@ntkris",
    avatar: Avatar4,
    content:
      "Holy shit @attio is beautiful. Sleek, simple, and exactly what I need after switching from Notion.",
    time: "10:22 PM",
    date: "Mar 3, 2023",
  },
  {
    id: 5,
    name: "Villa Gouse",
    username: "@villa_gouse",
    avatar: Avatar5,
    content:
      "Most CRMs are overcomplicated. @attio is flexible, simple, and their customer support is AAA.",
    time: "4:05 PM",
    date: "Dec 1, 2022",
  },
  {
    id: 6,
    name: "Damian",
    username: "@damian09",
    avatar: Avatar6,
    content:
      "I use @attio to track applicants, manage pipelines, and handle tasks. It truly feels like Notion for CRM.",
    time: "2:21 PM",
    date: "Jan 9, 2023",
  },
  {
    id: 7,
    name: "Rachel Lee",
    username: "@rachlee",
    avatar: Avatar7,
    content:
      "@attio has replaced 4 tools for our early-stage team. Fast, clean, and surprisingly powerful.",
    time: "11:14 AM",
    date: "Feb 11, 2023",
  },
  {
    id: 8,
    name: "Marcus Finch",
    username: "@marcusf",
    avatar: Avatar8,
    content:
      "Customization in @attio is unmatched. Our workflows finally feel like OUR workflows.",
    time: "7:45 PM",
    date: "Nov 2, 2022",
  },
  {
    id: 9,
    name: "Laila Osman",
    username: "@lailaosman",
    avatar: Avatar9,
    content:
      "We scaled our operations without upgrading tools. @attio grew with us the whole way.",
    time: "3:12 PM",
    date: "May 28, 2023",
  },
  {
    id: 10,
    name: "Tom Briggs",
    username: "@tombriggs",
    avatar: Avatar1,
    content:
      "The clean design alone makes @attio worth it. But the automation features are on another level.",
    time: "9:58 AM",
    date: "Aug 14, 2023",
  },
];

export const testimonialsB: Testimonial[] = [
  {
    id: 1,
    name: "Jenna Morales",
    username: "@jenmorales",
    avatar: Avatar9,
    content:
      "@attio turned our chaotic spreadsheets into structured, living databases. Game changer.",
    time: "8:12 PM",
    date: "Sep 21, 2022",
  },
  {
    id: 2,
    name: "Ryan Carter",
    username: "@ryancarter",
    avatar: Avatar5,
    content:
      "The UI is smooth, the performance is fast, and the customization is crazy flexible. Love @attio.",
    time: "12:01 PM",
    date: "Jun 3, 2023",
  },
  {
    id: 3,
    name: "Olivia Chen",
    username: "@olivchen",
    avatar: Avatar2,
    content:
      "Integrations are seamless. @attio fit into our stack with zero friction.",
    time: "5:44 PM",
    date: "Mar 1, 2023",
  },
  {
    id: 4,
    name: "Arthur Bell",
    username: "@arthurbell",
    avatar: Avatar6,
    content:
      "We moved from Salesforce to @attio. The whole team literally cheered.",
    time: "6:18 PM",
    date: "Jul 10, 2022",
  },
  {
    id: 5,
    name: "Mia Rodriguez",
    username: "@mia_ro",
    avatar: Avatar3,
    content:
      "Managing relationships across projects is 10x easier with @attio’s relational approach.",
    time: "2:32 PM",
    date: "Dec 23, 2022",
  },
  {
    id: 6,
    name: "Ethan Miller",
    username: "@ethanm",
    avatar: Avatar4,
    content:
      "@attio gave structure to our chaotic founder-led sales process. Feels like magic.",
    time: "1:11 PM",
    date: "Jan 13, 2023",
  },
  {
    id: 7,
    name: "Sofia Grant",
    username: "@sofiagrant",
    avatar: Avatar7,
    content:
      "The templates alone saved us weeks of work. @attio is just smart.",
    time: "9:07 PM",
    date: "Feb 6, 2023",
  },
  {
    id: 8,
    name: "Leo Andrews",
    username: "@leoa",
    avatar: Avatar8,
    content:
      "Automation + simplicity = @attio. It’s the only CRM I don’t hate.",
    time: "3:50 PM",
    date: "Aug 5, 2022",
  },
  {
    id: 9,
    name: "Hannah Peters",
    username: "@hanpeters",
    avatar: Avatar1,
    content:
      "Our onboarding process dropped from 2 weeks to 3 days thanks to @attio.",
    time: "10:24 AM",
    date: "Apr 17, 2023",
  },
  {
    id: 10,
    name: "Victor Miles",
    username: "@vicmiles",
    avatar: Avatar2,
    content:
      "@attio is the most founder-friendly CRM I’ve ever touched. Simple but powerful.",
    time: "4:40 PM",
    date: "May 14, 2023",
  },
];

export const testimonialsC: Testimonial[] = [
  {
    id: 1,
    name: "Nora Hammond",
    username: "@noraham",
    avatar: Avatar4,
    content:
      "@attio feels like the Notion of CRMs — flexible, beautiful, and works the way you think.",
    time: "11:33 AM",
    date: "Jan 2, 2023",
  },
  {
    id: 2,
    name: "Jake Lyman",
    username: "@jlyman",
    avatar: Avatar3,
    content:
      "We automated half our manual follow-ups in under an hour. Insane.",
    time: "9:45 PM",
    date: "Sep 9, 2022",
  },
  {
    id: 3,
    name: "Emily Davis",
    username: "@emidavis",
    avatar: Avatar8,
    content:
      "The fastest CRM setup I’ve ever done. Everything just makes sense.",
    time: "7:14 PM",
    date: "Nov 22, 2022",
  },
  {
    id: 4,
    name: "Chris Walker",
    username: "@walkwithchris",
    avatar: Avatar7,
    content:
      "@attio changed how our team collaborates. Real-time updates are 💯.",
    time: "2:53 PM",
    date: "May 5, 2023",
  },
  {
    id: 5,
    name: "Tanya Blake",
    username: "@tanyab",
    avatar: Avatar5,
    content:
      "Data views are so customizable. It feels like building my own tool each time.",
    time: "12:18 PM",
    date: "Jul 3, 2023",
  },
  {
    id: 6,
    name: "Omar Shah",
    username: "@omarsh",
    avatar: Avatar6,
    content:
      "We scaled our team from 3 to 25 with @attio. Never had a problem.",
    time: "8:57 PM",
    date: "Aug 30, 2023",
  },
  {
    id: 7,
    name: "Bella Morgan",
    username: "@bellam",
    avatar: Avatar9,
    content: "@attio is the only CRM where the UX doesn’t fight you.",
    time: "6:11 PM",
    date: "Mar 12, 2023",
  },
  {
    id: 8,
    name: "George Lin",
    username: "@georgelin",
    avatar: Avatar2,
    content:
      "Amazing support, lightning-fast UI, and deep customization. Unmatched.",
    time: "1:45 PM",
    date: "Oct 19, 2022",
  },
  {
    id: 9,
    name: "Nikki Summers",
    username: "@nikkis",
    avatar: Avatar4,
    content: "We finally have a CRM the whole team actually wants to use.",
    time: "3:17 PM",
    date: "Jun 11, 2023",
  },
  {
    id: 10,
    name: "Adam Rhodes",
    username: "@arhodes",
    avatar: Avatar1,
    content: "I recommend @attio to every founder I meet. It’s that good.",
    time: "4:09 PM",
    date: "Jan 18, 2023",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-900 md:p-20 p-4 py-20">
      <HeaderTwo
        first="Loved by"
        second="Builders."
        subtitle="Attio is the customer relationship management tool for everyone who values collaboration."
      />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8 mt-12">
          <div className="h-[400px] lg:h-[500px] overflow-hidden self-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <TestimonialColumn testimaoneals={testimonialsA} />
          </div>

          <div className="h-[400px] hidden md:inline-block lg:h-[500px] self-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <TestimonialColumn testimaoneals={testimonialsB} reverse />
          </div>

          <div className="h-[400px] lg:h-[500px] overflow-hidden hidden lg:inline-block self-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <TestimonialColumn testimaoneals={testimonialsC} />
          </div>
        </div>
      </div>
    </section>
  );
}
