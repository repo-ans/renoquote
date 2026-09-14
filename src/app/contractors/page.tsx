import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { StepCard } from "@/components/StepCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PhoneMockup } from "@/components/PhoneMockup";
import { ContractorInquiryForm } from "@/components/ContractorInquiryForm";
import { Button } from "@/components/Button";
import { AnimatedText } from "@/components/AnimatedText";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";
import { Wallet, Clock, PhoneOff } from "lucide-react";

const problems = [
  {
    title: "Wasted ad spend",
    description:
      "You pay for clicks whether or not any of them turn into a real customer.",
    color: "#d6294f",
    icon: Wallet,
  },
  {
    title: "No time to chase leads",
    description:
      "You're on job sites, not answering Facebook messages and screening tire-kickers.",
    color: "#1e3a66",
    icon: Clock,
  },
  {
    title: "Unverified junk calls",
    description:
      "Wrong area, wrong budget, or not even real — you find out after you've already called back.",
    color: "#7a3b6e",
    icon: PhoneOff,
  },
];

const steps = [
  {
    title: "We run the ads",
    description:
      "Targeted Meta ads reach homeowners in your service area looking for exactly the work you do.",
  },
  {
    title: "We verify by phone",
    description:
      "Every lead is called and confirmed — real person, right area, real budget and timeline — before it ever reaches you.",
  },
  {
    title: "You get the lead",
    description:
      "Sent straight to your phone by text, ready to call. No dashboard to log into, no software to learn.",
  },
];

const differentiators = [
  {
    title: "Exclusive means exclusive",
    description:
      "When you buy an exclusive lead, it's locked to you in our system. It never enters a shared pool — not now, not later.",
  },
  {
    title: "Shared leads, honestly labeled",
    description:
      "If you choose the lower-cost shared tier, we tell you upfront it may go to a couple of other contractors. No pretending otherwise.",
  },
  {
    title: "Pay after your first lead",
    description:
      "Try us with zero risk. Your first lead is delivered before you pay a cent.",
  },
];

const valueProps = [
  {
    title: "No advertising to run",
    description:
      "We plan, launch and pay for the ads that find homeowners in your area. You never touch an ads account.",
  },
  {
    title: "No website or CRM to build",
    description:
      "We run the entire online funnel and lead pipeline ourselves. Nothing for you to build, host or log into.",
  },
  {
    title: "You just close the deal",
    description:
      "The lead lands on your phone, ready to call. A job like this can put $5,000–$6,000+ in your pocket — what you pay us is a small fraction of that.",
  },
];

const faqs = [
  {
    question: "Is the lead really exclusive?",
    answer:
      "Yes. In our system, exclusive leads are technically locked — once sold to you, that homeowner cannot be routed to anyone else. It's not a promise, it's how the pipeline is built.",
  },
  {
    question: "What exactly counts as a 'lead'?",
    answer:
      "A phone-verified homeowner: a real person, in your service area, with a real project and budget who wants a quote. It's not a booked appointment or a guaranteed sale — you still make the pitch.",
  },
  {
    question: "Do I pay for the ad spend?",
    answer:
      "No. We run and pay for the ads. You only pay per lead you actually receive.",
  },
  {
    question: "Is there a contract or signup fee?",
    answer: "No signup fee and no long-term contract. Pay per lead, period.",
  },
  {
    question: "What if a lead turns out to be bad?",
    answer:
      "If the phone number is wrong, the homeowner isn't in your service area, or the project doesn't match what was confirmed, tell us and we'll credit or replace it.",
  },
  {
    question: "What areas and services do you cover?",
    answer:
      "Right now: bathroom renovations, available across the US and Canada. We're expanding niche by niche as demand proves out.",
  },
];

export default function ContractorsPage() {
  return (
    <>
      <Nav variant="contractor" />
      <main className="flex-1">
        <Section className="bg-navy-950 pb-16 pt-14 text-white sm:pt-20">
          <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-accent-400">
                  Serving the US &amp; Canada
                </span>
              </div>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <AnimatedText
                  text="Stop chasing leads. Start closing jobs."
                  highlightFrom={3}
                  highlightClassName="text-accent-400"
                />
              </h1>
              <p className="mt-4 max-w-lg text-base text-slate-300 sm:text-lg">
                We run the ads, verify every homeowner by phone, and send you
                only the ones worth your time. You just pick up the phone.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#get-started">Get Your First Lead — Pay After</Button>
                <Button
                  href="#what-you-get"
                  variant="ghost"
                  className="border-white/20! text-white! hover:border-white/40!"
                >
                  What you get
                </Button>
              </div>
            </div>
            <PhoneMockup />
          </Container>
        </Section>

        <Section className="py-24 sm:py-32">
          <Container>
            <h2 className="text-center text-3xl font-bold text-navy-900 sm:text-5xl lg:text-[75px]">
              Why running your own ads doesn&apos;t work
            </h2>
            <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-3">
              {problems.map((p) => (
                <StaggerItem
                  key={p.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-900/5 transition-shadow duration-300 hover:shadow-md hover:ring-accent-500/30"
                >
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${p.color}1a` }}
                  >
                    <p.icon
                      className="h-7 w-7"
                      style={{ color: p.color }}
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-navy-900 sm:text-[32px]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-500">
                    {p.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGrid>
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
            <h2 className="text-center text-3xl font-bold text-navy-900 sm:text-5xl lg:text-[75px]">
              What makes us different
            </h2>
            <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-3">
              {differentiators.map((d) => (
                <StaggerItem
                  key={d.title}
                  className="rounded-2xl border border-accent-500/20 bg-accent-100/40 p-6 transition-all duration-300 hover:border-accent-500/50 hover:shadow-md"
                >
                  <h3 className="text-2xl font-semibold text-navy-900 sm:text-[32px]">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-500">
                    {d.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </Section>

        <Section id="what-you-get" className="bg-white py-24 sm:py-32">
          <Container>
            <h2 className="text-center text-3xl font-bold text-navy-900 sm:text-5xl lg:text-[75px]">
              Everything you don&apos;t have to do
            </h2>
            <p className="mx-auto mt-2 max-w-md text-center text-base text-slate-500">
              No advertising, no website, no CRM. You focus on the one thing
              that actually makes you money — talking to the homeowner.
            </p>
            <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-3">
              {valueProps.map((v) => (
                <StaggerItem
                  key={v.title}
                  className="rounded-2xl bg-cream-50 p-6 shadow-sm ring-1 ring-navy-900/5 transition-all duration-300 hover:shadow-md hover:ring-accent-500/30"
                >
                  <h3 className="text-2xl font-semibold text-navy-900 sm:text-[32px]">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-500">
                    {v.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </Section>

        <Section className="py-24 sm:py-32">
          <Container className="max-w-2xl">
            <h2 className="text-center  font-bold text-navy-900 text-3xl sm:text-5xl lg:text-[75px]">
              Common questions
            </h2>
            <div className="mt-8">
              <FAQAccordion items={faqs} />
            </div>
          </Container>
        </Section>

        <Section className="bg-navy-950 py-24 sm:py-32">
          <Container className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-[75px] font-bold text-white">
                Ready for your first lead?
              </h2>
              <p className="mt-3 max-w-md text-slate-300 text-base">
                Tell us where you work and what you build. We&apos;ll reach
                out to confirm your service area and get your first lead
                moving — pay only after it&apos;s delivered.
              </p>
            </div>
            <ContractorInquiryForm />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
