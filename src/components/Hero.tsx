import React, { useRef, useEffect } from "react";
import { Play, Sparkles, MapPin, Calendar, Clock, Ticket } from "lucide-react";

interface HeroProps {
  onGetTicketClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetTicketClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force muted states to bypass standard browser autoplay restriction models
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.preload = "auto";
      videoRef.current.play().catch((err) => {
        // Silently log fallback block if any
        console.log("Auto-playing video: interaction fallback activated", err);
      });
    }
  }, []);

  return (
    <div className="relative min-h-[65vh] sm:min-h-[75vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#030305] mb-[30px] pt-4 pb-12 sm:pt-6">
      {/* Background Video element */}
      <div className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 overflow-hidden bg-[#030305]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-75 sm:opacity-85 scale-102 transition-opacity duration-1000"
          src="https://res.cloudinary.com/dcxy05pvc/video/upload/v1779583927/new_date_creative_jgubxr.mp4"
        >
          <source src="https://res.cloudinary.com/dcxy05pvc/video/upload/v1779583927/new_date_creative_jgubxr.mp4" type="video/mp4" />
        </video>
        {/* Layered overlays optimized for excellent video visibility and perfect text readability */}
        <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030205] via-[#030205]/10 to-[#030205]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030205]/45 via-transparent to-[#030205]/45" />
      </div>

      {/* Floating Sparkling Stars or Ambient Fairy Lights Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-yellow-400 blur-sm animate-ping duration-1000 opacity-60"></div>
        <div className="absolute top-[20%] right-20 w-3 h-3 rounded-full bg-red-500 blur-[2px] animate-pulse duration-1500 opacity-40"></div>
        <div className="absolute bottom-1/3 left-[15%] w-2 h-2 rounded-full bg-cyan-400 blur-sm animate-ping duration-[3000ms] opacity-50"></div>
        <div className="absolute bottom-1/4 right-[8%] w-3 h-3 rounded-full bg-purple-500 blur-[1px] animate-pulse duration-2000 opacity-30"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 max-w-4xl w-full mx-auto flex flex-col items-center mt-2">
        {/* Neon Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-950/40 border border-red-500/30 text-red-500 hover:border-red-500/50 transition-colors duration-300 text-xs font-semibold mb-6 animate-pulse select-none uppercase tracking-widest font-mono">
          <Sparkles className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
          Ibadan's Biggest Open-Air Cinema
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black tracking-tight text-white text-4xl sm:text-6xl md:text-7xl leading-tight mb-6 max-w-3xl filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          Nightflix is <span className="text-[#E11D48] relative inline-block group">NOT<span className="absolute -bottom-1 left-0 w-full h-[6px] bg-red-600/60 rounded"></span></span> Netflix.
          <br />
          <span className="text-red-500 font-display font-bold block mt-2 text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight">
            Step Out & Feel the Vibe!
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="font-sans text-[#D1D5DB] text-base sm:text-xl md:text-2xl leading-relaxed max-w-2xl mb-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          Join over <strong className="text-white font-bold font-heading">1,000 people</strong> for the biggest open-air cinema experience in Ibadan. Fresh air, fun games, great music, and a movie under the stars.
        </p>

        {/* Micro-Metadata Badge Line */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-neutral-400 mb-10 select-none bg-neutral-950/70 border border-white/5 py-3.5 px-6 rounded-2xl backdrop-blur-sm max-w-xl">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>UI ICC (Open Space), Ibadan</span>
          </div>
          <div className="w-px h-4 bg-neutral-700 hidden sm:block"></div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-amber-500" />
            <span>Saturday Gates Open</span>
          </div>
          <div className="w-px h-4 bg-neutral-700 hidden sm:block"></div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#00D2C4]" />
            <span>5:00 PM Prompt</span>
          </div>
        </div>

        {/* Big Ticket CTA Button */}
        <button
          onClick={onGetTicketClick}
          id="get-ticket-btn"
          className="relative group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-heading font-black tracking-widest text-base sm:text-xl px-8 sm:px-10 py-5 rounded-2xl shadow-[0_4px_25px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-103 active:scale-98 border border-white/10 uppercase cursor-pointer z-20"
        >
          <span>👉 GET YOUR TICKET NOW</span>
          <span className="p-1 rounded-lg bg-white/10">
            <Ticket className="w-5 h-5 text-yellow-300 group-hover:rotate-12 transition-transform" />
          </span>
          <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  );
};
