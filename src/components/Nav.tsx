"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./Button";
import { Container } from "./Container";

type Variant = "home" | "homeowner" | "contractor";

const ctaByVariant: Record<Variant, { label: string; href: string }> = {
  home: { label: "Get a Free Quote", href: "/homeowners" },
  homeowner: { label: "Get a Free Quote", href: "#quote-form" },
  contractor: { label: "Get Your First Lead", href: "#get-started" },
};

const menuContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const menuItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export function Nav({ variant = "home" }: { variant?: Variant }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cta = ctaByVariant[variant];

  // Contractors page opens on a dark hero. The header is `sticky`, so it sits
  // in normal flow above the hero rather than overlaying it — "transparent"
  // would otherwise reveal the plain cream body background, not the hero,
  // making light text invisible. Matching the header's idle bg to the hero's
  // own color makes the seam disappear instead.
  const startsOnDark = variant === "contractor";
  // The full-screen mobile menu is always a dark navy takeover, so the header
  // itself switches to match while it's open, regardless of page/scroll state.
  const dark = open || (startsOnDark && !scrolled);
  const idleBg = startsOnDark ? "bg-navy-950" : "bg-transparent";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerBg = open
    ? "border-transparent bg-navy-950"
    : scrolled
      ? "border-navy-900/5 bg-cream-50/90 backdrop-blur"
      : `border-transparent ${idleBg}`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${headerBg}`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex items-center rounded-lg bg-white px-2.5 py-1 shadow-sm">
            <Image
              src="/renoquotes-logo-full.png"
              alt="RenoQuotes"
              width={1017}
              height={612}
              priority
              className="h-12 w-auto object-contain"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/homeowners"
            className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full ${
              dark
                ? "text-white/90 hover:text-accent-400"
                : "text-navy-800 hover:text-accent-600"
            }`}
          >
            For Homeowners
          </Link>
          <Link
            href="/contractors"
            className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full ${
              dark
                ? "text-white/90 hover:text-accent-400"
                : "text-navy-800 hover:text-accent-600"
            }`}
          >
            For Contractors
          </Link>
          <Button href={cta.href} className="px-5! py-2.5! text-sm">
            {cta.label}
          </Button>
        </nav>

        <button
          type="button"
          className={`relative z-50 flex h-9 w-9 items-center justify-center rounded-md transition-colors md:hidden ${
            dark ? "text-white" : "text-navy-900"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <motion.path
              animate={{ d: open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16" }}
              transition={{ duration: 0.25 }}
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
            />
          </svg>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 2.25rem) 2rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.25rem) 2rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.25rem) 2rem)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-center bg-navy-950 md:hidden"
          >
            <motion.div
              variants={menuContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-2 px-8"
            >
              <motion.div variants={menuItem}>
                <Link
                  href="/homeowners"
                  className="block py-3 text-4xl font-bold text-white"
                  onClick={() => setOpen(false)}
                >
                   For Homeowners
                </Link>
              </motion.div>
              <motion.div variants={menuItem}>
                <Link
                  href="/contractors"
                  className="block py-3 text-4xl font-bold text-white"
                  onClick={() => setOpen(false)}
                >
                  For Contractors
                </Link>
              </motion.div>
              <motion.div variants={menuItem} className="mt-8">
                <Button
                  href={cta.href}
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
