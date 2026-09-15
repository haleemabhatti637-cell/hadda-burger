export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'sides' | 'beverages' | 'desserts';
  price: number;
  description: string;
  image: string;
  spicyLevel?: number; // 0-3
  badge?: string;
  calories?: number;
  ingredients: string[];
  popular?: boolean;
}

export interface CustomizationOption {
  name: string;
  price: number;
}

export interface CartItem {
  cartId: string;
  item: MenuItem;
  quantity: number;
  patties?: 'Single' | 'Double' | 'Triple';
  addCheese?: boolean;
  addBacon?: boolean;
  addCaramelizedOnions?: boolean;
  extraSauce?: boolean;
  notes?: string;
  itemTotal: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  favoriteItem: string;
  verified: boolean;
  avatar: string;
}

export interface RestaurantDetails {
  name: string;
  slogan: string;
  address: string;
  fullAddress: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  displayPhone: string;
  instagramHandle: string;
  instagramUrl: string;
  hoursSummary: string;
  isOpenNow: boolean;
  closesAt: string;
  googleRating: number;
  totalReviews: number;
}
