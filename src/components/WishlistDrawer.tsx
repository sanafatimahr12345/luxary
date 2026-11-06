import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const WishlistDrawer: React.FC = () => {
  const {
    products,
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    formatPrice,
    setDetailProduct
  } = useStore();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0f0e10] border-l border-[#282622] text-[#f5f2eb] flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-[#24221e] flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block">
                SAVED ATELIER PIECES
              </span>
              <h2 className="font-serif text-2xl text-white font-light">
                Your Wishlist ({wishlistedProducts.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-[#9e988d] hover:text-white transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full border border-[#33302a] flex items-center justify-center text-[#736c61]">
                  <Heart className="w-6 h-6 stroke-[1]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-white">Your Wishlist is Empty</h3>
                  <p className="text-xs text-[#968f83] max-w-xs">
                    Click the heart icon on any timepiece to save it for future curation.
                  </p>
                </div>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-3 bg-[#c5a880] text-black text-xs uppercase tracking-wider font-bold hover:bg-[#d4ba92] transition-colors"
                >
                  EXPLORE WATCHES
                </button>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-4 bg-[#141316] border border-[#262420] flex gap-4 items-center justify-between group"
                >
                  <div
                    onClick={() => {
                      setDetailProduct(product);
                      setIsWishlistOpen(false);
                    }}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <div className="w-16 h-16 bg-[#1a191d] border border-[#2e2c27] flex items-center justify-center shrink-0 p-1">
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm text-white font-normal group-hover:text-[#c5a880] transition-colors line-clamp-1">
                        {product.name}
                      </h4>
                      <div className="text-[11px] text-[#8c857b]">
                        {product.category}
                      </div>
                      <div className="text-xs font-semibold text-[#c5a880] tabular-nums mt-0.5">
                        {formatPrice(product.price)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        addToCart(product, product.colors[0]?.name, 1);
                        toggleWishlist(product.id);
                      }}
                      className="p-2.5 bg-[#c5a880] hover:bg-[#d8be98] text-black transition-colors"
                      title="Move to Shopping Bag"
                      aria-label="Move to Shopping Bag"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="p-2.5 text-[#736d62] hover:text-rose-400 transition-colors"
                      title="Remove from wishlist"
                      aria-label="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {wishlistedProducts.length > 0 && (
            <div className="p-6 border-t border-[#24221e] bg-[#111013]">
              <button
                onClick={() => {
                  wishlistedProducts.forEach(p => addToCart(p, p.colors[0]?.name, 1));
                  setIsWishlistOpen(false);
                }}
                className="w-full py-3.5 bg-[#1f1e22] hover:bg-[#c5a880] hover:text-black text-white text-xs uppercase tracking-[0.18em] font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>MOVE ALL ITEMS TO BAG</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
