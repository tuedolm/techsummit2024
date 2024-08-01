import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Summit 2024",
  description: "Viet Tech Summit 2024 - Biggest Vietnamese Tech Summit in the U.S",
  openGraph: {
    images: [
      {
        url: "https://www.techsummitusa.org/hero-banner.png",
        width: 800,
        height: 600,
        alt: "Tech Summit 2024 Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://www.techsummitusa.org/hero-banner.png",
        width: 800,
        height: 600,
        alt: "Tech Summit 2024 Preview Image",
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
      <body>{children}</body>
    </html>
  );
}
