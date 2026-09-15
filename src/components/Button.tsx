"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-white shadow-lg shadow-accent-500/20 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800",
  ghost:
    "bg-transparent text-navy-900 border border-navy-900/15 hover:border-accent-500/50",
};

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 sm:text-base";

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${
    disabled ? "cursor-not-allowed opacity-50" : ""
  } ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
