import React from "react";
import { SPONSORS_LIST, SponsorLogoItem } from "./SponsorLogos";

export const SponsorsTicker: React.FC = () => {
  // Let's duplicate the list 3 times so the marquee has plenty of width to loop seamlessly
  const loopedSponsors = [...SPONSORS_LIST, ...SPONSORS_LIST, ...SPONSORS_LIST];

  return (
    <div className="sticky top-0 z-[100] w-full bg-white border-b border-neutral-200 h-20 md:h-24 flex items-center shadow-md overflow-hidden select-none">
      {/* Decorative Brand indicator at the side */}
      <div className="hidden lg:flex items-center gap-2 px-5 h-full bg-neutral-100 border-r border-neutral-200 relative z-10 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-800 font-bold whitespace-nowrap">
          OFFICIAL SPONSORS
        </span>
      </div>

      {/* Marquee Wrapper with fading soft mask edge */}
      <div className="flex-1 overflow-hidden relative w-full h-full flex items-center fade-edges-x">
        <div className="flex gap-16 sm:gap-24 items-center shrink-0 min-w-full animate-marquee">
          {loopedSponsors.map((sponsor, index) => (
            <SponsorLogoItem
              key={`${sponsor.id}-marquee-${index}`}
              sponsor={sponsor}
              imgClassName="h-12 md:h-14"
              isLightTheme={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
