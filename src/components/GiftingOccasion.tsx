const OCCASIONS = [
  {
    label: "Birthday",
    line: "A gift she'll actually wear",
    href: "/pages/gifting?occasion=birthday",
    img: "/img/watchbuy/heart_1024.webp",
  },
  {
    label: "Anniversary",
    line: "Mark the moment",
    href: "/pages/gifting?occasion=anniversary",
    img: "/img/intentstones/rose_quartz_stones_550.png",
  },
  {
    label: "Festive & Diwali",
    line: "Gifting that shines",
    href: "/pages/gifting?occasion=festive",
    img: "/img/journey/murti_720.png",
  },
  {
    label: "Self-Love",
    line: "Treat yourself, no occasion needed",
    href: "/pages/gifting?occasion=self-love",
    img: "/img/intentstones/ame1_550.png",
  },
];

export default function GiftingOccasion() {
  return (
    <section aria-labelledby="gifting-heading" className="bg-background">
      <div className="cc-container py-14 md:py-20">
        <h2 id="gifting-heading" className="cc-section-title">
          The Easiest Meaningful Gift
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-[15px] leading-relaxed text-muted">
          Certified natural crystals, beautifully boxed — for every occasion.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {OCCASIONS.map((o) => (
            <li key={o.label} className="cc-fade-up">
              <a
                href={o.href}
                className="cc-card group block p-2"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] bg-surface-cream">
                  <img
                    src={o.img}
                    alt={`${o.label} gifting — ${o.line}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* dark gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="text-[17px] font-medium leading-tight text-white md:text-[19px]">
                      {o.label}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-snug text-white/85">
                      {o.line}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a href="/pages/gifting" className="cc-btn">
            Shop All Gifts
          </a>
        </div>
      </div>
    </section>
  );
}
