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
        <StarIcon key={i} width={16} height={16} className={i < Math.round(rating) ? "" : "opacity-30"} />
      ))}
    </span>
  );
}

export default function BuyBox({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const lowStock = product.stock <= 8;
  const qualifiesFreeShip = product.price >= FREE_SHIP_THRESHOLD;
  const shipProgress = Math.min(100, Math.round((product.price / FREE_SHIP_THRESHOLD) * 100));
  const size = sizeNote(product.category);

  const handleAdd = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Title + rating */}
      <div className="flex flex-col gap-2">
        {product.badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.badges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-surface-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-[28px] font-semibold leading-tight text-heading md:text-[32px]">{product.title}</h1>
        <p className="text-[15px] text-muted">{product.tagline}</p>

        <a href="#reviews" className="flex items-center gap-2 text-[14px] text-muted hover:text-brand">
          <Stars rating={product.rating} />
          <span className="font-medium text-heading">{product.rating.toFixed(1)}</span>
          <span className="underline underline-offset-2">({product.reviewCount} reviews)</span>
        </a>

        {/* Quick actions — wishlist + certificate (kept near the top) */}
        <div className="mt-1 flex flex-wrap items-center gap-5 text-[13.5px]">
          <button type="button" className="inline-flex items-center gap-1.5 text-muted hover:text-brand">
            <HeartIcon width={16} height={16} /> Add to Wishlist
          </button>
          <a href="#certification" className="inline-flex items-center gap-1.5 text-brand hover:text-gold">
            <CertificateIcon width={18} height={18} /> See the certificate
          </a>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[30px] font-bold text-heading">{formatPrice(product.price)}</span>
          {product.compareAt && (
            <>
              <span className="text-[18px] text-muted line-through">{formatPrice(product.compareAt)}</span>
              <span className="rounded-full bg-sale/10 px-3 py-1 text-[13px] font-bold uppercase tracking-wide text-sale">
                Save {discountPct(product.price, product.compareAt)}%
              </span>
            </>
          )}
        </div>
        <p className="text-[12px] text-muted">MRP inclusive of all taxes.</p>
      </div>

      {/* Free-shipping progress cue */}
      <div className="flex flex-col gap-2 rounded-[10px] border border-line bg-white px-4 py-3">
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

      {/* Size / variant info + size-guide link */}
      {showSizeRow(product.category) && (
        <div className="flex flex-wrap items-center justify-between gap-2 text-[14px]">
          <span className="text-foreground">
            <span className="font-medium text-heading">{size.label}:</span> {size.value}
          </span>
          <a href="#size-guide" className="font-medium text-brand underline underline-offset-2 hover:text-gold">
            Size guide
          </a>
        </div>
      )}

      {/* MANDATORY wellness disclaimer — above benefit copy */}
      <p className="rounded-[10px] border-l-4 border-brand bg-surface-cream px-4 py-3 text-[12.5px] leading-relaxed text-foreground">
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

      {/* Honest stock line (real stock) */}
      <p className={`text-[14px] font-medium ${lowStock ? "text-sale" : "text-[#3d7a4e]"}`}>
        {lowStock
          ? `Only ${product.stock} left — ships in 2–4 business days`
          : "In stock — ships in 2–4 business days"}
      </p>

      {/* Quantity + CTAs */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <span className="text-[14px] font-medium text-heading">Quantity</span>
          <div className="inline-flex items-center rounded-full border border-line">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="grid h-10 w-10 place-items-center rounded-l-full text-[18px] text-heading hover:bg-surface-cream"
            >
              −
            </button>
            <span className="w-10 text-center text-[15px] font-semibold text-heading" aria-live="polite">
              {qty}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => Math.min(product.stock || 99, q + 1))}
              className="grid h-10 w-10 place-items-center rounded-r-full text-[18px] text-heading hover:bg-surface-cream"
            >
              +
            </button>
          </div>
        </div>

        <button type="button" onClick={handleAdd} className="cc-btn w-full text-[16px]" aria-live="polite">
          {added ? (
            <>Added ✓</>
          ) : (
            <>
              <CartIcon width={18} height={18} /> Add to Cart
            </>
          )}
        </button>
        <button type="button" className="cc-btn cc-btn--outline w-full text-[16px]">
          Buy Now
        </button>
      </div>

      {/* Trust micro-bar */}
      <div className="grid grid-cols-2 gap-3 rounded-[12px] border border-line bg-white p-4 sm:grid-cols-4">
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
