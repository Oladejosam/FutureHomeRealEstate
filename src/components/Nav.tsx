import { useEffect, useState } from "react";
import { CONTACT, NAV_LINKS, TICKER } from "../lib/data";
import { IconArrow, IconPhone, IconSpark, Logo } from "./icons";

function Ticker() {
  const items = [...TICKER, ...TICKER, ...TICKER, ...TICKER];
  return (
    <div className="overflow-hidden bg-navy-950 text-cream-50">
      <div className="marquee-track items-center gap-8 py-2 pr-8">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap text-[0.68rem] font-bold uppercase tracking-[0.22em]"
          >
            <span className={i % 2 === 0 ? "text-cream-50/90" : "text-jade-300"}>
              {t}
            </span>
            <IconSpark className="h-2.5 w-2.5 text-jade-400/80" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50" id="top">
      <Ticker />
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-navy-900/10 bg-cream-50/90 shadow-[0_12px_40px_-20px_rgba(7,24,43,0.35)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 lg:px-8">
          <Logo />

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[0.82rem] font-bold text-navy-800 transition-colors hover:text-navy-950"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-jade-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="hidden items-center gap-2 text-sm font-extrabold text-navy-800 transition-colors hover:text-jade-600 md:flex"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-navy-900/15 bg-cream-100">
                <IconPhone className="h-4 w-4" />
              </span>
              {CONTACT.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-extrabold text-cream-50 shadow-[0_10px_24px_-12px_rgba(7,24,43,0.7)] transition-all hover:bg-jade-600 sm:inline-flex"
            >
              Book a Viewing
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-navy-900/15 bg-cream-100 lg:hidden"
            >
              <span className="relative block h-3 w-4.5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full rounded bg-navy-900 transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded bg-navy-900 transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full rounded bg-navy-900 transition-all duration-300 ${
                    open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`grid overflow-hidden transition-all duration-500 lg:hidden ${
            open ? "grid-rows-[1fr] border-t border-navy-900/10 bg-cream-50/95 backdrop-blur-md" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-bold text-navy-800 transition-colors hover:bg-navy-50"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-jade-600 px-4 py-3 text-sm font-extrabold text-cream-50"
              >
                <IconPhone className="h-4 w-4" /> Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
