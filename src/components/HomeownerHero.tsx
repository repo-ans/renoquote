"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "./Badge";
import { AnimatedText } from "./AnimatedText";
import { ServiceSearch } from "./ServiceSearch";
import { MultiStepLeadForm } from "./MultiStepLeadForm";

export function HomeownerHero() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2">
        <Badge>Licensed &amp; Vetted</Badge>
        <Badge>Serving the US &amp; Canada</Badge>
        <Badge>Fast, Free Quotes</Badge>
      </div>
      <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
        <AnimatedText
          text="What Does Your Home Need?"
          highlightFrom={3}
        />
      </h1>
      <p className="mt-4 max-w-lg text-base text-slate-500 sm:text-lg">
        Tell us what you&apos;re looking for — bathroom reno, HVAC, roofing,
        anything — and get matched with a verified local pro. Free, no
        obligation.
      </p>

      <div className="mt-6 max-w-lg">
        <p className="mb-2 text-sm font-semibold text-navy-900">
          What is your job?
        </p>
        <ServiceSearch onSelect={setSelectedService} />
      </div>

      <AnimatePresence>
        {selectedService && (
          <MultiStepLeadForm
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
