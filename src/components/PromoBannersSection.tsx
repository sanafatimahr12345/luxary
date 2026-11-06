import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const PromoBannersSection: React.FC = () => {
  const { setActiveTab, setSelectedCategory } = useStore();

  const handleBanner1Click = () => {
    setSelectedCategory(null);
    setActiveTab('best-sellers');
    document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBanner2Click = () => {
    setSelectedCategory(null);
    setActiveTab('new-in');
    document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#111113] py-16 sm:py-24 border-b border-[#242220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Banner 1: THE SIGNATURE COLLECTION */}
          <div className="relative group overflow-hidden bg-[#171618] border border-[#2d2b27] min-h-[460px] sm:min-h-[500px] flex flex-col justify-end p-8 sm:p-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/banner_signature_collection_1793957424709.jpg"
                alt="The Signature Collection - Gentleman with Luxury Watch"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter brightness-[0.78] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-[#0e0e10]/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block">
                THE SIGNATURE COLLECTION
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-light leading-tight">
                Modern Icons for Every Chapter
              </h3>
              <p className="text-[#bfb8ac] text-sm sm:text-base font-light max-w-md pb-2">
                Timeless design meets modern sophistication.
              </p>
              <div>
                <button
                  onClick={handleBanner1Click}
                  className="group/btn inline-flex items-center gap-3 px-6 py-3.5 bg-white hover:bg-[#c5a880] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 focus:outline-none"
                >
                  <span>DISCOVER THE COLLECTION</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Banner 2: NEW FOR THE SEASON */}
          <div className="relative group overflow-hidden bg-[#171618] border border-[#2d2b27] min-h-[460px] sm:min-h-[500px] flex flex-col justify-end p-8 sm:p-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/banner_autumn_edit_watch_1793957426413.jpg"
                alt="New for the Season - Luxury Chronograph Watch"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.82] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-[#0e0e10]/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block">
                NEW FOR THE SEASON
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-light leading-tight">
                The Autumn Edit
              </h3>
              <p className="text-[#bfb8ac] text-sm sm:text-base font-light max-w-md pb-2">
                Warm tones. Elevated details. Same enduring craftsmanship.
              </p>
              <div>
                <button
                  onClick={handleBanner2Click}
                  className="group/btn inline-flex items-center gap-3 px-6 py-3.5 bg-[#c5a880] hover:bg-[#d8be98] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 focus:outline-none shadow-lg shadow-black/40"
                >
                  <span>SHOP NEW ARRIVALS</span>
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
