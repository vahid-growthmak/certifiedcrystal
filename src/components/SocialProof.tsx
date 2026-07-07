const TILES = [
  { src: "/img/social/slider_4_1920.png", span: "lg" },
  { src: "/img/social/slider_1_874.jpg", span: "sm" },
  { src: "/img/social/1t_354.png", span: "sm" },
  { src: "/img/social/slider_7_1280.png", span: "lg" },
  { src: "/img/social/2t_354.png", span: "sm" },
  { src: "/img/social/slider_3_1066.jpg", span: "sm" },
  { src: "/img/social/3t_354.png", span: "sm" },
  { src: "/img/social/slider_11.jpg", span: "sm" },
  { src: "/img/social/5t_354.png", span: "sm" },
  { src: "/img/social/6t_355.png", span: "sm" },
  { src: "/img/social/image_658b453b-09cc-4db5-8a15-730fee93b621.jpg", span: "sm" },
] as const;

export default function SocialProof() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="social-proof-heading">
      <div className="cc-container">
        <div className="mb-10 text-center">
          <h2 id="social-proof-heading" className="cc-section-title">
            Recognised &amp; Awarded
          </h2>
          <p className="mt-3 text-muted">
            Certified Crystal has been honoured at industry and community events across India.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {TILES.map((tile, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-xl bg-surface-cream ${
                tile.span === "lg" ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={tile.src}
                alt="Certified Crystal award and recognition moment"
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                  tile.span === "lg" ? "aspect-square" : "aspect-square"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
