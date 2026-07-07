import type { TopNavItem } from "@/types/content";

// Compliant navigation — "Shop by Problem" (disease) is replaced by "Shop by Intent" (6 feeling themes).
export const CATEGORIES = [
  "Agate slices", "Anklet", "Angels", "Bracelets", "Chord Cutting Knife", "Earrings",
  "Festive Diya", "Festive Rakhi", "Frames", "Glass", "Hangers", "Heart", "Keyrings",
  "Mala", "Pens", "Pyramid", "Pencils/ Tower", "Pendant", "Raw Cluster", "Rollers",
  "Rings", "Selenite Plates", "Statue", "Sphere", "Tortoise/ Turtle", "Tower",
  "Trees", "Tumbles", "Yantra", "Zibu Coins",
];

export const CRYSTALS = [
  "Amethyst", "Amber", "Amazonite", "Aquamarine", "Black Obsidian", "Black Onyx",
  "Black Tourmaline", "Bloodstone", "Blue Apatite", "Blue Goldstone", "Blue Lace Agate",
  "Calcite", "Carnelian", "Cat's Eye", "Citrine", "Coral", "Cherry Quartz", "Chrysocolla",
  "Dalmatian Jasper", "Fluorite", "Garnet", "Green Aventurine", "Green Jade", "Hematite",
  "Howlite", "Labradorite", "Lapis Lazuli", "Lava", "Lepidolite", "Malachite", "Moonstone",
  "Moss Agate", "Onyx", "Opal", "Peridot", "Pyrite", "Red Jasper", "Rhodonite",
  "Rose Quartz", "Selenite", "Serpentine", "Smoky Quartz", "Sodalite", "Sphatik",
  "Sunstone", "Tiger's Eye", "Turquoise", "Unakite",
];

// Compliant intent themes (replaces disease "Shop by Problem")
export const INTENTS = [
  { label: "Calm & Balance", href: "/collections/calm-and-balance" },
  { label: "Focus & Clarity", href: "/collections/focus-and-clarity" },
  { label: "Love & Harmony", href: "/collections/love-and-harmony" },
  { label: "Abundance & Ambition", href: "/collections/abundance" },
  { label: "Grounding & Protection", href: "/collections/grounding-and-protection" },
  { label: "Positive Energy & New Beginnings", href: "/collections/positive-energy" },
];

export const ZODIAC = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
];

const slug = (s: string) =>
  s.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const TOP_NAV: TopNavItem[] = [
  {
    label: "Shop By Category",
    href: "/collections/all",
    simple: CATEGORIES.map((c) => ({ label: c, href: `/collections/${slug(c)}` })),
  },
  {
    label: "Shop By Crystal",
    href: "/pages/shop-by-crystal",
    simple: CRYSTALS.map((c) => ({ label: c, href: `/collections/${slug(c)}` })),
  },
  {
    label: "Shop By Intent",
    href: "/pages/shop-by-intent",
    simple: INTENTS,
  },
  {
    label: "Shop by Zodiac Sign",
    href: "/pages/shop-by-zodiac-sign",
    simple: ZODIAC.map((z) => ({ label: z, href: `/collections/${slug(z)}` })),
  },
  {
    label: "Pooja Needs",
    href: "/collections/pooja-needs",
    simple: ["Angels", "Murti", "Shaligrams", "Shivlings", "Yantras"].map((p) => ({
      label: p, href: `/collections/${slug(p)}`,
    })),
  },
  {
    label: "Jewellery",
    href: "/collections/jewellery",
    simple: ["Anklet", "Bracelets", "Bangle", "Earrings", "Mala", "Pendants", "Rings"].map((j) => ({
      label: j, href: `/collections/${slug(j)}`,
    })),
  },
  { label: "Gifting", href: "/pages/gifting" },
  {
    label: "Decor",
    href: "/collections/decor",
    simple: ["Pyramid", "Pencils", "Spheres", "Trees", "Tumbles", "Heart", "Agate Slices"].map((d) => ({
      label: d, href: `/collections/${slug(d)}`,
    })),
  },
];
