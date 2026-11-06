/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { PromoBannersSection } from './components/PromoBannersSection';
import { FeaturedWatchesSection } from './components/FeaturedWatchesSection';
import { AutumnPromoSection } from './components/AutumnPromoSection';
import { HeritageStorySection } from './components/HeritageStorySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramGallery } from './components/InstagramGallery';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { StoryModal } from './components/StoryModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';
import { ProductDetailPage } from './components/ProductDetailPage';

const MainStoreContent: React.FC = () => {
  const { detailProduct, setDetailProduct } = useStore();

  return (
    <div className="min-h-screen bg-[#0c0c0d] text-[#e8e4dc] flex flex-col font-sans selection:bg-[#c5a880] selection:text-black">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Luxury Navigation Bar */}
      <Navbar />

      {/* Conditional View: Dedicated Product Detail Page or Main Storefront */}
      {detailProduct ? (
        <main className="flex-1">
          <ProductDetailPage
            product={detailProduct}
            onBack={() => {
              setDetailProduct(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      ) : (
        <main className="flex-1">
          {/* 3. Hero Section */}
          <HeroSection />

          {/* 4. Shop By Category (Ivory with Circular Images) */}
          <CategorySection />

          {/* 5. Promotional Collection Banners (Side-by-side) */}
          <PromoBannersSection />

          {/* 6. Featured Watches Showcase (6 Products, Tabs, Ratings, Quick View) */}
          <FeaturedWatchesSection />

          {/* 7. Autumn Promotional Section (Split Banner) */}
          <AutumnPromoSection />

          {/* 8. Additional Sections: Brand Heritage & Craftsmanship */}
          <HeritageStorySection />

          {/* 9. Customer Testimonials & Press Accolades */}
          <TestimonialsSection />

          {/* 10. Instagram Gallery & Horology Journal */}
          <InstagramGallery />

          {/* 11. Newsletter Subscription */}
          <NewsletterSection />
        </main>
      )}

      {/* 12. Premium Footer */}
      <Footer />

      {/* Global Interactive Modals & Drawers */}
      <QuickViewModal />
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <AccountModal />
      <StoryModal />
      <CheckoutModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainStoreContent />
    </StoreProvider>
  );
}
