import { MenuItem, Review, RestaurantDetails } from '../types';

export const RESTAURANT_DATA: RestaurantDetails = {
  name: "HADDA BURGER",
  slogan: "Had to Be Better.",
  address: "8932 Bertha Palmer Blvd",
  fullAddress: "8932 Bertha Palmer Blvd, Temple Terrace, Florida 33617",
  city: "Temple Terrace",
  state: "FL",
  zip: "33617",
  phone: "8135554232",
  displayPhone: "(813) 555-HADDA",
  instagramHandle: "@haddaburgerus",
  instagramUrl: "https://www.instagram.com/haddaburgerus/",
  hoursSummary: "Sun - Thu: 11:00 AM - 10:00 PM | Fri - Sat: 11:00 AM - 11:00 PM",
  isOpenNow: true,
  closesAt: "10:00 PM",
  googleRating: 4.9,
  totalReviews: 486
};

export const MENU_ITEMS: MenuItem[] = [
  // SMASH BURGERS
  {
    id: "the-og-hadda",
    name: "The Classic OG Hadda Smash",
    category: "burgers",
    price: 11.99,
    description: "Two 100% Certified Angus Beef patties smashed with paper-thin crisp lacy edges, melted double American cheese, caramelized onions, house pickles, and secret signature Hadda Sauce on a toasted golden brioche bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop",
    badge: "Signature",
    popular: true,
    calories: 780,
    ingredients: ["Dual Angus Patties", "American Cheese", "Caramelized Onions", "House Pickles", "Secret Hadda Sauce", "Toasted Brioche"]
  },
  {
    id: "smoky-bacon-bbq-smash",
    name: "Smoky Bacon & Cheddar Smash",
    category: "burgers",
    price: 13.49,
    description: "Double smashed beef patties, applewood-smoked thick cut bacon, sharp aged cheddar, crispy onion straws, and warm chipotle honey BBQ drizzle on a butter-griddled bun.",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=900&auto=format&fit=crop",
    badge: "Best Seller",
    popular: true,
    calories: 890,
    ingredients: ["Double Smash Beef", "Applewood Smoked Bacon", "Sharp Cheddar", "Crispy Onions", "Chipotle Honey BBQ"]
  },
  {
    id: "fiery-jalapeno-smash",
    name: "Fiery Hadda Diablo",
    category: "burgers",
    price: 12.99,
    description: "Double smash patties with grilled fresh jalapeños, pepper jack cheese, habanero bacon jam, and spicy ghost pepper ranch on a toasted brioche.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=900&auto=format&fit=crop",
    spicyLevel: 3,
    badge: "Spicy Favorite",
    calories: 820,
    ingredients: ["Double Smash Beef", "Pepper Jack Cheese", "Charred Jalapeños", "Habanero Bacon Jam", "Ghost Pepper Ranch"]
  },
  {
    id: "truffle-mushroom-smash",
    name: "Truffle Melt Smash",
    category: "burgers",
    price: 14.25,
    description: "Double lacy-edge smashed patties smothered in roasted garlic button mushrooms, melted Swiss gruyère cheese, and black truffle garlic aioli.",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=900&auto=format&fit=crop",
    badge: "Chef's Special",
    calories: 840,
    ingredients: ["Double Smash Beef", "Swiss Gruyère", "Sautéed Wild Mushrooms", "Black Truffle Aioli", "Brioche Bun"]
  },
  {
    id: "triple-threat-smash",
    name: "The Triple Hadda Monster",
    category: "burgers",
    price: 15.99,
    description: "Three ultra-crispy smashed patties, triple layers of melted cheese, double smoked bacon, extra grilled onions, and a double splash of Hadda Sauce. Built for true carnivores.",
    image: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3e99?q=80&w=900&auto=format&fit=crop",
    badge: "Heavy Hitter",
    calories: 1150,
    ingredients: ["Triple Angus Patties", "Triple Cheese", "Double Bacon", "Caramelized Onions", "Extra Hadda Sauce"]
  },

  // SIDES & LOADED FRIES
  {
    id: "hadda-loaded-dirty-fries",
    name: "Hadda Loaded Dirty Fries",
    category: "sides",
    price: 8.99,
    description: "Crispy skin-on golden russet fries topped with chopped smash beef, melted cheese blend, grilled onions, chopped jalapeños, and generous Hadda Sauce drizzle.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=900&auto=format&fit=crop",
    badge: "Must Try",
    popular: true,
    spicyLevel: 1,
    calories: 680,
    ingredients: ["Crispy Fries", "Chopped Smash Patty", "Cheddar Cheese Sauce", "Caramelized Onions", "Hadda Sauce"]
  },
  {
    id: "truffle-parmesan-fries",
    name: "Truffle & Herb Parmesan Fries",
    category: "sides",
    price: 7.49,
    description: "Tossed in white truffle oil, freshly grated aged parmesan, fresh parsley, and cracked black pepper. Served with roasted garlic aioli.",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=900&auto=format&fit=crop",
    calories: 520,
    ingredients: ["Golden Fries", "White Truffle Oil", "Aged Parmesan", "Garlic Herb Aioli"]
  },
  {
    id: "crispy-beer-battered-rings",
    name: "Crispy Golden Onion Rings",
    category: "sides",
    price: 6.49,
    description: "Thick-cut sweet yellow onions dipped in signature craft batter and fried to shattering crunch. Served with smokey BBQ ranch.",
    image: "https://images.unsplash.com/photo-1639024471287-032f66e65495?q=80&w=900&auto=format&fit=crop",
    calories: 460,
    ingredients: ["Sweet Yellow Onions", "Craft Batter", "Smokey Ranch Dipping Sauce"]
  },
  {
    id: "nashville-hot-tenders",
    name: "Nashville Hot Chicken Tenders (4pc)",
    category: "sides",
    price: 9.99,
    description: "Four buttermilk jumbo chicken tenders tossed in fiery cayenne chili oil, served over sliced Texas toast with crinkle cut pickles and cooling buttermilk ranch.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=900&auto=format&fit=crop",
    spicyLevel: 2,
    badge: "Hot & Crispy",
    calories: 710,
    ingredients: ["Buttermilk Tenders", "Nashville Chili Spice", "Texas Toast", "Dill Pickles", "Ranch"]
  },

  // BEVERAGES
  {
    id: "salted-caramel-bourbon-shake",
    name: "Salted Caramel Shake",
    category: "beverages",
    price: 6.99,
    description: "Rich hand-spun vanilla bean ice cream spun with buttery sea salt caramel swirls, topped with whipped cream and crushed toffee crumble.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=900&auto=format&fit=crop",
    badge: "Crowd Favorite",
    popular: true,
    calories: 590,
    ingredients: ["Vanilla Bean Custard", "Salted Caramel", "Whipped Cream", "Toffee Bits"]
  },
  {
    id: "cookies-and-cream-shake",
    name: "Double Oreo Blast Milkshake",
    category: "beverages",
    price: 6.99,
    description: "Handcrafted real dairy milkshake packed with crunchy crushed Oreos and rich chocolate drizzle, crowned with an Oreo cookie.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=900&auto=format&fit=crop",
    calories: 640,
    ingredients: ["Real Dairy Ice Cream", "Crushed Oreos", "Chocolate Ganache", "Whipped Cream"]
  },
  {
    id: "craft-fountain-soda",
    name: "Artisanal Florida Craft Soda",
    category: "beverages",
    price: 3.49,
    description: "Pure cane sugar fountain sodas. Choose from Florida Orange Cream, Black Cherry, Craft Cola, Lemon Lime, or Sparkling Agave Lemonade.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=900&auto=format&fit=crop",
    calories: 160,
    ingredients: ["Pure Cane Sugar", "Natural Flavors", "Free In-Store Refills"]
  },

  // DESSERTS
  {
    id: "cinnamon-churro-bites",
    name: "Warm Churro Bites & Nutella",
    category: "desserts",
    price: 6.49,
    description: "Golden crispy fried churro bites tossed in aromatic Mexican cinnamon sugar, served with warm melted Nutella and dulce de leche dips.",
    image: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?q=80&w=900&auto=format&fit=crop",
    badge: "Warm & Fresh",
    popular: true,
    calories: 490,
    ingredients: ["Crispy Churros", "Cinnamon Sugar", "Warm Nutella Dip", "Dulce De Leche"]
  },
  {
    id: "skillet-chocolate-chip-cookie",
    name: "Gooey Skillet Cookie A La Mode",
    category: "desserts",
    price: 7.99,
    description: "Freshly baked warm chocolate chip cookie served in a mini cast iron style container, topped with a scoop of vanilla bean ice cream and hot fudge.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=900&auto=format&fit=crop",
    calories: 610,
    ingredients: ["Warm Chocolate Chip Cookie", "Vanilla Custard", "Hot Fudge", "Sea Salt Flakes"]
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    author: "Marcus Vance",
    rating: 5,
    date: "2 days ago",
    comment: "Hands down the best smash burger in Temple Terrace, maybe all of Tampa Bay! That crispy lacy edge on the patty was seasoned to absolute perfection, and the Hadda sauce is pure liquid gold. Got the loaded dirty fries too—incredible.",
    favoriteItem: "The Classic OG Hadda Smash",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "rev-2",
    author: "Elena Rodriguez",
    rating: 5,
    date: "1 week ago",
    comment: "Their slogan 'Had to Be Better' is 100% accurate. You can taste the quality in the Angus beef. The potato brioche bun holds up so well, not soggy at all. Super friendly staff and the restaurant aesthetic is dark, moody, and very cool!",
    favoriteItem: "Smoky Bacon & Cheddar Smash",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "rev-3",
    author: "Jamal Washington",
    rating: 5,
    date: "2 weeks ago",
    comment: "Came here after seeing their Instagram @haddaburgerus and it lived up to every bit of the hype. The Fiery Diablo burger has actual real heat that builds nicely without overpowering the beef. Also get the Oreo shake!",
    favoriteItem: "Fiery Hadda Diablo",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "rev-4",
    author: "Sarah K.",
    rating: 5,
    date: "3 weeks ago",
    comment: "The truffle melt burger was out of this world. Smashing burgers this thin without drying them out is an art form, and Hadda Burger has mastered it. Cleanest kitchen, fast pickup, 10/10.",
    favoriteItem: "Truffle Melt Smash",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];

export const HOURS_BY_DAY = [
  { day: "Monday", hours: "11:00 AM - 10:00 PM", isToday: false },
  { day: "Tuesday", hours: "11:00 AM - 10:00 PM", isToday: true },
  { day: "Wednesday", hours: "11:00 AM - 10:00 PM", isToday: false },
  { day: "Thursday", hours: "11:00 AM - 10:00 PM", isToday: false },
  { day: "Friday", hours: "11:00 AM - 11:00 PM", isToday: false },
  { day: "Saturday", hours: "11:00 AM - 11:00 PM", isToday: false },
  { day: "Sunday", hours: "11:00 AM - 10:00 PM", isToday: false }
];
