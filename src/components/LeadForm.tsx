"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Button } from "./Button";

export type SelectOption = { value: string; label: string };

const projectTypeOptions: SelectOption[] = [
  { value: "bathroom", label: "Bathroom" },
  { value: "kitchen", label: "Kitchen" },
  { value: "basement", label: "Basement" },
  { value: "deck-fencing", label: "Deck / Fencing" },
  { value: "concrete", label: "Concrete" },
  { value: "other", label: "Other" },
];

export function LeadForm({
  budgetOptions,
  timelineOptions,
}: {
  budgetOptions: SelectOption[];
  timelineOptions: SelectOption[];
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      projectType: (
        form.elements.namedItem("projectType") as HTMLSelectElement
      ).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement)
        .value,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-navy-900/5"
      >
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
          ✓
        </div>
        <h3 className="text-lg font-semibold text-navy-900">
          Got it — thank you!
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          We&apos;ll call you shortly to confirm a few details before
          connecting you with a local pro.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      id="quote-form"
      onSubmit={handleSubmit}
      className="space-y-3 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-navy-900/5 sm:p-6"
    >
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-500">
          First name
        </label>
        <input
          name="name"
          required
          placeholder="Sarah"
          className="w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-500">
          Phone number
        </label>
        <input
          name="phone"
          type="tel"
          required
          placeholder="(519) 555-0123"
          className="w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-500">
          What do you need help with?
        </label>
        <select
          name="projectType"
          required
          defaultValue=""
          className="w-full rounded-lg border border-navy-900/10 bg-white px-3 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500"
        >
          <option value="" disabled>
            Select
          </option>
          {projectTypeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Budget
          </label>
          <select
            name="budget"
            required
            defaultValue=""
            className="w-full rounded-lg border border-navy-900/10 bg-white px-3 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500"
          >
            <option value="" disabled>
              Select
            </option>
            {budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Timeline
          </label>
          <select
            name="timeline"
            required
            defaultValue=""
            className="w-full rounded-lg border border-navy-900/10 bg-white px-3 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500"
          >
            <option value="" disabled>
              Select
            </option>
            {timelineOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button type="submit" className="w-full">
        {status === "submitting" ? "Sending..." : "Get My Free Quote"}
      </Button>
      {status === "error" && (
        <p className="text-center text-xs text-red-500">
          Something went wrong — please try again.
        </p>
      )}
      <p className="text-center text-[11px] text-slate-500">
        No spam. We call once to confirm your project.
      </p>
    </form>
  );
}
