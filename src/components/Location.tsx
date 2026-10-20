import { DISTANCES, IMG } from "../lib/data";
import { IconPin } from "./icons";
import { Kicker, Reveal, ScriptAccent } from "./ui";

function MapCard() {
  return (
    <div className="rounded-[28px] border border-cream-50/15 bg-navy-900 p-3 shadow-[0_50px_90px_-40px_rgba(0,0,0,0.8)]">
      <svg
        viewBox="0 0 560 420"
        role="img"
        aria-label="Stylised map of Ikate, Lekki showing Cove Towers and nearby landmarks"
        className="w-full rounded-[22px]"
      >
        {/* base */}
        <rect width="560" height="420" fill="var(--color-navy-800)" />
        <g stroke="rgba(248,250,244,0.05)" strokeWidth="1">
          {Array.from({ length: 13 }, (_, i) => (
            <line key={`v${i}`} x1={i * 44 + 20} y1="0" x2={i * 44 + 20} y2="420" />
          ))}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 44 + 20} x2="560" y2={i * 44 + 20} />
          ))}
        </g>

        {/* lagoon */}
        <path
          d="M0,0 L235,0 C215,55 175,88 118,108 C78,122 32,118 0,128 Z"
          fill="var(--color-navy-600)"
          opacity="0.45"
        />
        <text x="34" y="52" fill="var(--color-navy-200)" fontSize="11" letterSpacing="2.5" fontWeight="700" style={{ fontFamily: "var(--font-body)" }}>
          LEKKI LAGOON
        </text>

        {/* green zones */}
        <ellipse cx="150" cy="255" rx="62" ry="30" fill="var(--color-jade-500)" opacity="0.16" />
        <ellipse cx="470" cy="330" rx="72" ry="34" fill="var(--color-jade-500)" opacity="0.16" />

        {/* expressway */}
        <path d="M15,398 C160,342 262,300 352,244 C432,194 502,148 558,118" fill="none" stroke="var(--color-navy-950)" strokeWidth="16" strokeLinecap="round" className="draw-road" />
        <path d="M15,398 C160,342 262,300 352,244 C432,194 502,148 558,118" fill="none" stroke="var(--color-cream-100)" strokeWidth="9" strokeLinecap="round" className="draw-road" />
        <path d="M15,398 C160,342 262,300 352,244 C432,194 502,148 558,118" fill="none" stroke="var(--color-jade-400)" strokeWidth="2" strokeDasharray="10 14" opacity="0.8" />

        {/* ikate road */}
        <path d="M300,420 C312,330 332,258 382,180 C412,130 432,88 442,38" fill="none" stroke="var(--color-navy-950)" strokeWidth="11" strokeLinecap="round" className="draw-road" />
        <path d="M300,420 C312,330 332,258 382,180 C412,130 432,88 442,38" fill="none" stroke="var(--color-cream-100)" strokeWidth="5.5" strokeLinecap="round" className="draw-road" />

        {/* side road */}
        <path d="M55,418 C120,382 182,372 262,362" fill="none" stroke="var(--color-navy-950)" strokeWidth="9" strokeLinecap="round" className="draw-road" />
        <path d="M55,418 C120,382 182,372 262,362" fill="none" stroke="var(--color-cream-100)" strokeWidth="4.5" strokeLinecap="round" className="draw-road" />

        {/* road labels */}
        <text x="368" y="176" fill="var(--color-cream-100)" fontSize="10.5" letterSpacing="2.2" fontWeight="700" transform="rotate(-21 368 176)" style={{ fontFamily: "var(--font-body)" }} opacity="0.85">
          LEKKI–EPE EXPRESSWAY
        </text>
        <text x="352" y="330" fill="var(--color-cream-100)" fontSize="10" letterSpacing="2" fontWeight="700" transform="rotate(-72 352 330)" style={{ fontFamily: "var(--font-body)" }} opacity="0.65">
          IKATE ROAD
        </text>

        {/* POIs */}
        <g style={{ fontFamily: "var(--font-body)" }} fontSize="11" fontWeight="700" fill="var(--color-cream-100)">
          <circle cx="482" cy="330" r="4.5" fill="var(--color-cream-100)" />
          <text x="482" y="352" textAnchor="middle" opacity="0.9">Lekki Phase 1</text>

          <circle cx="96" cy="200" r="4.5" fill="var(--color-cream-100)" />
          <text x="96" y="222" textAnchor="middle" opacity="0.9">Ajah</text>

          <circle cx="245" cy="345" r="4.5" fill="var(--color-cream-100)" />
          <text x="245" y="326" textAnchor="middle" opacity="0.9">Motor Axis</text>

          <circle cx="120" cy="70" r="4.5" fill="var(--color-cream-100)" />
          <text x="120" y="92" textAnchor="middle" opacity="0.9">Atlantic</text>
        </g>

        {/* the pin */}
        <circle cx="352" cy="244" r="16" fill="var(--color-jade-400)" opacity="0.45" className="map-ping" />
        <circle cx="352" cy="244" r="10" fill="var(--color-jade-500)" stroke="var(--color-cream-50)" strokeWidth="2.5" />
        <path d="M352 239c-3.4 0-5.6 2.4-5.6 5.1 0 3.7 5.6 8.4 5.6 8.4s5.6-4.7 5.6-8.4c0-2.7-2.2-5.1-5.6-5.1z" fill="var(--color-navy-950)" />
        <circle cx="352" cy="244" r="2" fill="var(--color-cream-50)" />
        <text
          x="352"
          y="278"
          textAnchor="middle"
          fontSize="13.5"
          fontWeight="800"
          fill="var(--color-cream-50)"
          stroke="var(--color-navy-950)"
          strokeWidth="4"
          paintOrder="stroke"
          letterSpacing="1.5"
          style={{ fontFamily: "var(--font-body)" }}
        >
          COVE TOWERS
        </text>

        {/* compass */}
        <g transform="translate(508,52)" opacity="0.85">
          <circle r="19" fill="none" stroke="var(--color-cream-100)" strokeWidth="1.5" />
          <path d="M0,-13 L4,6 L0,2 L-4,6 Z" fill="var(--color-jade-400)" />
          <text y="-24" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--color-cream-100)" style={{ fontFamily: "var(--font-body)" }}>
            N
          </text>
        </g>

        {/* scale */}
        <g transform="translate(28,392)" stroke="var(--color-cream-100)" strokeWidth="2" opacity="0.7">
          <line x1="0" y1="0" x2="70" y2="0" />
          <line x1="0" y1="-5" x2="0" y2="5" />
          <line x1="70" y1="-5" x2="70" y2="5" />
        </g>
        <text x="80" y="396" fontSize="10" fontWeight="700" fill="var(--color-cream-100)" opacity="0.7" style={{ fontFamily: "var(--font-body)" }}>
          1 km
        </text>
      </svg>
    </div>
  );
}

export default function Location() {
  return (
    <section id="location" className="relative bg-navy-950">
      {/* skyline band */}
      <div className="relative h-56 overflow-hidden md:h-72">
        <img
          src={IMG.skyline}
          alt="Lekki skyline at sunset"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/55 to-navy-950" />
        <div className="absolute inset-0 grid place-items-center px-6">
          <Reveal>
            <p className="text-center font-display text-[clamp(1.7rem,4vw,3rem)] font-semibold italic leading-tight text-cream-50">
              “Luxury isn't a room.{" "}
              <span className="text-jade-300">It's an address.</span>”
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <Reveal>
            <Kicker className="text-jade-300">The Neighbourhood</Kicker>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,3.9rem)] font-black leading-[1.02] tracking-tight text-cream-50">
              Ikate, Lekki — minutes from <ScriptAccent className="text-jade-300">everything.</ScriptAccent>
            </h2>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-cream-50/70">
              Ikate sits at the island's sweet spot: upscale retail and
              restaurants in Lekki Phase 1, the Motor Axis for work, the beach
              clubs of Atlantic, and the airport when you need to fly — all on
              one short list.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-10">
            <ul className="divide-y divide-cream-50/10 border-y border-cream-50/10">
              {DISTANCES.map((d) => (
                <li key={d.place} className="flex items-baseline gap-0 py-4">
                  <div className="min-w-0">
                    <span className="block text-[0.95rem] font-extrabold text-cream-50">
                      {d.place}
                    </span>
                    <span className="text-xs font-semibold text-cream-50/45">
                      {d.note}
                    </span>
                  </div>
                  <span className="dotted dotted-light" aria-hidden="true" />
                  <span className="font-display text-xl font-black text-jade-300">
                    {d.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-cream-50/40">
              <IconPin className="h-4 w-4 text-jade-300" />
              Travel times approximate, off-peak.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pt-4">
          <MapCard />
          <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-cream-50/40">
            Stylised map · not to scale
          </p>
        </Reveal>
      </div>
    </section>
  );
}
