import React, { createContext, useContext, useState, useEffect } from 'react';
import { WatchProduct, CartItem, CurrencyCode, FilterTab } from '../types';
import { WATCH_PRODUCTS, CURRENCIES } from '../data/products';

interface ToastMessage {
  id: string;
  text: string;
  subtext?: string;
  type?: 'success' | 'info';
}

interface StoreContextType {
  products: WatchProduct[];
  cart: CartItem[];
  wishlist: string[];
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  formatPrice: (amountGBP: number) => string;
  
  // Navigation & Modals
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isStoryModalOpen: boolean;
  setIsStoryModalOpen: (open: boolean) => void;
  
  // Product Detail / Quick View
  quickViewProduct: WatchProduct | null;
  setQuickViewProduct: (p: WatchProduct | null) => void;
  detailProduct: WatchProduct | null;
  setDetailProduct: (p: WatchProduct | null) => void;
  
  // Filtering & Catalog
  activeTab: FilterTab;
  setActiveTab: (tab: FilterTab) => void;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;

  // Actions
  addToCart: (product: WatchProduct, color?: string, qty?: number) => void;
  removeFromCart: (productId: string, color: string) => void;
  updateQuantity: (productId: string, color: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  // Promo code & Totals
  promoCode: string;
  discountPercent: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  cartSubtotal: number;
  cartTotal: number;
  cartCount: number;

  // Toasts
  toasts: ToastMessage[];
  addToast: (text: string, subtext?: string) => void;
  removeToast: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<WatchProduct[]>(WATCH_PRODUCTS);
  const [currency, setCurrency] = useState<CurrencyCode>('GBP');
  
  // Load initial cart & wishlist from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('crown_dial_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('crown_dial_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  
  const [quickViewProduct, setQuickViewProduct] = useState<WatchProduct | null>(null);
  const [detailProduct, setDetailProduct] = useState<WatchProduct | null>(null);

  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('crown_dial_cart', JSON.stringify(cart));
    } catch {
      // ignore storage errors
    }
  }, [cart]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('crown_dial_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const addToast = (text: string, subtext?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, text, subtext, type: 'success' }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const formatPrice = (amountGBP: number): string => {
    const cur = CURRENCIES[currency];
    const converted = amountGBP * cur.rate;
    return `${cur.symbol}${converted.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const addToCart = (product: WatchProduct, color?: string, qty = 1) => {
    const chosenColor = color || product.colors[0]?.name || 'Standard';
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedColor === chosenColor
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + qty
        };
        return next;
      }
      return [...prev, { product, selectedColor: chosenColor, quantity: qty }];
    });
    addToast(`${product.name}`, `Added to your Shopping Bag (${chosenColor})`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, color: string) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedColor === color)));
  };

  const updateQuantity = (productId: string, color: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.product.id === productId && item.selectedColor === color) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    const prod = products.find(p => p.id === productId);
    const prodName = prod ? prod.name : 'Timepiece';
    if (wishlist.includes(productId)) {
      setWishlist(prev => prev.filter(id => id !== productId));
      addToast(prodName, 'Removed from your Wishlist');
    } else {
      setWishlist(prev => [...prev, productId]);
      addToast(prodName, 'Saved to your Wishlist');
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  const applyPromoCode = (code: string) => {
    const upper = code.trim().toUpperCase();
    if (upper === 'AUTUMN10') {
      setPromoCode(upper);
      setDiscountPercent(10);
      addToast('Promo Code Applied', '10% Autumn discount granted');
      return { success: true, message: '10% discount applied to your order!' };
    }
    if (upper === 'CROWN20' || upper === 'SIGNATURE20') {
      setPromoCode(upper);
      setDiscountPercent(20);
      addToast('Promo Code Applied', '20% VIP Privilege discount granted');
      return { success: true, message: '20% VIP privilege applied!' };
    }
    return { success: false, message: 'Invalid code. Try AUTUMN10 or CROWN20' };
  };

  const removePromoCode = () => {
    setPromoCode('');
    setDiscountPercent(0);
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartTotal = cartSubtotal * (1 - discountPercent / 100);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        wishlist,
        currency,
        setCurrency,
        formatPrice,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isAccountOpen,
        setIsAccountOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isStoryModalOpen,
        setIsStoryModalOpen,
        quickViewProduct,
        setQuickViewProduct,
        detailProduct,
        setDetailProduct,
        activeTab,
        setActiveTab,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        promoCode,
        discountPercent,
        applyPromoCode,
        removePromoCode,
        cartSubtotal,
        cartTotal,
        cartCount,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
};
