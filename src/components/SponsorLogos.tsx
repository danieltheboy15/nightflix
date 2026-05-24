import React from "react";

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
}

/**
 * 💡 EDIT YOUR 12 SPONSOR IMAGE SOURCE URLS AND NAMES HERE!
 * You can change any URL or Name below to update both the scrolling header
 * and the "Proudly Sponsored and Supported By" section instantly.
 */
export const SPONSORS_LIST: Sponsor[] = [
  {
    id: "kolomoni",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574152/IMG_0186_v4kjuo.webp"
  },
  {
    id: "johnvents",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574155/IMG_0189_nxmngr.png"
  },
  {
    id: "gala-chinchin",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574155/IMG_0188_fl93rb.png"
  },
  {
    id: "rokswood",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574155/IMG_0187_mbzk6y.png"
  },
  {
    id: "gamehouse",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574157/IMG_0190_x0pokz.png"
  },
  {
    id: "sponsor-6",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574157/IMG_0191_dtlq3r.jpg"
  },
  {
    id: "sponsor-7",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574158/IMG_0192_pnaflk.png"
  },
  {
    id: "sponsor-8",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574159/IMG_0193_kef4br.png"
  },
  {
    id: "sponsor-9",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574160/IMG_0194_dsrl6g.png"
  },
  {
    id: "sponsor-10",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574162/IMG_0195_wtrpc3.png"
  },
  {
    id: "sponsor-11",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574225/IMG_0196_bmnt9p.jpg"
  },
  {
    id: "sponsor-12",
    name: "",
    logoUrl: "https://res.cloudinary.com/dcxy05pvc/image/upload/v1779575068/IMG_0199_y2ibtb.jpg"
  }
];

interface SponsorLogoItemProps {
  sponsor: Sponsor;
  imgClassName?: string;
  isLightTheme?: boolean;
}

export const SponsorLogoItem: React.FC<SponsorLogoItemProps> = ({
  sponsor,
  imgClassName = "h-7 md:h-8",
  isLightTheme = false,
}) => {
  return (
    <div className="flex items-center gap-2 group transition-all duration-300 hover:scale-105 shrink-0 select-none justify-center">
      <img
        src={sponsor.logoUrl}
        alt={`${sponsor.name || "Sponsor"} Logo`}
        className={`${imgClassName} w-auto max-w-full object-contain transition-all duration-300 pointer-events-none`}
        referrerPolicy="no-referrer"
      />
      {sponsor.name && (
        <span
          className={`font-sans font-bold tracking-tight text-xs sm:text-sm group-hover:text-red-500 transition-colors duration-300 ${
            isLightTheme ? "text-neutral-900" : "text-neutral-300"
          }`}
        >
          {sponsor.name}
        </span>
      )}
    </div>
  );
};
