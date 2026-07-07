"use client";

import { useState } from "react";

export default function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const safe = images.length ? images : ["/img/global/fabicon_64.png"];
  const main = safe[Math.min(active, safe.length - 1)];

  return (
    <div className="flex flex-col gap-4">
      <div className="group relative overflow-hidden rounded-[16px] border border-line bg-white">
        {/* Certified ribbon corner */}
        <span className="absolute left-0 top-0 z-10 rounded-br-[14px] rounded-tl-[15px] bg-brand px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm">
          Certified
        </span>

        <div className="aspect-square w-full overflow-hidden">
          <img
            src={main}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
      </div>

      {safe.length > 1 && (
        <div className="flex flex-wrap gap-3">
          {safe.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-pressed={active === i}
              className={`h-[74px] w-[74px] overflow-hidden rounded-[10px] border-2 transition-colors ${
                active === i ? "border-brand" : "border-line hover:border-brand/40"
              }`}
            >
              <img src={img} alt={`${title} thumbnail ${i + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
