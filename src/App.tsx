/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsBar } from './components/HighlightsBar';
import { MenuSection } from './components/MenuSection';
import { OurStorySection } from './components/OurStorySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ItemCustomizeModal } from './components/ItemCustomizeModal';
import { OrderModal } from './components/OrderModal';
import { StandaloneExportModal } from './components/StandaloneExportModal';
import { Toast } from './components/Toast';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Quick Add handler (adds default item without customization modal)
  const handleQuickAdd = (item: MenuItem) => {
    const newCartItem: CartItem = {
      cartId: `${item.id}-${Date.now()}`,
      item,
      quantity: 1,
      itemTotal: item.price
    };

    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id && !i.patties && !i.addCheese && !i.addBacon && !i.notes);
      if (existing) {
        return prev.map(i =>
          i.cartId === existing.cartId
            ? { ...i, quantity: i.quantity + 1, itemTotal: (i.quantity + 1) * i.item.price }
            : i
        );
      }
      return [...prev, newCartItem];
    });

    setToastMessage(`Added 1x ${item.name} to order!`);
  };

  // Add customized item from ItemCustomizeModal
  const handleAddCustomizedItem = (cartItem: CartItem) => {
    setCart(prev => [...prev, cartItem]);
    setToastMessage(`Added ${cartItem.quantity}x ${cartItem.item.name} to order!`);
  };

  // Cart quantity adjusters
  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            const singleUnitPrice = item.itemTotal / item.quantity;
            return {
              ...item,
              quantity: newQty,
              itemTotal: singleUnitPrice * newQty
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCart(prev => prev.filter(i => i.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Scroll helpers
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F8FAFC] flex flex-col selection:bg-[#F97316] selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenOrder={() => setIsOrderModalOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section matching reference screenshot */}
        <Hero
          onOpenOrder={() => setIsOrderModalOpen(true)}
          onViewMenu={() => scrollToSection('menu')}
          onViewReviews={() => scrollToSection('reviews')}
          onViewLocation={() => scrollToSection('location')}
        />

        {/* Brand Highlights & Guarantees Ticker */}
        <HighlightsBar />

        {/* Featured Tabbed Menu Section */}
        <MenuSection
          onSelectItem={(item) => setSelectedItemForModal(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* Brand Story "Had to Be Better" */}
        <OurStorySection />

        {/* Customer Reviews & 4.9★ Ratings */}
        <ReviewsSection />

        {/* Location with embedded Google Map & Contact */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenExportModal={() => setIsExportModalOpen(true)} />

      {/* Item Customization Modal */}
      <ItemCustomizeModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
        onAddToCart={handleAddCustomizedItem}
      />

      {/* Full Online Ordering Drawer / Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Standalone Single HTML Code Modal */}
      <StandaloneExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

      {/* Interactive Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
        onOpenOrder={() => {
          setToastMessage(null);
          setIsOrderModalOpen(true);
        }}
      />
    </div>
  );
}

