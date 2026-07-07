const CARDS = [
  {
    title: "Numerology",
    line: "Discover crystals aligned to your numbers.",
    img: "/img/numerology/Numerology_337.jpg",
    href: "/pages/numerology",
  },
  {
    title: "Shop by Intent",
    line: "Find crystals by the feeling you're after.",
    img: "/img/numerology/Remedies_1_458.png",
    href: "/pages/shop-by-intent",
  },
  {
    title: "Charging & Cleansing Your Crystal",
    line: "Simple rituals to care for your stones.",
    img: "/img/numerology/Untitled_design_5_550.png",
    href: "/pages/crystal-care",
  },
];

export default function Numerology() {
  return (
    <section className="py-16 md:py-20" aria-label="Explore by numerology, intent and care">
      <div className="cc-container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface-cream"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-center gap-3 p-6 text-center">
                <h3 className="text-heading">{card.title}</h3>
                <p className="flex-1 text-muted">{card.line}</p>
                <a href={card.href} className="cc-btn mt-2">
                  Shop Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
