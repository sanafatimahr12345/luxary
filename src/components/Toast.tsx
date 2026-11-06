import React from 'react';
import { Check, X, Crown } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Toast: React.FC = () => {
  const { toasts, removeToast } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#141316] border border-[#c5a880]/60 text-white p-4 shadow-2xl flex items-start gap-3 animate-slideInRight"
        >
          <div className="w-6 h-6 rounded-full bg-[#1f1d19] border border-[#c5a880] flex items-center justify-center text-[#c5a880] shrink-0 mt-0.5">
            <Check className="w-3.5 h-3.5" />
          </div>

          <div className="flex-1 space-y-0.5">
            <div className="text-xs font-semibold text-white tracking-wide">
              {toast.text}
            </div>
            {toast.subtext && (
              <div className="text-[11px] text-[#a9a295]">
                {toast.subtext}
              </div>
            )}
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#787165] hover:text-white transition-colors p-0.5"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
