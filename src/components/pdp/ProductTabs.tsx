"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "@/components/icons";
import type { Product } from "@/lib/products";

// Small inline ruler icon (not in icons.tsx).
function RulerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8.5 8.5 3l12.5 12.5L15.5 21 3 8.5Z" />
      <path d="m7 9 1.5 1.5M10 6l2 2M13 9l1.5 1.5M9.5 12.5 11 14" />
    </svg>
  );
}

const SIZES = [
  { label: "Small", range: "14–16 cm" },
  { label: "Medium", range: "16–18 cm" },
  { label: "Large", range: "18–20 cm" },
];

function reassurance(category: string): string {
  const c = category.toLowerCase();
  if (c.includes("mala")) return "Malas are a fixed 108-bead length, one size.";
  if (c.includes("anklet")) return "Anklets have an adjustable extender chain to fit most ankles comfortably.";
  if (c.includes("pendant"))
    return "Pendants come on a standard-length chain — the size shown is the pendant itself, not the wrist.";
  return "Most bracelets are a comfortable stretch fit (≈18–20 cm).";
}

function Section({
  title,
  open,
  onToggle,
  children,
  id,
}: {
  title: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className={`border-b border-line last:border-0 ${id ? "scroll-mt-28" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="flex items-center gap-2.5 text-[17px] font-medium text-heading">{title}</span>
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

  // Open (and scroll to) the Size & Fit row when linked from the buy box.
  useEffect(() => {
    const openSize = () => {
      if (window.location.hash === "#size-guide") {
        setOpen((s) => ({ ...s, sizefit: true }));
        window.requestAnimationFrame(() =>
          document.getElementById("size-guide")?.scrollIntoView({ behavior: "smooth", block: "start" }),
        );
      }
    };
    openSize();
    window.addEventListener("hashchange", openSize);
    return () => window.removeEventListener("hashchange", openSize);
  }, []);

  const d = product.details;

  return (
    <div className="rounded-[6px] border border-line bg-white px-5 sm:px-7">
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

      <Section
        id="size-guide"
        title={
          <>
            <RulerIcon className="text-brand" /> Size &amp; Fit
          </>
        }
        open={!!open.sizefit}
        onToggle={() => toggle("sizefit")}
      >
        <h3 className="text-[14px] font-semibold text-heading">How to measure your wrist</h3>
        <ol className="mt-2 flex flex-col gap-2 text-[14px] leading-relaxed text-foreground">
          <li className="flex gap-2.5">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/10 text-[11px] font-bold text-brand">
              1
            </span>
            <span>Wrap a thin strip of paper (or a soft measuring tape) snugly around your wrist.</span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/10 text-[11px] font-bold text-brand">
              2
            </span>
            <span>Mark where it overlaps, then measure that length in centimetres — that&apos;s your wrist size.</span>
          </li>
        </ol>

        <div className="mt-5 overflow-hidden rounded-[6px] border border-line">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr className="bg-surface-cream text-left text-[12.5px] uppercase tracking-wide text-muted">
                <th className="px-4 py-2.5 font-semibold">Size</th>
                <th className="px-4 py-2.5 font-semibold">Wrist measurement</th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((s) => (
                <tr key={s.label} className="border-t border-line">
                  <td className="px-4 py-2.5 font-medium text-heading">{s.label}</td>
                  <td className="px-4 py-2.5 text-foreground">{s.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 rounded-[6px] border-l-[3px] border-brand bg-surface-cream px-4 py-3 text-[13.5px] leading-relaxed text-foreground">
          {reassurance(product.category)}
        </p>
      </Section>
    </div>
  );
}
