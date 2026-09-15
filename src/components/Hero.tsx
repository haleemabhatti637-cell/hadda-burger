import React from 'react';
import { MapPin, Clock, ArrowRight, Utensils, Star, Flame, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface HeroProps {
  onOpenOrder: () => void;
  onViewMenu: () => void;
  onViewReviews: () => void;
  onViewLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenOrder,
  onViewMenu,
  onViewReviews,
  onViewLocation
}) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0F0F0F]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[480px] h-[480px] bg-orange-600/15 rounded-full blur-[110px] pointer-events-none -z-10"></div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-36 bg-gradient-to-t from-amber-500/5 to-transparent pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & CTAs & Key Info Bar */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Tagline / Sub-badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/80 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Temple Terrace, FL • Gourmet Smash Burgers</span>
            </div>

            {/* Huge Headline: HADDA in amber, BURGER. in white with gold dot */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tight uppercase leading-[0.95] text-white">
                <span className="text-[#E5A93C] block">HADDA</span>
                <span className="text-white inline-block">
                  BURGER<span className="text-[#E5A93C]">.</span>
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-200 tracking-tight pt-2">
                Had to Be Better.
              </p>
            </div>

            {/* Descriptive Body */}
            <p className="text-base sm:text-lg text-stone-300 max-w-xl font-normal leading-relaxed">
              Certified Angus Beef smashed ultra-thin onto searing 500° griddles for 
              insanely crispy lacy edges, melted Wisconsin cheddar, and house-made signature 
              Hadda Sauce on toasted golden brioche.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-view-menu-btn"
                onClick={onViewMenu}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-extrabold uppercase text-sm sm:text-base tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(249,115,22,0.45)] flex items-center gap-2 cursor-pointer"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-order-now-btn"
                onClick={onOpenOrder}
                className="px-8 py-4 rounded-full bg-stone-900/60 hover:bg-stone-800 text-white font-extrabold uppercase text-sm sm:text-base tracking-wider border border-white/40 hover:border-amber-400 hover:text-amber-300 active:scale-95 transition-all cursor-pointer"
              >
                Order Now
              </button>
            </div>

            {/* Key Information Bar Floating Pill (matching bottom-left of screenshot) */}
            <div className="pt-4 sm:pt-6">
              <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-[#161616]/90 border border-white/10 rounded-2xl px-5 py-3.5 shadow-xl backdrop-blur-md">
                {/* Location */}
                <button
                  onClick={onViewLocation}
                  className="flex items-center gap-2.5 text-left group"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className="block text-stone-300 group-hover:text-white font-medium transition-colors">
                      {RESTAURANT_DATA.address},
                    </span>
                    <span className="block text-stone-400 text-[11px] sm:text-xs">
                      {RESTAURANT_DATA.city}, {RESTAURANT_DATA.state} {RESTAURANT_DATA.zip}
                    </span>
                  </div>
                </button>

                {/* Divider on desktop */}
                <div className="hidden sm:block w-px h-8 bg-white/10"></div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-emerald-400 font-extrabold text-xs tracking-wider uppercase">
                        OPEN Today
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-400">
                      Until {RESTAURANT_DATA.closesAt}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Burger Image + Glowing Ambient + 3 Circular Action Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* The dramatic warm glow backdrop behind burger */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Radial backlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/25 via-orange-500/25 to-transparent rounded-full filter blur-2xl transform scale-90"></div>

              {/* Burger image presentation on dark slate */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop"
                  alt="Hadda Gourmet Double Smash Burger with Melted Cheese and Bacon on Brioche"
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500 rounded-3xl"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Flavor Badge */}
                <div className="absolute top-4 right-2 bg-gradient-to-r from-stone-900 to-black/90 border border-amber-500/40 rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-2xl backdrop-blur-md">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
                    Crispy Lacy Edges
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Circular Quick-Action Rings underneath Burger (matching screenshot) */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-6 pt-2 w-full max-w-sm">
              
              {/* 1. HOURS */}
              <button
                onClick={onViewLocation}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#161616] border-2 border-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
                  <Clock className="w-6 h-6 text-orange-400 group-hover:text-amber-300" />
                </div>
                <span className="text-xs font-black tracking-widest text-stone-300 uppercase mt-2.5 group-hover:text-amber-400 transition-colors">
                  HOURS
                </span>
              </button>

              {/* 2. MENU */}
              <button
                onClick={onViewMenu}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#161616] border-2 border-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
                  <Utensils className="w-6 h-6 text-orange-400 group-hover:text-amber-300" />
                </div>
                <span className="text-xs font-black tracking-widest text-stone-300 uppercase mt-2.5 group-hover:text-amber-400 transition-colors">
                  MENU
                </span>
              </button>

              {/* 3. REVIEWS */}
              <button
                onClick={onViewReviews}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#161616] border-2 border-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
                  <Star className="w-6 h-6 text-orange-400 group-hover:text-amber-300 fill-orange-400/30" />
                </div>
                <span className="text-xs font-black tracking-widest text-stone-300 uppercase mt-2.5 group-hover:text-amber-400 transition-colors">
                  REVIEWS
                </span>
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
