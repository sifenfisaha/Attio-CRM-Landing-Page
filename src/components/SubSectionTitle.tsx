import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function SubSectionTitle(
  props: {
    first: string;
    second: string;
  } & HTMLAttributes<HTMLParagraphElement>,
) {
  const { first, second, className } = props;
  return (
    <p
      className={twMerge(
        "self-start text-neutral-600 md:text-xl text-base max-w-xl",
        className,
      )}
    >
      <span className="font-bold text-black">{first}</span> {second}
    </p>
  );
}
