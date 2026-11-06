import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Shield, Check, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    setDetailProduct,
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useStore();

  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const currentColor = selectedColor || quickViewProduct.colors[0]?.name || 'Standard';
  const colorObj = quickViewProduct.colors.find(c => c.name === currentColor);
  const activeImage = selectedImage || colorObj?.image || quickViewProduct.image;
  const isWishlisted = isInWishlist(quickViewProduct.id);

  const handleClose = () => {
    setQuickViewProduct(null);
    setSelectedColor('');
    setSelectedImage('');
    setQuantity(1);
  };

  const handleAdd = () => {
    addToCart(quickViewProduct, currentColor, quantity);
    handleClose();
  };

  const handleViewFullPage = () => {
    setDetailProduct(quickViewProduct);
    handleClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#111114] border border-[#2e2c27] text-[#f5f2eb] max-w-4xl w-full z-10 shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#999285] hover:text-white bg-[#1a191d]/80 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image & Gallery */}
          <div className="bg-[#161619] border-b md:border-b-0 md:border-r border-[#262420] p-6 sm:p-8 flex flex-col justify-between">
            <div className="relative aspect-square flex items-center justify-center overflow-hidden bg-[#1a191d] p-4">
              <img
                src={activeImage}
                alt={quickViewProduct.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
              {quickViewProduct.tag && (
                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold text-[#8c7450] bg-[#22211e] px-2.5 py-1 border border-[#3e3b34]">
                  {quickViewProduct.tag}
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {quickViewProduct.gallery.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                {quickViewProduct.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-14 bg-[#1f1e22] border p-1 shrink-0 transition-all ${
                      activeImage === img ? 'border-[#c5a880]' : 'border-[#33312c] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Information & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-1">
                {quickViewProduct.category} COLLECTION
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl text-white font-light">
                {quickViewProduct.name}
              </h2>

              <p className="text-xs text-[#9c9588] font-light mt-1">
                {quickViewProduct.subtitle}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 mt-3 text-xs text-[#8c857b]">
                <div className="flex text-[#c5a880]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(quickViewProduct.rating)
                          ? 'fill-[#c5a880] stroke-[#c5a880]'
                          : 'fill-transparent stroke-[#c5a880]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-medium">{quickViewProduct.rating.toFixed(1)}</span>
                <span>({quickViewProduct.reviewCount} Connoisseur Reviews)</span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-serif text-[#c5a880] font-medium tabular-nums">
                  {formatPrice(quickViewProduct.price)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-[#736c61] line-through tabular-nums">
                    {formatPrice(quickViewProduct.originalPrice)}
                  </span>
                )}
              </div>

              {/* Color Edition Swatches */}
              <div className="mt-6 space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#bfb8ac] font-medium block">
                  Edition / Dial: <span className="text-white">{currentColor}</span>
                </label>
                <div className="flex items-center gap-2.5">
                  {quickViewProduct.colors.map(col => (
                    <button
                      key={col.name}
                      onClick={() => {
                        setSelectedColor(col.name);
                        if (col.image) setSelectedImage(col.image);
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 border text-xs transition-all ${
                        currentColor === col.name
                          ? 'border-[#c5a880] bg-[#1e1c18] text-white'
                          : 'border-[#33302a] text-[#8c857b] hover:border-[#666]'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/30"
                        style={{ backgroundColor: col.hex }}
                      />
                      <span>{col.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Specs Overview */}
              <div className="mt-6 border-t border-b border-[#24221f] py-4 space-y-2 text-xs text-[#a39c90]">
                <div className="flex justify-between">
                  <span className="text-[#736d62]">Calibre:</span>
                  <span className="text-[#ded8cb] font-medium">{quickViewProduct.specs.movement}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736d62]">Case &amp; Crystal:</span>
                  <span className="text-[#ded8cb] font-medium">{quickViewProduct.specs.caseDiameter} · {quickViewProduct.specs.crystal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736d62]">Water Resistance:</span>
                  <span className="text-[#ded8cb] font-medium">{quickViewProduct.specs.waterResistance}</span>
                </div>
              </div>
            </div>

            {/* Actions: Quantity & Buy */}
            <div className="space-y-3">
              <div className="flex gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#38352f] bg-[#1a191d] px-3">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-1 text-[#8c857b] hover:text-white"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-mono tabular-nums text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-1 text-[#8c857b] hover:text-white"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAdd}
                  className="flex-1 group flex items-center justify-center gap-2 py-3.5 bg-[#c5a880] hover:bg-[#d8be98] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 focus:outline-none"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO SHOPPING BAG</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3.5 border transition-colors ${
                    isWishlisted
                      ? 'border-rose-500 text-rose-500 bg-rose-950/20'
                      : 'border-[#38352f] text-[#8c857b] hover:text-white hover:border-[#666]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              {/* View Full Product Page */}
              <button
                onClick={handleViewFullPage}
                className="w-full py-2.5 text-center text-xs uppercase tracking-[0.16em] text-[#a49e91] hover:text-[#c5a880] transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
              >
                <span>VIEW COMPLETE SPECIFICATIONS &amp; ARCHIVE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
