import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AutumnPromoSection: React.FC = () => {
  const { setActiveTab, setSelectedCategory, applyPromoCode } = useStore();

  const handleAutumnEditClick = () => {
    applyPromoCode('AUTUMN10');
    setSelectedCategory(null);
    setActiveTab('special-price');
    document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewWatchesClick = () => {
    setSelectedCategory(null);
    setActiveTab('new-in');
    document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#0a0a0c] py-16 sm:py-24 border-b border-[#242220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Left Side: A SEASON OF REFINEMENT */}
          <div className="relative group overflow-hidden bg-[#141416] border border-[#2d2a25] min-h-[500px] sm:min-h-[560px] flex flex-col justify-end p-8 sm:p-14">
            {/* Background Image: Green Dial Watch on Natural Slate */}
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/banner_autumn_refinement_1793957426303.jpg"
                alt="A Season of Refinement - Green Dial Watch on Slate"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.78] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/55 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4 max-w-lg">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                <Tag className="w-3.5 h-3.5" />
                <span>LIMITED TIME CAMPAIGN</span>
              </div>

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#ded9ce] font-medium block">
                A SEASON OF REFINEMENT
              </span>

              <h3 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
                Up to 20% Off Selected Styles
              </h3>

              <p className="text-[#bfb8ac] text-sm sm:text-base font-light pb-2 leading-relaxed">
                Embrace the rich warmth of autumn with our hand-finished forest dials, vegetable-tanned straps, and chronometers.
              </p>

              <div>
                <button
                  onClick={handleAutumnEditClick}
                  className="group/btn inline-flex items-center gap-3 px-7 py-4 bg-[#c5a880] hover:bg-[#d8be98] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-xl focus:outline-none"
                >
                  <span>SHOP THE AUTUMN EDIT</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: NEW ARRIVALS */}
          <div className="relative group overflow-hidden bg-[#141416] border border-[#2d2a25] min-h-[500px] sm:min-h-[560px] flex flex-col justify-end p-8 sm:p-14">
            {/* Background Image: Close-up Skeleton Mechanical Movement */}
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/banner_new_arrivals_craft_1793957425671.jpg"
                alt="New Arrivals - Mechanical Luxury Watch Craft"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.78] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/55 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4 max-w-lg">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block">
                NEW ARRIVALS
              </span>

              <h3 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
                Fresh Perspectives
                <br />
                <span className="italic font-normal text-[#f5f2eb]">Timeless Craft</span>
              </h3>

              <p className="text-[#bfb8ac] text-sm sm:text-base font-light pb-2 leading-relaxed">
                Discover novel high-beat calibres, titanium housings, and hand-applied enamel dials designed for discerning collectors.
              </p>

              <div>
                <button
                  onClick={handleNewWatchesClick}
                  className="group/btn inline-flex items-center gap-3 px-7 py-4 bg-white hover:bg-[#c5a880] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-xl focus:outline-none"
                >
                  <span>EXPLORE NEW WATCHES</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
