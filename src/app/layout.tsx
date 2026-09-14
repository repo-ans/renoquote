import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RenoQuotes — Verified Renovation Leads",
  description:
    "RenoQuotes connects homeowners with verified local renovation contractors across the United States and Canada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream-50 text-ink-900">
        {children}
      </body>
    </html>
  );
}
