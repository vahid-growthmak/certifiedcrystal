"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "About Us", href: "/pages/about-us" },
  { label: "Contact Us", href: "/pages/contact-us" },
  { label: "Blogs", href: "/blogs/news" },
  { label: "Vidhi", href: "/pages/vidhi" },
];

const OFFERS = [
  "Independent certificate of authenticity with every order",
  "Free shipping across India over ₹999",
  "Easy 7-day returns on eligible items",
];

export default function TopBar() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShow(false);
      const t = setTimeout(() => {
        setI((prev) => (prev + 1) % OFFERS.length);
        setShow(true);
      }, 350);
      return () => clearTimeout(t);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-brand text-white">
      <div className="cc-container flex h-[41px] items-center justify-between text-[13px]">
        {/* Left links — hidden on mobile */}
        <nav aria-label="Utility navigation" className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/85 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Rotating offer — centered on desktop, full width on mobile */}
        <p
          className="flex-1 text-center md:flex-none md:text-right"
          aria-live="polite"
        >
          <span
            className="inline-block transition-opacity duration-300 ease-out"
            style={{ opacity: show ? 1 : 0 }}
          >
            {OFFERS[i]}
          </span>
        </p>
      </div>
    </div>
  );
}
