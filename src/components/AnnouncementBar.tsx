import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ANNOUNCEMENTS = [
  "COMPLIMENTARY WORLDWIDE SHIPPING | FREE RETURNS | 2-YEAR INTERNATIONAL WARRANTY",
  "AUTUMN HOROLOGY EDIT — USE CODE 'AUTUMN10' FOR 10% PRIVILEGE",
  "GENEVA HOROLOGY TRADITION SINCE 1928 — BESPOKE ENGRAVING AVAILABLE"
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % ANNOUNCEMENTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex(prev => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const handleNext = () => {
    setIndex(prev => (prev + 1) % ANNOUNCEMENTS.length);
  };

  return (
    <div className="bg-[#c5a880] text-[#0f0e0d] text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="p-1 hover:text-black/60 transition-colors focus:outline-none"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="text-center truncate px-2 font-semibold">
          {ANNOUNCEMENTS[index]}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next announcement"
          className="p-1 hover:text-black/60 transition-colors focus:outline-none"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
