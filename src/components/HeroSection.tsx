import React from 'react';
import { ArrowRight, ShieldCheck, Truck, RefreshCw, Gem } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { IMAGES } from '../assets/images';

export const HeroSection: React.FC = () => {
  const { setActiveTab, setSelectedCategory } = useStore();

  const handleShopClick = () => {
    setSelectedCategory(null);
    setActiveTab('all');
    document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-[#0a0a0b] text-[#f5f2eb] overflow-hidden">
      {/* Cinematic Banner Background & Imagery */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
        
        {/* Background Image Container with Luxury Scrims */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="CROWN & DIAL Luxury Chronograph Watch Editorial"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center lg:object-[65%_center] filter brightness-[0.85]"
          />
          {/* Deep dark gradient overlays to guarantee pristine editorial text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/75 to-transparent sm:w-2/3 lg:w-1/2" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-black/40" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-xl lg:max-w-2xl space-y-6">
            
            {/* Left-side kicker text */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#c5a880] font-semibold">
                TIME LIVES A HIGHER STORY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.12] text-white">
              More Than Time
              <br />
              <span className="italic font-normal text-[#f3ede1]">A Life Well Lived</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#bfb8ac] text-base sm:text-lg font-light leading-relaxed max-w-lg">
              Refined craftsmanship. Enduring design. Watches for the moments that matter.
            </p>

            {/* CTA Button */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={handleShopClick}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#c5a880] hover:bg-[#d8be98] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-xl hover:shadow-[#c5a880]/20 hover:-translate-y-0.5 focus:outline-none"
              >
                <span>SHOP THE COLLECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  document.getElementById('categories-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-4 border border-[#44403a] hover:border-[#c5a880] text-[#ded9ce] hover:text-[#c5a880] text-xs uppercase tracking-[0.18em] font-medium transition-colors focus:outline-none backdrop-blur-xs"
              >
                EXPLORE CATEGORIES
              </button>
            </div>
          </div>
        </div>

        {/* Right-side small vertical branding / text */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.35em] text-[#e0ded8]/80 font-medium select-none flex items-center gap-4">
            <span>CRAFTED FOR A BRIGHTER TOMORROW</span>
            <div className="w-12 h-[1px] bg-[#c5a880]/60" />
          </div>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="relative z-10 border-t border-b border-[#24221e] bg-[#0f0e0c]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="flex items-center justify-center gap-2.5 text-xs text-[#d6d0c4]">
              <Truck className="w-4 h-4 text-[#c5a880] shrink-0 stroke-[1.5]" />
              <span className="tracking-wide">Free Worldwide Shipping</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 text-xs text-[#d6d0c4]">
              <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0 stroke-[1.5]" />
              <span className="tracking-wide">2-Year International Warranty</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 text-xs text-[#d6d0c4]">
              <RefreshCw className="w-4 h-4 text-[#c5a880] shrink-0 stroke-[1.5]" />
              <span className="tracking-wide">Easy Returns Within 30 Days</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 text-xs text-[#d6d0c4]">
              <Gem className="w-4 h-4 text-[#c5a880] shrink-0 stroke-[1.5]" />
              <span className="tracking-wide">Ethically Sourced Materials</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
