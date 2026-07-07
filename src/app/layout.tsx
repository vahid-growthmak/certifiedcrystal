import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
