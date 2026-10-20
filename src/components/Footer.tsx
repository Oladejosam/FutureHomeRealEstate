import { CONTACT, NAV_LINKS, PLANS } from "../lib/data";
import { IconMail, IconPhone, IconPin, Logo } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-50">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm font-display text-2xl font-semibold italic leading-snug text-jade-300">
              Modern Living Redefined.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-50/55">
              Future Homes Properties &amp; Investment Ltd. builds and manages
              premium residential communities on the Lekki corridor. Cove
              Towers, Ikate is our latest address — and it's selling.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[0.68rem] font-extrabold uppercase tracking-[0.3em] text-cream-50/45">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-cream-50/80 transition-colors hover:text-jade-300"
                  >
                    <span className="h-px w-0 bg-jade-400 transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-cream-50/80 transition-colors hover:text-jade-300"
                >
                  <span className="h-px w-0 bg-jade-400 transition-all duration-300 group-hover:w-4" />
                  Book a Viewing
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[0.68rem] font-extrabold uppercase tracking-[0.3em] text-cream-50/45">
              Cove Towers · Plans &amp; Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm font-bold">
              {PLANS.map((p) => (
                <li key={p.id}>
                  <a href="#pricing" className="flex items-baseline gap-2 text-cream-50/80 transition-colors hover:text-jade-300">
                    {p.label}
                    <span className="dotted dotted-light !my-0 !h-0 text-cream-50/30" aria-hidden="true" />
                    <span className="font-display text-base font-black text-cream-50">
                      ₦{p.price}M
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className="inline-flex items-center gap-3 font-bold text-cream-50/80 transition-colors hover:text-jade-300">
                  <IconPhone className="h-4 w-4 text-jade-300" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-3 font-bold text-cream-50/80 transition-colors hover:text-jade-300">
                  <IconMail className="h-4 w-4 text-jade-300" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 font-bold text-cream-50/80">
                <IconPin className="h-4 w-4 text-jade-300" />
                {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs font-semibold text-cream-50/40 sm:flex-row lg:px-8">
          <p>© 2026 Future Homes Properties &amp; Investment Ltd. All rights reserved.</p>
          <p className="font-display italic text-cream-50/55">
            Cove Towers · Ikate, Lekki · Lagos
          </p>
        </div>
      </div>
    </footer>
  );
}
