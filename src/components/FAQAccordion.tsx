"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-900/10 rounded-2xl bg-white shadow-sm ring-1 ring-navy-900/5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left transition-colors duration-200 hover:bg-cream-50/70 sm:px-6 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-[27px] font-medium leading-snug text-navy-900">
                {item.question}
              </span>
              <motion.span
                initial={false}
                animate={{
                  backgroundColor: isOpen ? "#d6294f" : "#f3efe8",
                  color: isOpen ? "#ffffff" : "#a11743",
                }}
                transition={{ duration: 0.2 }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl"
              >
                {isOpen ? "−" : "+"}
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 text-[22px] leading-relaxed text-slate-500 sm:px-6">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
