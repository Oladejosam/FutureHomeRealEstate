import { useState } from "react";
import { CONTACT, PLANS, waLink } from "../lib/data";
import {
  IconArrow,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
} from "./icons";
import { Kicker, Reveal, Squiggle } from "./ui";

type Props = {
  plan: string;
  setPlan: (id: string) => void;
};

const inputCls =
  "w-full rounded-xl border-2 border-navy-900/15 bg-white px-4 py-3 text-sm font-semibold text-navy-950 placeholder:text-navy-900/35 transition-colors focus:border-jade-500 focus:outline-none";

export default function Contact({ plan, setPlan }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const active = PLANS.find((p) => p.id === plan) ?? PLANS[1];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Future Homes! I'm ${name.trim() || "interested in"}. I'd like to enquire about the ${active.label} (₦${active.price}M) at Cove Towers, Ikate, Lekki.${
      message.trim() ? ` ${message.trim()}` : " Please send me the plan and payment options."
    } You can reach me on ${phone.trim()}.`;
    window.open(waLink(msg), "_blank", "noopener");
    setSent(true);
    window.setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="blueprint-dark relative bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* left — pitch + direct lines */}
        <div className="lg:col-span-6">
          <Reveal>
            <Kicker className="text-jade-300">Contact</Kicker>
            <h2 className="mt-6 font-display text-[clamp(2.8rem,6vw,5rem)] font-semibold italic leading-[1.02] tracking-tight text-cream-50">
              <span className="squiggle">
                Take advantage
                <Squiggle className="text-jade-400" />
              </span>
              <br />
              today.
            </h2>
            <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-cream-50/70">
              Call our hotline to discuss your offer, book an in-person
              viewing, or send us the form and we'll reply on WhatsApp with
              floor plans, availability and payment options.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {[
              {
                icon: IconPhone,
                label: "Call our hotline",
                value: CONTACT.phoneDisplay,
                href: `tel:${CONTACT.phoneTel}`,
                big: true,
              },
              {
                icon: IconMail,
                label: "Send us a quick mail",
                value: CONTACT.email,
                href: `mailto:${CONTACT.email}`,
              },
              {
                icon: IconPin,
                label: "Location",
                value: CONTACT.location,
                href: "#location",
              },
              {
                icon: IconClock,
                label: "Viewing hours",
                value: CONTACT.hours,
              },
            ].map((row, i) => {
              const Ico = row.icon;
              const inner = (
                <span className="flex items-center gap-4 rounded-[18px] border border-cream-50/10 bg-navy-900/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-jade-400/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-jade-500/15 text-jade-300">
                    <Ico className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.25em] text-cream-50/45">
                      {row.label}
                    </span>
                    <span
                      className={`mt-1 block truncate font-extrabold text-cream-50 ${
                        row.big ? "font-display text-2xl tracking-tight" : "text-[0.95rem]"
                      }`}
                    >
                      {row.value}
                    </span>
                  </span>
                </span>
              );
              return (
                <Reveal key={row.label} delay={i * 90}>
                  {row.href ? (
                    <a href={row.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* right — form */}
        <div className="lg:col-span-6">
          <Reveal delay={150}>
            <form
              onSubmit={onSubmit}
              className="rounded-[28px] bg-cream-50 p-7 shadow-[0_60px_110px_-50px_rgba(0,0,0,0.9)] sm:p-9"
            >
              <h3 className="font-display text-2xl font-black tracking-tight text-navy-950">
                Book a viewing
              </h3>
              <p className="mt-2 text-sm font-medium text-navy-700/75">
                Tell us who's coming and which plan you're eyeing — we'll
                confirm within the hour, {CONTACT.hours}.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-navy-700">
                    Full name
                  </span>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Obi"
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-navy-700">
                    Phone / WhatsApp
                  </span>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0800 000 0000"
                    className={inputCls}
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-navy-700">
                  Preferred plan
                </span>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className={inputCls}
                >
                  {PLANS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label} — ₦{p.price}M
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-navy-700">
                  Message <span className="normal-case text-navy-900/40">(optional)</span>
                </span>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I'd like a Saturday morning viewing…"
                  className={`${inputCls} resize-none`}
                />
              </label>

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-jade-600 py-4 text-[0.95rem] font-extrabold text-cream-50 shadow-[0_24px_48px_-18px_rgba(15,138,78,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-jade-700"
              >
                Send via WhatsApp
                <IconArrow className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <p
                aria-live="polite"
                className={`mt-4 text-center text-xs font-bold transition-opacity duration-300 ${
                  sent ? "text-jade-700 opacity-100" : "text-navy-900/45 opacity-70"
                }`}
              >
                {sent
                  ? "✓ WhatsApp is opening in a new tab with your message ready."
                  : `Opens WhatsApp with your message pre-filled — or email ${CONTACT.email}.`}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
