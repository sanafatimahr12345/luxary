import React from 'react';
import { Crown, Globe, Shield, CreditCard } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CurrencyCode } from '../types';

export const Footer: React.FC = () => {
  const {
    currency,
    setCurrency,
    setSelectedCategory,
    setActiveTab,
    setIsStoryModalOpen,
    setDetailProduct
  } = useStore();

  const currencies: CurrencyCode[] = ['GBP', 'USD', 'EUR', 'CHF'];

  const handleCategoryClick = (cat: string) => {
    setDetailProduct(null);
    setSelectedCategory(cat);
    setActiveTab('all');
    document.getElementById('featured-watches')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070708] text-[#9c968a] border-t border-[#1e1c18] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#1b1a17]">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full border border-[#c5a880]/60 flex items-center justify-center text-[#c5a880]">
                <Crown className="w-3.5 h-3.5" />
              </div>
              <span className="font-brand text-xl font-bold tracking-[0.2em] text-[#f5f2eb]">
                CROWN &amp; DIAL
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#8c8579] font-light max-w-sm leading-relaxed">
              Purveyors of high-horology timepieces, rooted in Swiss mechanical mastery and British aesthetic restraint. Watches designed to endure across lifetimes.
            </p>

            <div className="pt-2 text-xs text-[#a9a397] space-y-1">
              <div>Geneva Atelier: Rue du Rhône 42, 1204 Genève</div>
              <div>London Showroom: 18 New Bond Street, Mayfair</div>
              <div>Concierge: clientcare@crownanddial.com</div>
            </div>
          </div>

          {/* Column 1: Timepieces */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#f5f2eb] font-semibold mb-4">
              Timepieces
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleCategoryClick('Chronograph')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Chronograph Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Automatic')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Automatic Calibres
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Diver')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Diver Professional 300M
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Dress')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Heritage Dress Watches
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Women')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Luna Ladies Haute Horlogerie
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Accessories')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Straps &amp; Watchmaker Rolls
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Atelier & Story */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#f5f2eb] font-semibold mb-4">
              The Maison
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => setIsStoryModalOpen(true)}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Our Heritage Since 1928
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('heritage-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Swiss Craftsmanship
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('journal-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  The Horology Journal
                </button>
              </li>
              <li>
                <span className="text-[#68635b]">Bespoke Commemorative Works</span>
              </li>
              <li>
                <span className="text-[#68635b]">Ethical Metallurgy Charter</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Care & Guarantees */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#f5f2eb] font-semibold mb-4">
              Client Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-1.5 text-[#d4cebf]">
                <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>2-Year International Warranty</span>
              </li>
              <li>Complimentary Global Shipping</li>
              <li>30-Day Evaluation &amp; Return</li>
              <li>Calibre Overhauls &amp; Service</li>
              <li>Certificate of Authenticity</li>
              <li>Private Mayfair Appointments</li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer: Currency, Trust, Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#736e65]">
          
          {/* Left: Currency selector */}
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-[#c5a880]" />
            <span className="uppercase tracking-wider">Currency:</span>
            <div className="flex gap-1.5">
              {currencies.map(c => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-2 py-0.5 border text-[11px] font-medium transition-colors ${
                    currency === c
                      ? 'border-[#c5a880] text-[#c5a880] bg-[#141311]'
                      : 'border-[#262420] text-[#857f74] hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Middle: Secure Payment Icons */}
          <div className="flex items-center gap-3 text-[11px] text-[#8c8579]">
            <CreditCard className="w-4 h-4 text-[#c5a880]" />
            <span>SECURE PAYMENT: VISA · MASTERCARD · AMEX · APPLE PAY · KLARNA</span>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <span>&copy; {new Date().getFullYear()} CROWN &amp; DIAL SA. All rights reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
