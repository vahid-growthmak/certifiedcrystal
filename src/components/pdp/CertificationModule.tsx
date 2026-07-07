import { CertificateIcon, ArrowRight } from "@/components/icons";

export default function CertificationModule() {
  return (
    <section id="certification" aria-labelledby="certification-heading">
      <div className="flex flex-col items-start gap-5 rounded-[18px] bg-surface-cream p-7 sm:flex-row sm:items-center sm:p-9">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-brand shadow-sm">
          <CertificateIcon width={40} height={40} />
        </div>
        <div className="flex flex-col gap-2">
          <h2 id="certification-heading" className="text-[24px] font-semibold text-heading">
            Lab-Tested &amp; NABL-Certified
          </h2>
          <p className="max-w-2xl text-[15px] leading-relaxed text-foreground">
            Every crystal is a natural stone, independently tested by a NABL-accredited laboratory, and sent to
            you with an independent certificate of authenticity — lab-verified proof you&apos;re getting the real
            thing, not a marketing sticker.
          </p>
          <a href="/pages/certification" className="cc-viewall mt-1">
            See how we certify <ArrowRight width={16} height={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
