import { ChevronRight } from "@/components/icons";

const POSTS = [
  {
    title: "What is a Mala Bead? Origins, Significance & How to Use One",
    excerpt:
      "A gentle introduction to mala beads — where they come from, what they mean, and simple ways to bring one into your day.",
    img: "/img/blog/cc_4_cca11f3c-409e-4235-9dc0-44b5bfa48029.png",
    href: "/blogs/learn/what-is-a-mala-bead",
  },
  {
    title: "Powerful Yantras to Attract Good Energy",
    excerpt:
      "Explore the timeless geometry of yantras and how these sacred designs are traditionally used to invite positive energy.",
    img: "/img/blog/cc3_aef06bae-f32d-4029-9d07-021c06aee3a6.jpg",
    href: "/blogs/learn/powerful-yantras",
  },
  {
    title: "How to Use Crystal Products Like Agate Slice, Crystal Tree & Murti",
    excerpt:
      "A practical guide to placing and caring for popular crystal pieces so they look their best in your space.",
    img: "/img/blog/2_1b61a55a-bf32-436c-82d5-ba7f917adaca.jpg",
    href: "/blogs/learn/how-to-use-crystal-products",
  },
];

export default function BlogPosts() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="journal-heading">
      <div className="cc-container">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 id="journal-heading" className="cc-section-title text-left">
            From the Journal
          </h2>
          <a href="/blogs/learn" className="cc-viewall shrink-0">
            View All
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-background"
            >
              <a href={post.href} className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </a>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg leading-snug text-heading">
                  <a href={post.href} className="transition-colors group-hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="flex-1 text-sm text-muted">{post.excerpt}</p>
                <a href={post.href} className="cc-viewall mt-1">
                  Read more
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
