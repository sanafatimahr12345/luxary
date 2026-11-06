import React, { useState } from 'react';
import { Compass, Sparkles, Award, Shield, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const PILLARS = [
  {
    id: 'movement',
    title: 'In-House Calibres',
    subtitle: 'Tested to COSC chronometric precision of -4/+6s per day.',
    details: 'Each movement is assembled by a single master horologist in our Geneva workshop. Features bi-directional winding rotors with Geneva stripes, perlage on baseplates, and heat-tempered blued screws.',
    icon: Compass
  },
  {
    id: 'materials',
    title: 'Surgical Metallurgy',
    subtitle: 'Forged from low-carbon 316L stainless steel & 18k precious gold.',
    details: 'Our alloys resist corrosion even in oceanic saltwater depths. Every case is sculpted with alternating mirror-polished bevels and satin-brushed planes.',
    icon: Sparkles
  },
  {
    id: 'sapphire',
    title: 'Double-Domed Sapphire',
    subtitle: 'Mohs hardness 9 crystal with multi-layer internal anti-reflective coating.',
    details: 'Diamond-ground optical clarity ensures absolute legibility in harsh Mediterranean glare or moonlit gala halls without distortion.',
    icon: Shield
  },
  {
    id: 'testing',
    title: '1,000-Hour Inspection',
    subtitle: 'Rigorous 6-position chronometric, magnetic, and water pressure testing.',
    details: 'Before receiving its engraved serial number and transferable warranty passport, every timepiece undergoes 40 continuous days of environmental stress tests.',
    icon: Award
  }
];

export const HeritageStorySection: React.FC = () => {
  const [activePillar, setActivePillar] = useState(PILLARS[0].id);
  const { setIsStoryModalOpen } = useStore();

  const currentPillar = PILLARS.find(p => p.id === activePillar) || PILLARS[0];

  return (
    <section id="heritage-section" className="w-full bg-[#0d0d0f] text-[#f5f2eb] py-20 sm:py-28 border-b border-[#242220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Brand Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: The Heritage Story */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block">
              OUR HERITAGE &amp; ATELIER
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
              Centuries of Tradition,
              <br />
              <span className="italic font-normal text-[#dfbe85]">Refined for Modern Icons</span>
            </h2>

            <p className="text-[#bfb8ac] text-sm sm:text-base font-light leading-relaxed">
              Founded on the principles of Swiss precision horology and refined British tailoring, CROWN &amp; DIAL creates instruments that transcend transient fashion trends.
            </p>

            <p className="text-[#a49e92] text-sm font-light leading-relaxed">
              We believe a watch is not merely a tool for marking minutes—it is the keeper of personal milestones, triumphs, and the silent companion of a life well lived.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#c5a880] hover:text-white transition-colors underline underline-offset-8 focus:outline-none"
              >
                READ THE FULL CHRONICLE
              </button>
            </div>
          </div>

          {/* Right Column: Craftsmanship Pillars Interactive Showcase */}
          <div className="lg:col-span-7 bg-[#131316] border border-[#2b2925] p-6 sm:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[#8c8579] font-medium mb-6">
              THE PILLARS OF CROWN &amp; DIAL CRAFT
            </div>

            {/* Pillar Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 border-b border-[#242220] pb-4">
              {PILLARS.map(p => (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p.id)}
                  className={`text-left p-2.5 transition-all text-xs focus:outline-none cursor-pointer ${
                    activePillar === p.id
                      ? 'border-b-2 border-[#c5a880] text-[#c5a880] font-semibold bg-[#1a191d]'
                      : 'text-[#9c968a] hover:text-[#e4ded2]'
                  }`}
                >
                  <span className="block truncate font-medium">{p.title}</span>
                </button>
              ))}
            </div>

            {/* Active Pillar Card */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e1c18] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
                  <currentPillar.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white">{currentPillar.title}</h3>
                  <p className="text-xs text-[#c5a880] font-light">{currentPillar.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-[#bfb8ac] font-light leading-relaxed pt-2">
                {currentPillar.details}
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#242220] text-xs text-[#a9a397]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c5a880]" />
                  <span>Hand-finished in Geneva</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c5a880]" />
                  <span>Individually Numbered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c5a880]" />
                  <span>Anti-Magnetic Escapement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c5a880]" />
                  <span>Full International Passport</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
