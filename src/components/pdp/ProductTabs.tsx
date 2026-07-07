"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "@/components/icons";
import type { Product } from "@/lib/products";

function Section({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-[17px] font-semibold text-heading">{title}</span>
        <ChevronDown
          width={18}
          height={18}
          className={`shrink-0 text-brand transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="pb-5 text-[14.5px] leading-relaxed text-foreground">{children}</div>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-3 border-b border-line/70 py-2.5 last:border-0">
      <dt className="text-[13.5px] font-medium text-muted">{label}</dt>
      <dd className="text-[14px] text-heading">{value}</dd>
    </div>
  );
}

export default function ProductTabs({ product }: { product: Product }) {
  const hasStones = product.stones.length > 0;
  // First section open by default.
  const [open, setOpen] = useState<Record<string, boolean>>({ description: true });
  const toggle = (k: string) => setOpen((s) => ({ ...s, [k]: !s[k] }));

  const d = product.details;

  return (
    <div className="rounded-[16px] border border-line bg-white px-5 sm:px-7">
      <Section title="Description" open={!!open.description} onToggle={() => toggle("description")}>
        <p>{product.description}</p>
        <p className="mt-3 font-semibold text-heading">How to use</p>
        <p className="mt-1">{product.howToUse}</p>
      </Section>

      {hasStones && (
        <Section title="Crystal Meaning" open={!!open.meaning} onToggle={() => toggle("meaning")}>
          <ul className="flex flex-col gap-3">
            {product.stones.map((s) => (
              <li key={s.stone} className="flex flex-col gap-1">
                <a
                  href={s.href}
                  className="inline-flex items-center gap-1 font-semibold text-brand hover:text-gold"
                >
                  {s.stone} <ChevronRight width={14} height={14} />
                </a>
                <span className="text-[14px] text-foreground">{s.note}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Details" open={!!open.details} onToggle={() => toggle("details")}>
        <dl>
          <Row label="Net weight" value={d.netWeight} />
          {d.dimensions && <Row label="Dimensions" value={d.dimensions} />}
          <Row label="Country of origin" value={d.origin} />
          <Row label="Material" value={d.material} />
          <Row
            label="Certification"
            value="Tested by a NABL-accredited laboratory; independent certificate included"
          />
          <Row label="Seller" value={d.seller} />
          <Row label="Manufacturer" value={d.manufacturer} />
          <Row label="SKU" value={d.sku} />
        </dl>
      </Section>

      <Section title="Care & Cleansing" open={!!open.care} onToggle={() => toggle("care")}>
        <p>{product.care}</p>
      </Section>
    </div>
  );
}
