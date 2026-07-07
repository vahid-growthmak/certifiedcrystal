"use client";

import { useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { ArrowLeft, ArrowRight } from "@/components/icons";

const PRODUCTS = [
  {
    title: "Rose Quartz Heart stone",
    href: "/products/rose-quartz-heart-stone",
    img: "/img/watchbuy/heart_1024.webp",
    price: "Rs. 1,890",
    compareAt: "Rs. 2,690",
  },
  {
    title: "7 Chakra Heart Bracelet",
    href: "/products/seven-chakra-heart-tumbled-bracelet",
    img: "/img/watchbuy/heart-bracelet-large_689.webp",
    price: "Rs. 1,890",
    compareAt: "Rs. 2,500",
  },
  {
    title: "Seven Chakra Triangle Pendant",
    href: "/products/seven-chakra-triangle-pendant",
    img: "/img/watchbuy/7chakra-triangle-pendant-675x1106.jpg",
    price: "Rs. 890",
    compareAt: "Rs. 1,490",
  },
  {
    title: "Seven Chakra Big Tree",
    href: "/products/seven-chakra-big-tree-1",
    img: "/img/watchbuy/1_1_9d4b677e-a119-43fc-80d2-f332cbd71cb9.png",
    price: "Rs. 5,490",
    compareAt: "Rs. 6,490",
  },
  {
    title: "Rose Quartz Orgone Sphere",
    href: "/products/rose-quartz-orgone-sphere",
    img: "/img/watchbuy/RSQRTZOSP-FX-2_1024.png",
    price: "Rs. 2,490",
    compareAt: "Rs. 2,990",
  },
  {
    title: "7 Chakra Triangle Pendant",
    href: "/products/seven-chakra-triangle-pendant",
    img: "/img/watchbuy/7Chakra-Triangle-pendant-single-2048x1680.jpg",
    price: "Rs. 990",
    compareAt: "Rs. 1,490",
  },
  {
    title: "Gift Packaging",
    href: "/products/gift-packaging",
    img: "/img/watchbuy/Gift-Packaging-768x768_e105e057-34bb-4c18-961b-2fd0d76f4ff4.webp",
    price: "Rs. 199",
    compareAt: "Rs. 299",
  },
];

export default function WatchAndBuy() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 600);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-14 md:py-20" aria-labelledby="watchbuy-heading">
      <div className="cc-container">
        <div className="mb-8 flex flex-col items-center gap-2 text-center md:mb-10">
          <h2 id="watchbuy-heading" className="cc-section-title">
            Watch and Buy
          </h2>
          <p className="max-w-xl text-[14px] text-muted md:text-[15px]">
            Discover our most-loved crystals in action — see them, feel the energy, and shop your favourites.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy("left")}
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full border border-line bg-white p-2.5 text-brand shadow-md transition-colors hover:bg-brand hover:text-white md:grid"
          >
            <ArrowLeft width={20} height={20} />
          </button>

          <div
            ref={trackRef}
            className="cc-noscroll flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
          >
            {PRODUCTS.map((p, i) => (
              <div
                key={`${p.href}-${i}`}
                className="w-[70%] shrink-0 snap-start sm:w-[46%] md:w-[31%] lg:w-[23%] xl:w-[19%]"
              >
                <ProductCard {...p} />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy("right")}
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full border border-line bg-white p-2.5 text-brand shadow-md transition-colors hover:bg-brand hover:text-white md:grid"
          >
            <ArrowRight width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
