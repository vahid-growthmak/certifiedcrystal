"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "@/components/icons";

// Shoppable video reels (sourced from the live Certified Crystal store, re-encoded for web).
const REELS = [
  {
    video: "/videos/watchbuy/big-tree.mp4",
    poster: "/videos/watchbuy/big-tree.jpg",
    title: "Seven Chakra Big Tree",
    price: "Rs. 5,490",
    compareAt: "Rs. 6,490",
    href: "/products/seven-chakra-big-tree-1",
  },
  {
    video: "/videos/watchbuy/rose-quartz-sphere.mp4",
    poster: "/videos/watchbuy/rose-quartz-sphere.jpg",
    title: "Rose Quartz Orgone Sphere",
    price: "Rs. 2,490",
    compareAt: "Rs. 2,990",
    href: "/products/rose-quartz-orgone-sphere",
  },
  {
    video: "/videos/watchbuy/amethyst-pyramid.mp4",
    poster: "/videos/watchbuy/amethyst-pyramid.jpg",
    title: "Seven Chakra Amethyst Pyramid",
    price: "Rs. 1,490",
    href: "/products/amethyst-crystal-tree",
  },
  {
    video: "/videos/watchbuy/citrine-ring.mp4",
    poster: "/videos/watchbuy/citrine-ring.jpg",
    title: "Citrine Cabochon Ring",
    price: "Rs. 990",
    href: "/products/citrine-pendant",
  },
  {
    video: "/videos/watchbuy/carnelian-bracelet.mp4",
    poster: "/videos/watchbuy/carnelian-bracelet.jpg",
    title: "Red Carnelian Bracelet",
    price: "Rs. 1,490",
    compareAt: "Rs. 2,000",
    href: "/products/money-amp-luck-bracelet",
  },
];

export default function WatchAndBuy() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 600);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Only play reels that are on screen (saves CPU/bandwidth).
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.5 },
    );
    videoRefs.current.forEach((v) => v && io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-14 md:py-20" aria-labelledby="watchbuy-heading">
      <div className="cc-container">
        <div className="mb-8 flex flex-col items-center gap-2 text-center md:mb-10">
          <h2 id="watchbuy-heading" className="cc-section-title">
            Watch and Buy
          </h2>
          <p className="max-w-xl text-[14px] text-muted md:text-[15px]">
            See our most-loved crystals in action — watch, fall in love, and shop your favourites.
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
            {REELS.map((r, i) => (
              <a
                key={r.video}
                href={r.href}
                aria-label={r.title}
                className="group relative w-[72%] shrink-0 snap-start overflow-hidden rounded-[16px] sm:w-[46%] md:w-[31%] lg:w-[23%]"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[16px] bg-black">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={r.video}
                    poster={r.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* legibility gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* product overlay */}
                  <div className="absolute inset-x-2.5 bottom-2.5">
                    <div className="flex items-center gap-2.5 rounded-[12px] bg-black/40 p-2 backdrop-blur-sm">
                      <img
                        src={r.poster}
                        alt=""
                        className="h-11 w-11 shrink-0 rounded-[8px] border border-white/20 object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-medium leading-tight text-white">{r.title}</p>
                        <p className="mt-0.5 flex items-baseline gap-1.5">
                          <span className="text-[13.5px] font-semibold text-white">{r.price}</span>
                          {r.compareAt && (
                            <span className="text-[11.5px] text-white/60 line-through">{r.compareAt}</span>
                          )}
                        </p>
                      </div>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-brand transition-colors group-hover:bg-gold group-hover:text-white">
                        <ArrowRight width={16} height={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
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
