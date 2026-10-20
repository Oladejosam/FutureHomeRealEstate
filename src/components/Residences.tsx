import { AMENITIES, EXTRAS, FEATURES, IMG, type Amenity } from "../lib/data";
import { ICONS } from "./icons";
import { Kicker, Reveal, ScriptAccent } from "./ui";

type Tone = "navy" | "jade" | "mid";

const TONES: Record<
  Tone,
  { card: string; pill: string; tile: string; num: string }
> = {
  navy: {
    card: "border-navy-900/10 bg-white",
    pill: "bg-navy-900 text-cream-50",
    tile: "bg-navy-50 text-navy-700",
    num: "text-navy-900/25",
  },
  jade: {
    card: "border-jade-600/20 bg-jade-50/70",
    pill: "bg-jade-600 text-cream-50",
    tile: "bg-white text-jade-600 shadow-sm",
    num: "text-jade-700/30",
  },
  mid: {
    card: "border-navy-900/10 bg-white",
    pill: "bg-navy-600 text-cream-50",
    tile: "bg-navy-50 text-navy-600",
    num: "text-navy-900/25",
  },
};

function GroupCard({
  title,
  tone,
  items,
  delay = 0,
}: {
  title: string;
  tone: Tone;
  items: Amenity[];
  delay?: number;
}) {
  const t = TONES[tone];
  return (
    <Reveal delay={delay}>
      <div
        className={`relative overflow-hidden rounded-[26px] border p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8 ${t.card}`}
      >
        <div className="flex items-center justify-between gap-4">
          <span
            className={`-rotate-1 rounded-full px-5 py-1.5 text-[0.7rem] font-black uppercase tracking-[0.28em] ${t.pill}`}
          >
            {title}
          </span>
          <span
            className={`font-display text-4xl font-black ${t.num}`}
            aria-hidden="true"
          >
            {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <ul className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {items.map((a) => {
            const Ico = ICONS[a.icon];
            return (
              <li key={a.title} className="group flex items-start gap-4">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-[14px] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${t.tile}`}
                >
                  <Ico className="h-5.5 w-5.5" />
                </span>
                <span>
                  <span className="block text-[0.95rem] font-extrabold text-navy-950">
                    {a.title}
                  </span>
                  <span className="mt-1 block text-[0.83rem] leading-relaxed text-navy-700/75">
                    {a.desc}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Residences() {
  return (
    <section id="residences" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* sticky intro */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <Reveal>
              <Kicker className="text-jade-600">The Residences</Kicker>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,3.9rem)] font-black leading-[1.02] tracking-tight text-navy-950">
                Every square metre, <ScriptAccent className="text-jade-600">considered.</ScriptAccent>
              </h2>
              <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-navy-800/85">
                Cove Towers isn't a list of specs — it's a finished way of
                living. Step off the lift into a fitted kitchen, POP ceilings
                and built-in speakers, with every bedroom en-suite. Then the
                building itself: a pool, a gym, covered parking and security
                that never clocks out.
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-10">
              <figure className="group relative overflow-hidden rounded-[26px] shadow-[0_40px_70px_-36px_rgba(7,24,43,0.6)]">
                <img
                  src={IMG.pool}
                  alt="The pool deck at Cove Towers with skyline views"
                  className="h-64 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110 sm:h-72"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-navy-950/80 px-4 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-cream-50 backdrop-blur-sm">
                  The pool deck
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* grouped cards */}
        <div className="space-y-7 lg:col-span-7">
          <GroupCard title="Features" tone="navy" items={FEATURES} />
          <GroupCard title="Amenities" tone="jade" items={AMENITIES} delay={120} />
          <GroupCard title="Extras" tone="mid" items={EXTRAS} delay={200} />
        </div>
      </div>
    </section>
  );
}
