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
import { getNiche } from "@/lib/niches";

const niche = getNiche("bathroom-renovation")!;

export default function BathroomRenovationPage() {
  return (
    <>
      <Nav variant="homeowner" />
      <main className="flex-1">
        <Section className="pb-16 pt-14 sm:pt-20">
          <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge>Licensed &amp; Vetted</Badge>
                <Badge>Local to Your Area</Badge>
                <Badge>Fast, Free Quotes</Badge>
              </div>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
                <AnimatedText text={niche.headline} highlightFrom={5} />
              </h1>
              <p className="mt-4 max-w-lg text-base text-slate-500 sm:text-lg">
                {niche.subheadline}
              </p>
            </div>

            <LeadForm
              nicheSlug={niche.slug}
              budgetOptions={niche.budgetOptions}
              timelineOptions={niche.timelineOptions}
            />
          </Container>
        </Section>

        <Section className="bg-white py-24 sm:py-32">
          <Container>
            <h2 className="text-center text-3xl font-bold text-navy-900 sm:text-5xl lg:text-[75px]">
              How it works
            </h2>
            <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-3">
              {niche.steps.map((step, i) => (
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
                  Local to {niche.serviceArea}
                </h3>
                <p className="mt-1 text-base text-slate-500">
                  No national call centers — just contractors near you.
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
              <FAQAccordion items={niche.faqs} />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
