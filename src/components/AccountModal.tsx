import React, { useState } from 'react';
import { X, Crown, Shield, Award, CheckCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, addToast } = useStore();
  const [activeTab, setActiveTab] = useState<'signin' | 'privileges'>('signin');
  const [email, setEmail] = useState('collector@vane-estate.com');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isAccountOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    addToast('Welcome back, Patron', 'Logged into CROWN & DIAL Private Client Portal');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={() => setIsAccountOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#100f13] border border-[#2e2c26] text-[#f5f2eb] max-w-lg w-full z-10 shadow-2xl p-6 sm:p-8 animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#24221f]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-[#c5a880]/60 flex items-center justify-center text-[#c5a880]">
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block">
                CROWN &amp; DIAL MAISON
              </span>
              <h2 className="font-serif text-xl text-white font-light">
                Private Patron Portal
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsAccountOpen(false)}
            className="p-1.5 text-[#8c857b] hover:text-white transition-colors"
            aria-label="Close portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-[#24221f] mt-4">
          <button
            onClick={() => setActiveTab('signin')}
            className={`flex-1 py-3 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
              activeTab === 'signin'
                ? 'border-b-2 border-[#c5a880] text-[#c5a880]'
                : 'text-[#7f786d] hover:text-[#ded8cb]'
            }`}
          >
            Patron Account
          </button>
          <button
            onClick={() => setActiveTab('privileges')}
            className={`flex-1 py-3 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
              activeTab === 'privileges'
                ? 'border-b-2 border-[#c5a880] text-[#c5a880]'
                : 'text-[#7f786d] hover:text-[#ded8cb]'
            }`}
          >
            VIP Privileges
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'signin' ? (
          isLoggedIn ? (
            <div className="pt-6 space-y-5">
              <div className="p-4 bg-[#161519] border border-[#2b2925] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#8c857b]">Registered Collector:</span>
                  <span className="text-xs text-[#c5a880] font-semibold tracking-wider">TIER I · GOLD GUILD</span>
                </div>
                <div className="font-serif text-lg text-white">Alexander Vane, Esq.</div>
                <div className="text-xs text-[#a9a397]">{email}</div>
              </div>

              {/* Registered Timepieces */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold block">
                  Registered Timepiece Passport:
                </span>
                <div className="p-3 bg-[#131215] border border-[#262420] text-xs space-y-1">
                  <div className="flex justify-between text-white font-medium">
                    <span>Regency Chronograph 18k</span>
                    <span className="text-[#c5a880] font-mono">SN: CD-7750-0492</span>
                  </div>
                  <div className="text-[11px] text-[#7d776d] flex justify-between">
                    <span>Warranty: Valid through Dec 2028</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> COSC Certified
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs">
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    addToast('Logged Out', 'Signed out from Patron Portal');
                  }}
                  className="text-[#8c857b] hover:text-white underline"
                >
                  Sign Out
                </button>
                <button
                  onClick={() => setIsAccountOpen(false)}
                  className="px-6 py-2.5 bg-[#c5a880] text-black font-semibold text-xs uppercase tracking-wider"
                >
                  CONTINUE BROWSING
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSignIn} className="pt-6 space-y-4 text-xs">
              <div>
                <label className="block text-[#8c857b] mb-1">Patron Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-[#161519] border border-[#2d2b26] p-2.5 text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="block text-[#8c857b] mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-[#161519] border border-[#2d2b26] p-2.5 text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#c5a880] hover:bg-[#d8be98] text-black uppercase font-bold tracking-widest text-xs transition-colors"
              >
                SIGN IN TO ACCOUNT
              </button>
            </form>
          )
        ) : (
          <div className="pt-6 space-y-4 text-xs text-[#a9a397]">
            <div className="flex gap-3 items-start">
              <Shield className="w-5 h-5 text-[#c5a880] shrink-0" />
              <div>
                <strong className="text-white block font-medium">Bespoke Concierge Service</strong>
                Direct WhatsApp and telephone access to our senior Geneva horology specialists.
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Award className="w-5 h-5 text-[#c5a880] shrink-0" />
              <div>
                <strong className="text-white block font-medium">Complimentary Overhaul Service</strong>
                Every 3 years, receive full mechanical disassembly, ultrasound cleaning, and oiling.
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Crown className="w-5 h-5 text-[#c5a880] shrink-0" />
              <div>
                <strong className="text-white block font-medium">Pre-Release Allocation</strong>
                Exclusive 48-hour access before public global releases of limited-series calibres.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
