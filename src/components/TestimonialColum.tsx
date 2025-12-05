"use client";
import Image, { StaticImageData } from "next/image";
import * as motion from "motion/react-client";
import { Fragment } from "react/jsx-runtime";
import Container from "./Container";
import { Twitter } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { AnimationPlaybackControlsWithThen, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function TestimonialColumn(props: {
  testimaoneals: {
    id: number;
    name: string;
    username: string;
    avatar: StaticImageData;
    content: string;
    date: string;
    time: string;
  }[];
  reverse?: boolean;
  className?: string;
}) {
  const { testimaoneals, reverse, className } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();
  const animation = useRef<AnimationPlaybackControlsWithThen>(null);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { y: reverse ? "0%" : "-50%" },
      { ease: "linear", duration: 35, repeat: Infinity },
    );
  }, [reverse, scope, animate]);

  useEffect(() => {
    if (isHovered) {
      animation.current?.pause();
    } else {
      animation.current?.play();
    }
  }, [isHovered]);

  return (
    <motion.div
      ref={scope}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ y: reverse ? "-50%" : "0%" }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => {
        return (
          <Fragment key={i}>
            {testimaoneals.map((testimaoneal) => {
              return (
                <Container
                  key={testimaoneal.id}
                  classname="bg-neutral-900 border-neutral-600 max-w-sm border "
                  className="bg-neutral-900 border-neutral-800 p-6 "
                >
                  <div className="flex items-center justify-between">
                    <div className="flex justify-center items-center gap-4">
                      <Image
                        width={30}
                        height={30}
                        src={testimaoneal.avatar}
                        alt={testimaoneal.name}
                      />
                      <div>
                        <p className="text-neutral-300">{testimaoneal.name}</p>
                        <p className="text-neutral-500">
                          {testimaoneal.username}
                        </p>
                      </div>
                    </div>
                    <Twitter className="text-neutral-700" fill="" />
                  </div>
                  <div>
                    <p className="text-neutral-400 my-6">
                      {testimaoneal.content}
                    </p>
                    <p className="text-neutral-600 text-sm">
                      {testimaoneal.time} · {testimaoneal.date}
                    </p>
                  </div>
                </Container>
              );
            })}
          </Fragment>
        );
      })}
    </motion.div>
  );
}
