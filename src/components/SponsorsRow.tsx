import React from "react";
import { SPONSORS_LIST, SponsorLogoItem } from "./SponsorLogos";

export const SponsorsRow: React.FC = () => {
  return (
    <div className="w-full bg-white relative py-16 border-b border-t border-neutral-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <p className="font-mono text-xs text-center text-neutral-500 font-extrabold uppercase tracking-[0.25em] mb-14">
          PROUDLY SPONSORED AND SUPPORTED BY
        </p>

        {/* 12 logos structured into exactly 4 columns to create exactly 3 rows of 4 logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 px-4 justify-items-center items-center">
          {SPONSORS_LIST.map((sponsor, idx) => {
            const displaySponsor = idx === 3 ? {
              ...sponsor,
              logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779587899/IMG_0203_h27tzn.png"
            } : sponsor;
            return (
              <div key={sponsor.id} className="flex items-center justify-center p-3 animate-fade-in">
                <SponsorLogoItem
                  sponsor={displaySponsor}
                  imgClassName="h-20 sm:h-24 md:h-28"
                  isLightTheme={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
