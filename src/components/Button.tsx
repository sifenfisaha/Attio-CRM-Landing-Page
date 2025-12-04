"use client";

import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-xl border text-nowrap border-neutral-200 focus:outline-none focus:ring-2 cursor-pointer focus:ring-offset-2 transition",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white hover:bg-black/80 border-neutral-400 focus:ring-black/80",
        secondary:
          "bg-white bg-neutral-100 border-neutral-200 text-black hover:bg-neutral-100 focus:ring-neutral-400",
      },
      size: {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-5 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size: "small" | "medium" | "large";
  } & ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { variant, size, className, children, ...rest } = props;
  return (
    <button className={buttonVariants({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
