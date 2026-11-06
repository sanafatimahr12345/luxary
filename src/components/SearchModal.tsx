import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const POPULAR_QUERIES = [
  'Chronograph',
  'Automatic',
  'Apex Diver',
  'Gold Dial',
  'Luna Petite',
  'Heritage Classic',
  'Leather Roll'
];

export const SearchModal: React.FC = () => {
  const {
    products,
    isSearchOpen,
    setIsSearchOpen,
    setDetailProduct,
    formatPrice
  } = useStore();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const results = query.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (product: any) => {
    setDetailProduct(product);
    setIsSearchOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Search Container */}
      <div className="relative bg-[#100f13] border border-[#2d2a25] text-[#f5f2eb] max-w-2xl w-full z-10 shadow-2xl p-6 sm:p-8 animate-fadeIn">
        
        {/* Header & Input */}
        <div className="relative flex items-center border-b border-[#2e2c26] pb-4">
          <Search className="w-5 h-5 text-[#c5a880] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search watches, calibres, collections..."
            className="w-full bg-transparent text-base sm:text-lg text-white placeholder-[#787165] focus:outline-none font-serif"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-[#888275] hover:text-white transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search Tags */}
        <div className="pt-4 flex items-center gap-2 flex-wrap">
          <span className="text-[11px] uppercase tracking-wider text-[#736c60]">Popular:</span>
          {POPULAR_QUERIES.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs px-2.5 py-1 bg-[#18171b] hover:bg-[#c5a880] hover:text-black text-[#a9a295] border border-[#292723] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="mt-6 max-h-[360px] overflow-y-auto space-y-3 pr-1">
          {query.trim() && results.length === 0 ? (
            <div className="text-center py-10 text-[#7a7468]">
              <p className="font-serif italic text-base">No timepieces matched "{query}"</p>
              <p className="text-xs mt-1">Try searching for Chronograph, Diver, or Solaria.</p>
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSelect(product)}
                className="p-3 bg-[#161519] border border-[#262420] hover:border-[#c5a880] flex items-center justify-between cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#1f1e22] border border-[#2d2b27] flex items-center justify-center p-1 shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white group-hover:text-[#c5a880] transition-colors">
                      {product.name}
                    </h4>
                    <span className="text-xs text-[#8c857b]">{product.category} Collection</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-[#c5a880] tabular-nums font-mono">
                    {formatPrice(product.price)}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#787165] group-hover:text-white transition-colors" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
