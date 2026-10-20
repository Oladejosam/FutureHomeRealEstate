import type { FC, SVGProps } from "react";
import fhpLogo from "../../img/fhp logo land.png";

type P = SVGProps<SVGSVGElement>;

const S: FC<P> = ({ children, ...p }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    {children}
  </svg>
);

export const IconSofa: FC<P> = (p) => (
  <S {...p}>
    <path d="M5 10V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2" />
    <path d="M3 13a2 2 0 0 1 4 0v1h10v-1a2 2 0 0 1 4 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M6 18v1.5M18 18v1.5" />
  </S>
);

export const IconBed: FC<P> = (p) => (
  <S {...p}>
    <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
    <path d="M3 15h18" />
    <circle cx="8.4" cy="11" r="1.7" />
    <path d="M13.5 11h3.5" />
    <path d="M3 18v1.5M21 18v1.5" />
  </S>
);

export const IconCeiling: FC<P> = (p) => (
  <S {...p}>
    <path d="m12 3 9 5-9 5-9-5z" />
    <path d="m4.5 12.8 7.5 4.2 7.5-4.2" />
    <path d="m4.5 16.6 7.5 4.2 7.5-4.2" />
  </S>
);

export const IconKitchen: FC<P> = (p) => (
  <S {...p}>
    <path d="M4 11h16v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
    <path d="M2 11h20" />
    <path d="M9 7.5c0-1.2 1-1.3 1-2.5M13.5 7.5c0-1.2 1-1.3 1-2.5" />
  </S>
);

export const IconSpeaker: FC<P> = (p) => (
  <S {...p}>
    <path d="M4 9.5v5h3.5L13 18V6L7.5 9.5z" />
    <path d="M16 9.5a3.5 3.5 0 0 1 0 5" />
    <path d="M18.5 7a7 7 0 0 1 0 10" />
  </S>
);

export const IconPool: FC<P> = (p) => (
  <S {...p}>
    <path d="M2 9c2.2-1.8 4.3-1.8 6.5 0s4.3 1.8 6.5 0 4.3-1.8 6.5 0" />
    <path d="M2 13.5c2.2-1.8 4.3-1.8 6.5 0s4.3 1.8 6.5 0 4.3-1.8 6.5 0" />
    <path d="M2 18c2.2-1.8 4.3-1.8 6.5 0s4.3 1.8 6.5 0 4.3-1.8 6.5 0" />
  </S>
);

export const IconGym: FC<P> = (p) => (
  <S {...p}>
    <path d="M7 7v10M17 7v10M4 9.5v5M20 9.5v5M7 12h10" />
  </S>
);

export const IconDroplet: FC<P> = (p) => (
  <S {...p}>
    <path d="M12 3.5s6 6.3 6 10.3a6 6 0 0 1-12 0c0-4 6-10.3 6-10.3z" />
    <path d="M9.4 13.8a2.9 2.9 0 0 0 2.4 2.9" />
  </S>
);

export const IconFan: FC<P> = (p) => (
  <S {...p}>
    <path d="M3 8.5h9.5a2.4 2.4 0 1 0-2.3-3.1" />
    <path d="M3 12.5h14.5a2.4 2.4 0 1 1-2.3 3.1" />
    <path d="M3 16.5h6.5" />
  </S>
);

export const IconBalcony: FC<P> = (p) => (
  <S {...p}>
    <path d="M3 8h18M3 13h18M3 20h18" />
    <path d="M5 8v12M12 8v12M19 8v12" />
  </S>
);

export const IconCar: FC<P> = (p) => (
  <S {...p}>
    <path d="m5 16 1.6-5.2a2 2 0 0 1 1.9-1.4h7a2 2 0 0 1 1.9 1.4L19 16" />
    <path d="M4 16h16v3.5h-2.2M6.2 19.5H4" />
    <circle cx="7.5" cy="19" r="1.4" />
    <circle cx="16.5" cy="19" r="1.4" />
  </S>
);

export const IconShield: FC<P> = (p) => (
  <S {...p}>
    <path d="M12 3.5 19 6v5.2c0 4.8-3.2 7.6-7 9.3-3.8-1.7-7-4.5-7-9.3V6z" />
    <path d="m9 11.8 2.2 2.2 4-4.4" />
  </S>
);

export const IconLeaf: FC<P> = (p) => (
  <S {...p}>
    <path d="M5.5 18.5C5.5 9.5 13 5 19.5 5c0 7-4 13.5-13 13.5z" />
    <path d="M5.5 18.5C8 13.5 11.5 10 16 8" />
  </S>
);

export const IconPin: FC<P> = (p) => (
  <S {...p}>
    <path d="M12 21s-7-5.4-7-11a7 7 0 0 1 14 0c0 5.6-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </S>
);

export const IconPhone: FC<P> = (p) => (
  <S {...p}>
    <path d="M5.5 4h2.8l1.8 4.4-2.2 1.4a11.5 11.5 0 0 0 5.8 5.8l1.4-2.2L19.5 15v2.8a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4z" />
  </S>
);

export const IconMail: FC<P> = (p) => (
  <S {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
  </S>
);

export const IconCheck: FC<P> = (p) => (
  <S {...p}>
    <path d="m4.5 12.5 4.8 4.8L19.5 6.5" />
  </S>
);

export const IconArrow: FC<P> = (p) => (
  <S {...p}>
    <path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5" />
  </S>
);

export const IconPlus: FC<P> = (p) => (
  <S {...p}>
    <path d="M12 5.5v13M5.5 12h13" />
  </S>
);

export const IconClock: FC<P> = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </S>
);

export const IconSpark: FC<P> = (p) => (
  <S {...p}>
    <path d="M12 4v16M4 12h16M6.8 6.8l10.4 10.4M17.2 6.8 6.8 17.2" />
  </S>
);

export const IconBuilding: FC<P> = (p) => (
  <S {...p}>
    <path d="M5 21V5.5L12 3v18M12 8l7 2.5V21M3 21h18" />
    <path d="M8 8.5h1M8 12.5h1M8 16.5h1M15 13.5h1M15 17h1" />
  </S>
);

export const ICONS: Record<string, FC<P>> = {
  sofa: IconSofa,
  bed: IconBed,
  ceiling: IconCeiling,
  kitchen: IconKitchen,
  speaker: IconSpeaker,
  pool: IconPool,
  gym: IconGym,
  droplet: IconDroplet,
  fan: IconFan,
  balcony: IconBalcony,
  car: IconCar,
  shield: IconShield,
  leaf: IconLeaf,
  pin: IconPin,
  phone: IconPhone,
  mail: IconMail,
  check: IconCheck,
  arrow: IconArrow,
  plus: IconPlus,
  clock: IconClock,
  spark: IconSpark,
  building: IconBuilding,
};

export const Logo: FC<{ className?: string }> = ({ className = "" }) => (
  <a href="#top" className={`group flex items-center gap-3 ${className}`} aria-label="Future Homes — back to top">
    <span className="relative block h-[47px] w-[200px] shrink-0 overflow-hidden bg-white">
      <img
        src={fhpLogo}
        alt=""
        className="absolute left-[-4.82%] top-[-66.9%] w-[108.11%] max-w-none transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </span>
  </a>
);
