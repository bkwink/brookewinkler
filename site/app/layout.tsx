import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Brooke Winkler — ME + AE | Michigan Tech '30",
  description:
    "Brooke Winkler is a first-year Mechanical + Aerospace Engineering student at Michigan Tech. FRC captain, robotics mentor, motorsports fan.",
  openGraph: {
    title: "Brooke Winkler — Michigan Tech '30",
    description:
      "First-year Mechanical + Aerospace Engineering student at Michigan Tech. FRC captain, robotics, motorsports.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
