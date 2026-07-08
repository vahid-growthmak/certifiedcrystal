// Reusable Hongo dark closing-CTA band. Used on the homepage (after reviews) and the PDP.
export default function CtaBand({
  heading,
  sub,
  cta,
  href,
}: {
  heading: string;
  sub?: string;
  cta: string;
  href: string;
}) {
  return (
    <section className="cc-container my-16 md:my-24">
      <div className="flex flex-col items-center gap-4 rounded-[8px] bg-brand px-6 py-14 text-center md:py-20">
        <h2 className="max-w-[600px] text-[26px] font-medium leading-tight text-white md:text-[34px]">
          {heading}
        </h2>
        {sub && (
          <p className="max-w-[480px] text-[14px] leading-relaxed text-white/85 md:text-[15px]">{sub}</p>
        )}
        <a href={href} className="cc-btn cc-btn--light mt-3">
          {cta}
        </a>
      </div>
    </section>
  );
}
