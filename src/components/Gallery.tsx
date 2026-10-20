import { GALLERY } from "../lib/data";
import { Kicker, Reveal, ScriptAccent } from "./ui";

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <Kicker className="text-jade-600">The Gallery</Kicker>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2.4rem,4.6vw,3.9rem)] font-black leading-[1.02] tracking-tight text-navy-950">
              Step inside before <ScriptAccent className="text-jade-600">you move in.</ScriptAccent>
            </h2>
          </Reveal>
          <Reveal delay={150} className="max-w-xs">
            <p className="border-l-2 border-jade-500 pl-4 text-sm font-medium leading-relaxed text-navy-700/80">
              Real finishes, real light. Every home is photographed on site so
              what you see is what you walk into.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-9 sm:grid-cols-2 xl:grid-cols-4 lg:gap-6 xl:gap-8">
          {GALLERY.map((g, i) => (
            <Reveal key={g.label} delay={i * 110}>
              <article
                className={`group relative bg-white p-3 pb-4 shadow-[0_28px_50px_-28px_rgba(7,24,43,0.5)] transition-all duration-500 ease-out hover:-translate-y-3 hover:rotate-0 hover:shadow-[0_44px_70px_-30px_rgba(7,24,43,0.6)] ${
                  i % 2 === 0 ? g.rotate : `-rotate-1`
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-3 rounded-[2px] bg-jade-200/85 shadow-sm"
                />
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-110"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-navy-900/90 px-4 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-cream-50 backdrop-blur-sm">
                    {g.label}
                  </span>
                </div>
                <p className="mt-3 px-1 font-display text-sm italic text-navy-600">
                  No. 0{i + 1} — Cove Towers, Ikate
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
