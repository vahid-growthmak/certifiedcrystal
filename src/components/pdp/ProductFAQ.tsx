"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/icons";
import type { FAQItem } from "@/lib/products";

export default function ProductFAQ({ faq }: { faq: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  if (!faq.length) return null;

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24">
      <h2 id="faq-heading" className="cc-section-title !text-left">
        Frequently Asked Questions
      </h2>

      <div className="mt-5 rounded-[16px] border border-line bg-white px-5 sm:px-7">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="border-b border-line last:border-0">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="text-[15.5px] font-semibold text-heading">{item.q}</span>
                <ChevronDown
                  width={18}
                  height={18}
                  className={`shrink-0 text-brand transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && <p className="pb-5 text-[14.5px] leading-relaxed text-foreground">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
