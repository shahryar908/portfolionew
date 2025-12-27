import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahryar Backend Engineer | FastAPI • DevOps • AI Agents",
  description: "Specializing in FastAPI backend architecture, DevOps automation, and AI agent development. Building high-performance APIs and intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased selection:bg-accent selection:text-accent-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
