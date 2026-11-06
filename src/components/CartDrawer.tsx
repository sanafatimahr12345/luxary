import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    formatPrice,
    cartSubtotal,
    cartTotal,
    promoCode,
    discountPercent,
    applyPromoCode,
    removePromoCode,
    setIsCheckoutOpen
  } = useStore();

  const [inputCode, setInputCode] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyPromoCode(inputCode);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoError('');
      setInputCode('');
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-over Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0f0e10] border-l border-[#282622] text-[#f5f2eb] flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-[#24221e] flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block">
                YOUR SELECTION
              </span>
              <h2 className="font-serif text-2xl text-white font-light">
                Shopping Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#9e988d] hover:text-white transition-colors focus:outline-none"
              aria-label="Close Shopping Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Progress */}
          <div className="px-6 py-3 bg-[#171619] border-b border-[#24221e] flex items-center gap-2 text-xs text-[#c5a880]">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Complimentary Worldwide Express Delivery &amp; Insurance included.</span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full border border-[#33302a] flex items-center justify-center text-[#736c61]">
                  <Tag className="w-6 h-6 stroke-[1]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-white">Your Bag is Empty</h3>
                  <p className="text-xs text-[#968f83] max-w-xs">
                    Explore our master horology collection and acquire a timepiece for life.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-[#c5a880] text-black text-xs uppercase tracking-wider font-bold hover:bg-[#d4ba92] transition-colors"
                >
                  DISCOVER TIMEPIECES
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="flex gap-4 p-3 bg-[#141316] border border-[#262420]"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-[#1c1b1f] border border-[#312f2a] flex items-center justify-center shrink-0 overflow-hidden p-1">
                    <img
                      src={
                        item.product.colors.find(c => c.name === item.selectedColor)?.image ||
                        item.product.image
                      }
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-base text-white font-normal line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                          className="text-[#787165] hover:text-rose-400 p-0.5 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#9c9487] mt-0.5">
                        Edition: <span className="text-[#ded8cb]">{item.selectedColor}</span>
                      </div>

                      <div className="text-xs font-semibold text-[#c5a880] tabular-nums mt-1">
                        {formatPrice(item.product.price)}
                      </div>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex items-center border border-[#38352f] bg-[#1a191d]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, -1)}
                          className="p-1 text-[#a8a193] hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-mono tabular-nums text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, 1)}
                          className="p-1 text-[#a8a193] hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-[11px] text-[#736c61]">
                        Subtotal: {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#24221e] bg-[#111013] space-y-4">
              
              {/* Promo Code Input */}
              {discountPercent > 0 ? (
                <div className="flex items-center justify-between p-2.5 bg-[#1e1c18] border border-[#c5a880]/40 text-xs">
                  <div className="flex items-center gap-2 text-[#c5a880]">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Code <strong>{promoCode}</strong> applied ({discountPercent}% off)</span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-xs text-[#a8a294] hover:text-rose-400 underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="space-y-1">
                  <div className="flex">
                    <input
                      type="text"
                      value={inputCode}
                      onChange={(e) => {
                        setInputCode(e.target.value);
                        setPromoError('');
                      }}
                      placeholder="Promo Code (e.g. AUTUMN10)"
                      className="flex-1 bg-[#18171b] border border-[#33302a] text-xs text-white px-3 py-2 placeholder-[#6b655b] focus:outline-none focus:border-[#c5a880] uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#2a2824] hover:bg-[#c5a880] hover:text-black text-xs uppercase tracking-wider font-medium text-[#ded8cb] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-[11px] text-rose-400">{promoError}</p>
                  )}
                </form>
              )}

              {/* Totals Breakdown */}
              <div className="space-y-1.5 text-xs text-[#a9a294]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums text-white">{formatPrice(cartSubtotal)}</span>
                </div>

                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#c5a880]">
                    <span>Privilege Discount ({discountPercent}%)</span>
                    <span className="tabular-nums">-{formatPrice(cartSubtotal * (discountPercent / 100))}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Worldwide Shipping</span>
                  <span className="text-[#c5a880] font-medium uppercase tracking-wider text-[11px]">Complimentary</span>
                </div>

                <div className="pt-2 border-t border-[#262420] flex justify-between text-sm font-semibold text-white">
                  <span>Total Due</span>
                  <span className="text-base text-[#c5a880] font-serif tabular-nums">{formatPrice(cartTotal)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleCheckout}
                className="w-full group flex items-center justify-center gap-3 py-4 bg-[#c5a880] hover:bg-[#d8be98] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-xl focus:outline-none"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="text-center text-[10px] text-[#736e65]">
                Taxes &amp; International duties calculated at checkout. 30-day money-back guarantee.
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
