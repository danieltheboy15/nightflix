/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import { SponsorsTicker } from "./components/SponsorsTicker";
import { Hero } from "./components/Hero";
import { SponsorsRow } from "./components/SponsorsRow";
import { TheHook } from "./components/TheHook";
import { TicketSelector } from "./components/TicketSelector";
import { Footer } from "./components/Footer";
import { LogIn, Sparkles, MapPin, Film } from "lucide-react";

export default function App() {
  const ticketSectionRef = useRef<HTMLDivElement>(null);
  const hookSectionRef = useRef<HTMLDivElement>(null);

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePathChange);
    return () => window.removeEventListener("popstate", handlePathChange);
  }, []);

  const isPlaygroundPath =
    currentPath === "/the-playground-edition" ||
    currentPath === "/the-playground-edition/" ||
    currentPath.endsWith("/the-playground-edition") ||
    currentPath.endsWith("/the-playground-edition/");

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isPlaygroundPath) {
    return (
      <div className="min-h-screen bg-[#030205] text-white flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="flex justify-center">
            <img 
              src="https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574153/IMG_0185_vk68jn.png" 
              alt="NIGHTFLIX Logo" 
              className="h-28 sm:h-32 w-auto object-contain animate-fade-in"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-2">
            <h1 className="font-heading font-black text-4xl tracking-tight text-white">404</h1>
            <p className="text-neutral-400 text-xs sm:text-sm font-mono uppercase tracking-wider">Page Not Found</p>
            <p className="text-neutral-500 text-xs max-w-xs mx-auto">
              This project has been configured to reside exclusively on the playground edition subdirectory.
            </p>
          </div>
          <div className="pt-2">
            <a
              href="/the-playground-edition"
              className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-mono text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-lg hover:shadow-red-900/40"
            >
              Enter Playground Edition
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030205] text-white selection:bg-red-600 selection:text-white overflow-x-hidden font-sans">
      {/* 1. STICKY ENDLESS TICKER */}
      <SponsorsTicker />

      {/* 2. NAVIGATION BAR */}
      <nav className="w-full bg-[#05040a]/90 backdrop-blur-md border-b border-white/5 py-4 px-6 relative z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer select-none">
            <img 
              src="https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574153/IMG_0185_vk68jn.png" 
              alt="NIGHTFLIX Logo" 
              className="h-24 sm:h-30 md:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Navigation Links (Mirrors buynightflix.com exactly) */}
          

          {/* Action Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection(ticketSectionRef)}
              className="px-4 py-2 bg-neutral-900 border border-white/10 hover:border-red-500/40 text-xs text-white font-mono uppercase tracking-wider rounded-xl transition-all cursor-pointer hover:bg-neutral-850"
            >
              Buy Tickets
            </button>
          </div>
        </div>
      </nav>

      {/* 3. HERO COMPONENT */}
      <Hero onGetTicketClick={() => scrollToSection(ticketSectionRef)} />

      {/* 4. STATIC SPONSOR ROWS (The Authority Section) */}
      <SponsorsRow />

      {/* 5. THE HOOK (Why they need to come) */}
      <div ref={hookSectionRef}>
        <TheHook />
      </div>

      {/* Cinematic Showcase Section */}
      <div className="w-full bg-[#05040a] py-16 border-t border-b border-white/5 relative select-none">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-mono text-xs text-red-500 uppercase tracking-widest font-bold">
              ★ THE EVENT HUB ★
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-white">
              An Immersive Cinema Atmosphere Awaits You
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Every detail is calibrated to perfection. High-definition screen clarity, pristine night acoustics, and spacious lounges allow 1,000+ film lovers to share laughter, frights, and deep cinematic emotions synchronized under the Ibadan cosmos.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-200">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span>Fairy Lit Ambient Seating Layouts</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-200">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Fully Secure, Guarded Gated Venue Parking</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-200">
                <span className="w-2 h-2 rounded-full bg-[#00D2C4]"></span>
                <span>Delicious Food Stalls & Cocktail Bars on Ground</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl skew-y-1 mb-10">
            <img
              src="https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574469/IMG_0197_us70fg.jpg"
              alt="Nightflies cinema attendees sitting under cosmos stars"
              className="w-full h-[340px] object-cover opacity-80 group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Dark overlay styling */}
            
          </div>
        </div>
      </div>

      {/* 6. INTERACTIVE TICKETING CENTER */}
      <div ref={ticketSectionRef} className="bg-gradient-to-b from-[#030205] to-[#05040a]">
        <TicketSelector />
      </div>

      {/* 7. FOOTER CREDITS */}
      <Footer />
    </div>
  );
}
