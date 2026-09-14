import Link from "next/link";
import { Container } from "./Container";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/Renoquotes.cc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/renoquotes.cc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 011.15-1.77A4.9 4.9 0 015.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 2.21 9.67 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.82.34-.46.18-.78.39-1.13.74-.35.35-.56.67-.74 1.13-.14.34-.3.86-.34 1.82-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04.96.2 1.48.34 1.82.18.46.39.78.74 1.13.35.35.67.56 1.13.74.34.14.86.3 1.82.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.82-.34.46-.18.78-.39 1.13-.74.35-.35.56-.67.74-1.13.14-.34.3-.86.34-1.82.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.82a3.1 3.1 0 00-.74-1.13 3.1 3.1 0 00-1.13-.74c-.34-.14-.86-.3-1.82-.34-1.23-.06-1.58-.07-4.73-.07zm0 3.7a4.3 4.3 0 110 8.6 4.3 4.3 0 010-8.6zm0 1.8a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.47-1.98a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-cream-100">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-lg font-bold text-white">
              Reno<span className="text-accent-400">Quotes</span>
            </span>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors hover:bg-accent-500 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="font-semibold text-white">Legal</span>
            <Link href="#" className="text-slate-300 hover:text-accent-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-300 hover:text-accent-400">
              Terms of Service
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="font-semibold text-white">Navigation</span>
            <Link
              href="/bathroom-renovation"
              className="text-slate-300 hover:text-accent-400"
            >
              Get a Quote
            </Link>
            <Link
              href="/contractors"
              className="text-slate-300 hover:text-accent-400"
            >
              For Contractors
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="font-semibold text-white">
              Contact Information
            </span>
            <span className="text-slate-300">
              Serving Kitchener, Waterloo, Cambridge, Guelph &amp; Woodstock
            </span>
            <a
              href="mailto:hello@renoquotes.cc"
              className="text-slate-300 hover:text-accent-400"
            >
              hello@renoquotes.cc
            </a>
          </div>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-5 text-xs text-slate-300">
        © {new Date().getFullYear()} RenoQuotes. All rights reserved.
      </Container>
    </footer>
  );
}
