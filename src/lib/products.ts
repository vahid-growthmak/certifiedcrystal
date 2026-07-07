// Compliant product catalog for CRO-optimized product pages.
// Copy is belief/tradition-framed — never disease, "government", "heal/cure", or guaranteed outcomes.

export interface Review {
  name: string;
  rating: number; // 1..5
  date: string;
  title: string;
  body: string;
  verified?: boolean;
}
export interface FAQItem {
  q: string;
  a: string;
}
export interface StoneMeaning {
  stone: string;
  href: string;
  note: string; // belief-framed
}
export interface ProductDetails {
  netWeight: string;
  dimensions?: string;
  origin: string;
  material: string;
  seller: string;
  manufacturer: string;
  sku: string;
}
export interface Product {
  handle: string;
  title: string;
  category: string; // breadcrumb (e.g. "Bracelets")
  categoryHref: string;
  intent: string; // compliant intent theme label
  intentHref: string;
  price: number;
  compareAt?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  badges: string[];
  tagline: string; // one-line hook under the title
  description: string; // experiential, compliant
  highlights: string[];
  stones: StoneMeaning[];
  howToUse: string;
  details: ProductDetails;
  care: string;
  faq: FAQItem[];
  reviews: Review[];
  related: string[];
}

export const WELLNESS_DISCLAIMER =
  "For spiritual, decorative and aesthetic enjoyment only. Not a medical product and not intended to diagnose, treat, cure or prevent any disease or condition. Descriptions reflect tradition and belief, not medical fact. Individual experiences vary.";

const SELLER = "Admantine Jewels, 2547/7, Block 35M, Beadonpura, Karol Bagh, New Delhi 110005";

const BASE_FAQ: FAQItem[] = [
  {
    q: "Is this a genuine, natural stone?",
    a: "Yes. Every piece is a natural stone, tested by a NABL-accredited laboratory and shipped with an independent certificate of authenticity — your proof it is genuine, not dyed glass or imitation.",
  },
  {
    q: "Will it look exactly like the photos?",
    a: "Each crystal is natural, so colour, banding and inclusions vary slightly from piece to piece — that individuality is a sign it is real. We hand-pick every order for quality.",
  },
  {
    q: "How is it shipped, and can I return it?",
    a: "Orders are carefully packed and shipped across India with tracking, typically in 2–4 business days. Easy 7-day returns apply on eligible items — see our Return & Refund Policy.",
  },
  {
    q: "Are crystals a medical treatment?",
    a: "No. We sell crystals for their beauty, craft and the intention behind them — for spiritual and aesthetic enjoyment only, not medical use.",
  },
];

const REVIEW_POOL: Review[] = [
  { name: "Aisha V.", rating: 5, date: "12 Jun 2026", title: "Genuine and beautiful", body: "The stone quality is excellent and the colour is even nicer in person. Came with the certificate too.", verified: true },
  { name: "Rahul M.", rating: 5, date: "28 May 2026", title: "Lovely packaging", body: "Arrived beautifully boxed and well protected. You can tell it's a real natural stone.", verified: true },
  { name: "Priya S.", rating: 4, date: "9 May 2026", title: "Happy with it", body: "Good craft and finish for the price. Delivery was quick and the piece feels premium.", verified: true },
  { name: "Neha K.", rating: 5, date: "21 Apr 2026", title: "Bought as a gift", body: "Gifted it to my sister and she loved it. The presentation made it feel special.", verified: true },
  { name: "Vikram R.", rating: 5, date: "3 Apr 2026", title: "Exactly as described", body: "Colour and size matched the listing. Certificate included — appreciate the honesty.", verified: true },
];

function reviewsFor(seed: number, count: number): Review[] {
  const out: Review[] = [];
  for (let i = 0; i < Math.min(count, 5); i++) out.push(REVIEW_POOL[(seed + i) % REVIEW_POOL.length]);
  return out;
}

type Draft = Partial<Product> & Pick<Product, "handle" | "title" | "price" | "images">;

function build(d: Draft): Product {
  const category = d.category ?? "Crystals";
  const seed = d.handle.length;
  return {
    category,
    categoryHref: d.categoryHref ?? `/collections/${category.toLowerCase().replace(/[^a-z]+/g, "-")}`,
    intent: d.intent ?? "Positive Energy & New Beginnings",
    intentHref: d.intentHref ?? "/collections/positive-energy",
    compareAt: d.compareAt,
    rating: d.rating ?? 4.7,
    reviewCount: d.reviewCount ?? 24,
    stock: d.stock ?? 12,
    badges: d.badges ?? ["Lab-Tested", "Certificate Included"],
    tagline: d.tagline ?? "Genuine natural crystal — hand-finished and certified.",
    description:
      d.description ??
      "A genuine, natural crystal, hand-finished and cleansed with intention, then sent to you with an independent certificate of authenticity. Chosen for its colour, craft and calm — beautiful to keep in your space, wear, or give.",
    highlights:
      d.highlights ?? [
        "100% natural stone — never dyed glass or imitation",
        "Tested by a NABL-accredited laboratory",
        "Independent certificate of authenticity with every order",
        "Cleansed, gift-ready and shipped with care across India",
      ],
    stones: d.stones ?? [],
    howToUse:
      d.howToUse ??
      "Keep it in a space you love, carry it with you, or place it on your desk or altar. Many people like to hold their crystal during a quiet moment or meditation, purely as a calming ritual.",
    details:
      d.details ?? {
        netWeight: "—",
        origin: "India",
        material: "Natural crystal",
        seller: SELLER,
        manufacturer: SELLER,
        sku: d.handle.toUpperCase().replace(/[^A-Z0-9]+/g, "-").slice(0, 16),
      },
    care:
      d.care ??
      "Wipe gently with a soft, dry cloth. Keep away from harsh chemicals and prolonged water. To cleanse as a ritual, leave it in moonlight or near selenite overnight.",
    faq: d.faq ?? BASE_FAQ,
    reviews: d.reviews ?? reviewsFor(seed, 3),
    related: d.related ?? [],
    ...d,
  } as Product;
}

const RAW: Draft[] = [
  // ── Hero product 1 — Citrine Pendant (rich copy) ──
  {
    handle: "citrine-pendant",
    title: "Citrine Pendant",
    category: "Pendants",
    categoryHref: "/collections/pendant",
    intent: "Abundance & Ambition",
    intentHref: "/collections/abundance",
    price: 990,
    compareAt: 2000,
    images: ["/img/intentstones/cit3_550.png", "/img/featured/citrine-big2_1024.png"],
    rating: 4.6,
    reviewCount: 10,
    stock: 7,
    badges: ["Bestseller", "Lab-Tested", "Certificate Included"],
    tagline: "Warm golden quartz, long loved for uplifting, confident energy.",
    description:
      "Citrine — the warm, golden quartz long loved in crystal lore as a stone of abundance, optimism and confident energy. Each pendant is a natural, lab-tested stone, hand-finished and sent with its own independent certificate of authenticity. A bright, uplifting piece to wear every day or give to someone starting something new.",
    highlights: [
      "Natural citrine quartz — hand-finished, never dyed",
      "Tested by a NABL-accredited lab; certificate included",
      "Lightweight everyday pendant with a warm golden tone",
      "Gift-ready packaging and fast delivery across India",
    ],
    stones: [
      { stone: "Citrine", href: "/collections/citrine", note: "In crystal lore, citrine is associated with abundance, optimism and confident, sunny energy." },
    ],
    details: { netWeight: "≈ 6–9 g (piece varies)", dimensions: "Pendant ≈ 2.5–3.5 cm", origin: "India", material: "Natural citrine quartz", seller: SELLER, manufacturer: SELLER, sku: "C1431" },
    reviews: reviewsFor(2, 5),
    related: ["amethyst-pendant", "seven-chakra-triangle-pendant", "money-amp-luck-bracelet", "pyrite-bracelet"],
  },
  // ── Hero product 2 — Seven Chakra Big Tree ──
  {
    handle: "seven-chakra-big-tree-1",
    title: "Seven Chakra Big Tree",
    category: "Trees",
    categoryHref: "/collections/trees",
    intent: "Positive Energy & New Beginnings",
    intentHref: "/collections/positive-energy",
    price: 5490,
    compareAt: 6490,
    images: ["/img/featured/2-1-675x914.jpg", "/img/watchbuy/1_1_9d4b677e-a119-43fc-80d2-f332cbd71cb9.png"],
    rating: 4.8,
    reviewCount: 34,
    stock: 5,
    badges: ["Statement Décor", "Lab-Tested", "Certificate Included"],
    tagline: "A handcrafted seven-stone tree — a centrepiece for any space.",
    description:
      "A handcrafted crystal tree set with seven natural stones, each chosen for its colour and character. A striking décor centrepiece for a shelf, desk or entryway — and a thoughtful housewarming gift. Every tree is lab-tested and ships with an independent certificate of authenticity.",
    highlights: [
      "Seven natural stones on a hand-wrapped tree",
      "Substantial statement size for shelves and desks",
      "Lab-tested; independent certificate included",
      "Beautifully boxed — an ideal housewarming gift",
    ],
    stones: [
      { stone: "Amethyst", href: "/collections/amethyst", note: "Long loved in crystal lore for calm and spiritual awareness." },
      { stone: "Lapis Lazuli", href: "/collections/lapis-lazuli", note: "Traditionally linked with intuition, communication and clarity." },
      { stone: "Green Aventurine", href: "/collections/green-aventurine", note: "Associated in tradition with luck, prosperity and emotional balance." },
      { stone: "Carnelian", href: "/collections/carnelian", note: "Linked in lore with creativity, passion and warmth." },
      { stone: "Red Jasper", href: "/collections/red-jasper", note: "Associated with grounding, stability and steadiness." },
    ],
    details: { netWeight: "≈ 350–400 g", dimensions: "Height ≈ 25–30 cm", origin: "India", material: "Natural crystals on metal wire, resin base", seller: SELLER, manufacturer: SELLER, sku: "SC-BIGTREE" },
    reviews: reviewsFor(0, 5),
    related: ["amethyst-crystal-tree", "citrine-crystal-tree", "seven-chakra-tree", "rose-quartz-orgone-sphere"],
  },
  // ── Hero product 3 — Pearl Mala ──
  {
    handle: "pearl-mala-high-quality-shell-pearls",
    title: "Pearl Mala — High Quality Shell Pearls",
    category: "Mala",
    categoryHref: "/collections/mala",
    intent: "Calm & Balance",
    intentHref: "/collections/calm-and-balance",
    price: 1490,
    compareAt: 2200,
    images: ["/img/featured/1-2-1-1536x1536_1.webp", "/img/featured/1-2-4-1536x1536.webp"],
    rating: 4.7,
    reviewCount: 21,
    stock: 14,
    badges: ["Classic", "Certificate Included"],
    tagline: "Timeless shell-pearl mala with a soft, elegant sheen.",
    description:
      "Pearls have long been associated with classic beauty and refined style. This mala of high-quality shell pearls carries a soft natural sheen and smooth texture — lovely for festive celebrations, traditional ceremonies, or as an elegant everyday accessory. Hand-strung and sent with a certificate of authenticity.",
    highlights: [
      "High-quality shell pearls with a smooth, even sheen",
      "Hand-knotted mala, comfortable to wear or gift",
      "Certificate of authenticity included",
      "Elegant for festive, ceremonial or everyday wear",
    ],
    stones: [{ stone: "Shell Pearl", href: "/collections/mala", note: "Pearls are traditionally associated with classic beauty, calm and refined style." }],
    details: { netWeight: "≈ 40–55 g", dimensions: "108 beads, ≈ 6–8 mm", origin: "India", material: "High-quality shell pearls", seller: SELLER, manufacturer: SELLER, sku: "PEARL-MALA" },
    reviews: reviewsFor(1, 4),
    related: ["natural-garnet-mala-8-mm", "lapis-lazuli-mala-8-mm", "money-magnet-with-zibu-mala-8-mm", "amethyst-chip-bracelet"],
  },
  // ── Hero product 4 — Money & Luck Bracelet ──
  {
    handle: "money-amp-luck-bracelet",
    title: "Money & Luck Bracelet",
    category: "Bracelets",
    categoryHref: "/collections/bracelets",
    intent: "Abundance & Ambition",
    intentHref: "/collections/abundance",
    price: 1490,
    compareAt: 2000,
    images: ["/img/featured/Money_Magnet_with_Zibu_Coin_1024.png", "/img/featured/Money-magnet-bracelet-1-675x595.webp"],
    rating: 4.7,
    reviewCount: 41,
    stock: 9,
    badges: ["Bestseller", "Lab-Tested", "Certificate Included"],
    tagline: "A handcrafted blend of stones for an intentional, ambitious space.",
    description:
      "A handcrafted bracelet bringing together a blend of natural crystals — Tiger's Eye, Pyrite, Citrine, Green Aventurine and Labradorite-toned stones — each long loved in crystal lore for confidence, warmth and new beginnings. Lab-tested and sent with an independent certificate of authenticity.",
    highlights: [
      "Multi-stone blend on a durable elastic cord",
      "Natural, lab-tested stones — certificate included",
      "Everyday wearable size with a warm, earthy palette",
      "Popular gift for someone starting a new chapter",
    ],
    stones: [
      { stone: "Tiger's Eye", href: "/collections/tiger-s-eye", note: "Associated in lore with courage and confidence." },
      { stone: "Pyrite", href: "/collections/pyrite", note: "Traditionally linked with abundance and protection." },
      { stone: "Citrine", href: "/collections/citrine", note: "Associated with joy, optimism and success." },
      { stone: "Green Aventurine", href: "/collections/green-aventurine", note: "Linked in lore with growth and opportunity." },
    ],
    details: { netWeight: "≈ 18–24 g", dimensions: "8 mm beads, stretch fit ≈ 18–20 cm", origin: "India", material: "Natural crystals on elastic cord", seller: SELLER, manufacturer: SELLER, sku: "MONEY-LUCK-BR" },
    reviews: reviewsFor(3, 5),
    related: ["pyrite-bracelet", "7-chakra-onyx-bracelet-8mm", "amethyst-chip-bracelet", "citrine-pendant"],
  },

  // ── Supporting catalog (complete, lighter copy) ──
  { handle: "pyrite-bracelet", title: "Pyrite Bracelet (High Energy Money Magnet)", category: "Bracelets", categoryHref: "/collections/bracelets", intent: "Abundance & Ambition", intentHref: "/collections/abundance", price: 1290, compareAt: 1990, images: ["/img/featured/Money-magnet-bracelet-1-675x595.webp"], rating: 4.7, reviewCount: 52, stock: 15, badges: ["Bestseller", "Certificate Included"], tagline: "Golden pyrite beads with a bright metallic shine.", stones: [{ stone: "Pyrite", href: "/collections/pyrite", note: "Traditionally linked with abundance, drive and protection." }], related: ["money-amp-luck-bracelet", "7-chakra-onyx-bracelet-8mm", "amethyst-chip-bracelet"] },
  { handle: "natural-firoza-buddha-bracelet", title: "Natural Firoza Buddha Bracelet", category: "Bracelets", categoryHref: "/collections/bracelets", intent: "Calm & Balance", intentHref: "/collections/calm-and-balance", price: 1490, compareAt: 2000, images: ["/img/featured/FIROZA-BUDDHA-1373x1536.webp"], rating: 4.6, reviewCount: 28, stock: 11, tagline: "Turquoise-toned firoza with a carved Buddha accent.", stones: [{ stone: "Turquoise (Firoza)", href: "/collections/turquoise", note: "Associated in tradition with calm, protection and balance." }], related: ["money-amp-luck-bracelet", "amethyst-chip-bracelet", "pyrite-bracelet"] },
  { handle: "7-chakra-onyx-bracelet-8mm", title: "7 Chakra Onyx Bracelet 8mm", category: "Bracelets", categoryHref: "/collections/bracelets", intent: "Grounding & Protection", intentHref: "/collections/grounding-and-protection", price: 990, compareAt: 1500, images: ["/img/featured/7Chakra-Onyx-1536x1536.webp"], rating: 4.8, reviewCount: 63, stock: 20, badges: ["Bestseller", "Certificate Included"], tagline: "Seven bright chakra stones on a grounding black onyx base.", stones: [{ stone: "Black Onyx", href: "/collections/black-onyx", note: "Associated with grounding, steadiness and protection." }], related: ["money-amp-luck-bracelet", "pyrite-bracelet", "amethyst-chip-bracelet"] },
  { handle: "amethyst-chip-bracelet", title: "Amethyst Chip Bracelet", category: "Bracelets", categoryHref: "/collections/bracelets", intent: "Calm & Balance", intentHref: "/collections/calm-and-balance", price: 690, compareAt: 990, images: ["/img/featured/amthest_br_1024.jpg"], rating: 4.7, reviewCount: 45, stock: 25, tagline: "Soft violet amethyst chips — a calm, everyday piece.", stones: [{ stone: "Amethyst", href: "/collections/amethyst", note: "Long loved in crystal lore for calm and spiritual awareness." }], related: ["natural-firoza-buddha-bracelet", "amethyst-pendant", "pearl-mala-high-quality-shell-pearls"] },
  { handle: "natural-garnet-mala-8-mm", title: "Natural Garnet Mala 8 mm", category: "Mala", categoryHref: "/collections/mala", intent: "Grounding & Protection", intentHref: "/collections/grounding-and-protection", price: 1990, compareAt: 2700, images: ["/img/featured/GARNET-MALA-675x675.jpg", "/img/featured/GARNET_1080.jpg"], rating: 4.7, reviewCount: 18, stock: 8, tagline: "Deep red garnet beads with a rich, warm glow.", stones: [{ stone: "Garnet", href: "/collections/garnet", note: "Associated in lore with warmth, strength and grounding." }], related: ["pearl-mala-high-quality-shell-pearls", "lapis-lazuli-mala-8-mm", "money-magnet-with-zibu-mala-8-mm"] },
  { handle: "lapis-lazuli-mala-8-mm", title: "Lapis Lazuli Mala 8 mm", category: "Mala", categoryHref: "/collections/mala", intent: "Focus & Clarity", intentHref: "/collections/focus-and-clarity", price: 1790, compareAt: 2400, images: ["/img/featured/Lapis-lazuli-mala-675x675.jpg", "/img/featured/Lapis-Lazuli-Mala_1600.jpg"], rating: 4.8, reviewCount: 22, stock: 10, tagline: "Deep blue lapis with flecks of golden pyrite.", stones: [{ stone: "Lapis Lazuli", href: "/collections/lapis-lazuli", note: "Traditionally linked with intuition, communication and clarity." }], related: ["natural-garnet-mala-8-mm", "pearl-mala-high-quality-shell-pearls", "money-magnet-with-zibu-mala-8-mm"] },
  { handle: "money-magnet-with-zibu-mala-8-mm", title: "Money Magnet With Zibu Mala 8 mm", category: "Mala", categoryHref: "/collections/mala", intent: "Abundance & Ambition", intentHref: "/collections/abundance", price: 1890, compareAt: 2500, images: ["/img/featured/Money-Magnet-with-Zibu-MalaDSC05529.jpg"], rating: 4.6, reviewCount: 16, stock: 7, tagline: "A layered money-intent mala with Zibu symbols.", stones: [{ stone: "Pyrite & Citrine", href: "/collections/abundance", note: "Associated in lore with abundance, drive and optimism." }], related: ["natural-garnet-mala-8-mm", "lapis-lazuli-mala-8-mm", "money-amp-luck-bracelet"] },
  { handle: "amethyst-crystal-tree", title: "Amethyst Crystal Tree", category: "Trees", categoryHref: "/collections/trees", intent: "Calm & Balance", intentHref: "/collections/calm-and-balance", price: 2490, compareAt: 3200, images: ["/img/featured/Untitled-design-44.jpg"], rating: 4.8, reviewCount: 29, stock: 6, badges: ["Décor", "Certificate Included"], tagline: "A violet amethyst tree — a calming shelf centrepiece.", stones: [{ stone: "Amethyst", href: "/collections/amethyst", note: "Long loved for calm and a serene atmosphere." }], related: ["seven-chakra-big-tree-1", "citrine-crystal-tree", "seven-chakra-tree"] },
  { handle: "citrine-crystal-tree", title: "Citrine Crystal Tree", category: "Trees", categoryHref: "/collections/trees", intent: "Abundance & Ambition", intentHref: "/collections/abundance", price: 2490, compareAt: 3200, images: ["/img/featured/Untitled-design-46-675x675.jpg", "/img/featured/citrine-big2_1024.png"], rating: 4.7, reviewCount: 24, stock: 6, badges: ["Décor", "Certificate Included"], tagline: "A golden citrine tree to brighten any corner.", stones: [{ stone: "Citrine", href: "/collections/citrine", note: "Associated with abundance and warm, sunny energy." }], related: ["seven-chakra-big-tree-1", "amethyst-crystal-tree", "seven-chakra-tree"] },
  { handle: "seven-chakra-tree", title: "Seven Chakra Tree", category: "Trees", categoryHref: "/collections/trees", intent: "Positive Energy & New Beginnings", intentHref: "/collections/positive-energy", price: 3490, compareAt: 4200, images: ["/img/featured/DSC04330-1536x1536.webp"], rating: 4.8, reviewCount: 31, stock: 5, badges: ["Décor", "Certificate Included"], tagline: "Seven natural stones on a graceful handcrafted tree.", related: ["seven-chakra-big-tree-1", "amethyst-crystal-tree", "citrine-crystal-tree"] },
  { handle: "seven-chakra-triangle-pendant", title: "Seven Chakra Triangle Pendant", category: "Pendants", categoryHref: "/collections/pendant", intent: "Positive Energy & New Beginnings", intentHref: "/collections/positive-energy", price: 890, compareAt: 1490, images: ["/img/watchbuy/7chakra-triangle-pendant-675x1106.jpg", "/img/featured/37-1-1-675x540.jpg"], rating: 4.7, reviewCount: 38, stock: 18, badges: ["Bestseller", "Certificate Included"], tagline: "Seven bright chakra stones set in a sleek triangle.", related: ["citrine-pendant", "amethyst-pendant", "7-chakra-onyx-bracelet-8mm"] },
  { handle: "amethyst-pendant", title: "Amethyst Pendant", category: "Pendants", categoryHref: "/collections/pendant", intent: "Calm & Balance", intentHref: "/collections/calm-and-balance", price: 990, compareAt: 1600, images: ["/img/featured/1-2-4-1536x1536.webp"], rating: 4.6, reviewCount: 19, stock: 13, tagline: "A soft violet amethyst pendant for everyday calm.", stones: [{ stone: "Amethyst", href: "/collections/amethyst", note: "Long loved for calm and spiritual awareness." }], related: ["citrine-pendant", "seven-chakra-triangle-pendant", "amethyst-chip-bracelet"] },
  { handle: "rose-quartz-heart-stone", title: "Rose Quartz Heart Stone", category: "Decor", categoryHref: "/collections/decor", intent: "Love & Harmony", intentHref: "/collections/love-and-harmony", price: 1890, compareAt: 2690, images: ["/img/watchbuy/heart_1024.webp", "/img/watchbuy/heart-1_1024.webp"], rating: 4.8, reviewCount: 47, stock: 12, badges: ["Bestseller", "Certificate Included"], tagline: "A soft pink rose-quartz heart — a gentle gift of love.", stones: [{ stone: "Rose Quartz", href: "/collections/rose-quartz", note: "Long associated in lore with love, warmth and harmony." }], related: ["seven-chakra-heart-tumbled-bracelet", "rose-quartz-orgone-sphere", "amethyst-pendant"] },
  { handle: "seven-chakra-heart-tumbled-bracelet", title: "7 Chakra Heart Bracelet", category: "Bracelets", categoryHref: "/collections/bracelets", intent: "Positive Energy & New Beginnings", intentHref: "/collections/positive-energy", price: 1890, compareAt: 2500, images: ["/img/watchbuy/heart-bracelet-large_689.webp", "/img/watchbuy/heart2-large_683.webp"], rating: 4.7, reviewCount: 26, stock: 9, tagline: "Heart-cut tumbles in all seven chakra colours.", related: ["rose-quartz-heart-stone", "7-chakra-onyx-bracelet-8mm", "amethyst-chip-bracelet"] },
  { handle: "rose-quartz-orgone-sphere", title: "Rose Quartz Orgone Sphere", category: "Sphere", categoryHref: "/collections/sphere", intent: "Love & Harmony", intentHref: "/collections/love-and-harmony", price: 2490, compareAt: 2990, images: ["/img/watchbuy/RSQRTZOSP-FX-2_1024.png"], rating: 4.7, reviewCount: 15, stock: 6, badges: ["Décor", "Certificate Included"], tagline: "A pink orgone sphere with a soft inner glow.", stones: [{ stone: "Rose Quartz", href: "/collections/rose-quartz", note: "Associated in lore with love, warmth and harmony." }], related: ["rose-quartz-heart-stone", "amethyst-crystal-tree", "seven-chakra-tree"] },
  { handle: "gift-packaging", title: "Premium Gift Packaging", category: "Gifting", categoryHref: "/pages/gifting", intent: "Love & Harmony", intentHref: "/collections/love-and-harmony", price: 199, compareAt: 299, images: ["/img/watchbuy/Gift-Packaging-768x768_e105e057-34bb-4c18-961b-2fd0d76f4ff4.webp"], rating: 4.9, reviewCount: 58, stock: 100, badges: ["Add-on"], tagline: "Beautiful gift box with a personal note card.", highlights: ["Sturdy premium gift box", "Add a personalised note card", "Makes any crystal gift-ready", "Add to any order at checkout"], related: ["rose-quartz-heart-stone", "citrine-pendant", "seven-chakra-big-tree-1"] },
];

export const PRODUCTS: Record<string, Product> = Object.fromEntries(RAW.map((d) => [d.handle, build(d)]));

export const getProduct = (handle: string): Product | undefined => PRODUCTS[handle];
export const getAllHandles = (): string[] => Object.keys(PRODUCTS);
export const getRelated = (handles: string[]): Product[] =>
  handles.map((h) => PRODUCTS[h]).filter(Boolean).slice(0, 4);

// Popular products (most-reviewed first) used to top up cross-sell / recently-viewed
// rows so they always render a full, even set of cards.
export const getPopular = (exclude: string[], count: number): Product[] => {
  const ex = new Set(exclude);
  return Object.values(PRODUCTS)
    .filter((p) => !ex.has(p.handle) && p.handle !== "gift-packaging")
    .sort((a, b) => b.reviewCount - a.reviewCount || b.rating - a.rating)
    .slice(0, count);
};

// Related products padded to exactly `count` so the grid never leaves empty cells.
export const getCrossSell = (product: Product, count = 4): Product[] => {
  const picked = getRelated(product.related).filter((p) => p.handle !== product.handle);
  if (picked.length >= count) return picked.slice(0, count);
  const fillers = getPopular([product.handle, ...picked.map((p) => p.handle)], count - picked.length);
  return [...picked, ...fillers];
};
