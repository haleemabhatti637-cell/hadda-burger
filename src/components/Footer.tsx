import React, { useState } from 'react';
import { HaddaLogo } from './HaddaLogo';
import { Instagram, MapPin, Phone, Clock, ArrowUp, Send, Check } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface FooterProps {
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExportModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-12 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <HaddaLogo size="lg" />
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Fresh, never-frozen 100% Angus smash burgers cooked with maximum crispy lacy edges, 
              house-made sauces, and artisanal buns in Temple Terrace, Florida.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_DATA.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-stone-900 hover:bg-amber-500 hover:text-black text-amber-400 border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram @haddaburgerus"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <span className="text-xs text-stone-300 font-semibold">
                Follow {RESTAURANT_DATA.instagramHandle}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-black text-white uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Featured Menu</a></li>
              <li><a href="#story" className="hover:text-amber-400 transition-colors">Our Story</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Location & Hours Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-black text-white uppercase text-sm tracking-wider">
              Temple Terrace Location
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{RESTAURANT_DATA.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${RESTAURANT_DATA.phone}`} className="hover:text-amber-400">
                  {RESTAURANT_DATA.displayPhone}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Opening Hours:</span>
                  <span className="text-stone-400">Sun - Thu: 11am - 10pm</span><br />
                  <span className="text-stone-400">Fri - Sat: 11am - 11pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Club / Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-black text-white uppercase text-sm tracking-wider">
              Join the Hadda VIP Club
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Get $5 off your first order plus secret drop alerts for new limited-edition smash burgers.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-stone-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center justify-center transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" />
                  <span>Welcome to the club! Check your inbox.</span>
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Hadda Burger LLC. All rights reserved. "Had to Be Better."</p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenExportModal}
              className="text-stone-400 hover:text-amber-400 underline transition-colors"
            >
              Get Standalone HTML File
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-amber-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
