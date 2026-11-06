import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';
import { useStore } from '../context/StoreContext';

export const CategorySection: React.FC = () => {
  const { selectedCategory, setSelectedCategory, setActiveTab } = useStore();

  const handleCategorySelect = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
    setActiveTab('all');
    document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreAll = () => {
    setSelectedCategory(null);
    setActiveTab('all');
    document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories-section" className="w-full bg-[#fbf9f5] text-[#1c1b19] py-16 sm:py-20 border-b border-[#eae5dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#e5dfd3]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9c825a] font-semibold block mb-2">
              CURATED ATELIERS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181715] font-light">
              Shop by Category
            </h2>
          </div>

          <button
            onClick={handleExploreAll}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#181715] hover:text-[#9c825a] transition-colors focus:outline-none"
          >
            <span>EXPLORE ALL WATCHES</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Circular Categories Grid */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 justify-items-center">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = selectedCategory === cat.filterCategory;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.filterCategory)}
                className="group flex flex-col items-center text-center focus:outline-none cursor-pointer w-full max-w-[140px]"
              >
                {/* Circular Image Container */}
                <div
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-1 transition-all duration-300 shadow-sm ${
                    isSelected
                      ? 'ring-2 ring-[#c5a880] ring-offset-2 ring-offset-[#fbf9f5] scale-105'
                      : 'border border-[#ded6c8] group-hover:border-[#c5a880] group-hover:scale-105 group-hover:shadow-md'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Title & Subtle Count */}
                <div className="mt-3.5 space-y-0.5">
                  <span
                    className={`block text-xs sm:text-sm font-medium tracking-wide transition-colors ${
                      isSelected ? 'text-[#9c825a] font-semibold' : 'text-[#201e1b] group-hover:text-[#9c825a]'
                    }`}
                  >
                    {cat.title}
                  </span>
                  <span className="block text-[11px] text-[#8c857b]">
                    {cat.count}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Filter Notice if Selected */}
        {selectedCategory && (
          <div className="mt-8 pt-4 flex items-center justify-center gap-3 text-xs text-[#5f5951]">
            <span>Showing category: <strong className="text-[#1a1917]">{selectedCategory}</strong></span>
            <button
              onClick={() => setSelectedCategory(null)}
              className="underline text-[#9c825a] hover:text-[#7d6744] font-medium"
            >
              Reset to All
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
