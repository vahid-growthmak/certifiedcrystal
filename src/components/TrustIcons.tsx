import {
  CertificateIcon,
  TruckIcon,
  ShieldIcon,
  GuidanceIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

type TrustItem = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

// COMPLIANCE: the live site said "100% Government Certified" — we DELIBERATELY
// replace it with the honest "Lab-Tested & NABL-Certified" wording. No "government".
const ITEMS: TrustItem[] = [
  {
    Icon: CertificateIcon,
    title: "Lab-Tested & NABL-Certified",
    text: "Every stone is tested by a NABL-accredited laboratory and ships with an independent certificate of authenticity.",
  },
  {
    Icon: TruckIcon,
    title: "Fast & Safe Delivery",
    text: "Carefully packed and shipped quickly across India with tracking.",
  },
  {
    Icon: ShieldIcon,
    title: "Secure & Trusted Purchase",
    text: "Safe checkout with UPI and cards. Easy 7-day returns on eligible items.",
  },
  {
    Icon: GuidanceIcon,
    title: "Dedicated Crystal Guidance",
    text: "Not sure what to choose? Our team helps you find the right piece.",
  },
];

export default function TrustIcons() {
  return (
    <section
      aria-label="Why shop with Certified Crystal"
      className="bg-surface-cream"
    >
      <div className="cc-container py-9 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-6">
          {ITEMS.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center px-1 text-center sm:px-2"
            >
              <span className="mb-3 flex items-center justify-center text-heading sm:mb-4">
                <Icon aria-hidden="true" width={40} height={40} />
              </span>
              <h3 className="mb-1.5 text-[13.5px] font-medium leading-snug text-heading sm:mb-2 sm:text-[17px]">
                {title}
              </h3>
              <p className="max-w-[280px] text-[12.5px] leading-relaxed text-muted sm:text-sm">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
