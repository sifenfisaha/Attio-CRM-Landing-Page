import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Container(
  props: {
    dark: boolean;
    classname?: string;
  } & HtmlHTMLAttributes<HTMLDivElement>,
) {
  const { children, className, classname } = props;
  return (
    <div
      className={twMerge(
        "w-full rounded-3xl p-1 bg-neutral-100 shadow-sm",
        classname,
      )}
    >
      <div
        className={twMerge(
          "w-full h-full bg-white  rounded-2xl border-2 border-neutral-200",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
