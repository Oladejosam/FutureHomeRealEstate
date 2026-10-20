import { CONTACT, IMG, STATS, TRUST } from "../lib/data";
import { IconArrow, IconCheck, IconPhone, IconPin } from "./icons";
import { CountUp, Reveal, Squiggle } from "./ui";

function RotatingBadge() {
  return (
    <div className="absolute -left-10 -top-10 z-10 hidden h-36 w-36 place-items-center sm:grid">
      <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path
            id="badge-circle"
            d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
          />
        </defs>
        <text
          fill="var(--color-navy-900)"
          fontSize="10"
          fontWeight="800"
          letterSpacing="2.6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <textPath href="#badge-circle">
            MODERN LIVING REDEFINED • COVE TOWERS • IKATE LEKKI •
          </textPath>
        </text>
      </svg>
      <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-jade-300 shadow-lg">
        <IconPin className="h-6 w-6" />
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="blueprint relative overflow-hidden">
      {/* faint giant backdrop word */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-16 select-none font-display text-[22vw] font-black leading-none text-navy-900/[0.045]"
      >
        COVE
      </span>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-10 lg:px-8 lg:pt-16">
        {/* script accent */}
        <div className="pointer-events-none absolute right-6 top-6 hidden rotate-2 xl:block">
          <span className="squiggle font-display text-3xl font-semibold italic text-navy-600">
            Modern Living Redefined!
            <Squiggle className="text-jade-500" />
          </span>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* -------- copy -------- */}
          <div className="lg:col-span-7">
            <div
              className="mask-line"
              style={{ "--md": "0ms" } as React.CSSProperties}
            >
              <span>
                <span className="inline-flex -rotate-2 items-center gap-2.5 rounded-full bg-jade-600 px-5 py-2 text-sm font-black uppercase tracking-[0.18em] text-cream-50 shadow-[0_14px_30px_-14px_rgba(15,138,78,0.9)]">
                  <span className="blink h-2 w-2 rounded-full bg-cream-50" />
                  For Sale
                </span>
              </span>
            </div>

            <div className="mask-line mt-6" style={{ "--md": "120ms" } as React.CSSProperties}>
              <span className="text-[0.72rem] font-extrabold uppercase tracking-[0.3em] text-navy-600">
                Future Homes · Properties &amp; Investment Ltd.
              </span>
            </div>

            <h1 className="mt-4 font-display font-black leading-[0.92] tracking-tight text-navy-950">
              <span className="mask-line text-[clamp(3.8rem,10vw,7.8rem)]" style={{ "--md": "220ms" } as React.CSSProperties}>
                <span>Cove</span>
              </span>
              <span className="mask-line text-[clamp(3.8rem,10vw,7.8rem)]" style={{ "--md": "340ms" } as React.CSSProperties}>
                <span>
                  Towers<span className="text-jade-500">.</span>
                </span>
              </span>
            </h1>

            <div className="mask-line mt-4" style={{ "--md": "480ms" } as React.CSSProperties}>
              <span className="font-display text-2xl font-medium italic text-navy-600 sm:text-3xl">
                Luxury 1, <span className="whitespace-nowrap">2 &amp; 3</span> bedroom highrise flats
              </span>
            </div>

            <div
              className="mask-line mt-6"
              style={{ "--md": "580ms" } as React.CSSProperties}
            >
              <span className="flex flex-wrap items-center gap-x-4 gap-y-3">
                <span className="inline-flex items-center gap-2.5 text-lg font-extrabold text-navy-900">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-jade-600 text-cream-50">
                    <IconPin className="h-5 w-5" />
                  </span>
                  {CONTACT.location}
                </span>
                <a
                  href="#location"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-navy-600 underline decoration-jade-500 decoration-2 underline-offset-4 transition-colors hover:text-navy-900"
                >
                  View on map
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </span>
            </div>

            <Reveal delay={680} className="mt-6 max-w-xl">
              <p className="text-[1.02rem] leading-relaxed text-navy-800/85">
                Live in style and comfort at Cove Towers. These modern highrise
                apartments offer the perfect blend of luxury, convenience and
                premium living — fitted kitchens, private balconies, a pool
                deck, a gym and 24/7 security, just minutes off the Lekki–Epe
                Expressway.
              </p>
            </Reveal>

            <Reveal delay={780} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-jade-600 px-7 py-4 text-[0.95rem] font-extrabold text-cream-50 shadow-[0_20px_44px_-16px_rgba(15,138,78,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-jade-700"
              >
                Take Advantage Today
                <IconArrow className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="inline-flex items-center gap-3 rounded-full border-2 border-navy-900 px-7 py-[0.95rem] text-[0.95rem] font-extrabold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-900 hover:text-cream-50"
              >
                <IconPhone className="h-4.5 w-4.5" />
                {CONTACT.phoneDisplay}
              </a>
            </Reveal>

            <Reveal delay={880} className="mt-12">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t-2 border-dotted border-navy-900/25 pt-7 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-3xl font-black tracking-tight text-navy-950 sm:text-[2.1rem]">
                      <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </dd>
                    <dd className="mt-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-navy-600/80">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* -------- imagery -------- */}
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-3 rotate-2 rounded-[36px] border-2 border-jade-500/45" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] shadow-[0_50px_90px_-40px_rgba(7,24,43,0.65)]">
              <img
                src={IMG.hero}
                alt="Cove Towers highrise apartments rising over Ikate, Lekki"
                className="kenburns h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950/50 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-navy-950/80 px-4 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.25em] text-cream-50 backdrop-blur-sm">
                Ikate · Lekki
              </span>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cream-50">
                <div>
                  <p className="font-display text-xl font-bold">The Towers</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-50/80">
                    Completed &amp; ready
                  </p>
                </div>
              </div>
            </div>

            <RotatingBadge />

            <Reveal
              delay={500}
              className="floaty absolute -bottom-9 -left-4 z-10 sm:-left-10"
            >
              <div className="rounded-[20px] border border-navy-900/10 bg-cream-50/95 p-5 shadow-[0_30px_60px_-24px_rgba(7,24,43,0.55)] backdrop-blur">
                <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.25em] text-jade-600">
                  Two Bedroom · Most popular
                </p>
                <p className="mt-1.5 font-display text-3xl font-black tracking-tight text-navy-950">
                  ₦220M
                </p>
                <a
                  href="#pricing"
                  className="group mt-2 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-navy-600 transition-colors hover:text-jade-600"
                >
                  Compare plans
                  <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* -------- trust strip -------- */}
      <div className="relative bg-navy-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-cream-50/10 px-5 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:px-8">
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={i * 110}>
              <div className="flex items-start gap-4 px-2 py-7 lg:px-8">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-jade-500/20 text-jade-300">
                  <IconCheck className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-[0.95rem] font-extrabold text-cream-50">
                    {t.title}
                  </span>
                  <span className="mt-1 block text-[0.78rem] font-medium leading-snug text-cream-50/60">
                    {t.sub}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
