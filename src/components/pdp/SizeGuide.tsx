"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/icons";

// Small inline ruler icon (not in icons.tsx) — kept local per spec.
function RulerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
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

const SIZES: { label: string; range: string }[] = [
  { label: "Small", range: "14–16 cm" },
  { label: "Medium", range: "16–18 cm" },
  { label: "Large", range: "18–20 cm" },
];

function reassurance(category: string): string {
  const c = category.toLowerCase();
  if (c.includes("mala")) return "Malas are a fixed 108-bead length, one size.";
  if (c.includes("anklet")) return "Anklets have an adjustable extender chain to fit most ankles comfortably.";
  if (c.includes("pendant"))
    return "Pendants come on a standard-length chain — size shown is the pendant itself, not the wrist.";
  return "Most bracelets are a comfortable stretch fit (≈18–20 cm).";
}

export default function SizeGuide({ category }: { category: string }) {
  const [open, setOpen] = useState(false);

  return (
    <section id="size-guide" aria-labelledby="size-guide-heading" className="scroll-mt-24">
      <div className="overflow-hidden rounded-[14px] border border-line bg-white">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="size-guide-panel"
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
        >
          <span id="size-guide-heading" className="flex items-center gap-2.5 text-[16px] font-semibold text-heading">
            <RulerIcon className="text-brand" />
            Size &amp; Fit
          </span>
          <ChevronDown
            className={`shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div
          id="size-guide-panel"
          hidden={!open}
          className="border-t border-line px-5 py-5"
        >
          {/* How to measure */}
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

          {/* Size table */}
          <div className="mt-5 overflow-hidden rounded-[10px] border border-line">
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

          {/* Reassurance */}
          <p className="mt-4 rounded-[10px] border-l-4 border-brand bg-surface-cream px-4 py-3 text-[13.5px] leading-relaxed text-foreground">
            {reassurance(category)}
          </p>
        </div>
      </div>
    </section>
  );
}
