import React from "react";
import { SPONSORS_LIST, SponsorLogoItem } from "./SponsorLogos";

export const SponsorsRow: React.FC = () => {
  return (
    <div className="w-full bg-white relative py-16 border-b border-t border-neutral-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <p className="font-mono text-xs text-center text-neutral-500 font-extrabold uppercase tracking-[0.25em] mb-14">
          PROUDLY SPONSORED AND SUPPORTED BY
        </p>

        {/* Structured grid of sponsor logos with negative vertical margins on mobile rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 sm:gap-y-16 px-4 justify-items-center items-center">
          {(() => {
            // 1. Filter out the rokswood sponsor (ID: rokswood, URL: ...IMG_0187_mbzk6y.png)
            const filtered = SPONSORS_LIST.filter(s => s.id !== "rokswood");

            // 2. Define the special sponsor logo to be placed first
            const specialSponsor = {
              id: "special-sponsor-0203",
              name: "",
              logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779587899/IMG_0203_h27tzn.png"
            };

            // 3. Keep the special sponsor at the very beginning, followed by the rest
            const displaySponsors = [specialSponsor, ...filtered];

            return displaySponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex items-center justify-center p-3 mt-[15px] mb-[-25px] sm:mt-0 sm:mb-0 animate-fade-in">
                <SponsorLogoItem
                  sponsor={sponsor}
                  imgClassName="h-20 sm:h-24 md:h-28"
                  isLightTheme={true}
                />
              </div>
            ));
          })()}
        </div>
      </div>
    </div>
  );
};
