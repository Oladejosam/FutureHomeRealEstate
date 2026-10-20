import { CONTACT, monthly, PLANS, waLink } from "../lib/data";
import { IconCheck, IconPhone } from "./icons";
import { Kicker, Reveal, ScriptAccent } from "./ui";

type Props = {
  plan: string;
  setPlan: (id: string) => void;
};

export default function Pricing({ plan, setPlan }: Props) {
  const active = PLANS.find((p) => p.id === plan) ?? PLANS[1];

  return (
    <section id="pricing" className="blueprint-dark relative bg-navy-950 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <Kicker className="text-jade-300">Pricing</Kicker>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,3.9rem)] font-black leading-[1.02] tracking-tight text-cream-50">
              Choose <ScriptAccent className="text-jade-300">your space.</ScriptAccent>
            </h2>
          </Reveal>
          <Reveal delay={150} className="max-w-sm">
            <p className="border-l-2 border-jade-400 pl-4 text-sm font-medium leading-relaxed text-cream-50/65">
              All prices include fitted kitchen, modern POP ceilings,
              built-in speakers and covered parking. Pick a plan — we'll do
              the rest.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {PLANS.map((p, i) => {
            const selected = p.id === plan;
            return (
              <Reveal key={p.id} delay={i * 120} className="h-full">
                <button
                  type="button"
                  onClick={() => setPlan(p.id)}
                  aria-pressed={selected}
                  className={`group relative h-full w-full rounded-[26px] border-2 p-7 text-left transition-all duration-500 lg:p-8 ${
                    selected
                      ? "-translate-y-2 border-jade-500 bg-cream-50 text-navy-900 shadow-[0_44px_80px_-34px_rgba(19,162,92,0.55)]"
                      : "border-cream-50/15 bg-navy-900/60 text-cream-50 hover:-translate-y-1 hover:border-cream-50/40"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-jade-500 px-4 py-1 text-[0.6rem] font-black uppercase tracking-[0.2em] text-navy-950">
                      Most popular
                    </span>
                  )}

                  <span className="flex items-start justify-between gap-4">
                    <span>
                      <span
                        className={`text-[0.72rem] font-black uppercase tracking-[0.28em] ${
                          selected ? "text-jade-600" : "text-jade-300"
                        }`}
                      >
                        {p.label}
                      </span>
                      <span
                        className={`mt-1.5 block text-xs font-bold ${
                          selected ? "text-navy-600/70" : "text-cream-50/50"
                        }`}
                      >
                        {p.beds}
                      </span>
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 transition-all duration-300 ${
                        selected
                          ? "border-jade-500 bg-jade-500 text-navy-950"
                          : "border-cream-50/30 text-transparent group-hover:border-cream-50/60"
                      }`}
                    >
                      <IconCheck className="h-4.5 w-4.5" />
                    </span>
                  </span>

                  <span className="mt-6 block font-display text-[3.2rem] font-black leading-none tracking-tight">
                    ₦{p.price}
                    <span className="text-4xl">M</span>
                  </span>
                  <span
                    className={`mt-2.5 block text-xs font-semibold ${
                      selected ? "text-navy-600/70" : "text-cream-50/50"
                    }`}
                  >
                    ≈ {monthly(p.price)} · est.
                  </span>
                  <span
                    className={`mt-4 block font-display text-[0.95rem] italic ${
                      selected ? "text-navy-700/80" : "text-cream-50/65"
                    }`}
                  >
                    {p.blurb}
                  </span>

                  <span
                    className={`my-6 block border-t-2 border-dotted ${
                      selected ? "border-navy-900/20" : "border-cream-50/15"
                    }`}
                  />

                  <ul className="space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[0.83rem] font-semibold leading-snug">
                        <IconCheck
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            selected ? "text-jade-600" : "text-jade-300"
                          }`}
                        />
                        <span className={selected ? "text-navy-800/85" : "text-cream-50/80"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* summary / CTA bar */}
        <Reveal delay={200} className="mt-10">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[24px] border border-cream-50/15 bg-navy-900/80 p-7 lg:flex-row lg:items-center lg:p-8">
            <div>
              <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.3em] text-cream-50/50">
                Your selection
              </p>
              <p className="mt-2 font-display text-2xl font-black tracking-tight text-cream-50 sm:text-3xl">
                {active.label} — ₦{active.price}M
                <span className="ml-3 hidden font-display text-lg font-medium italic text-jade-300 sm:inline">
                  {active.beds}
                </span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={waLink(
                  `Hello Future Homes! I'm interested in the ${active.label} (₦${active.price}M) at Cove Towers, Ikate. Please send me the floor plan and current payment options.`
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-jade-500 px-6 py-3.5 text-sm font-extrabold text-navy-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-jade-400"
              >
                Reserve via WhatsApp
                <span className="text-base leading-none">→</span>
              </a>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-cream-50/40 px-6 py-3 text-sm font-extrabold text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-cream-50"
              >
                <IconPhone className="h-4 w-4" /> Call to discuss
              </a>
            </div>
          </div>
          <p className="mt-5 text-xs font-medium text-cream-50/40">
            * Illustrative 60-month instalment for reference only. Formal
            payment plans are shared by our sales team.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
