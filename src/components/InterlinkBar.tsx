import { ArrowRight } from "@/components/icons";

type Chip = {
  label: string;
  href: string;
  external?: boolean;
};

const CHIPS: Chip[] = [
  { label: "Click Here to Buy Certified Rudraksha", href: "https://rudrakshalife.com", external: true },
  { label: "Click Here to Buy Certified Gemstone", href: "https://gemmines.in", external: true },
  { label: "Know Your Crystal", href: "/pages/know-your-crystal" },
  { label: "Take the Crystal Match Quiz", href: "/pages/crystal-match" },
];

export default function InterlinkBar() {
  return (
    <section aria-label="Quick links" className="bg-surface-cream py-8 md:py-10">
      <div className="cc-container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHIPS.map((chip) => (
            <a
              key={chip.label}
              href={chip.href}
              {...(chip.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex min-h-[64px] items-center justify-center gap-3 rounded-[30px] border border-brand bg-white px-6 py-4 text-center text-[15px] font-medium leading-snug text-brand transition-all duration-200 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span>{chip.label}</span>
              <ArrowRight
                width={18}
                height={18}
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
