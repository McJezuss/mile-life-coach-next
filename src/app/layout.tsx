import { Bebas_Neue, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Headings
const glacial = localFont({
  src: "glacial-indifference.woff2",
  display: "swap",
  variable: "--font-glacial-indifference",
});

// Normal text
const fraunces = Fraunces({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(`${glacial.variable} ${fraunces.variable}`)}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
