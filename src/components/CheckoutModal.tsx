import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, ArrowRight, CreditCard, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    clearCart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    formatPrice,
    cartSubtotal,
    cartTotal,
    discountPercent
  } = useStore();

  const [step, setStep] = useState<'form' | 'processing' | 'confirmed'>('form');
  const [orderNumber, setOrderNumber] = useState('');

  // Form Fields
  const [formData, setFormData] = useState({
    firstName: 'Alexander',
    lastName: 'Vane',
    email: 'a.vane@patron.com',
    phone: '+44 20 7946 0912',
    address: '48 Berkeley Square, Mayfair',
    city: 'London',
    postalCode: 'W1J 5AR',
    country: 'United Kingdom',
    shippingMethod: 'express', // express | priority
    paymentMethod: 'card', // card | apple | klarna
    cardNumber: '•••• •••• •••• 8829',
    cardExpiry: '11/29',
    cardCvc: '884',
    engravingNotes: ''
  });

  if (!isCheckoutOpen) return null;

  const handleInputChange = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');

    const generatedNumber = `CD-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(generatedNumber);

    setTimeout(() => {
      setStep('confirmed');
      clearCart();
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        onClick={step === 'processing' ? undefined : handleClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#100f12] border border-[#2e2c26] text-[#f5f2eb] max-w-3xl w-full z-10 shadow-2xl overflow-hidden animate-fadeIn my-8">
        
        {/* Header */}
        <div className="p-6 border-b border-[#24221f] flex items-center justify-between bg-[#141316]">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full border border-[#c5a880]/60 flex items-center justify-center text-[#c5a880]">
              <Lock className="w-3 h-3" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block">
                CROWN &amp; DIAL ENCRYPTED CHECKOUT
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-white font-light">
                {step === 'confirmed' ? 'Acquisition Confirmed' : 'Client Checkout'}
              </h2>
            </div>
          </div>

          {step !== 'processing' && (
            <button
              onClick={handleClose}
              className="p-2 text-[#8c857b] hover:text-white transition-colors"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content based on step */}
        {step === 'confirmed' ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#1b1916] border border-[#c5a880] text-[#c5a880] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                TIMEPIECE ALLOCATION SECURED
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Thank You, {formData.firstName}
              </h3>
              <p className="text-sm text-[#bfb8ac] max-w-md mx-auto font-light leading-relaxed">
                Your order <strong className="text-white font-mono">{orderNumber}</strong> has been transmitted to our Geneva master horology atelier.
              </p>
            </div>

            <div className="p-5 bg-[#161518] border border-[#2b2925] max-w-md mx-auto text-left space-y-2 text-xs text-[#a9a397]">
              <div className="flex justify-between">
                <span>Dispatch Origin:</span>
                <span className="text-white">Geneva Atelier, Switzerland</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Address:</span>
                <span className="text-white truncate max-w-[200px]">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span>Confirmation Dispatch:</span>
                <span className="text-white">{formData.email}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#262420] text-sm font-semibold">
                <span className="text-white">Total Settled:</span>
                <span className="text-[#c5a880] font-serif tabular-nums">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-8 py-3.5 bg-[#c5a880] hover:bg-[#d8be98] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-colors"
              >
                RETURN TO BOUTIQUE
              </button>
            </div>
          </div>
        ) : step === 'processing' ? (
          <div className="p-16 text-center space-y-4">
            <div className="w-12 h-12 border-2 border-[#c5a880] border-t-transparent rounded-full animate-spin mx-auto" />
            <h3 className="font-serif text-2xl text-white">Validating Swiss Vault Escrow...</h3>
            <p className="text-xs text-[#8c857b]">
              Allocating serial number &amp; printing warranty passport...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6">
            
            {/* Order Items Snapshot */}
            <div className="p-4 bg-[#141316] border border-[#262420] space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold">
                Order Summary ({cart.length} distinct models)
              </div>
              <div className="divide-y divide-[#201f1c] max-h-36 overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="py-2 flex items-center justify-between text-xs">
                    <span className="text-white truncate max-w-[240px]">
                      {item.quantity}× {item.product.name} ({item.selectedColor})
                    </span>
                    <span className="text-[#c5a880] tabular-nums font-mono">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex justify-between text-xs font-semibold border-t border-[#24221f]">
                <span className="text-[#8c857b]">Subtotal due:</span>
                <span className="text-white tabular-nums">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            {/* Client Details */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                1. Client &amp; Delivery Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[#8c857b] mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={e => handleInputChange('firstName', e.target.value)}
                    className="w-full bg-[#161518] border border-[#2d2b26] px-3 py-2 text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-[#8c857b] mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={e => handleInputChange('lastName', e.target.value)}
                    className="w-full bg-[#161518] border border-[#2d2b26] px-3 py-2 text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-[#8c857b] mb-1">Email Address (Order Tracking)</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    className="w-full bg-[#161518] border border-[#2d2b26] px-3 py-2 text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-[#8c857b] mb-1">Phone Number (Courier Delivery SMS)</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => handleInputChange('phone', e.target.value)}
                    className="w-full bg-[#161518] border border-[#2d2b26] px-3 py-2 text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[#8c857b] mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={e => handleInputChange('address', e.target.value)}
                    className="w-full bg-[#161518] border border-[#2d2b26] px-3 py-2 text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-[#8c857b] mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={e => handleInputChange('city', e.target.value)}
                    className="w-full bg-[#161518] border border-[#2d2b26] px-3 py-2 text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-[#8c857b] mb-1">Postal / ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={e => handleInputChange('postalCode', e.target.value)}
                    className="w-full bg-[#161518] border border-[#2d2b26] px-3 py-2 text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                2. Payment Method
              </h4>

              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => handleInputChange('paymentMethod', 'card')}
                  className={`p-3 border text-xs flex flex-col items-center gap-1.5 transition-colors ${
                    formData.paymentMethod === 'card'
                      ? 'border-[#c5a880] bg-[#1a1815] text-white font-medium'
                      : 'border-[#2d2b26] text-[#8c857b] hover:text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#c5a880]" />
                  <span>Credit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleInputChange('paymentMethod', 'apple')}
                  className={`p-3 border text-xs flex flex-col items-center gap-1.5 transition-colors ${
                    formData.paymentMethod === 'apple'
                      ? 'border-[#c5a880] bg-[#1a1815] text-white font-medium'
                      : 'border-[#2d2b26] text-[#8c857b] hover:text-white'
                  }`}
                >
                  <span className="font-bold text-sm"> Pay</span>
                  <span>Apple Pay</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleInputChange('paymentMethod', 'klarna')}
                  className={`p-3 border text-xs flex flex-col items-center gap-1.5 transition-colors ${
                    formData.paymentMethod === 'klarna'
                      ? 'border-[#c5a880] bg-[#1a1815] text-white font-medium'
                      : 'border-[#2d2b26] text-[#8c857b] hover:text-white'
                  }`}
                >
                  <span className="font-bold text-sm tracking-tight text-pink-400">Klarna.</span>
                  <span>3x Split</span>
                </button>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="grid grid-cols-3 gap-3 text-xs bg-[#141316] p-4 border border-[#292723]">
                  <div className="col-span-3">
                    <label className="block text-[#8c857b] mb-1">Card Number</label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={e => handleInputChange('cardNumber', e.target.value)}
                      className="w-full bg-[#1a191d] border border-[#33302a] px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[#8c857b] mb-1">Expiry Date</label>
                    <input
                      type="text"
                      required
                      value={formData.cardExpiry}
                      onChange={e => handleInputChange('cardExpiry', e.target.value)}
                      className="w-full bg-[#1a191d] border border-[#33302a] px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8c857b] mb-1">CVC Security</label>
                    <input
                      type="password"
                      maxLength={4}
                      required
                      value={formData.cardCvc}
                      onChange={e => handleInputChange('cardCvc', e.target.value)}
                      className="w-full bg-[#1a191d] border border-[#33302a] px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-[#24221f] space-y-3">
              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-3 py-4 bg-[#c5a880] hover:bg-[#d8be98] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-xl focus:outline-none"
              >
                <span>COMPLETE ORDER · {formatPrice(cartTotal)}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#736e65]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>256-bit Swiss Banking Encryption · Insured Courier Delivery</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
