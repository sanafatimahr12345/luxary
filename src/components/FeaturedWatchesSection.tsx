import React, { useState } from 'react';
import { Heart, Star, Eye, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { WatchProduct, FilterTab } from '../types';

export const FeaturedWatchesSection: React.FC = () => {
  const {
    products,
    formatPrice,
    activeTab,
    setActiveTab,
    selectedCategory,
    setSelectedCategory,
    toggleWishlist,
    isInWishlist,
    addToCart,
    setQuickViewProduct,
    setDetailProduct
  } = useStore();

  // Track active color per product ID for interactive swatch preview
  const [activeColors, setActiveColors] = useState<Record<string, string>>({});

  // Filter products based on selected tab and selected category
  const filteredProducts = products.filter(product => {
    // If a category was chosen from the circular categories section
    if (selectedCategory && selectedCategory !== 'All') {
      if (selectedCategory === 'Men' && product.category !== 'Men' && product.category !== 'Chronograph' && product.category !== 'Automatic' && product.category !== 'Diver') {
        return false;
      }
      if (selectedCategory === 'Women' && product.category !== 'Women') {
        return false;
      }
      if (selectedCategory === 'Chronograph' && product.category !== 'Chronograph') {
        return false;
      }
      if (selectedCategory === 'Automatic' && product.category !== 'Automatic') {
        return false;
      }
      if (selectedCategory === 'Dress' && product.category !== 'Dress') {
        return false;
      }
      if (selectedCategory === 'Diver' && product.category !== 'Diver') {
        return false;
      }
      if (selectedCategory === 'Accessories' && product.category !== 'Accessories') {
        return false;
      }
    }

    // Filter tabs
    if (activeTab === 'best-sellers') {
      return product.tag === 'Best Seller';
    }
    if (activeTab === 'new-in') {
      return product.tag === 'New In';
    }
    if (activeTab === 'special-price') {
      return product.tag === 'Special Price';
    }

    return true;
  });

  const handleColorSelect = (productId: string, colorName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveColors(prev => ({ ...prev, [productId]: colorName }));
  };

  return (
    <section id="featured-watches" className="w-full bg-[#fbf9f5] text-[#1a1917] py-20 border-b border-[#eae5dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#e5dfd3]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9c825a] font-semibold block mb-2">
              MASTER HOROLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181715] font-light">
              Featured Watches
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer border ${
                activeTab === 'all'
                  ? 'border-[#181715] bg-[#181715] text-white shadow-xs'
                  : 'border-[#ded6c8] bg-transparent text-[#625b52] hover:border-[#181715] hover:text-[#181715]'
              }`}
            >
              All Timepieces
            </button>

            <button
              onClick={() => setActiveTab('best-sellers')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer border ${
                activeTab === 'best-sellers'
                  ? 'border-[#181715] bg-[#181715] text-white shadow-xs'
                  : 'border-[#ded6c8] bg-transparent text-[#625b52] hover:border-[#181715] hover:text-[#181715]'
              }`}
            >
              Best Sellers
            </button>

            <button
              onClick={() => setActiveTab('new-in')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer border ${
                activeTab === 'new-in'
                  ? 'border-[#181715] bg-[#181715] text-white shadow-xs'
                  : 'border-[#ded6c8] bg-transparent text-[#625b52] hover:border-[#181715] hover:text-[#181715]'
              }`}
            >
              New In
            </button>

            <button
              onClick={() => setActiveTab('special-price')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer border ${
                activeTab === 'special-price'
                  ? 'border-[#181715] bg-[#181715] text-white shadow-xs'
                  : 'border-[#ded6c8] bg-transparent text-[#625b52] hover:border-[#181715] hover:text-[#181715]'
              }`}
            >
              Special Price
            </button>

            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-xs text-[#9c825a] underline ml-2 hover:text-[#6e5a3c]"
              >
                Clear '{selectedCategory}'
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid: 6-column responsive layout */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-6">
          {filteredProducts.map((product) => {
            const isWishlisted = isInWishlist(product.id);
            const activeColorName = activeColors[product.id] || product.colors[0]?.name;
            const activeColorObj = product.colors.find(c => c.name === activeColorName);
            const displayImage = activeColorObj?.image || product.image;

            return (
              <div
                key={product.id}
                onClick={() => setDetailProduct(product)}
                className="watch-card group flex flex-col bg-white border border-[#eae5dc] rounded-none p-4 hover:border-[#c5a880] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative"
              >
                {/* Wishlist Heart Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className={`absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isWishlisted
                      ? 'bg-rose-50 text-rose-600 shadow-sm'
                      : 'bg-[#f8f6f0]/80 text-[#88837a] hover:text-black hover:bg-white'
                  }`}
                  aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isWishlisted ? 'fill-rose-600 stroke-rose-600 scale-110' : 'stroke-[1.5]'
                    }`}
                  />
                </button>

                {/* Subtle Tag if exists */}
                {product.tag && (
                  <div className="absolute top-4 left-4 z-20 text-[10px] uppercase tracking-wider font-semibold text-[#8c7450] bg-[#f7f3ec] px-2 py-0.5 border border-[#e6decb]">
                    {product.tag}
                  </div>
                )}

                {/* Watch Photography Container with Quick View on Hover */}
                <div className="relative w-full aspect-square bg-[#f8f6f0] flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src={displayImage}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="watch-card-img w-full h-full object-cover p-0"
                  />

                  {/* Quick View Button (Reveals on Hover) */}
                  <div className="absolute inset-x-2 bottom-2 z-10 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      className="flex-1 py-2 px-2 bg-[#121214]/90 hover:bg-black text-white text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 backdrop-blur-xs transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>Quick View</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, activeColorName, 1);
                      }}
                      className="w-8 py-2 bg-[#c5a880] hover:bg-[#d8be98] text-black flex items-center justify-center transition-colors"
                      title="Add to Shopping Bag"
                      aria-label="Add to Bag"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Product Name */}
                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg text-[#1a1917] font-normal group-hover:text-[#9c825a] transition-colors leading-snug line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Star Rating & Review Count */}
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-[#7a746c]">
                      <div className="flex text-[#c5a880]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'fill-[#c5a880] stroke-[#c5a880]'
                                : 'fill-transparent stroke-[#c5a880]'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="tabular-nums font-medium text-[#2d2a26]">
                        {product.rating.toFixed(1)}
                      </span>
                      <span className="text-[#999288]">({product.reviewCount})</span>
                    </div>
                  </div>

                  {/* Price & Original Price */}
                  <div className="pt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-semibold text-[#181715] tabular-nums">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#a39c90] line-through tabular-nums">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    {/* Color Swatches */}
                    {product.colors.length > 1 && (
                      <div className="flex items-center gap-1">
                        {product.colors.map(col => (
                          <button
                            key={col.name}
                            type="button"
                            onClick={(e) => handleColorSelect(product.id, col.name, e)}
                            className={`w-3 h-3 rounded-full border transition-all ${
                              activeColorName === col.name
                                ? 'ring-1 ring-[#c5a880] ring-offset-1 ring-offset-white scale-125 border-black/40'
                                : 'border-black/20 hover:scale-110'
                            }`}
                            style={{ backgroundColor: col.hex }}
                            title={col.name}
                            aria-label={`Select ${col.name} color`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if filter has no products */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-base text-[#6b645b] font-serif italic mb-4">
              No timepieces found in this selection.
            </p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSelectedCategory(null);
              }}
              className="px-6 py-2.5 bg-[#181715] text-white text-xs uppercase tracking-wider"
            >
              View Full Collection
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
