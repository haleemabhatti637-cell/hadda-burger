import React, { useState } from 'react';
import { CartItem } from '../types';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'cash'>('applepay');
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.itemTotal, 0);
  const salesTax = subtotal * 0.075; // 7.5% Florida Sales Tax
  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? 3.99 : 0;
  const tipAmount = subtotal > 0 ? (subtotal * tipPercentage) / 100 : 0;
  const grandTotal = subtotal + salesTax + deliveryFee + tipAmount;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const mockOrderNum = `HB-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(mockOrderNum);
    setOrderPlaced(true);
  };

  const handleReset = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#161616] border border-white/10 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#1C1C1F] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black uppercase text-white text-lg tracking-wide">
                HADDA ONLINE ORDER
              </h3>
              <p className="text-[11px] text-stone-400">
                Temple Terrace, FL • Hot & Fresh Guaranteed
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {orderPlaced ? (
          /* Confirmation Success Screen */
          <div className="p-8 text-center space-y-6 overflow-y-auto flex-1">
            <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Order Confirmed!
              </span>
              <h2 className="text-3xl font-heading font-black text-white uppercase">
                WE'RE SMASHING YOUR BURGER!
              </h2>
              <p className="text-stone-300 text-sm max-w-md mx-auto">
                Thank you, <strong className="text-white">{customerName || 'Friend'}</strong>! Your order{' '}
                <span className="text-amber-400 font-mono font-bold">{orderNumber}</span> has been fired to the griddle.
              </p>
            </div>

            {/* Estimated time box */}
            <div className="bg-stone-900 border border-white/10 rounded-2xl p-5 max-w-sm mx-auto space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-400">Type:</span>
                <span className="font-bold text-white uppercase">{orderType}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-400">Estimated Ready Time:</span>
                <span className="font-bold text-emerald-400">
                  {orderType === 'pickup' ? '15 - 20 Minutes' : '30 - 45 Minutes'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
                <span className="text-stone-400">Pickup Location:</span>
                <span className="text-right text-stone-300 font-medium">8932 Bertha Palmer Blvd</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold uppercase text-sm tracking-wider shadow-lg glow-orange"
            >
              Done & Return to Site
            </button>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Cart State */
          <div className="p-10 text-center space-y-4 flex-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-stone-900 border border-white/10 flex items-center justify-center text-stone-500">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-heading font-black text-white uppercase">
              YOUR CART IS EMPTY
            </h4>
            <p className="text-stone-400 text-xs sm:text-sm max-w-xs">
              Explore our menu and choose from our signature crispy smash burgers, loaded fries, and hand-spun shakes!
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition-colors"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          /* Active Cart Form */
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {/* Pickup vs Delivery Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-stone-900 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 ${
                  orderType === 'pickup'
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Store Pickup (15-20m)</span>
              </button>
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 ${
                  orderType === 'delivery'
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Direct Delivery (35m)</span>
              </button>
            </div>

            {/* Cart Items List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-400">
                <span>Selected Items ({cart.length})</span>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-stone-500 hover:text-red-400 flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              </div>

              {cart.map((cartItem) => (
                <div
                  key={cartItem.cartId}
                  className="p-3.5 rounded-2xl bg-stone-900/80 border border-white/5 flex items-center justify-between gap-3"
                >
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-heading font-black text-white text-sm uppercase truncate">
                      {cartItem.item.name}
                    </h5>
                    <div className="text-[11px] text-stone-400 truncate">
                      {cartItem.patties && <span className="text-amber-400">{cartItem.patties} • </span>}
                      {cartItem.addCheese && 'Extra Cheese, '}
                      {cartItem.addBacon && 'Bacon, '}
                      {cartItem.addCaramelizedOnions && 'Onions, '}
                      {cartItem.extraSauce && 'Extra Sauce'}
                    </div>
                    {cartItem.notes && (
                      <p className="text-[10px] text-stone-500 italic truncate">
                        "{cartItem.notes}"
                      </p>
                    )}
                    <span className="text-xs font-bold text-amber-400 mt-0.5 block">
                      ${cartItem.itemTotal.toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity Counter */}
                  <div className="flex items-center gap-1.5 bg-black/50 border border-white/10 rounded-full px-2 py-1">
                    <button
                      onClick={() => onUpdateQuantity(cartItem.cartId, -1)}
                      className="p-1 text-stone-400 hover:text-white"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-white px-1">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(cartItem.cartId, 1)}
                      className="p-1 text-stone-400 hover:text-white"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(cartItem.cartId)}
                    className="p-1 text-stone-500 hover:text-red-400"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Customer Details Form */}
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4 pt-2">
              <h5 className="text-xs font-black uppercase tracking-wider text-stone-400">
                Contact & Order Information
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-stone-400 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Alex Miller"
                    className="w-full bg-stone-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-stone-400 block mb-1">Phone Number (for SMS pickup alert)</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="(813) 555-0199"
                    className="w-full bg-stone-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label className="text-[11px] text-stone-400 block mb-1">Temple Terrace Delivery Address</label>
                  <input
                    type="text"
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Street address, Apt/Suite #, Gate Code"
                    className="w-full bg-stone-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}

              {/* Tip Selection */}
              <div>
                <label className="text-[11px] text-stone-400 block mb-1">Tip the Grill Crew</label>
                <div className="grid grid-cols-4 gap-2">
                  {[10, 15, 20, 25].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setTipPercentage(pct)}
                      className={`py-1.5 rounded-lg text-xs font-bold border transition-all ${
                        tipPercentage === pct
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'border-white/10 bg-stone-900 text-stone-400'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="text-[11px] text-stone-400 block mb-1">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all ${
                      paymentMethod === 'applepay'
                        ? 'border-white bg-white text-black'
                        : 'border-white/10 bg-stone-900 text-stone-300'
                    }`}
                  >
                    Apple Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all ${
                      paymentMethod === 'card'
                        ? 'border-amber-400 bg-amber-400/20 text-amber-300'
                        : 'border-white/10 bg-stone-900 text-stone-300'
                    }`}
                  >
                    Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all ${
                      paymentMethod === 'cash'
                        ? 'border-amber-400 bg-amber-400/20 text-amber-300'
                        : 'border-white/10 bg-stone-900 text-stone-300'
                    }`}
                  >
                    Pay at Pickup
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="bg-stone-900/90 rounded-2xl p-4 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-stone-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Estimated Sales Tax (7.5%)</span>
                  <span>${salesTax.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-stone-400">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-400">
                  <span>Crew Tip ({tipPercentage}%)</span>
                  <span>${tipAmount.toFixed(2)}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-base font-heading font-black text-white">
                  <span>Total Amount</span>
                  <span className="text-amber-400">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:brightness-110 text-white font-extrabold uppercase text-sm tracking-wider shadow-lg glow-orange flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Place Order (${grandTotal.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
