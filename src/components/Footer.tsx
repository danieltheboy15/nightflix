import React from "react";
import { Film, ArrowUp, Instagram, Twitter, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030205] border-t border-white/5 py-12 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10 pb-10 border-b border-white/5">
          {/* Logo & Taglines */}
          <div className="text-center md:text-left space-y-2.5">
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src="https://res.cloudinary.com/dcxy05pvc/image/upload/v1779574153/IMG_0185_vk68jn.png" 
                alt="NIGHTFLIX Logo" 
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-sans text-xs text-neutral-400 max-w-sm">
              Ibadan's biggest open-air outdoor cinema, interactive games, live pre-shows, and wonderful connections under the starry night sky.
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-[#EF4444] hover:border-[#EF4444]/30 transiton-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-[#00D2C4] hover:border-[#00D2C4]/30 transiton-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="text-xs font-mono text-[#D1D5DB] uppercase tracking-widest bg-[#0b0a10] border border-white/10 hover:border-[#00D2C4]/50 py-2.5 px-4 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
            >
              Back To Top
              <ArrowUp className="w-3.5 h-3.5 text-[#00D2C4]" />
            </button>
          </div>
        </div>

        {/* Legal, Slogans & Heart */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center select-none">
          <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            © {new Date().getFullYear()} NIGHTFLIX INC.
          </p>
          
        </div>
      </div>
    </footer>
  );
};
