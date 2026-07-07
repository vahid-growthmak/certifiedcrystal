"use client";

import { useEffect, useState } from "react";
import { CartIcon } from "@/components/icons";
import type { Product } from "@/lib/products";
import { formatPrice } from "./format";

export default function StickyBuyBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="cc-container flex items-center gap-3 py-2.5 pr-[76px] sm:pr-5">
        <img
          src={product.images[0]}
          alt={product.title}
          className="hidden h-11 w-11 shrink-0 rounded-[8px] border border-line object-cover sm:block"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-medium text-heading">{product.title}</p>
          <p className="text-[14px] font-bold text-heading">{formatPrice(product.price)}</p>
        </div>
        <button type="button" className="cc-btn shrink-0 px-5 py-2.5 text-[14px]">
          <CartIcon width={16} height={16} />
          <span className="hidden sm:inline">Add to Cart</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
    </div>
  );
}
