import React from "react";
import { Film, Gamepad2, Music4, Popcorn, Sparkles, Flame, ThumbsUp } from "lucide-react";

export const TheHook: React.FC = () => {
  return (
    <div className="w-full bg-[#030305] py-20 px-4 relative overflow-hidden" id="hook-section">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center sm:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Main heading and introduction */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-amber-500 uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1.5 font-bold">
              
              THE NIGHTFLIX ESCAPE
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Tired of watching movies alone in your room?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded hidden sm:block"></div>
          </div>

          <div className="lg:col-span-6">
            <p className="font-sans text-neutral-300 text-base sm:text-lg leading-relaxed">
              Whether you are coming with your partner for a romantic night under the heavens, or flying solo to escape the screens and make new friends, <strong className="text-white">Nightflix is the ultimate cure.</strong> It's a high-energy outdoor festival built specifically for film enthusiasts, gamers, and good-vibe seekers.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid (Why they need to come) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Giant Screen */}
          <div className="bg-[#0b0a10]/40 border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/5 rounded-full blur-xl group-hover:bg-red-600/15 transition-all" />
            <div className="p-3.5 rounded-xl bg-red-950/40 text-[#EF4444] border border-red-500/20 w-fit mb-5 group-hover:scale-110 transition-transform">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-[#D1D5DB] group-hover:text-white text-lg mb-2 transition-colors">
              Giant Open-Air Screen
            </h3>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              Experience movie cinema like never before. Crystal clear projector visuals beamed on our grand outdoor space, surrounded by fresh evening air and premium audio setups.
            </p>
          </div>

          {/* Card 2: Games Lobby */}
          <div className="bg-[#0b0a10]/40 border border-white/5 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-600/5 rounded-full blur-xl group-hover:bg-amber-600/15 transition-all" />
            <div className="p-3.5 rounded-xl bg-amber-950/40 text-amber-500 border border-amber-500/20 w-fit mb-5 group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-[#D1D5DB] group-hover:text-white text-lg mb-2 transition-colors">
              Pre-Screening Board Games
            </h3>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              Arrive early! Challenge friends and strangers to intensive multiplayer games, from retro video consoles in the Game House, to deck cards, Jenga, and local board games.
            </p>
          </div>

          {/* Card 3: Great Music */}
          <div className="bg-[#0b0a10]/40 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-600/5 rounded-full blur-xl group-hover:bg-cyan-600/15 transition-all" />
            <div className="p-3.5 rounded-xl bg-cyan-950/40 text-[#00D2C4] border border-cyan-500/20 w-fit mb-5 group-hover:scale-110 transition-transform">
              <Music4 className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-[#D1D5DB] group-hover:text-white text-lg mb-2 transition-colors">
              Immersive Music Pre-Show
            </h3>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              We turn up the vibes before the main show starts. Warm DJ sets, chill electronic beats, and a musical ambiance that lets you truly unwind under the starry sky.
            </p>
          </div>

          {/* Card 4: Curated Food */}
          <div className="bg-[#0b0a10]/40 border border-white/5 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-green-600/5 rounded-full blur-xl group-hover:bg-green-600/15 transition-all" />
            <div className="p-3.5 rounded-xl bg-green-950/40 text-[#22C55E] border border-green-500/20 w-fit mb-5 group-hover:scale-110 transition-transform">
              <Popcorn className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-[#D1D5DB] group-hover:text-white text-lg mb-2 transition-colors">
              Fabulous Snacks & Drinks
            </h3>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              No movie night is complete without crunchy butter popcorn, customized Johnvents cocoa products, and UAC Gala snacks. Sip cold sodas and beers from our vendor stalls.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};
