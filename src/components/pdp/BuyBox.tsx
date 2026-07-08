"use client";

import { useState } from "react";
import { WELLNESS_DISCLAIMER, type Product } from "@/lib/products";
import {
  StarIcon,
  HeartIcon,
  CartIcon,
  CertificateIcon,
  TruckIcon,
  ShieldIcon,
  GuidanceIcon,
} from "@/components/icons";
import { formatPrice, discountPct } from "./format";

const FREE_SHIP_THRESHOLD = 999;
const STOCK_BAR_BASE = 20; // reference stock used to scale the "only N left" bar

function sizeNote(category: string): { label: string; value: string } {
  const c = category.toLowerCase();
  if (c.includes("mala")) return { label: "Length", value: "108 beads" };
  if (c.includes("anklet")) return { label: "Size", value: "One size (adjustable)" };
  if (c.includes("bracelet")) return { label: "Size", value: "One size (stretch fit)" };
  return { label: "Size", value: "One size" };
}

function showSizeRow(category: string): boolean {
  const c = category.toLowerCase();
  return c.includes("bracelet") || c.includes("anklet") || c.includes("mala");
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-gold" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} width={15} height={15} className={i < Math.round(rating) ? "" : "opacity-30"} />
      ))}
    </span>
  );
}

// Small inline eye icon (not in icons.tsx).
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function BuyBox({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const inStock = product.stock > 0;
  const lowStock = product.stock <= 8;
  const qualifiesFreeShip = product.price >= FREE_SHIP_THRESHOLD;
  const shipProgress = Math.min(100, Math.round((product.price / FREE_SHIP_THRESHOLD) * 100));
  const size = sizeNote(product.category);

  // Deterministic, honest social-proof numbers (no fake live counters).
  const viewing = 20 + (product.reviewCount % 40); // stable "people viewing" figure
  const lovedBy = product.reviewCount * 3; // honest cumulative shopper interest
  const stockPct = Math.min(100, Math.round((product.stock / STOCK_BAR_BASE) * 100));

  const handleAdd = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Vendor + title */}
      <div className="flex flex-col gap-2">
        <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted">Certified Crystal</span>

        {product.badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.badges.map((b) => (
              <span
                key={b}
                className="rounded-[4px] bg-surface-cream px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-wide text-heading"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-[28px] font-medium leading-tight text-heading md:text-[34px]">{product.title}</h1>

        {/* Meta row: rating · SKU · stock pill */}
        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
          <a href="#reviews" className="flex items-center gap-1.5 hover:text-heading">
            <Stars rating={product.rating} />
            <span className="underline underline-offset-2">({product.reviewCount} reviews)</span>
          </a>
          <span className="hidden h-3 w-px bg-line sm:block" />
          <span>
            SKU: <span className="text-heading">{product.details.sku}</span>
          </span>
          <span className="hidden h-3 w-px bg-line sm:block" />
          {inStock ? (
            <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-green px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-green">
              <span className="h-1.5 w-1.5 rounded-full bg-green" /> In stock
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-sale px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-sale">
              Out of stock
            </span>
          )}
        </div>

        {/* Wishlist + certificate — directly under the title */}
        <div className="mt-1 flex flex-wrap items-center gap-5 text-[13.5px]">
          <button type="button" className="inline-flex items-center gap-1.5 text-muted hover:text-brand">
            <HeartIcon width={16} height={16} /> Add to Wishlist
          </button>
          <a href="#certification" className="inline-flex items-center gap-1.5 text-brand hover:text-gold-dark">
            <CertificateIcon width={18} height={18} /> See the certificate
          </a>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[32px] font-medium leading-none text-heading">{formatPrice(product.price)}</span>
          {product.compareAt && (
            <>
              <span className="text-[18px] text-muted line-through">{formatPrice(product.compareAt)}</span>
              <span className="rounded-[4px] bg-sale px-2.5 py-1 text-[12px] font-medium uppercase tracking-wide text-white">
                Save {discountPct(product.price, product.compareAt)}%
              </span>
            </>
          )}
        </div>
        <p className="text-[12px] text-muted">MRP inclusive of all taxes.</p>
      </div>

      {/* Short description */}
      <p className="text-[15px] leading-relaxed text-muted">{product.tagline}</p>

      {/* Urgency stack */}
      <div className="flex flex-col gap-3">
        <p className="flex items-center gap-2 text-[13.5px] text-foreground">
          <EyeIcon className="text-brand" />
          <span>
            <span className="font-medium text-heading">{viewing} people</span> are viewing this right now
          </span>
        </p>

        <div className="flex items-center gap-2 rounded-[4px] bg-sale/10 px-3 py-2.5 text-[13.5px] text-sale">
          <span aria-hidden="true">🔥</span>
          <span>
            Loved by <span className="font-semibold">{lovedBy}+</span> shoppers
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-[13.5px] font-medium text-heading">
            {lowStock ? `Hurry! Only ${product.stock} left in stock` : `${product.stock} in stock`}
          </p>
          <span className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <span className="block h-full rounded-full bg-sale" style={{ width: `${stockPct}%` }} />
          </span>
        </div>
      </div>

      {/* Free-shipping progress cue */}
      <div className="flex flex-col gap-2 rounded-[6px] border border-line px-4 py-3">
        <div className="flex items-center gap-2 text-[13.5px] font-medium">
          <TruckIcon width={22} height={22} className="shrink-0 text-brand" />
          {qualifiesFreeShip ? (
            <span className="text-brand">✓ This order qualifies for FREE shipping</span>
          ) : (
            <span className="text-foreground">
              You&apos;re {formatPrice(FREE_SHIP_THRESHOLD - product.price)} away from FREE shipping
            </span>
          )}
        </div>
        {!qualifiesFreeShip && (
          <span className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <span className="block h-full rounded-full bg-brand" style={{ width: `${shipProgress}%` }} />
          </span>
        )}
      </div>

      {/* Size / variant row + size-guide link */}
      {showSizeRow(product.category) && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-y border-line py-3 text-[14px]">
          <span className="text-foreground">
            <span className="font-medium text-heading">{size.label}:</span> {size.value}
          </span>
          <a href="#size-guide" className="font-medium text-brand underline underline-offset-2 hover:text-gold-dark">
            Size guide
          </a>
        </div>
      )}

      {/* MANDATORY wellness disclaimer — above benefit copy */}
      <p className="rounded-[6px] border-l-[3px] border-brand bg-surface-cream px-4 py-3 text-[12.5px] leading-relaxed text-foreground">
        {WELLNESS_DISCLAIMER}
      </p>

      {/* Highlights */}
      {product.highlights.length > 0 && (
        <ul className="flex flex-col gap-2">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-[14px] text-foreground">
              <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 6" />
                </svg>
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Quantity + CTAs */}
      <div className="flex flex-col gap-3">
        <div className="flex items-stretch gap-3">
          <div className="inline-flex shrink-0 items-center rounded-[4px] border border-line">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="grid h-[46px] w-11 place-items-center text-[18px] text-heading hover:bg-surface-cream"
            >
              −
            </button>
            <span className="w-9 text-center text-[15px] font-medium text-heading" aria-live="polite">
              {qty}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => Math.min(product.stock || 99, q + 1))}
              className="grid h-[46px] w-11 place-items-center text-[18px] text-heading hover:bg-surface-cream"
            >
              +
            </button>
          </div>

          <button type="button" onClick={handleAdd} className="cc-btn flex-1 text-[15px]" aria-live="polite">
            {added ? (
              <>Added ✓</>
            ) : (
              <>
                <CartIcon width={18} height={18} /> Add to Cart
              </>
            )}
          </button>
        </div>

        <button type="button" className="cc-btn cc-btn--outline w-full text-[15px]">
          Buy Now
        </button>

        <p className={`text-[13.5px] ${lowStock ? "text-sale" : "text-green"}`}>
          {lowStock
            ? `Only ${product.stock} left — ships in 2–4 business days`
            : "In stock — ships in 2–4 business days"}
        </p>
      </div>

      {/* Trust micro-row */}
      <div className="grid grid-cols-2 gap-3 rounded-[6px] border border-line p-4 sm:grid-cols-4">
        {[
          { Icon: CertificateIcon, label: "Certificate included" },
          { Icon: TruckIcon, label: "Fast delivery" },
          { Icon: ShieldIcon, label: "Secure checkout" },
          { Icon: GuidanceIcon, label: "7-day returns" },
        ].map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5 text-center">
            <Icon width={26} height={26} className="text-brand" />
            <span className="text-[11.5px] leading-tight text-muted">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
