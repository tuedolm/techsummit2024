import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Summit 2024",
  description: "Viet Tech Summit 2024 - Biggest Vietnamese Tech Summit in the U.S",
  openGraph: {
    images: [
      {
        url: "https://www.techsummitusa.org/hero-banner.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
