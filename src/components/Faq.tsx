import { useState } from "react";
import { CONTACT, FAQS, waLink } from "../lib/data";
import { IconArrow, IconPlus } from "./icons";
import { Kicker, Reveal, ScriptAccent } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <Reveal>
              <Kicker className="text-jade-600">Good to Know</Kicker>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,3.9rem)] font-black leading-[1.02] tracking-tight text-navy-950">
                The questions everyone <ScriptAccent className="text-jade-600">asks.</ScriptAccent>
              </h2>
              <p className="mt-6 max-w-sm text-[1.02rem] leading-relaxed text-navy-800/85">
                Straight answers about what's included, how payment works and
                how to book a viewing. Anything else — just call us.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8">
              <a
                href={waLink(
                  `Hello Future Homes! I have a question about Cove Towers: `
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border-2 border-navy-900 px-6 py-3 text-sm font-extrabold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-900 hover:text-cream-50"
              >
                Ask us anything
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <p className="mt-4 text-sm font-semibold text-navy-600/70">
                Or call{" "}
                <a href={`tel:${CONTACT.phoneTel}`} className="font-extrabold text-navy-900 underline decoration-jade-500 decoration-2 underline-offset-4">
                  {CONTACT.phoneDisplay}
                </a>{" "}
                · {CONTACT.hours}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-4">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 80}>
                  <li
                    className={`overflow-hidden rounded-[20px] border transition-all duration-500 ${
                      isOpen
                        ? "border-jade-500/50 bg-white shadow-[0_28px_50px_-30px_rgba(7,24,43,0.4)]"
                        : "border-navy-900/12 bg-white/60 hover:border-navy-900/30 hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-5 px-6 py-5 text-left"
                    >
                      <span
                        className={`font-display text-lg font-black ${
                          isOpen ? "text-jade-600" : "text-navy-900/30"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-[1.02rem] font-extrabold text-navy-950">
                        {f.q}
                      </span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                          isOpen
                            ? "rotate-45 border-jade-500 bg-jade-500 text-cream-50"
                            : "border-navy-900/25 text-navy-900"
                        }`}
                      >
                        <IconPlus className="h-4.5 w-4.5" />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="px-6 pb-6 pl-[3.7rem] text-[0.95rem] leading-relaxed text-navy-800/85">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
