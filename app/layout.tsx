
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D0DON — Portfolio",
  description: "Independent artist, music producer and digital creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
