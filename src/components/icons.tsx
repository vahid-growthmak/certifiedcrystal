import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const SearchIcon = (p: P) => (<svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>);
export const UserIcon = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>);
export const HeartIcon = (p: P) => (<svg {...base} {...p}><path d="M12 20s-7-4.5-9.5-9A5 5 0 0 1 12 5a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" /></svg>);
export const CartIcon = (p: P) => (<svg {...base} {...p}><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h3l2.5 13h11l2-9H6" /></svg>);
export const ChevronDown = (p: P) => (<svg {...base} width={16} height={16} {...p}><path d="m6 9 6 6 6-6" /></svg>);
export const ChevronRight = (p: P) => (<svg {...base} width={16} height={16} {...p}><path d="m9 6 6 6-6 6" /></svg>);
export const ArrowLeft = (p: P) => (<svg {...base} {...p}><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>);
export const ArrowRight = (p: P) => (<svg {...base} {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>);
export const StarIcon = (p: P) => (<svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l2.9 6.2 6.6.7-4.9 4.6 1.3 6.5L12 17.8 6.1 20l1.3-6.5L2.5 8.9l6.6-.7L12 2Z" /></svg>);
export const MenuIcon = (p: P) => (<svg {...base} {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>);
export const CloseIcon = (p: P) => (<svg {...base} {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>);
export const PhoneIcon = (p: P) => (<svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.24 1l-2.2 2.3Z" /></svg>);
export const WhatsAppIcon = (p: P) => (<svg width={26} height={26} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.25.7-1.45 1.35-2 1.4-.5.05-1.15.25-3.85-.85-3.25-1.35-5.3-4.7-5.45-4.9-.15-.2-1.3-1.75-1.3-3.35 0-1.6.85-2.4 1.15-2.7.3-.3.65-.4.85-.4h.6c.2 0 .45-.05.7.55.25.6.85 2.1.95 2.25.1.15.15.35.05.55-.1.2-.15.35-.3.55-.15.2-.32.42-.45.55-.15.15-.3.32-.15.6.15.3.7 1.15 1.5 1.85 1.05.95 1.9 1.25 2.2 1.4.3.15.45.1.6-.05.15-.15.7-.8.9-1.1.2-.3.4-.25.65-.15.25.1 1.6.75 1.85.9.25.15.45.2.5.3.05.15.05.65-.2 1.35Z" /></svg>);
export const CertificateIcon = (p: P) => (<svg {...base} width={40} height={40} strokeWidth={1.3} {...p}><circle cx="12" cy="10" r="6" /><path d="M9 15.5 8 22l4-2 4 2-1-6.5" /><path d="m9.5 10 1.7 1.7L15 8" /></svg>);
export const TruckIcon = (p: P) => (<svg {...base} width={40} height={40} strokeWidth={1.3} {...p}><path d="M2 7h11v9H2z" /><path d="M13 10h4l3 3v3h-7" /><circle cx="6" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></svg>);
export const ShieldIcon = (p: P) => (<svg {...base} width={40} height={40} strokeWidth={1.3} {...p}><path d="M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>);
export const GuidanceIcon = (p: P) => (<svg {...base} width={40} height={40} strokeWidth={1.3} {...p}><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7" /><path d="M12 17h.01" /></svg>);
