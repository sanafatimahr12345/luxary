import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "The Regency Chronograph commands immediate respect in boardrooms from Mayfair to Zurich. The column-wheel actuation feels as crisp as timepieces commanding five times the price.",
    author: "Lord Alistair Sterling",
    role: "Collector & Private Equity Partner",
    location: "London, UK",
    model: "Regency Chronograph in Champagne Gold",
    rating: 5
  },
  {
    quote: "A masterclass in proportions. The Solaria Automatic achieves that elusive balance of vintage warmth and razor-sharp modern finishing. The exhibition caseback is pure poetry.",
    author: "Marcus Lindqvist",
    role: "Architect & Horology Columnist",
    location: "Stockholm, Sweden",
    model: "Solaria Automatic",
    rating: 5
  },
  {
    quote: "I wore the Apex Diver on a ten-day sailing expedition across the Cyclades. From deep dives to formal dinners, it performed flawlessly. Truly a high-calibre companion.",
    author: "Dr. Evelyn Vance",
    role: "Marine Biologist & Explorer",
    location: "Geneva, Switzerland",
    model: "Apex Diver 300M",
    rating: 5
  }
];

const PRESS_LOGOS = [
  { name: 'THE FINANCIAL TIMES', quote: '"CROWN & DIAL is rewriting modern luxury horology."' },
  { name: 'GQ INTERNATIONAL', quote: '"The most commanding wrist presence of the year."' },
  { name: 'ROBB REPORT', quote: '"Precision engineering meeting Savile Row refinement."' },
  { name: 'WATCHTIME', quote: '"A triumph of Swiss-regulated mechanical calibres."' }
];

export const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setIndex(i => (i + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <section className="w-full bg-[#fbf9f5] text-[#1b1a18] py-20 border-b border-[#eae5dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Press Quotes Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 border-b border-[#e4ded2] text-center">
          {PRESS_LOGOS.map((press, i) => (
            <div key={i} className="space-y-1.5">
              <span className="font-brand text-xs sm:text-sm tracking-[0.2em] font-bold text-[#1a1917] block">
                {press.name}
              </span>
              <p className="text-[11px] font-serif italic text-[#787166]">
                {press.quote}
              </p>
            </div>
          ))}
        </div>

        {/* Customer Patron Reviews */}
        <div className="pt-16 max-w-4xl mx-auto text-center relative">
          
          <div className="flex justify-center text-[#c5a880] mb-6">
            <Quote className="w-10 h-10 opacity-30 stroke-[1]" />
          </div>

          <div className="flex justify-center gap-1 text-[#c5a880] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#c5a880] stroke-[#c5a880]" />
            ))}
          </div>

          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-[#1a1917] leading-relaxed italic mb-8">
            "{current.quote}"
          </blockquote>

          <div className="space-y-1">
            <div className="text-sm font-semibold tracking-wide text-[#1a1917]">
              {current.author}
            </div>
            <div className="text-xs text-[#7d766c]">
              {current.role} · {current.location}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#9c825a] font-medium pt-1">
              Verified Owner of {current.model}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full border border-[#ded7cb] hover:border-[#1a1917] hover:bg-[#1a1917] hover:text-white flex items-center justify-center transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono tabular-nums text-[#8c857b]">
              {index + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full border border-[#ded7cb] hover:border-[#1a1917] hover:bg-[#1a1917] hover:text-white flex items-center justify-center transition-colors focus:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
