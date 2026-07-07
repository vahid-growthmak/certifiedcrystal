"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProduct, getPopular, type Product } from "@/lib/products";
import { formatPrice } from "./format";

const KEY = "cc_recently_viewed";
const CAP = 6;

export default function RecentlyViewed({ currentHandle }: { currentHandle: string }) {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let handles: string[] = [];
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) handles = parsed.filter((h): h is string => typeof h === "string");
      }
    } catch {
      handles = [];
    }

    // Push current to front, dedup, cap.
    const next = [currentHandle, ...handles.filter((h) => h !== currentHandle)].slice(0, CAP);

    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore write failures (private mode / quota) */
    }

    // Resolve genuinely recently-viewed products (excluding the current one).
    const resolved = next
      .filter((h) => h !== currentHandle)
      .map((h) => getProduct(h))
      .filter((p): p is Product => Boolean(p));

    // Only show the section once the shopper has real history; then top up to a
    // full row of 4 with popular picks so the grid never leaves empty cells.
    if (resolved.length < 1) {
      setItems([]);
      return;
    }
    const shown = resolved.slice(0, 4);
    if (shown.length < 4) {
      const exclude = [currentHandle, ...shown.map((p) => p.handle)];
      shown.push(...getPopular(exclude, 4 - shown.length));
    }
    setItems(shown);
  }, [currentHandle]);

  if (items.length < 1) return null;

  return (
    <section aria-labelledby="recently-viewed-heading">
      <h2 id="recently-viewed-heading" className="cc-section-title">
        Recently Viewed
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard
            key={p.handle}
            title={p.title}
            href={`/products/${p.handle}`}
            img={p.images[0] ?? "/img/global/fabicon_64.png"}
            price={formatPrice(p.price)}
            compareAt={p.compareAt ? formatPrice(p.compareAt) : undefined}
          />
        ))}
      </div>
    </section>
  );
}
