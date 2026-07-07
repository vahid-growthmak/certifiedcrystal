import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919810800550"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-150 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <WhatsAppIcon />
      </a>
      <a
        href="tel:+919810800550"
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-black/20 transition-transform duration-150 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <PhoneIcon width={22} height={22} />
      </a>
    </div>
  );
}
