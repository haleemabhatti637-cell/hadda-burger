import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';
import { Flame, Plus, Sparkles, SlidersHorizontal, Check } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem, onQuickAdd }) => {
  const [activeTab, setActiveTab] = useState<'burgers' | 'sides' | 'beverages' | 'desserts'>('burgers');
  const [addedItemIds, setAddedItemIds] = useState<{ [key: string]: boolean }>({});

  const categories = [
    { id: 'burgers', label: 'Smash Burgers', icon: '🍔', count: MENU_ITEMS.filter(i => i.category === 'burgers').length },
    { id: 'sides', label: 'Sides & Loaded Fries', icon: '🍟', count: MENU_ITEMS.filter(i => i.category === 'sides').length },
    { id: 'beverages', label: 'Beverages & Shakes', icon: '🥤', count: MENU_ITEMS.filter(i => i.category === 'beverages').length },
    { id: 'desserts', label: 'Desserts', icon: '🍪', count: MENU_ITEMS.filter(i => i.category === 'desserts').length },
  ] as const;

  const currentItems = MENU_ITEMS.filter(item => item.category === activeTab);

  const handleQuickAddClick = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(item);
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#0F0F0F] relative">
      {/* Background accents */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Gourmet Craving</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight uppercase text-white">
            THE <span className="text-amber-400">HADDA</span> MENU
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Smashed to perfection with crisp lacy edges. Every burger, side, and hand-spun 
            shake is crafted with the highest quality fresh ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-[#18181B] border border-white/10 shadow-lg max-w-full overflow-x-auto">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md glow-orange'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-base">{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-black/30 text-white' : 'bg-stone-800 text-stone-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => {
            const isAdded = addedItemIds[item.id];

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group relative bg-[#151515] hover:bg-[#1A1A1A] border border-white/10 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl cursor-pointer"
              >
                {/* Top Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/30"></div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {item.badge && (
                      <span className="bg-amber-500 text-black text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        {item.badge}
                      </span>
                    )}
                    {item.spicyLevel && item.spicyLevel > 0 && (
                      <span className="bg-red-600/90 text-white text-[11px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <Flame className="w-3 h-3 fill-white" />
                        <span>{'🌶️'.repeat(item.spicyLevel)}</span>
                      </span>
                    )}
                  </div>

                  {/* Price Tag Pill */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 font-heading font-black text-base px-3 py-1 rounded-full shadow-lg">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-black uppercase text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-stone-300 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Ingredients Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.ingredients.slice(0, 4).map((ing, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-stone-900 border border-white/10 text-stone-300 px-2 py-0.5 rounded-md"
                      >
                        {ing}
                      </span>
                    ))}
                    {item.ingredients.length > 4 && (
                      <span className="text-[11px] text-stone-500 self-center">
                        +{item.ingredients.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectItem(item);
                      }}
                      className="text-xs font-bold text-stone-300 hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Customize</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleQuickAddClick(item, e)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner encouraging full order */}
        <div className="mt-16 bg-gradient-to-r from-stone-900 via-[#18181B] to-stone-900 border border-amber-500/20 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-white">
              CRAVING SOMETHING SPECIAL?
            </h3>
            <p className="text-stone-300 text-sm max-w-xl">
              All burgers can be customized with extra smash patties, halal-friendly options, 
              gluten-free bun substitutes, and extra secret Hadda Sauce.
            </p>
          </div>
          <a
            href="#location"
            className="px-6 py-3.5 rounded-full bg-white text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider hover:bg-amber-400 hover:text-black transition-colors whitespace-nowrap"
          >
            Visit Our Store Today
          </a>
        </div>

      </div>
    </section>
  );
};
