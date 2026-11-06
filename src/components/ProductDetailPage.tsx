import React, { useState } from 'react';
import { ArrowLeft, Star, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw, ChevronDown, Check, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { WatchProduct } from '../types';

interface ProductDetailPageProps {
  product: WatchProduct;
  onBack: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBack }) => {
  const {
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useStore();

  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || '');
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<'craft' | 'shipping' | 'warranty' | null>('craft');

  const currentColorObj = product.colors.find(c => c.name === selectedColor);
  const isWishlisted = isInWishlist(product.id);

  const handleColorChange = (colName: string) => {
    setSelectedColor(colName);
    const matched = product.colors.find(c => c.name === colName);
    if (matched?.image) {
      setActiveImage(matched.image);
    }
  };

  const handleAdd = () => {
    addToCart(product, selectedColor, quantity);
  };

  return (
    <div className="w-full bg-[#0a0a0c] text-[#f5f2eb] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c857b] pb-8 border-b border-[#22211e]">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 hover:text-[#c5a880] transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Collection</span>
          </button>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-white font-medium">{product.name}</span>
        </div>

        {/* 2-Column Contiguous Purchase Module */}
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Interactive Watch Gallery (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-square w-full bg-[#131215] border border-[#2b2925] p-6 sm:p-12 flex items-center justify-center overflow-hidden">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              {product.tag && (
                <div className="absolute top-6 left-6 text-xs uppercase tracking-widest font-semibold text-[#8c7450] bg-[#1e1c18] px-3 py-1 border border-[#3e3a31]">
                  {product.tag}
                </div>
              )}
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 bg-[#161518] border p-1.5 shrink-0 transition-all focus:outline-none ${
                    activeImage === img ? 'border-[#c5a880]' : 'border-[#2d2b27] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} angle ${idx + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

            {/* Hallmark of Authenticity Trust Strip */}
            <div className="p-6 bg-[#131215] border border-[#242220] grid grid-cols-3 gap-4 text-center text-xs text-[#a9a397]">
              <div>
                <Sparkles className="w-4 h-4 text-[#c5a880] mx-auto mb-1" />
                <span className="font-medium text-white block">Swiss Regulated</span>
                <span className="text-[10px] text-[#736e65]">COSC Standard Precision</span>
              </div>
              <div>
                <ShieldCheck className="w-4 h-4 text-[#c5a880] mx-auto mb-1" />
                <span className="font-medium text-white block">2-Year Warranty</span>
                <span className="text-[10px] text-[#736e65]">Global Transferable</span>
              </div>
              <div>
                <Truck className="w-4 h-4 text-[#c5a880] mx-auto mb-1" />
                <span className="font-medium text-white block">Complimentary</span>
                <span className="text-[10px] text-[#736e65]">Worldwide Express</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-2">
                ATELIER GENÈVE · {product.category.toUpperCase()}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-sm text-[#a49d90] font-light mt-1">
                {product.subtitle}
              </p>

              {/* Connoisseur Rating */}
              <div className="flex items-center gap-2 mt-4 text-xs text-[#8c857b]">
                <div className="flex text-[#c5a880]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[#c5a880] stroke-[#c5a880]'
                          : 'fill-transparent stroke-[#c5a880]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-medium">{product.rating.toFixed(1)}</span>
                <span>({product.reviewCount} Verified Collector Reviews)</span>
              </div>

              {/* Price Banner */}
              <div className="mt-5 flex items-baseline gap-3 pb-6 border-b border-[#22211e]">
                <span className="text-3xl font-serif text-[#c5a880] font-medium tabular-nums">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-[#736c61] line-through tabular-nums">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-[#8c857b] uppercase tracking-wider ml-auto">
                  Includes Duties &amp; Taxes
                </span>
              </div>

              {/* Long Description */}
              <p className="text-sm text-[#bfb8ac] font-light leading-relaxed mt-6">
                {product.description}
              </p>

              {/* Color Edition Swatches */}
              <div className="mt-6 space-y-2.5">
                <label className="text-xs uppercase tracking-wider text-[#bfb8ac] font-medium block">
                  Finishing Edition: <span className="text-white font-semibold">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map(col => (
                    <button
                      key={col.name}
                      onClick={() => handleColorChange(col.name)}
                      className={`flex items-center gap-2.5 px-3.5 py-2 border text-xs transition-all ${
                        selectedColor === col.name
                          ? 'border-[#c5a880] bg-[#1a1815] text-white shadow-sm'
                          : 'border-[#2d2b27] text-[#8c857b] hover:border-[#666]'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/30"
                        style={{ backgroundColor: col.hex }}
                      />
                      <span>{col.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart Controls */}
              <div className="mt-8 space-y-3">
                <div className="flex gap-3">
                  {/* Stepper */}
                  <div className="flex items-center border border-[#38352f] bg-[#141316] px-3">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="p-1.5 text-[#8c857b] hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xs font-mono tabular-nums text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="p-1.5 text-[#8c857b] hover:text-white"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Bag */}
                  <button
                    onClick={handleAdd}
                    className="flex-1 group flex items-center justify-center gap-2.5 py-4 bg-[#c5a880] hover:bg-[#d8be98] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-xl focus:outline-none"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO SHOPPING BAG</span>
                  </button>

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-4 border transition-colors ${
                      isWishlisted
                        ? 'border-rose-500 text-rose-500 bg-rose-950/20'
                        : 'border-[#38352f] text-[#8c857b] hover:text-white hover:border-[#666]'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#8c857b] pt-1">
                  <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>In Stock — Dispatched within 24 hours from Geneva Atelier</span>
                </div>
              </div>

              {/* Technical Specifications Sheet */}
              <div className="mt-10 pt-8 border-t border-[#22211e]">
                <h3 className="text-xs uppercase tracking-[0.22em] text-[#c5a880] font-semibold mb-4">
                  HOROLOGICAL SPECIFICATIONS
                </h3>
                <div className="space-y-2 text-xs divide-y divide-[#1e1c19]">
                  <div className="flex justify-between py-2">
                    <span className="text-[#8c857b]">Movement:</span>
                    <span className="text-white font-medium text-right">{product.specs.movement}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#8c857b]">Power Reserve:</span>
                    <span className="text-white font-medium text-right">{product.specs.powerReserve}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#8c857b]">Case Dimensions:</span>
                    <span className="text-white font-medium text-right">{product.specs.caseDiameter}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#8c857b]">Case Material:</span>
                    <span className="text-white font-medium text-right">{product.specs.caseMaterial}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#8c857b]">Crystal:</span>
                    <span className="text-white font-medium text-right">{product.specs.crystal}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#8c857b]">Water Resistance:</span>
                    <span className="text-white font-medium text-right">{product.specs.waterResistance}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#8c857b]">Strap &amp; Clasp:</span>
                    <span className="text-white font-medium text-right">{product.specs.strap}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#8c857b]">Warranty:</span>
                    <span className="text-[#c5a880] font-medium text-right">{product.specs.warranty}</span>
                  </div>
                </div>
              </div>

              {/* Accordions */}
              <div className="mt-8 border-t border-[#22211e] divide-y divide-[#22211e]">
                {/* Accordion 1: Craftsmanship */}
                <div>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'craft' ? null : 'craft')}
                    className="w-full py-4 flex items-center justify-between text-left text-xs uppercase tracking-wider font-semibold text-white hover:text-[#c5a880] transition-colors"
                  >
                    <span>CRAFTSMANSHIP &amp; ORIGIN</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'craft' ? 'rotate-180 text-[#c5a880]' : ''}`} />
                  </button>
                  {openAccordion === 'craft' && (
                    <div className="pb-4 text-xs text-[#a9a397] font-light leading-relaxed space-y-2">
                      <p>
                        Each CROWN &amp; DIAL timepiece is crafted in compliance with Swiss Federal regulations, regulated by master watchmakers over a 30-day period.
                      </p>
                      <p>
                        Components are hand-beveled with diamond paste, dials feature diamond-cut indices, and case surfaces combine circular satin brushwork with mirror-polished facets.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Delivery & Returns */}
                <div>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                    className="w-full py-4 flex items-center justify-between text-left text-xs uppercase tracking-wider font-semibold text-white hover:text-[#c5a880] transition-colors"
                  >
                    <span>COMPLIMENTARY SHIPPING &amp; RETURNS</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'shipping' ? 'rotate-180 text-[#c5a880]' : ''}`} />
                  </button>
                  {openAccordion === 'shipping' && (
                    <div className="pb-4 text-xs text-[#a9a397] font-light leading-relaxed space-y-2">
                      <p>
                        Dispatched via DHL Express or FedEx Priority Courier in discreet, armored presentation cases with tracking and signature required upon delivery.
                      </p>
                      <p>
                        We offer a 30-day evaluation privilege. If the timepiece does not exceed your expectations, our concierge will arrange complimentary courier collection for an immediate exchange or full refund.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Warranty */}
                <div>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'warranty' ? null : 'warranty')}
                    className="w-full py-4 flex items-center justify-between text-left text-xs uppercase tracking-wider font-semibold text-white hover:text-[#c5a880] transition-colors"
                  >
                    <span>2-YEAR INTERNATIONAL PASSPORT</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'warranty' ? 'rotate-180 text-[#c5a880]' : ''}`} />
                  </button>
                  {openAccordion === 'warranty' && (
                    <div className="pb-4 text-xs text-[#a9a397] font-light leading-relaxed space-y-2">
                      <p>
                        Your timepiece includes a serialized leather warranty booklet and smart NFC ownership card. Our warranty covers manufacturing defects and internal mechanical calibre performance globally.
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
