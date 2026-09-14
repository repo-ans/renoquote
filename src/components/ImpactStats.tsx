"use client";

import { motion } from "framer-motion";

// Honest, verifiable facts about how the system works — not outcome/social-proof
// numbers we can't back up yet (no leads delivered, no revenue to cite). See the
// "no inflated stats" principle this project runs on.
const stats: {
  value: string;
  label: string;
  position: string;
  rotate: string;
}[] = [
  {
    value: "100%",
    label: "Every lead phone-verified before it's delivered",
    position: "md:top-2 md:left-0",
    rotate: "md:-rotate-3",
  },
  {
    value: "4",
    label: "Service areas: Kitchener, Waterloo, Cambridge, Guelph",
    position: "md:top-2 md:right-0",
    rotate: "md:rotate-2",
  },
  {
    value: "0",
    label: "Exclusive leads ever resold to another contractor",
    position: "md:bottom-2 md:left-0",
    rotate: "md:rotate-2",
  },
  {
    value: "1",
    label: "Dedicated contractor matched per homeowner",
    position: "md:bottom-2 md:right-0",
    rotate: "md:-rotate-2",
  },
];

export function ImpactStats() {
  return (
    <div className="relative mx-auto max-w-5xl px-2 py-10 md:min-h-[560px] md:py-0">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-md text-center text-4xl font-bold leading-tight text-navy-900 sm:text-5xl md:absolute md:inset-0 md:flex md:max-w-none md:items-center md:justify-center"
      >
        <span className="md:max-w-md">
          What you can actually{" "}
          <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
            count on.
          </span>
        </span>
      </motion.h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-0 md:block">
        {stats.map((s, i) => (
          <motion.div
            key={s.value + s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className={`rounded-2xl bg-white p-5 shadow-lg ring-1 ring-navy-900/5 transition-shadow hover:shadow-xl sm:p-6 md:absolute md:w-48 ${s.position} ${s.rotate}`}
          >
            <p className="text-3xl font-bold text-navy-900 sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs leading-snug text-slate-500 sm:text-sm">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
