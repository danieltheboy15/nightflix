import React from "react";
import {
  Sparkles,
  CheckCircle2,
  Users,
  User,
  Crown,
  Baby,
  ExternalLink,
  Ticket,
} from "lucide-react";
import { TicketType } from "../types";

const TICKET_TYPES: TicketType[] = [
  {
    id: "single",
    name: "Single",
    price: 3000,
    emoji: "🎟️",
    description: "Perfect for flying solo and meeting new people.",
    perks: [
      "Access to main open-air movie screening",
      "Vibe pass to the live DJ pre-show & music",
      "Access to community board games & card sessions",
      "Standard seating zone (bring your blanket/chair)",
    ],
  },
  {
    id: "couple",
    name: "Couple",
    price: 5000,
    emoji: "👩‍❤️‍👨",
    description: "A great deal for you and your partner.",
    perks: [
      "Full entry pass for exactly TWO (2) adults",
      "Access to open-air movie screening & live pre-show",
      "Couples multiplayer trivia & cozy games access",
      "Standard seating zone for two",
    ],
  },
  {
    id: "children",
    name: "Children",
    price: 1500,
    emoji: "👧",
    description: "Bring the little ones along for the fun.",
    perks: [
      "Entry pass for one kid (under 12 years)",
      "Dedicated children fun-park & coloring game zones",
      "Kid-friendly movie reward tokens",
      "Full security & safe supervised zone",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    price: 30000,
    emoji: "👑",
    description: "Premium seating, special treats, and the best view.",
    perks: [
      "Fast-track gate entry (skip all the queues)",
      "Premium luxury deck chair & soft blanket comfort",
      "Complimentary premium snack platter & custom drinks",
      "Front-row unobstructed optimal movie view",
      "Personalized table steward service throughout",
    ],
  },
];

export const TicketSelector: React.FC = () => {
  const handleRedirectToSelar = () => {
    window.open("https://selar.co/gf6t5nv489", "_blank");
  };

  return (
    <div className="w-full relative z-10 py-20 px-4 max-w-6xl mx-auto" id="ticket-section">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="font-mono text-xs text-red-500 uppercase tracking-widest px-3 py-1 rounded-full bg-red-950/20 border border-red-500/10">
          Pick Your Experience
        </span>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight">
          Select Your Passes
        </h2>
        <p className="font-sans text-neutral-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Choose your vibe under the starlit sky. Tickets are sold securely on Selar.com.
        </p>
      </div>

      {/* Grid of 4 Luxury Ticket Option Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TICKET_TYPES.map((ticket) => {
          return (
            <div
              key={ticket.id}
              onClick={handleRedirectToSelar}
              className="relative bg-[#0b0a10]/50 border-2 border-white/5 hover:border-red-500/40 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between group shadow-xl hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] overflow-hidden bg-dot-matrix select-none"
            >
              {/* Ticket Punch side-edges decoration */}
              <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#030205] border border-white/5 rounded-full z-10" />
              <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#030205] border border-white/5 rounded-full z-10" />

              {/* Glowing Ambient lights on card top hover */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-red-600/5 group-hover:bg-red-600/10 rounded-full blur-2xl pointer-events-none transition-all duration-500" />

              <div>
                {/* Icon & Category */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300 block">
                      {ticket.emoji}
                    </span>
                    <div>
                      <h3 className="font-heading font-black text-white text-lg tracking-tight group-hover:text-red-400 transition-colors">
                        {ticket.name}
                      </h3>
                      <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-bold">
                        {ticket.id} vibe
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pricing Block */}
                <div className="border-b border-dashed border-white/10 pb-4 mb-4">
                  <span className="font-mono font-black text-2xl text-white">
                    ₦{ticket.price.toLocaleString()}
                  </span>
                  
                </div>

                {/* Description Text */}
                <p className="font-sans text-xs text-neutral-300 leading-relaxed mb-6">
                  {ticket.description}
                </p>

                {/* Perks list */}
                <div className="space-y-2.5 mb-8">
                  {ticket.perks.map((perksTxt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-neutral-400 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{perksTxt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRedirectToSelar();
                }}
                className="w-full bg-[#16141F] group-hover:bg-red-600 text-[#D1D5DB] group-hover:text-white font-heading font-extrabold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 border border-white/5 group-hover:border-red-500/20 cursor-pointer"
              >
                <span>GET TICKET</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-65 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          );
        })}
      </div>

      
    </div>
  );
};
