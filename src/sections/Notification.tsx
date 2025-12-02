"use client";
import { X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const fadeInOut = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

export default function Notification() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.section
            variants={fadeInOut}
            initial="initial"
            animate="animate"
            exit="exit"
            className="my-1 flex items-center justify-center relative mx-6 px-6 py-4 bg-black rounded-2xl text-white"
          >
            <p className="text-center text-sm font-semibold">
              We&apos; ve raised a $23.5m Series A led by Redpoint Ventures!{" "}
              <span className="border-b-2 mb-1">Read more</span>
            </p>
            <button
              onClick={handleClose}
              className="ml-4 p-2 font-bold cursor-pointer rounded-full hover:bg-white/10 transition"
            >
              <X
                size={16}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                strokeWidth={3}
              />
            </button>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
