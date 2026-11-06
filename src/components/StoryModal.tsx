import React from 'react';
import { X, Crown, Award, Compass, Shield } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const StoryModal: React.FC = () => {
  const { isStoryModalOpen, setIsStoryModalOpen } = useStore();

  if (!isStoryModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        onClick={() => setIsStoryModalOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#100f12] border border-[#2e2c26] text-[#f5f2eb] max-w-3xl w-full z-10 shadow-2xl p-6 sm:p-10 animate-fadeIn max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setIsStoryModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-[#8c857b] hover:text-white transition-colors"
          aria-label="Close story"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-3 pb-8 border-b border-[#24221f]">
          <div className="w-10 h-10 rounded-full border border-[#c5a880]/60 flex items-center justify-center text-[#c5a880] mx-auto">
            <Crown className="w-5 h-5 stroke-[1.5]" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#c5a880] font-semibold block">
            GENEVA &amp; LONDON · EST. 1928
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
            The Chronicle of CROWN &amp; DIAL
          </h2>
          <p className="text-sm font-serif italic text-[#c2bbae]">
            "We do not merely keep time; we honor the life measured by it."
          </p>
        </div>

        {/* Narrative Chapters */}
        <div className="pt-8 space-y-8 text-sm text-[#bfb8ac] font-light leading-relaxed">
          
          <div className="space-y-3">
            <h3 className="font-serif text-xl text-white font-normal">
              Chapter I: The Alpine Workshop (1928)
            </h3>
            <p>
              In the winter of 1928, along the mist-shrouded shores of Lake Geneva, master watchmaker Henri de Vane partnered with British bespoke tailor Arthur Crown. Their vision was uncompromising: to synthesize Swiss mechanical rigor with the effortless elegance of Savile Row sartorial tailoring.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl text-white font-normal">
              Chapter II: The Obsession with Tactile Precision
            </h3>
            <p>
              While contemporary production drifted towards automated mass-market quartz, CROWN &amp; DIAL maintained its independent family atelier. Every chronograph column wheel, escapement pallet, and blued balance spring continues to be regulated by ear and touch under 20x magnification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-b border-[#24221f] py-6 text-center">
            <div className="space-y-1">
              <Compass className="w-5 h-5 text-[#c5a880] mx-auto" />
              <div className="text-white font-serif text-base">In-House Calibres</div>
              <div className="text-xs text-[#8c857b]">High-beat mechanical movements</div>
            </div>
            <div className="space-y-1">
              <Shield className="w-5 h-5 text-[#c5a880] mx-auto" />
              <div className="text-white font-serif text-base">316L &amp; 18k Metallurgy</div>
              <div className="text-xs text-[#8c857b]">Marine-grade low-carbon alloys</div>
            </div>
            <div className="space-y-1">
              <Award className="w-5 h-5 text-[#c5a880] mx-auto" />
              <div className="text-white font-serif text-base">COSC Testing</div>
              <div className="text-xs text-[#8c857b]">Extreme precision standards</div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl text-white font-normal">
              Chapter III: An Heirloom for Tomorrow
            </h3>
            <p>
              Today, from our Mayfair showroom on New Bond Street to our historic Geneva atelier, each timepiece is assembled with the understanding that it will be passed down to the next generation, retaining both value and sentimental majesty.
            </p>
          </div>

        </div>

        {/* Footer Action */}
        <div className="mt-8 pt-6 border-t border-[#24221f] text-center">
          <button
            onClick={() => setIsStoryModalOpen(false)}
            className="px-8 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#d8be98] transition-colors"
          >
            EXPLORE THE TIMEPIECES
          </button>
        </div>

      </div>
    </div>
  );
};
