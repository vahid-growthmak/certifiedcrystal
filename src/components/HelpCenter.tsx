"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/icons";

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "Do You Provide Certificates of Authenticity?",
    a: "Yes. Every crystal is tested by a NABL-accredited laboratory and ships with an independent certificate of authenticity — proof it's a genuine, natural stone.",
  },
  {
    q: "Do You Provide Guidance On Crystal Usage?",
    a: "Absolutely. We share care, cleansing and styling guidance so you can enjoy your crystal for its beauty and the intention behind it. Crystals are for spiritual and aesthetic enjoyment, not medical use.",
  },
  {
    q: "Do You Provide Safe and Secure Shipping?",
    a: "Yes — every order is carefully packed and shipped with tracking across India, with easy 7-day returns on eligible items.",
  },
  {
    q: "Do you offer bulk or corporate gifting?",
    a: "Yes, we offer beautifully boxed crystals for corporate and bulk gifting. Contact us for custom orders.",
  },
];

export default function HelpCenter() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="help-center-heading" className="bg-background">
      <div className="cc-container py-14 md:py-20">
        <h2 id="help-center-heading" className="cc-section-title mb-8 md:mb-10">
          Help Center
        </h2>

        <div className="mx-auto max-w-3xl">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <div key={item.q} className="border-b border-line">
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-[16px] font-medium text-heading transition-colors hover:text-brand"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`shrink-0 text-brand transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-sm leading-relaxed text-muted"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="/pages/contact" className="cc-btn">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
