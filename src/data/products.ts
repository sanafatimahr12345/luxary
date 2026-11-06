import { WatchProduct } from '../types';
import { IMAGES } from '../assets/images';

export const WATCH_PRODUCTS: WatchProduct[] = [
  {
    id: 'regency-chronograph',
    name: 'Regency Chronograph',
    subtitle: 'Triple-Register Column Wheel Chronograph',
    category: 'Chronograph',
    price: 1250,
    originalPrice: 1450,
    rating: 4.9,
    reviewCount: 68,
    image: IMAGES.regencyChrono,
    gallery: [
      IMAGES.regencyChrono,
      IMAGES.bannerAutumnEdit,
      IMAGES.bannerNewArrivals
    ],
    tag: 'Best Seller',
    colors: [
      { name: 'Champagne & Brown', hex: '#D4AF37', image: IMAGES.regencyChrono },
      { name: 'Sunburst Navy', hex: '#1C2E4A', image: IMAGES.bannerAutumnEdit },
      { name: 'Emerald Slate', hex: '#1C3A27', image: IMAGES.bannerAutumnRefinement }
    ],
    description: 'An homage to grand tour racing horology. The Regency Chronograph unites a hand-finished column-wheel movement with a deep textured matte black dial and contrasting golden subdials. Encased in satin-brushed 316L stainless steel with 18k yellow gold ion plating.',
    specs: {
      movement: 'Calibre CD-7750 Automatic High-Beat (28,800 vph)',
      powerReserve: '54 Hours',
      caseDiameter: '41.5mm',
      caseMaterial: '316L Stainless Steel with 18k Champagne Gold PVD',
      crystal: 'Double-Domed Sapphire with 5x Anti-Reflective Coating',
      waterResistance: '100m / 10 ATM',
      strap: 'Hand-stitched Italian Alligator Embossed Calfskin',
      warranty: '2-Year International Transferable Warranty'
    },
    inStock: true
  },
  {
    id: 'solaria-automatic',
    name: 'Solaria Automatic',
    subtitle: 'Exhibition Caseback Sunburst Dress Watch',
    category: 'Automatic',
    price: 1180,
    rating: 4.8,
    reviewCount: 42,
    image: IMAGES.solariaAuto,
    gallery: [
      IMAGES.solariaAuto,
      IMAGES.bannerNewArrivals,
      IMAGES.bannerSignature
    ],
    tag: 'New In',
    colors: [
      { name: 'Warm Champagne Rose', hex: '#E6C794', image: IMAGES.solariaAuto },
      { name: 'Pure Ivory Steel', hex: '#EAE6DF', image: IMAGES.heritageClassic }
    ],
    description: 'Basking in the golden hour of classic Geneva watchmaking, Solaria captivates with a circular-brushed champagne sunburst dial, applied rose gold numerals, and a sapphire exhibition caseback revealing the engraved Côtes de Genève rotor.',
    specs: {
      movement: 'Calibre CD-2824-2 Swiss-Regulated Automatic',
      powerReserve: '48 Hours',
      caseDiameter: '39.0mm',
      caseMaterial: 'Rose Gold PVD Polished Steel',
      crystal: 'Boxed Sapphire Crystal with AR undercoating',
      waterResistance: '50m / 5 ATM',
      strap: 'Cognac Tuscan Saddle Leather with Deployant Clasp',
      warranty: '2-Year International Transferable Warranty'
    },
    inStock: true
  },
  {
    id: 'heritage-classic',
    name: 'Heritage Classic',
    subtitle: 'Enamel Roman Dial Ultra-Slim Dress Timepiece',
    category: 'Dress',
    price: 950,
    originalPrice: 1050,
    rating: 4.9,
    reviewCount: 56,
    image: IMAGES.heritageClassic,
    gallery: [
      IMAGES.heritageClassic,
      IMAGES.bannerSignature,
      IMAGES.solariaAuto
    ],
    tag: 'Special Price',
    colors: [
      { name: 'Enamel Ivory & Blue', hex: '#F4EFE6', image: IMAGES.heritageClassic },
      { name: 'Onyx Midnight', hex: '#121212', image: IMAGES.apexDiver }
    ],
    description: 'An authentic masterclass in restrained elegance. Featuring fired porcelain-finish ivory enamel, heat-blued Breguet-style hands, and slender Roman numerals, the Heritage Classic slides effortlessly beneath any tailored shirt cuff.',
    specs: {
      movement: 'Calibre CD-Slim Manual Wind Mechanical (3.8mm thick)',
      powerReserve: '45 Hours',
      caseDiameter: '38.5mm (Ultra-slim 8.2mm profile)',
      caseMaterial: 'Mirror-Polished 316L Surgical Steel',
      crystal: 'Scratch-resistant Sapphire Crystal',
      waterResistance: '30m / 3 ATM',
      strap: 'Matte Black French Alligator Grain Calf Leather',
      warranty: '2-Year International Transferable Warranty'
    },
    inStock: true
  },
  {
    id: 'apex-diver',
    name: 'Apex Diver',
    subtitle: 'Ceramic Bezel 300M Professional Tool Watch',
    category: 'Diver',
    price: 1350,
    rating: 5.0,
    reviewCount: 79,
    image: IMAGES.apexDiver,
    gallery: [
      IMAGES.apexDiver,
      IMAGES.royalAuto,
      IMAGES.bannerNewArrivals
    ],
    tag: 'Best Seller',
    colors: [
      { name: 'Obsidian Black', hex: '#111111', image: IMAGES.apexDiver },
      { name: 'Nautical Navy', hex: '#172B4D', image: IMAGES.bannerAutumnEdit }
    ],
    description: 'Engineered for the depths yet sculpted for black-tie gala evenings. The Apex Diver boasts a 120-click scratch-proof ceramic bezel, Super-LumiNova BGW9 blue luminescence, a helium escape crown valve, and 300 meters of certified water resistance.',
    specs: {
      movement: 'Calibre CD-Diver Chronometer Grade (COSC Tested)',
      powerReserve: '70 Hours',
      caseDiameter: '42.0mm',
      caseMaterial: 'Brushed Marine-Grade 316L Stainless Steel',
      crystal: '3.5mm Thick Double-AR Sapphire Crystal',
      waterResistance: '300m / 30 ATM (Helium Valve Equipped)',
      strap: 'Solid Stainless Steel 3-Link Oyster with GlideLock Extension',
      warranty: '2-Year International Transferable Warranty'
    },
    inStock: true
  },
  {
    id: 'luna-petite',
    name: 'Luna Petite',
    subtitle: 'Mother-of-Pearl & Pavé Diamond Mesh Watch',
    category: 'Women',
    price: 890,
    rating: 4.9,
    reviewCount: 38,
    image: IMAGES.lunaPetite,
    gallery: [
      IMAGES.lunaPetite,
      IMAGES.solariaAuto
    ],
    tag: 'New In',
    colors: [
      { name: 'Yellow Gold & Pearl', hex: '#D4AF37', image: IMAGES.lunaPetite },
      { name: 'Rose Gold Shimmer', hex: '#D9A08B', image: IMAGES.lunaPetite }
    ],
    description: 'A poetic celebration of luminous elegance. Luna Petite features a genuine Tahitian natural mother-of-pearl dial framed by 48 handset brilliant-cut pavé diamonds on the bezel, completed with a fluid Milanese mesh bracelet.',
    specs: {
      movement: 'Swiss Precision Calibre CD-Quartz High Torque',
      powerReserve: '42-Month Battery Autonomy',
      caseDiameter: '32.0mm Delicate Silhouette',
      caseMaterial: '18k Champagne Yellow Gold Finished Steel',
      crystal: 'Anti-Scratch Sapphire Crystal with Cabochon Crown',
      waterResistance: '50m / 5 ATM',
      strap: 'Silky Milanese Gold Mesh with Safety Clasp',
      warranty: '2-Year International Transferable Warranty'
    },
    inStock: true
  },
  {
    id: 'royal-automatic',
    name: 'Royal Automatic',
    subtitle: 'Octagonal Bezel Grand Tapisserie Integrated Bracelet',
    category: 'Automatic',
    price: 1420,
    rating: 5.0,
    reviewCount: 94,
    image: IMAGES.royalAuto,
    gallery: [
      IMAGES.royalAuto,
      IMAGES.bannerNewArrivals,
      IMAGES.apexDiver
    ],
    tag: 'Best Seller',
    colors: [
      { name: 'Tapisserie Blue', hex: '#1E3A5F', image: IMAGES.royalAuto },
      { name: 'Silver Slate', hex: '#A8A9AD', image: IMAGES.royalAuto }
    ],
    description: 'An architectural icon of haute horlogerie. Hand-satin-finished octagonal bezel accented with 8 hexagonal polished white gold screws. The signature guilloché "Grand Tapisserie" patterned dial catches illumination from every angle.',
    specs: {
      movement: 'In-House Calibre CD-9000 Skeletonized Rotor Automatic',
      powerReserve: '60 Hours',
      caseDiameter: '41.0mm',
      caseMaterial: '316L Stainless Steel with Hand-Beveled Chamfers',
      crystal: 'Flat Sapphire with Multi-Layer Anti-Reflective Coating',
      waterResistance: '100m / 10 ATM',
      strap: 'Integrated Tapering Stainless Steel Articulated Bracelet',
      warranty: '2-Year International Transferable Warranty'
    },
    inStock: true
  },
  {
    id: 'aethelred-autumn-edition',
    name: 'Aethelred Autumn Edition',
    subtitle: 'Emerald Sunburst Fluted Bezel Timepiece',
    category: 'Men',
    price: 1320,
    originalPrice: 1650,
    rating: 4.9,
    reviewCount: 51,
    image: IMAGES.bannerAutumnRefinement,
    gallery: [
      IMAGES.bannerAutumnRefinement,
      IMAGES.regencyChrono
    ],
    tag: 'Special Price',
    colors: [
      { name: 'Forest Emerald', hex: '#1E3F20', image: IMAGES.bannerAutumnRefinement }
    ],
    description: 'Crafted specifically for the Autumn Edit. Deep forest green sunburst dial paired with a coin-edge fluted bezel and rich distressed brown leather strap. Part of our seasonal refinement campaign offering up to 20% off.',
    specs: {
      movement: 'Calibre CD-Autumn Automatic Date',
      powerReserve: '50 Hours',
      caseDiameter: '40.0mm',
      caseMaterial: 'Hand-Polished Stainless Steel',
      crystal: 'Domed Sapphire Crystal',
      waterResistance: '100m / 10 ATM',
      strap: 'Vintage Distressed Saddle Leather',
      warranty: '2-Year International Transferable Warranty'
    },
    inStock: true
  },
  {
    id: 'tuscan-leather-travel-roll',
    name: 'Tuscan Leather Travel Roll & Tool Set',
    subtitle: 'Hand-stitched Vegetable Tanned Horology Kit',
    category: 'Accessories',
    price: 240,
    rating: 4.8,
    reviewCount: 33,
    image: IMAGES.catAccessories,
    gallery: [
      IMAGES.catAccessories
    ],
    tag: 'New In',
    colors: [
      { name: 'Cognac Tuscan Leather', hex: '#A65D2E', image: IMAGES.catAccessories }
    ],
    description: 'Keep your valued timepieces secured on journeys. Includes 3-slot watch roll in supple Tuscan vegetable-tanned leather, hand-turned walnut spring bar tool, and two interchangeable top-grain calfskin straps.',
    specs: {
      movement: 'N/A (Handcrafted Leather Goods)',
      powerReserve: 'N/A',
      caseDiameter: 'Fits timepieces up to 46mm diameter',
      caseMaterial: 'Solid Brass Buckles & Snaps',
      crystal: 'N/A',
      waterResistance: 'Water-resistant wax finish',
      strap: 'Includes two 20mm Tuscan Leather Straps',
      warranty: 'Lifetime Leather Craftsmanship Guarantee'
    },
    inStock: true
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'men',
    title: "Men's Watches",
    image: IMAGES.regencyChrono,
    filterCategory: 'Men',
    count: '14 Models'
  },
  {
    id: 'women',
    title: "Women's Watches",
    image: IMAGES.lunaPetite,
    filterCategory: 'Women',
    count: '9 Models'
  },
  {
    id: 'chronograph',
    title: 'Chronograph',
    image: IMAGES.bannerAutumnEdit,
    filterCategory: 'Chronograph',
    count: '8 Models'
  },
  {
    id: 'automatic',
    title: 'Automatic',
    image: IMAGES.royalAuto,
    filterCategory: 'Automatic',
    count: '16 Models'
  },
  {
    id: 'dress',
    title: 'Dress Watches',
    image: IMAGES.heritageClassic,
    filterCategory: 'Dress',
    count: '11 Models'
  },
  {
    id: 'diver',
    title: 'Dive Watches',
    image: IMAGES.apexDiver,
    filterCategory: 'Diver',
    count: '6 Models'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    image: IMAGES.catAccessories,
    filterCategory: 'Accessories',
    count: '12 Items'
  }
];

export const CURRENCIES = {
  GBP: { code: 'GBP', symbol: '£', rate: 1.0 },
  USD: { code: 'USD', symbol: '$', rate: 1.28 },
  EUR: { code: 'EUR', symbol: '€', rate: 1.17 },
  CHF: { code: 'CHF', symbol: 'CHF ', rate: 1.13 }
};
