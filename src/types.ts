export type CurrencyCode = 'GBP' | 'USD' | 'EUR' | 'CHF';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number; // relative to GBP
}

export interface WatchProduct {
  id: string;
  name: string;
  subtitle: string;
  category: 'Men' | 'Women' | 'Chronograph' | 'Automatic' | 'Dress' | 'Diver' | 'Accessories';
  price: number; // base price in GBP
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  tag?: 'Best Seller' | 'New In' | 'Special Price' | 'Limited Edition';
  colors: {
    name: string;
    hex: string;
    image?: string;
  }[];
  description: string;
  specs: {
    movement: string;
    powerReserve: string;
    caseDiameter: string;
    caseMaterial: string;
    crystal: string;
    waterResistance: string;
    strap: string;
    warranty: string;
  };
  inStock: boolean;
}

export interface CartItem {
  product: WatchProduct;
  selectedColor: string;
  quantity: number;
}

export type FilterTab = 'all' | 'best-sellers' | 'new-in' | 'special-price';
