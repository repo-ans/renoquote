export type BudgetOption = {
  value: string;
  label: string;
};

export type NicheContent = {
  slug: string;
  name: string;
  serviceArea: string;
  headline: string;
  subheadline: string;
  budgetOptions: BudgetOption[];
  timelineOptions: BudgetOption[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

// One config object per live niche. To clone a new niche (kitchens, basements, etc.)
// once it's actually live, add another entry here — the page component stays the same.
export const niches: Record<string, NicheContent> = {
  "bathroom-renovation": {
    slug: "bathroom-renovation",
    name: "Bathroom Renovation",
    serviceArea: "Kitchener, Waterloo, Cambridge & Guelph",
    headline: "Get Matched With a Verified Bathroom Renovation Pro",
    subheadline:
      "Free quote, no obligation. Serving Kitchener–Waterloo, Cambridge and Guelph.",
    budgetOptions: [
      { value: "under-8k", label: "Under $8,000" },
      { value: "8k-15k", label: "$8,000 – $15,000" },
      { value: "15k-30k", label: "$15,000 – $30,000" },
      { value: "30k-plus", label: "$30,000+" },
    ],
    timelineOptions: [
      { value: "asap", label: "ASAP" },
      { value: "1-3-months", label: "1–3 months" },
      { value: "exploring", label: "Just exploring" },
    ],
    steps: [
      {
        title: "Tell us about your project",
        description:
          "A quick 30-second form — your name, phone, budget range and timeline.",
      },
      {
        title: "We confirm the details",
        description:
          "A short call to verify it's really you and confirm your project — no spam, no robocalls.",
      },
      {
        title: "Get matched with a local pro",
        description:
          "A vetted contractor in your area reaches out, usually within the hour.",
      },
    ],
    faqs: [
      {
        question: "Is this actually free?",
        answer:
          "Yes. There's no cost and no obligation to get a quote. You only move forward if you like what the contractor offers.",
      },
      {
        question: "Will I get calls from a bunch of different contractors?",
        answer:
          "No. We match you with one vetted local contractor for your project, not a list of five companies competing for your attention.",
      },
      {
        question: "What areas do you cover?",
        answer:
          "Right now: Kitchener, Waterloo, Cambridge, Guelph, Woodstock and the surrounding area.",
      },
      {
        question: "How fast will someone contact me?",
        answer:
          "After we confirm your details, the contractor typically calls within the hour during business hours.",
      },
    ],
  },
};

export function getNiche(slug: string): NicheContent | undefined {
  return niches[slug];
}
