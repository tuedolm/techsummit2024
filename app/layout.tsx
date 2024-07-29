import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Summit 2024",
  description: "Viet Tech Summit 2024 - Biggest Vietnamese Tech Summit in the U.S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
