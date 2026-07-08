"use client";

import { useState } from "react";

// Inline expand/zoom icon (not in icons.tsx).
function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={17}
      height={17}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

export default function ProductGallery({
  images,
  title,
  onSale = true,
}: {
  images: string[];
  title: string;
  onSale?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const safe = images.length ? images : ["/img/global/fabicon_64.png"];
  const main = safe[Math.min(active, safe.length - 1)];
  const hasThumbs = safe.length > 1;

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-4">
      {/* Thumbnails — left column on desktop, row below the image on mobile */}
      {hasThumbs && (
        <div className="cc-noscroll order-2 flex gap-3 overflow-x-auto pb-1 md:order-1 md:max-h-[600px] md:w-[82px] md:shrink-0 md:flex-col md:overflow-y-auto md:pb-0">
          {safe.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-pressed={active === i}
              className={`h-[74px] w-[74px] shrink-0 overflow-hidden rounded-[4px] border bg-surface-cream transition-colors md:w-full ${
                active === i ? "border-brand" : "border-line hover:border-brand/50"
              }`}
            >
              <img src={img} alt={`${title} thumbnail ${i + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="order-1 min-w-0 md:order-2 md:flex-1">
        <div className="group relative overflow-hidden rounded-[6px] bg-surface-cream">
          {onSale && (
            <span className="absolute left-3 top-3 z-10 rounded-[4px] bg-green px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
              Sale
            </span>
          )}

          <button
            type="button"
            onClick={() => setZoom(true)}
            aria-label="Zoom image"
            className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-heading shadow-sm transition-colors hover:bg-white hover:text-gold-dark"
          >
            <ExpandIcon />
          </button>

          <div className="aspect-square w-full overflow-hidden">
            <img
              src={main}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — enlarged image`}
          onClick={() => setZoom(false)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-6"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setZoom(false)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-heading hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <img
            src={main}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-[6px] object-contain"
          />
        </div>
      )}
    </div>
  );
}
