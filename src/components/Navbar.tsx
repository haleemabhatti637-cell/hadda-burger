import React, { useState, useEffect } from 'react';
import { HaddaLogo } from './HaddaLogo';
import { Menu, X, ShoppingBag, Phone, MapPin, Instagram } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenOrder: () => void;
  onOpenExportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenOrder, onOpenExportModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0F0F0F]/90 via-[#0F0F0F]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center">
          <HaddaLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold tracking-wider uppercase text-stone-300 hover:text-amber-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Standalone Code badge + Order Online Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenExportModal}
            className="text-xs text-stone-400 hover:text-amber-400 transition-colors border border-white/10 hover:border-amber-400/40 rounded-full px-3 py-1.5 font-medium"
            title="View or copy standalone single-file HTML code"
          >
            Standalone Code
          </button>

          <button
            onClick={onOpenOrder}
            className="relative flex items-center gap-2 bg-transparent hover:bg-amber-500/10 border-2 border-white/80 hover:border-amber-400 text-white hover:text-amber-300 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>Order Online</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0F0F0F] animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu & Cart Icon */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenOrder}
            className="relative p-2 rounded-full bg-stone-900 border border-white/10 text-amber-400"
            aria-label="View Order"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-300 hover:text-white bg-stone-900/80 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F0F]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-bold uppercase tracking-wider text-stone-200 hover:text-amber-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full text-center tracking-wider uppercase text-sm shadow-lg glow-orange flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Online ({cartCount})</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenExportModal();
                }}
                className="w-full py-2.5 bg-stone-900 border border-stone-700 text-stone-300 rounded-full text-xs font-semibold"
              >
                View Standalone Single HTML Code
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Temple Terrace, FL</span>
              </div>
              <a
                href={RESTAURANT_DATA.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-amber-400 hover:underline"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{RESTAURANT_DATA.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
