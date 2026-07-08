"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

type Product = {
  title: string;
  href: string;
  img: string;
  price: string;
  compareAt: string;
};

const TABS: { label: string; products: Product[] }[] = [
  {
    label: "Bracelets",
    products: [
      {
        title: "Pyrite Bracelet (High Energy Money Magnet)",
        href: "/products/pyrite-bracelet",
        img: "/img/featured/Money-magnet-bracelet-1-675x595.webp",
        price: "Rs. 1,290",
        compareAt: "Rs. 1,990",
      },
      {
        title: "Natural Firoza Buddha Bracelet",
        href: "/products/natural-firoza-buddha-bracelet",
        img: "/img/featured/FIROZA-BUDDHA-1373x1536.webp",
        price: "Rs. 1,490",
        compareAt: "Rs. 2,000",
      },
      {
        title: "Money & Luck Bracelet",
        href: "/products/money-amp-luck-bracelet",
        img: "/img/featured/Money_Magnet_with_Zibu_Coin_1024.png",
        price: "Rs. 1,490",
        compareAt: "Rs. 2,000",
      },
      {
        title: "7 Chakra Onyx Bracelet 8mm",
        href: "/products/7-chakra-onyx-bracelet-8mm",
        img: "/img/featured/7Chakra-Onyx-1536x1536.webp",
        price: "Rs. 990",
        compareAt: "Rs. 1,500",
      },
    ],
  },
  {
    label: "Mala",
    products: [
      {
        title: "Pearl Mala High Quality Shell Pearls",
        href: "/products/pearl-mala-high-quality-shell-pearls",
        img: "/img/featured/1-2-1-1536x1536_1.webp",
        price: "Rs. 1,490",
        compareAt: "Rs. 2,200",
      },
      {
        title: "Natural Garnet Mala 8 mm",
        href: "/products/natural-garnet-mala-8-mm",
        img: "/img/featured/GARNET-MALA-675x675.jpg",
        price: "Rs. 1,990",
        compareAt: "Rs. 2,700",
      },
      {
        title: "Lapis Lazuli Mala 8 mm",
        href: "/products/lapis-lazuli-mala-8-mm",
        img: "/img/featured/Lapis-lazuli-mala-675x675.jpg",
        price: "Rs. 1,790",
        compareAt: "Rs. 2,400",
      },
      {
        title: "Money Magnet With Zibu Mala 8 mm",
        href: "/products/money-magnet-with-zibu-mala-8-mm",
        img: "/img/featured/Money-Magnet-with-Zibu-MalaDSC05529.jpg",
        price: "Rs. 1,890",
        compareAt: "Rs. 2,500",
      },
    ],
  },
  {
    label: "Trees",
    products: [
      {
        title: "Seven Chakra Big Tree",
        href: "/products/seven-chakra-big-tree-1",
        img: "/img/featured/2-1-675x914.jpg",
        price: "Rs. 5,490",
        compareAt: "Rs. 6,490",
      },
      {
        title: "Amethyst Crystal Tree",
        href: "/products/amethyst-crystal-tree",
        img: "/img/featured/Untitled-design-44.jpg",
        price: "Rs. 2,490",
        compareAt: "Rs. 3,200",
      },
      {
        title: "Citrine Crystal Tree",
        href: "/products/citrine-crystal-tree",
        img: "/img/featured/Untitled-design-46-675x675.jpg",
        price: "Rs. 2,490",
        compareAt: "Rs. 3,200",
      },
      {
        title: "Seven Chakra Tree (Large)",
        href: "/products/seven-chakra-tree",
        img: "/img/featured/DSC04330-1536x1536.webp",
        price: "Rs. 3,490",
        compareAt: "Rs. 4,200",
      },
    ],
  },
  {
    label: "Pendants",
    products: [
      {
        title: "Seven Chakra Triangle Pendant",
        href: "/products/seven-chakra-triangle-pendant",
        img: "/img/featured/37-1-1-675x540.jpg",
        price: "Rs. 890",
        compareAt: "Rs. 1,490",
      },
      {
        title: "Citrine Pendant",
        href: "/products/citrine-pendant",
        img: "/img/featured/73266657840.jpg",
        price: "Rs. 990",
        compareAt: "Rs. 2,000",
      },
      {
        title: "Amethyst Pendant",
        href: "/products/amethyst-pendant",
        img: "/img/featured/1-2-4-1536x1536.webp",
        price: "Rs. 990",
        compareAt: "Rs. 1,600",
      },
    ],
  },
];

export default function FeaturedProducts() {
  const [active, setActive] = useState(0);
  const products = TABS[active].products;

  return (
    <section className="py-14 md:py-20" aria-labelledby="featured-heading">
      <div className="cc-container">
        <h2 id="featured-heading" className="cc-section-title mb-6 md:mb-8">
          Featured Products
        </h2>

        <div
          role="tablist"
          aria-label="Featured product categories"
          className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:mb-10 md:gap-x-9"
        >
          {TABS.map((tab, i) => {
            const selected = i === active;
            return (
              <button
                key={tab.label}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={`relative pb-2 text-[14px] font-medium transition-colors duration-150 md:text-[15px] ${
                  selected ? "text-heading" : "text-muted hover:text-heading"
                }`}
              >
                {tab.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-[2px] origin-center bg-brand transition-transform duration-200 ${
                    selected ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div
          key={active}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          style={{ animation: "cc-fade-up 350ms ease-out" }}
        >
          {products.map((p, i) => (
            <ProductCard key={`${p.href}-${i}`} {...p} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button type="button" className="cc-btn--outline cc-btn">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
}
