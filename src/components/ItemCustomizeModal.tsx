import React, { useState } from 'react';
import { MenuItem, CartItem } from '../types';
import { X, Plus, Minus, Flame, Sparkles, Check } from 'lucide-react';

interface ItemCustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ItemCustomizeModal: React.FC<ItemCustomizeModalProps> = ({
  item,
  onClose,
  onAddToCart
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [pattyOption, setPattyOption] = useState<'Single' | 'Double' | 'Triple'>('Double');
  const [addCheese, setAddCheese] = useState(false);
  const [addBacon, setAddBacon] = useState(false);
  const [addCaramelizedOnions, setAddCaramelizedOnions] = useState(false);
  const [extraSauce, setExtraSauce] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const isBurger = item.category === 'burgers';

  // Base price adjustment based on patty size
  let adjustedBasePrice = item.price;
  if (isBurger) {
    if (pattyOption === 'Single') adjustedBasePrice -= 2.00;
    if (pattyOption === 'Triple') adjustedBasePrice += 3.50;
  }

  let addOnPrice = 0;
  if (addCheese) addOnPrice += 1.25;
  if (addBacon) addOnPrice += 2.00;
  if (addCaramelizedOnions) addOnPrice += 0.75;
  if (extraSauce) addOnPrice += 0.85;

  const totalItemPrice = (adjustedBasePrice + addOnPrice) * quantity;

  const handleConfirm = () => {
    const newCartItem: CartItem = {
      cartId: `${item.id}-${Date.now()}`,
      item,
      quantity,
      patties: isBurger ? pattyOption : undefined,
      addCheese,
      addBacon,
      addCaramelizedOnions,
      extraSauce,
      notes: specialInstructions.trim() || undefined,
      itemTotal: totalItemPrice
    };

    onAddToCart(newCartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#161616] border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-48 sm:h-56 w-full flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/40"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-5 right-5">
            <h3 className="text-2xl font-heading font-black uppercase text-white">
              {item.name}
            </h3>
            <p className="text-amber-400 font-bold text-sm">
              Base: ${item.price.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Scrollable Customization Options */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1 text-stone-300">
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {item.description}
          </p>

          {/* Burger Patty Selection */}
          {isBurger && (
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-stone-300">
                Smash Patty Selection
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Single Patty', val: 'Single' as const, diff: '-$2.00' },
                  { label: 'Double (Standard)', val: 'Double' as const, diff: 'Included' },
                  { label: 'Triple Beast', val: 'Triple' as const, diff: '+$3.50' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setPattyOption(opt.val)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                      pattyOption === opt.val
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-white/10 bg-stone-900/60 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div>{opt.label}</div>
                    <div className="text-[10px] text-amber-400 font-normal mt-0.5">{opt.diff}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-ons Checklist */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-stone-300">
              Customize & Extra Goodies
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-stone-900/70 border border-white/5 hover:border-white/15 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addCheese}
                    onChange={(e) => setAddCheese(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 rounded"
                  />
                  <span className="text-sm font-medium text-stone-200">Extra Melted American Cheese</span>
                </div>
                <span className="text-xs font-bold text-amber-400">+$1.25</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-stone-900/70 border border-white/5 hover:border-white/15 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addBacon}
                    onChange={(e) => setAddBacon(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 rounded"
                  />
                  <span className="text-sm font-medium text-stone-200">Applewood Smoked Bacon</span>
                </div>
                <span className="text-xs font-bold text-amber-400">+$2.00</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-stone-900/70 border border-white/5 hover:border-white/15 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addCaramelizedOnions}
                    onChange={(e) => setAddCaramelizedOnions(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 rounded"
                  />
                  <span className="text-sm font-medium text-stone-200">Extra Grilled Caramelized Onions</span>
                </div>
                <span className="text-xs font-bold text-amber-400">+$0.75</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-stone-900/70 border border-white/5 hover:border-white/15 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={extraSauce}
                    onChange={(e) => setExtraSauce(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 rounded"
                  />
                  <span className="text-sm font-medium text-stone-200">Side of Secret Hadda Sauce</span>
                </div>
                <span className="text-xs font-bold text-amber-400">+$0.85</span>
              </label>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-stone-300">
              Special Requests (Allergies, no pickles, etc.)
            </label>
            <textarea
              rows={2}
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Extra crispy fries, sauce on the side, no onions..."
              className="w-full bg-stone-900 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 resize-none"
            />
          </div>
        </div>

        {/* Footer with Quantity & Add Button */}
        <div className="p-4 sm:p-5 bg-[#121212] border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center bg-stone-900 border border-white/10 rounded-full px-3 py-1.5">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 hover:text-amber-400 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 font-bold text-sm text-white">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 hover:text-amber-400 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleConfirm}
            className="flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg glow-orange flex items-center justify-center gap-2"
          >
            <span>Add to Order</span>
            <span>•</span>
            <span>${totalItemPrice.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
