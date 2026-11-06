import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, Crown, ChevronDown } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CurrencyCode } from '../types';

export const Navbar: React.FC = () => {
  const {
    cartCount,
    wishlist,
    currency,
    setCurrency,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsAccountOpen,
    setIsStoryModalOpen,
    setSelectedCategory,
    setActiveTab,
    setDetailProduct
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const currencies: CurrencyCode[] = ['GBP', 'USD', 'EUR', 'CHF'];

  const handleNavClick = (type: string) => {
    setDetailProduct(null); // Return to main page if on detail page
    setMobileMenuOpen(false);

    if (type === 'new-in') {
      setSelectedCategory(null);
      setActiveTab('new-in');
      document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'men') {
      setSelectedCategory('Men');
      setActiveTab('all');
      document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'women') {
      setSelectedCategory('Women');
      setActiveTab('all');
      document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'collections') {
      setSelectedCategory(null);
      document.getElementById('categories-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'accessories') {
      setSelectedCategory('Accessories');
      setActiveTab('all');
      document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'our-story') {
      setIsStoryModalOpen(true);
    } else if (type === 'journal') {
      document.getElementById('journal-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'sale') {
      setSelectedCategory(null);
      setActiveTab('special-price');
      document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resetHome = () => {
    setDetailProduct(null);
    setSelectedCategory(null);
    setActiveTab('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0b]/95 backdrop-blur-md border-b border-[#22211e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Mobile hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#d1ccc2] hover:text-[#c5a880] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo / Brand Zone */}
          <div className="flex items-center">
            <button
              onClick={resetHome}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-7 h-7 rounded-full border border-[#c5a880]/60 flex items-center justify-center text-[#c5a880] transition-transform duration-300 group-hover:rotate-12">
                <Crown className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
              <span className="font-brand text-xl sm:text-2xl font-bold tracking-[0.22em] text-[#f5f2eb] group-hover:text-[#c5a880] transition-colors uppercase">
                CROWN &amp; DIAL
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[12px] uppercase tracking-[0.18em] font-medium text-[#c0bbb0]">
            <button
              onClick={() => handleNavClick('new-in')}
              className="hover:text-[#c5a880] transition-colors py-1 relative focus:outline-none"
            >
              New In
            </button>
            <button
              onClick={() => handleNavClick('men')}
              className="hover:text-[#c5a880] transition-colors py-1 relative focus:outline-none"
            >
              Men
            </button>
            <button
              onClick={() => handleNavClick('women')}
              className="hover:text-[#c5a880] transition-colors py-1 relative focus:outline-none"
            >
              Women
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className="hover:text-[#c5a880] transition-colors py-1 relative focus:outline-none"
            >
              Collections
            </button>
            <button
              onClick={() => handleNavClick('accessories')}
              className="hover:text-[#c5a880] transition-colors py-1 relative focus:outline-none"
            >
              Accessories
            </button>
            <button
              onClick={() => handleNavClick('our-story')}
              className="hover:text-[#c5a880] transition-colors py-1 relative focus:outline-none"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('journal')}
              className="hover:text-[#c5a880] transition-colors py-1 relative focus:outline-none"
            >
              Journal
            </button>
            <button
              onClick={() => handleNavClick('sale')}
              className="text-[#c5a880] hover:text-[#e4c9a4] transition-colors py-1 font-semibold relative focus:outline-none"
            >
              Sale
            </button>
          </nav>

          {/* Right: Currency & Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Currency Switcher */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1 text-[11px] font-medium tracking-wider text-[#9f9a91] hover:text-[#f5f2eb] transition-colors px-2 py-1 rounded border border-[#2e2c28]"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-[#c5a880]" />
              </button>
              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-1 w-24 bg-[#141416] border border-[#2e2c28] rounded shadow-xl py-1 z-50">
                  {currencies.map(c => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-medium tracking-wider transition-colors ${
                        currency === c ? 'text-[#c5a880] bg-[#1e1c19]' : 'text-[#c0bbb0] hover:bg-[#1a1917]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 text-[#d1ccc2] hover:text-[#c5a880] transition-colors focus:outline-none"
              aria-label="Search Timepieces"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Account Icon */}
            <button
              onClick={() => setIsAccountOpen(true)}
              className="p-1.5 text-[#d1ccc2] hover:text-[#c5a880] transition-colors focus:outline-none"
              aria-label="Client Account"
            >
              <User className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-1.5 text-[#d1ccc2] hover:text-[#c5a880] transition-colors relative focus:outline-none"
              aria-label="View Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.5]" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c5a880] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1.5 text-[#d1ccc2] hover:text-[#c5a880] transition-colors relative focus:outline-none"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c5a880] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e10] border-b border-[#2a2926] px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-wider font-medium text-[#c0bbb0]">
            <button
              onClick={() => handleNavClick('new-in')}
              className="text-left py-2 hover:text-[#c5a880] border-b border-[#1f1e1c]"
            >
              New In
            </button>
            <button
              onClick={() => handleNavClick('men')}
              className="text-left py-2 hover:text-[#c5a880] border-b border-[#1f1e1c]"
            >
              Men
            </button>
            <button
              onClick={() => handleNavClick('women')}
              className="text-left py-2 hover:text-[#c5a880] border-b border-[#1f1e1c]"
            >
              Women
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className="text-left py-2 hover:text-[#c5a880] border-b border-[#1f1e1c]"
            >
              Collections
            </button>
            <button
              onClick={() => handleNavClick('accessories')}
              className="text-left py-2 hover:text-[#c5a880] border-b border-[#1f1e1c]"
            >
              Accessories
            </button>
            <button
              onClick={() => handleNavClick('our-story')}
              className="text-left py-2 hover:text-[#c5a880] border-b border-[#1f1e1c]"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('journal')}
              className="text-left py-2 hover:text-[#c5a880] border-b border-[#1f1e1c]"
            >
              Journal
            </button>
            <button
              onClick={() => handleNavClick('sale')}
              className="text-left py-2 text-[#c5a880] font-semibold border-b border-[#1f1e1c]"
            >
              Sale
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-[#1f1e1c]">
            <span className="text-xs uppercase tracking-wider text-[#88837a]">Currency</span>
            <div className="flex gap-2">
              {currencies.map(c => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`text-xs px-2 py-1 rounded border ${
                    currency === c
                      ? 'border-[#c5a880] text-[#c5a880] bg-[#1a1815]'
                      : 'border-[#2a2926] text-[#88837a]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
