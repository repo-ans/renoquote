"use client";

import { motion } from "framer-motion";

export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto w-[260px] rounded-[2.2rem] border-[6px] border-navy-950 bg-navy-950 p-2 shadow-2xl sm:w-[300px]"
    >
      <div className="rounded-[1.6rem] bg-cream-100 px-3 pb-4 pt-6">
        <div className="mb-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-accent-400">
            RQ
          </span>
          <div>
            <p className="text-xs font-semibold text-navy-900">RenoQuotes</p>
            <p className="text-[10px] text-slate-500">New lead</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl rounded-tl-sm bg-white p-3.5 shadow-sm"
        >
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-accent-600">
            Verified Lead
          </p>
          <dl className="space-y-1.5 text-xs text-navy-900">
            <div className="flex justify-between gap-2">
              <dt className="text-slate-500">Name</dt>
              <dd className="font-medium">Sarah M.</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-slate-500">Area</dt>
              <dd className="font-medium">Cambridge, ON</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-slate-500">Budget</dt>
              <dd className="font-medium">$15k–$30k</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-slate-500">Timeline</dt>
              <dd className="font-medium">ASAP</dd>
            </div>
          </dl>
          <p className="mt-2.5 rounded-lg bg-cream-100 px-2.5 py-2 text-[11px] leading-snug text-slate-500">
            &ldquo;Full bathroom reno, want to start this month.&rdquo;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-2 ml-auto w-fit rounded-2xl rounded-tr-sm bg-accent-500 px-3 py-2 text-xs font-medium text-white"
        >
          Calling now 📞
        </motion.div>
      </div>
    </motion.div>
  );
}
