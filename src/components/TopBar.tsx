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
    <div className="bg-heading text-white">
      <div className="cc-container relative flex h-9 items-center justify-center text-[12px] tracking-[0.01em]">
        {/* Left links — hidden on mobile, absolutely positioned so the offer stays centered */}
        <nav
          aria-label="Utility navigation"
          className="absolute left-5 hidden items-center gap-6 md:flex"
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/70 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Rotating offer — always centered */}
        <p className="text-center text-white/90" aria-live="polite">
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
