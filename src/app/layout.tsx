import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// Hongo theme uses Jost (geometric sans) for everything.
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Certified Crystal – Lab-Tested Natural Crystals & Gemstone Jewellery",
  description:
    "Buy 100% authentic, lab-tested natural crystals & gemstone jewellery with independent lab-certified authenticity. Shop bracelets, pendants, clusters & more — fast, safe delivery across India.",
  icons: { icon: "/img/global/fabicon_64.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${jost.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
