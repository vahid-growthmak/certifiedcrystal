"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "@/components/icons";

type Item = { label: string; href: string; img: string };

const ITEMS: Item[] = [
  { label: "Bracelets", href: "/collections/bracelets", img: "/img/journey/Untitled_design_97.png" },
  { label: "Raw Cluster", href: "/collections/raw-cluster", img: "/img/journey/2_91cd2113-a1bd-4fbb-b631-79aca36c8f4d.png" },
  { label: "Trees", href: "/collections/trees", img: "/img/journey/1_720.png" },
  { label: "Rings", href: "/collections/rings", img: "/img/journey/14_36802fc5-4bb2-4a20-b70a-07a4ea081b66.png" },
  { label: "Pyramid", href: "/collections/pyramid", img: "/img/journey/5_720.png" },
  { label: "Spheres", href: "/collections/spheres", img: "/img/journey/3_3f995508-6c4a-4114-86c0-6f574407bd2d.png" },
  { label: "Selenite Plates", href: "/collections/selenite-plates", img: "/img/journey/Untitled_design_-_2025-12-03T115003.712.png" },
  { label: "Tumbles", href: "/collections/tumbles", img: "/img/journey/8_720.png" },
  { label: "Murti", href: "/collections/murti", img: "/img/journey/murti_720.png" },
  { label: "Pencils", href: "/collections/pencils", img: "/img/journey/Pencils_720.png" },
  { label: "Zibu Coins", href: "/collections/zibu-coins", img: "/img/journey/Coins_720.png" },
  { label: "Pendant", href: "/collections/pendant", img: "/img/journey/4_720.png" },
  { label: "Mala", href: "/collections/mala", img: "/img/journey/9_720.png" },
  { label: "Earrings", href: "/collections/earrings", img: "/img/journey/11_0bf9327c-e003-42ad-a1ce-8a2d9e5eab9c.png" },
  { label: "Yantra", href: "/collections/yantra", img: "/img/journey/12.png" },
];

export default function CrystalsForEveryJourney() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * Math.round(track.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section aria-labelledby="cat-journey" className="py-12 md:py-16">
      <div className="cc-container">
        {/* Heading row */}
        <div className="relative mb-8 flex items-center justify-center md:mb-10">
          <h2 id="cat-journey" className="cc-section-title">
            Crystals for Every Journey
          </h2>
          <a
            href="/collections/all"
            className="cc-viewall absolute right-0 top-1/2 -translate-y-1/2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span className="hidden sm:inline">View All</span>
            <ChevronRight width={16} height={16} className="shrink-0" />
          </a>
        </div>

        <div className="relative">
          {/* Left arrow */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByAmount(-1)}
            className="absolute -left-2 top-[42%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-brand shadow-sm transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:flex lg:-left-4"
          >
            <ArrowLeft width={18} height={18} />
          </button>

          <div
            ref={trackRef}
            className="cc-noscroll flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2 md:gap-6"
          >
            {ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="cc-card group flex w-[150px] shrink-0 snap-start flex-col p-2 focus-visible:outline-none md:w-[186px]"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-[10px] bg-surface-cream">
                  <img
                    src={item.img}
                    alt={item.label}
                    width={186}
                    height={186}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <span className="px-1 pb-1 pt-2.5 text-center text-[14px] font-medium leading-snug text-heading transition-colors duration-200 group-hover:text-gold-dark md:text-[15px]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByAmount(1)}
            className="absolute -right-2 top-[42%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-brand shadow-sm transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:flex lg:-right-4"
          >
            <ArrowRight width={18} height={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
