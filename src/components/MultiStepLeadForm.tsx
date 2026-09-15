"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Button } from "./Button";

const budgetOptions = [
  { value: "under-8k", label: "Under $8,000" },
  { value: "8k-15k", label: "$8,000 – $15,000" },
  { value: "15k-30k", label: "$15,000 – $30,000" },
  { value: "30k-plus", label: "$30,000+" },
];

const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "exploring", label: "Just exploring" },
];

type FormData = {
  service: string;
  timeline: string;
  budget: string;
  address: string;
  city: string;
  postalCode: string;
  name: string;
  email: string;
  phone: string;
};

const TOTAL_STEPS = 3;

const inputClass =
  "w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500";
const labelClass = "mb-1 block text-xs font-medium text-slate-500";

export function MultiStepLeadForm({
  service,
  onClose,
}: {
  service: string;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "done" | "error"
  >("idle");
  const [data, setData] = useState<FormData>({
    service,
    timeline: "",
    budget: "",
    address: "",
    city: "",
    postalCode: "",
    name: "",
    email: "",
    phone: "",
  });

  function update<K extends keyof FormData>(field: K, value: FormData[K]) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function stepIsValid() {
    if (step === 1) return data.timeline && data.budget;
    if (step === 2) return data.address && data.city && data.postalCode;
    if (step === 3) return data.name && data.email && data.phone;
    return true;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/homeowner-lead", {
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

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-cream-100 hover:text-navy-900"
        >
          ✕
        </button>

        {status === "done" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-6 text-center"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-navy-900">
              Thank you for reaching out!
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              A representative will be in touch soon to confirm the details
              of your {data.service.toLowerCase()} project.
            </p>
            <Button onClick={onClose} className="mt-5 w-full">
              Close
            </Button>
          </motion.div>
        ) : (
          <>
            <p className="pr-8 text-xs font-semibold uppercase tracking-wide text-accent-600">
              {data.service}
            </p>
            <div className="mt-2 mb-5 h-1.5 w-full overflow-hidden rounded-full bg-cream-100">
              <motion.div
                animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-full bg-accent-500"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-semibold text-navy-900">
                      Tell us about the project
                    </h3>
                    <div>
                      <label className={labelClass}>Timeline</label>
                      <select
                        required
                        value={data.timeline}
                        onChange={(e) => update("timeline", e.target.value)}
                        className={inputClass}
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
                    <div>
                      <label className={labelClass}>Estimated budget</label>
                      <select
                        required
                        value={data.budget}
                        onChange={(e) => update("budget", e.target.value)}
                        className={inputClass}
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
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-semibold text-navy-900">
                      Where is the job?
                    </h3>
                    <div>
                      <label className={labelClass}>Street address</label>
                      <input
                        required
                        value={data.address}
                        onChange={(e) => update("address", e.target.value)}
                        placeholder="123 Main St"
                        className={inputClass}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>City</label>
                        <input
                          required
                          value={data.city}
                          onChange={(e) => update("city", e.target.value)}
                          placeholder="Cambridge"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Postal / ZIP code</label>
                        <input
                          required
                          value={data.postalCode}
                          onChange={(e) =>
                            update("postalCode", e.target.value)
                          }
                          placeholder="N1R 5S1"
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-semibold text-navy-900">
                      How can we reach you?
                    </h3>
                    <div>
                      <label className={labelClass}>Full name</label>
                      <input
                        required
                        value={data.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Sarah Miller"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input
                        required
                        type="email"
                        value={data.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="sarah@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone number</label>
                      <input
                        required
                        type="tel"
                        value={data.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="(519) 555-0123"
                        className={inputClass}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-3 pt-2">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep((s) => s - 1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={!stepIsValid() || status === "submitting"}
                >
                  {status === "submitting"
                    ? "Sending..."
                    : step < TOTAL_STEPS
                      ? "Next"
                      : "Submit"}
                </Button>
              </div>
              {status === "error" && (
                <p className="text-center text-xs text-red-500">
                  Something went wrong — please try again.
                </p>
              )}
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
