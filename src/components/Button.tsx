"use client";

import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

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

      theme: {
        default: "",

        blue: "data-[variant=primary]:bg-white/20  data-[variant=primary]:hover:bg-whtie/40 data-[variant=primary]:border-white/40 data-[variant=primary]:focus:ring-blue-700 \
           data-[variant=secondary]:bg-white/0 data-[variant=secondary]:text-white data-[variant=secondary]:border-white/30 data-[variant=secondary]:hover:bg-white/10 data-[variant=secondary]:focus:ring-blue-400",

        gray: "data-[variant=primary]:bg-gray-800 data-[variant=primary]:hover:bg-gray-900 data-[variant=primary]:border-gray-700 data-[variant=primary]:focus:ring-gray-700 \
           data-[variant=secondary]:bg-gray-200 data-[variant=secondary]:text-gray-800 data-[variant=secondary]:border-gray-300 data-[variant=secondary]:hover:bg-gray-300 data-[variant=secondary]:focus:ring-gray-400",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "medium",
      theme: "default",
    },
  },
);

export default function Button(
  props: {
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    theme?: "default" | "blue" | "gray";
  } & ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { variant, size, theme, className, children, ...rest } = props;

  return (
    <button
      data-variant={variant} // enables theme overrides
      className={twMerge(buttonVariants({ variant, size, theme }), className)}
      {...rest}
    >
      {children}
    </button>
  );
}
