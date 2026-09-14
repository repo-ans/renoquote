import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { AnimatedText } from "@/components/AnimatedText";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";
import { ImpactStats } from "@/components/ImpactStats";

export default function Home() {
  return (
    <>
      <Nav variant="home" />
      <main className="flex-1">
        <Section className="pb-16 pt-16 sm:pt-24">
          <Container className="text-center">
            <div className="mb-5 flex flex-wrap justify-center gap-2">
              <Badge>Kitchener–Waterloo · Cambridge · Guelph</Badge>
              <Badge>Phone-Verified Leads Only</Badge>
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-navy-900 sm:text-6xl md:text-7xl lg:text-8xl">
              <AnimatedText
                text="The honest way to get, and give, renovation leads."
                highlightFrom={7}
              />
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 sm:text-lg">
              No fake exclusivity. No shared leads pretending to be
              exclusive. Just verified homeowners, matched with vetted
              contractors.
            </p>
          </Container>
        </Section>

        <Section>
          <Container>
            <StaggerGrid className="grid gap-5 pb-20 sm:grid-cols-2">
              <StaggerItem hover={false}>
                <Link
                  href="/bathroom-renovation"
                  className="group block rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-accent-500/40"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                    Homeowners
                  </span>
                  <h2 className="mt-2 text-xl font-bold text-navy-900">
                    I need a renovation quote
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Get matched with a verified local contractor. Free, no
                    obligation.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition-all group-hover:gap-2">
                    Get a free quote →
                  </span>
                </Link>
              </StaggerItem>

              <StaggerItem hover={false}>
                <Link
                  href="/contractors"
                  className="group block rounded-2xl bg-navy-900 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-accent-500/40"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-400">
                    Contractors
                  </span>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    I want more leads
                  </h2>
                  <p className="mt-2 text-sm text-slate-300">
                    We run the ads and verify every lead by phone. You just
                    pick up the phone.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-400 transition-all group-hover:gap-2">
                    See how it works →
                  </span>
                </Link>
              </StaggerItem>
            </StaggerGrid>
          </Container>
        </Section>

        <Section className="bg-white py-24 sm:py-32">
          <Container>
            <ImpactStats />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
