export default function QuizBanner() {
  return (
    <section aria-labelledby="quiz-banner-heading" className="relative h-[300px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/img/quiz/image_9a41ac46-45a5-4ef8-a1e6-9d73138e87f0.png"
        alt="Assortment of crystals for the crystal personality quiz"
        width={1920}
        height={600}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for legibility */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/55" />

      {/* Centered content */}
      <div className="relative flex h-full items-center justify-center">
        <div className="cc-container flex flex-col items-center text-center">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-[13px]">
            Crystal Quiz
          </p>
          <h2
            id="quiz-banner-heading"
            className="max-w-[720px] text-[24px] font-medium leading-tight text-white md:text-[35px]"
          >
            Find Your Crystal Personality Match
          </h2>
          <p className="mt-3 max-w-[600px] text-[14px] leading-relaxed text-white/85 md:mt-4 md:text-[16px]">
            Answer a few quick questions about the mood and intention you&apos;re
            after, and we&apos;ll match you to a crystal you&apos;ll love.
          </p>
          <a href="/pages/crystal-match" className="cc-btn cc-btn--light mt-5 md:mt-6">
            Go to Quiz
          </a>
        </div>
      </div>
    </section>
  );
}
