import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const mono = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "ali vayani",
  description:
    "cs @ ut austin • incoming summer 2026 swe intern @ stripe • building impactful tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
