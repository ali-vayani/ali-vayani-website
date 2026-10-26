import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import { Analytics } from "@vercel/analytics/next";

const mono = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "ali vayani",
  description:
    "organizing hacktx, studying cs @ ut austin, back at stripe winter '27",
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
        <Analytics />
      </body>
    </html>
  );
}
