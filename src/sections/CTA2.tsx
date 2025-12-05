import bg from "@/assets/images/Group.svg";
import Button from "@/components/Button";
import Image from "next/image";

export default function CTA2() {
  return (
    <section className="bg-[#266DF0] md:pl-20 md:p-0 p-4 flex-col md:flex-row flex justify-between items-center">
      <div>
        <h2 className="text-white text-4xl md:text-5xl max-w-lg font-bold">
          <span className="text-white/40">Ready to build your team&apos;s</span>{" "}
          dream CRM?
        </h2>
        <div>
          <Button
            variant="primary"
            size="medium"
            theme="blue"
            className="mt-8 mb-20"
          >
            Get Started Today
          </Button>
          <Button
            variant="secondary"
            size="medium"
            theme="blue"
            className="mt-8 mb-20 ml-4"
          >
            Contact Sales
          </Button>
        </div>
      </div>
      <div>
        <Image src={bg} alt="Background" />
      </div>
    </section>
  );
}
