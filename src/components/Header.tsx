"use client";

import { useEffect, useState } from "react";
import { TOP_NAV } from "@/lib/nav";
import {
  SearchIcon,
  UserIcon,
  HeartIcon,
  CartIcon,
  ChevronDown,
  ChevronRight,
  PhoneIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/icons";

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Sticky behaviour
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setStuck(window.scrollY > 120);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={[
          "left-0 top-0 z-40 w-full bg-white transition-shadow duration-200",
          stuck ? "fixed shadow-[0_4px_18px_rgba(0,0,0,0.08)]" : "relative",
        ].join(" ")}
      >
        {/* ── Top row ── */}
        <div className="cc-container flex items-center gap-4 py-3 lg:py-4">
          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className="grid h-11 w-11 shrink-0 place-items-center text-heading lg:hidden"
          >
            <MenuIcon />
          </button>

          {/* Logo */}
          <a href="/" className="shrink-0" aria-label="Certified Crystal home">
            <img
              src="/img/footer/Certified_Crystal_logo_800.jpg"
              alt="Certified Crystal"
              className="h-[54px] w-auto object-contain"
            />
          </a>

          {/* Search (desktop / tablet) */}
          <form
            role="search"
            className="ml-2 hidden flex-1 items-center gap-2 rounded-full border border-line bg-surface-cream px-4 md:flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <SearchIcon className="shrink-0 text-muted" />
            <label htmlFor="site-search" className="sr-only">
              Search products
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="I'm looking for…"
              className="h-9 w-full bg-transparent text-[15px] text-heading outline-none placeholder:text-muted"
            />
          </form>

          {/* Right cluster */}
          <div className="ml-auto flex items-center gap-4 lg:gap-5">
            <a
              href="tel:+919810800550"
              className="hidden items-center gap-2 text-[13px] leading-tight text-heading xl:flex"
            >
              <PhoneIcon width={20} height={20} className="text-brand" />
              <span>
                <span className="block text-muted">Call Now</span>
                <span className="font-semibold">+91 98108-00550</span>
              </span>
            </a>

            <a
              href="/account"
              aria-label="Account"
              className="hidden text-heading transition-colors hover:text-brand sm:block"
            >
              <UserIcon />
            </a>

            <a
              href="/wishlist"
              aria-label="Wishlist"
              className="hidden text-heading transition-colors hover:text-brand sm:block"
            >
              <HeartIcon />
            </a>

            <a
              href="/cart"
              aria-label="Cart, Rs.0"
              className="flex items-center gap-2 text-heading transition-colors hover:text-brand"
            >
              <span className="relative">
                <CartIcon />
                <span className="absolute -right-2 -top-2 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-brand px-1 text-[11px] font-semibold text-white">
                  0
                </span>
              </span>
              <span className="hidden text-[14px] font-medium lg:inline">Rs.0</span>
            </a>
          </div>
        </div>

        {/* Mobile search row */}
        <div className="cc-container pb-3 md:hidden">
          <form
            role="search"
            className="flex items-center gap-2 rounded-full border border-line bg-surface-cream px-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <SearchIcon className="shrink-0 text-muted" />
            <label htmlFor="site-search-mobile" className="sr-only">
              Search products
            </label>
            <input
              id="site-search-mobile"
              type="search"
              placeholder="I'm looking for…"
              className="h-9 w-full bg-transparent text-[15px] text-heading outline-none placeholder:text-muted"
            />
          </form>
        </div>

        {/* ── Desktop nav bar ── */}
        <nav
          aria-label="Main navigation"
          className="hidden border-t border-line lg:block"
        >
          <ul className="cc-container flex items-center justify-center gap-1">
            {TOP_NAV.map((item, i) => {
              const hasMenu = !!item.simple?.length;
              // Anchor left-half dropdowns to their left edge and right-half to
              // their right edge so a wide panel never overflows the viewport.
              const alignRight = i >= TOP_NAV.length / 2;
              return (
                <li key={item.label} className="group relative">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-3 text-[14px] font-medium text-heading transition-colors group-hover:text-brand"
                  >
                    {item.label}
                    {hasMenu && (
                      <ChevronDown className="transition-transform duration-150 group-hover:rotate-180" />
                    )}
                  </a>

                  {hasMenu && (
                    <div
                      className={[
                        "invisible absolute top-full z-50 pt-1 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100",
                        alignRight ? "right-0" : "left-0",
                      ].join(" ")}
                    >
                      <div className="max-h-[70vh] w-[min(760px,90vw)] overflow-auto rounded-lg border border-line bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                        <ul
                          className="[column-gap:24px]"
                          style={{
                            columnCount:
                              item.simple!.length > 24
                                ? 4
                                : item.simple!.length > 12
                                  ? 3
                                  : 2,
                          }}
                        >
                          {item.simple!.map((s) => (
                            <li key={s.label} className="break-inside-avoid">
                              <a
                                href={s.href}
                                className="block rounded px-2 py-1.5 text-[14px] text-heading transition-colors hover:bg-surface-cream hover:text-brand"
                              >
                                {s.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* Spacer so content doesn't jump when header becomes fixed */}
      {stuck && <div aria-hidden="true" className="h-[120px]" />}

      {/* ── Mobile drawer ── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          {/* Panel */}
          <div className="absolute left-0 top-0 flex h-full w-[86%] max-w-[360px] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <img
                src="/img/footer/Certified_Crystal_logo_800.jpg"
                alt="Certified Crystal"
                className="h-10 w-auto object-contain"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
                className="grid h-11 w-11 place-items-center text-heading"
              >
                <CloseIcon />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-auto">
              <ul>
                {TOP_NAV.map((item) => {
                  const hasMenu = !!item.simple?.length;
                  const open = openAccordion === item.label;
                  return (
                    <li key={item.label} className="border-b border-line">
                      {hasMenu ? (
                        <>
                          <button
                            type="button"
                            aria-expanded={open}
                            onClick={() =>
                              setOpenAccordion(open ? null : item.label)
                            }
                            className="flex w-full items-center justify-between px-5 py-4 text-left text-[15px] font-medium text-heading"
                          >
                            {item.label}
                            <ChevronRight
                              className={[
                                "transition-transform duration-200",
                                open ? "rotate-90" : "",
                              ].join(" ")}
                            />
                          </button>
                          {open && (
                            <ul className="bg-surface-cream pb-2">
                              <li>
                                <a
                                  href={item.href}
                                  className="block px-7 py-2 text-[14px] font-medium text-brand"
                                  onClick={() => setDrawerOpen(false)}
                                >
                                  View all
                                </a>
                              </li>
                              {item.simple!.map((s) => (
                                <li key={s.label}>
                                  <a
                                    href={s.href}
                                    className="block px-7 py-2 text-[14px] text-heading"
                                    onClick={() => setDrawerOpen(false)}
                                  >
                                    {s.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className="block px-5 py-4 text-[15px] font-medium text-heading"
                          onClick={() => setDrawerOpen(false)}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
