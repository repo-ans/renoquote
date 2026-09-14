"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Button } from "./Button";

export function ContractorInquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement)
        .value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      services: (form.elements.namedItem("services") as HTMLInputElement)
        .value,
    };

    try {
      const res = await fetch("/api/contractor-inquiry", {
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
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          We&apos;ll reach out to confirm your service area and get your
          first lead moving.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      id="get-started"
      onSubmit={handleSubmit}
      className="space-y-3 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-navy-900/5 sm:p-6"
    >
      <div>
        <label className="mb-1 block text-base font-medium text-slate-500">
          Your name
        </label>
        <input
          name="name"
          required
          placeholder="Simran"
          className="w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-slate-500">
          Business name
        </label>
        <input
          name="business"
          required
          placeholder="Your company"
          className="w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-slate-500">
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
        <label className="mb-1 block text-base font-medium text-slate-500">
          What do you build?
        </label>
        <input
          name="services"
          required
          placeholder="Bathrooms, basements, kitchens..."
          className="w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500"
        />
      </div>

      <Button type="submit" className="w-full">
        {status === "submitting" ? "Sending..." : "Get Your First Lead"}
      </Button>
      {status === "error" && (
        <p className="text-center text-base text-red-500">
          Something went wrong — please try again.
        </p>
      )}
      <p className="text-center text-sm text-slate-500">
        Your first lead is on us to try — pay only after it&apos;s delivered.
      </p>
    </form>
  );
}
