import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { StepCard } from "@/components/StepCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";
import { AnimatedText } from "@/components/AnimatedText";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

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

const steps = [
  {
    title: "Tell us about your project",
    description:
      "A quick 30-second form — what you need, your budget range and timeline.",
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
];

const faqs = [
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
    question: "What kinds of projects do you cover?",
    answer:
      "Bathrooms, kitchens, basements, decks, fencing, concrete and larger renovations. Pick the closest match on the form — we'll confirm the details on the call.",
  },
  {
    question: "What areas do you cover?",
    answer: "We match homeowners with vetted contractors across the United States and Canada.",
  },
  {
    question: "How fast will someone contact me?",
    answer:
      "After we confirm your details, the contractor typically calls within the hour during business hours.",
  },
];

export default function HomeownersPage() {
  return (
    <>
      <Nav variant="homeowner" />
      <main className="flex-1">
        <Section className="pb-16 pt-14 sm:pt-20">
          <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge>Licensed &amp; Vetted</Badge>
                <Badge>Serving the US &amp; Canada</Badge>
                <Badge>Fast, Free Quotes</Badge>
              </div>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
                <AnimatedText
                  text="Get Matched With a Verified Renovation Pro"
                  highlightFrom={4}
                />
              </h1>
              <p className="mt-4 max-w-lg text-base text-slate-500 sm:text-lg">
                Free quote, no obligation. Serving homeowners across the US
                and Canada.
              </p>
            </div>

            <LeadForm
              budgetOptions={budgetOptions}
              timelineOptions={timelineOptions}
            />
          </Container>
        </Section>

        <Section className="bg-white py-24 sm:py-32">
          <Container>
            <h2 className="text-center text-3xl font-bold text-navy-900 sm:text-5xl lg:text-[75px]">
              How it works
            </h2>
            <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-3">
              {steps.map((step, i) => (
                <StaggerItem key={step.title}>
                  <StepCard
                    index={i + 1}
                    title={step.title}
                    description={step.description}
                  />
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </Section>

        <Section className="py-24 sm:py-32">
          <Container>
            <StaggerGrid className="grid gap-8 sm:grid-cols-3">
              <StaggerItem className="text-center">
                <p className="text-3xl transition-transform duration-300 hover:scale-110">
                  🛡️
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-navy-900 sm:text-[32px]">
                  Licensed &amp; vetted
                </h3>
                <p className="mt-1 text-base text-slate-500">
                  We only work with contractors who show up and call back.
                </p>
              </StaggerItem>
              <StaggerItem className="text-center">
                <p className="text-3xl transition-transform duration-300 hover:scale-110">
                  📍
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-navy-900 sm:text-[32px]">
                  Coverage across the US &amp; Canada
                </h3>
                <p className="mt-1 text-base text-slate-500">
                  A vetted local contractor wherever you are — not a call
                  center reading from a script.
                </p>
              </StaggerItem>
              <StaggerItem className="text-center">
                <p className="text-3xl transition-transform duration-300 hover:scale-110">
                  🤝
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-navy-900 sm:text-[32px]">
                  No obligation
                </h3>
                <p className="mt-1 text-base text-slate-500">
                  A free quote with zero pressure to book.
                </p>
              </StaggerItem>
            </StaggerGrid>
          </Container>
        </Section>

        <Section className="bg-white py-24 sm:py-32">
          <Container className="max-w-2xl">
            <h2 className="text-center text-3xl font-bold text-navy-900 sm:text-5xl lg:text-[75px]">
              Common questions
            </h2>
            <div className="mt-8">
              <FAQAccordion items={faqs} />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
