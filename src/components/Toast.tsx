import React from 'react';
import { Check, ShoppingBag, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
  onOpenOrder: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, onOpenOrder }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300 max-w-sm">
      <div className="bg-[#1C1C1F] border border-amber-500/50 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-xl">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
          <Check className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0 text-xs sm:text-sm">
          <p className="font-bold text-white truncate">{message}</p>
          <button
            onClick={onOpenOrder}
            className="text-amber-400 hover:text-amber-300 text-xs font-bold underline mt-0.5 inline-flex items-center gap-1"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>View Order / Checkout</span>
          </button>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-stone-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
