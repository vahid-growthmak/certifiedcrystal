"use client";

import { useEffect, useState } from "react";
import { CartIcon } from "@/components/icons";
import type { Product } from "@/lib/products";
import { formatPrice } from "./format";

export default function StickyBuyBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const nearBottom =
        window.scrollY + window.innerHeight >= doc.scrollHeight - 160;
      setVisible(window.scrollY > 600 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Publish bar height so the floating buttons can lift above it.
  useEffect(() => {
    document.documentElement.style.setProperty("--sticky-bar-h", visible ? "68px" : "0px");
    return () => document.documentElement.style.setProperty("--sticky-bar-h", "0px");
  }, [visible]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="cc-container flex items-center gap-3 py-2.5">
        <img
          src={product.images[0]}
          alt={product.title}
          className="hidden h-11 w-11 shrink-0 rounded-[4px] border border-line object-cover sm:block"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-medium text-heading">{product.title}</p>
          <p className="text-[14px] font-bold text-heading">{formatPrice(product.price)}</p>
        </div>
        <button type="button" className="cc-btn shrink-0 px-4 py-2.5 text-[14px] sm:px-5">
          <CartIcon width={16} height={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
