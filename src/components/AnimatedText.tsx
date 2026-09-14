"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const word = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  highlightFrom,
  highlightClassName = "text-accent-500",
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Word index (0-based) from which words get `highlightClassName` instead of the base color. */
  highlightFrom?: number;
  highlightClassName?: string;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      custom={delay}
      aria-label={text}
      className={`inline ${className}`}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          aria-hidden="true"
          className={`inline-block will-change-transform ${
            highlightFrom !== undefined && i >= highlightFrom
              ? highlightClassName
              : ""
          }`}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
