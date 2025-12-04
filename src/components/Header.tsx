import Logo from "@/assets/logos/secton logo.svg";
import Image from "next/image";

export default function Header(props: { title?: string; subtitle?: string }) {
  const { title, subtitle } = props;
  return (
    <div className="header flex items-start gap-4 md:gap-12 mb-8">
      <Image src={Logo} alt="Secton Logo" width={50} height={50} />
      <div>
        <h2 className="md:text-5xl text-3xl font-bold max-w-sm">{title}</h2>
        <p className="text-xl mt-4 max-w-xl">{subtitle}</p>
      </div>
    </div>
  );
}
