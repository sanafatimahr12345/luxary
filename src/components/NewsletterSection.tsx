import React, { useState } from 'react';
import { Mail, CheckCircle2, Crown } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { addToast } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid luxury patron email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setErrorMessage('');
      addToast('Welcome to CROWN & DIAL', 'Your bespoke welcome privilege code is AUTUMN10');
    }, 800);
  };

  return (
    <section className="w-full bg-[#0a0a0b] py-20 sm:py-28 border-b border-[#242220] relative overflow-hidden">
      
      {/* Decorative Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c5a880]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Crown Emblem */}
        <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
          <Crown className="w-5 h-5 stroke-[1.5]" />
        </div>

        {/* Heading */}
        <span className="text-[11px] uppercase tracking-[0.28em] text-[#c5a880] font-semibold block mb-2">
          PRIVATE ATELIER INVITATIONS
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-tight mb-4">
          JOIN THE CROWN &amp; DIAL WORLD
        </h2>

        {/* Description */}
        <p className="text-[#bfb8ac] text-sm sm:text-base font-light max-w-lg mx-auto mb-8 leading-relaxed">
          Discover new collections, exclusive releases and timeless inspiration.
        </p>

        {/* Form */}
        {status === 'success' ? (
          <div className="bg-[#141416] border border-[#c5a880]/50 p-6 rounded-none max-w-md mx-auto space-y-2 animate-fadeIn">
            <div className="flex items-center justify-center gap-2 text-[#c5a880] text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5" />
              <span>Welcome to the Inner Circle</span>
            </div>
            <p className="text-xs text-[#a39c90] font-light">
              We have dispatched your complimentary digital journal and private invitation code to <span className="text-white font-medium">{email}</span>.
            </p>
            <p className="text-[11px] text-[#c5a880] font-mono tracking-wider pt-2">
              Use code <span className="font-bold underline">AUTUMN10</span> at checkout for 10% privilege.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 border border-[#383530] focus-within:border-[#c5a880] transition-colors bg-[#111113]">
              <div className="relative flex-1 flex items-center">
                <Mail className="w-4 h-4 text-[#736c61] absolute left-4 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-sm text-white placeholder-[#736c61] pl-11 pr-4 py-3.5 focus:outline-none"
                  disabled={status === 'loading'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3.5 bg-[#c5a880] hover:bg-[#d8be98] text-[#0d0c0a] text-xs uppercase tracking-[0.2em] font-bold transition-colors whitespace-nowrap focus:outline-none disabled:opacity-50"
              >
                {status === 'loading' ? 'JOINING...' : 'SUBSCRIBE'}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-xs text-rose-400 mt-2 text-left">{errorMessage}</p>
            )}

            <p className="text-[11px] text-[#6b665d] mt-3">
              We respect your discretion. Unsubscribe at any time with a single click.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
