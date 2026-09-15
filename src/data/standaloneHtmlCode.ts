export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HADDA BURGER | Had to Be Better | Gourmet Smash Burgers</title>
  <meta name="description" content="Gourmet smash burgers with ultra-crisp lacy edges, loaded fries, and artisanal shakes in Temple Terrace, FL.">

  <!-- Google Fonts: Oswald & Montserrat & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS Standalone CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brandDark: '#0F0F0F',
            brandCard: '#161616',
            brandAmber: '#EAB308',
            brandGold: '#E5A93C',
            brandOrange: '#F97316',
            brandText: '#F8FAFC'
          },
          fontFamily: {
            heading: ['Montserrat', 'Oswald', 'sans-serif'],
            body: ['Plus Jakarta Sans', 'sans-serif']
          }
        }
      }
    }
  </script>

  <style>
    body {
      background-color: #0F0F0F;
      color: #F8FAFC;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .font-heading {
      font-family: 'Montserrat', 'Oswald', sans-serif;
    }
    .glow-orange {
      box-shadow: 0 0 30px rgba(249, 115, 22, 0.45);
    }
    .glow-amber {
      box-shadow: 0 0 25px rgba(234, 179, 8, 0.35);
    }
  </style>
</head>
<body class="bg-[#0F0F0F] text-[#F8FAFC] antialiased selection:bg-[#F97316] selection:text-white">

  <!-- NAVIGATION BAR -->
  <header class="fixed top-0 left-0 right-0 z-40 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/10 py-3.5 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      
      <!-- Brand Logo Badge -->
      <a href="#home" class="flex items-center gap-3 select-none">
        <div class="w-10 h-10 rounded-full flex items-center justify-center bg-[#18181B] border-2 border-amber-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
          <span class="font-extrabold text-amber-400 font-serif text-lg leading-none">H</span>
        </div>
        <div>
          <div class="font-heading font-black tracking-widest text-white uppercase text-lg leading-none">
            HADDA <span class="text-amber-400">BURGER</span>
          </div>
          <span class="text-[10px] tracking-wider text-stone-400 uppercase font-medium">Had to Be Better</span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center space-x-8">
        <a href="#home" class="text-sm font-semibold tracking-wider uppercase text-stone-300 hover:text-amber-400 transition-colors">Home</a>
        <a href="#menu" class="text-sm font-semibold tracking-wider uppercase text-stone-300 hover:text-amber-400 transition-colors">Menu</a>
        <a href="#story" class="text-sm font-semibold tracking-wider uppercase text-stone-300 hover:text-amber-400 transition-colors">Our Story</a>
        <a href="#reviews" class="text-sm font-semibold tracking-wider uppercase text-stone-300 hover:text-amber-400 transition-colors">Reviews</a>
        <a href="#location" class="text-sm font-semibold tracking-wider uppercase text-stone-300 hover:text-amber-400 transition-colors">Location</a>
      </nav>

      <!-- Order Online CTA -->
      <div class="flex items-center gap-3">
        <button onclick="openOrderModal()" class="flex items-center gap-2 bg-transparent hover:bg-amber-500/10 border-2 border-white/80 hover:border-amber-400 text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all">
          <span>Order Online</span>
          <span id="cartCountBadge" class="bg-orange-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full hidden">0</span>
        </button>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="home" class="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0F0F0F]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Hero Column -->
        <div class="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider w-fit">
            <span>Temple Terrace, FL • Gourmet Smash Burgers</span>
          </div>

          <div class="space-y-1">
            <h1 class="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tight uppercase leading-[0.95] text-white">
              <span class="text-[#E5A93C] block">HADDA</span>
              <span class="text-white inline-block">BURGER<span class="text-[#E5A93C]">.</span></span>
            </h1>
            <p class="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-200 tracking-tight pt-2">
              Had to Be Better.
            </p>
          </div>

          <p class="text-base sm:text-lg text-stone-300 max-w-xl font-normal leading-relaxed">
            Certified Angus Beef smashed ultra-thin onto searing 500° griddles for insanely crispy lacy edges, melted Wisconsin cheddar, and house-made signature Hadda Sauce on toasted golden brioche.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="#menu" class="px-8 py-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-extrabold uppercase text-sm sm:text-base tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(249,115,22,0.45)]">
              View Full Menu
            </a>
            <button onclick="openOrderModal()" class="px-8 py-4 rounded-full bg-stone-900/60 hover:bg-stone-800 text-white font-extrabold uppercase text-sm sm:text-base tracking-wider border border-white/40 hover:border-amber-400 hover:text-amber-300 transition-all">
              Order Now
            </button>
          </div>

          <!-- Key Information Bar (Floating Pill) -->
          <div class="pt-4 sm:pt-6">
            <div class="inline-flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-[#161616]/90 border border-white/10 rounded-2xl px-5 py-3.5 shadow-xl backdrop-blur-md">
              <a href="#location" class="flex items-center gap-2.5 text-left group">
                <div class="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  📍
                </div>
                <div class="text-xs sm:text-sm">
                  <span class="block text-stone-200 group-hover:text-white font-medium">8932 Bertha Palmer Blvd,</span>
                  <span class="block text-stone-400 text-[11px] sm:text-xs">Temple Terrace, Florida 33617</span>
                </div>
              </a>
              <div class="hidden sm:block w-px h-8 bg-white/10"></div>
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  🕒
                </div>
                <div>
                  <span class="text-emerald-400 font-extrabold text-xs tracking-wider uppercase block">● OPEN Today</span>
                  <span class="text-[11px] text-stone-400">Until 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Hero Column: Burger Image & Circular Action Badges -->
        <div class="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div class="relative w-full max-w-md aspect-square flex items-center justify-center">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/25 via-orange-500/25 to-transparent rounded-full filter blur-2xl transform scale-90"></div>
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop" alt="Hadda Gourmet Double Smash Burger" class="relative z-10 w-full h-full object-contain filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)] rounded-3xl">
          </div>

          <!-- 3 Circular Quick-Action Buttons -->
          <div class="grid grid-cols-3 gap-6 sm:gap-8 mt-6 pt-2 w-full max-w-sm">
            <a href="#location" class="flex flex-col items-center group">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#161616] border-2 border-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform text-xl">
                ⏱️
              </div>
              <span class="text-xs font-black tracking-widest text-stone-300 uppercase mt-2 group-hover:text-amber-400">HOURS</span>
            </a>
            <a href="#menu" class="flex flex-col items-center group">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#161616] border-2 border-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform text-xl">
                🍔
              </div>
              <span class="text-xs font-black tracking-widest text-stone-300 uppercase mt-2 group-hover:text-amber-400">MENU</span>
            </a>
            <a href="#reviews" class="flex flex-col items-center group">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#161616] border-2 border-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform text-xl">
                ⭐
              </div>
              <span class="text-xs font-black tracking-widest text-stone-300 uppercase mt-2 group-hover:text-amber-400">REVIEWS</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- HIGHLIGHTS BAR -->
  <div class="border-y border-white/10 bg-[#131313]/90 py-5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div><span class="text-amber-400 font-extrabold">100% ANGUS</span> <p class="text-xs text-stone-400">Fresh Never Frozen</p></div>
      <div><span class="text-amber-400 font-extrabold">500° GRIDDLE</span> <p class="text-xs text-stone-400">Ultra-Crispy Lacy Edges</p></div>
      <div><span class="text-amber-400 font-extrabold">SECRET HADDA SAUCE</span> <p class="text-xs text-stone-400">Whipped Fresh Daily</p></div>
      <div><span class="text-amber-400 font-extrabold">4.9★ RATED</span> <p class="text-xs text-stone-400">Temple Terrace Local Favorite</p></div>
    </div>
  </div>

  <!-- FEATURED MENU (TABBED LAYOUT) -->
  <section id="menu" class="py-20 bg-[#0F0F0F]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <h2 class="text-4xl sm:text-5xl font-heading font-black tracking-tight uppercase text-white">
          THE <span class="text-amber-400">HADDA</span> MENU
        </h2>
        <p class="text-stone-300 text-base">Select your category to explore our gourmet offerings.</p>
      </div>

      <!-- Menu Tabs -->
      <div class="flex justify-center mb-10">
        <div class="inline-flex p-1.5 rounded-2xl bg-[#18181B] border border-white/10 gap-2">
          <button onclick="switchTab('burgers')" id="tab-burgers" class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md">
            🍔 Smash Burgers
          </button>
          <button onclick="switchTab('sides')" id="tab-sides" class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-stone-300 hover:text-white">
            🍟 Sides & Loaded Fries
          </button>
          <button onclick="switchTab('beverages')" id="tab-beverages" class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-stone-300 hover:text-white">
            🥤 Beverages & Shakes
          </button>
          <button onclick="switchTab('desserts')" id="tab-desserts" class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-stone-300 hover:text-white">
            🍪 Desserts
          </button>
        </div>
      </div>

      <!-- Food Items Grid -->
      <div id="menuGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Injected via JavaScript -->
      </div>
    </div>
  </section>

  <!-- OUR STORY SECTION -->
  <section id="story" class="py-20 bg-[#121212] border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=900&auto=format&fit=crop" alt="Smashing Burgers" class="rounded-3xl border border-white/10 shadow-2xl">
      </div>
      <div class="space-y-6">
        <h2 class="text-4xl sm:text-5xl font-heading font-black tracking-tight uppercase text-white">
          WE BELIEVED BURGERS <br><span class="text-amber-400">HAD TO BE BETTER.</span>
        </h2>
        <p class="text-stone-300 text-base leading-relaxed">
          Founded in Temple Terrace, Florida, Hadda Burger was born to end mediocre, lukewarm fast food. We smash 100% Certified Angus Beef at 500 degrees to produce paper-thin, crispy lacy borders, layered with golden American cheese and our addictive signature Hadda sauce.
        </p>
        <div class="p-4 rounded-2xl bg-stone-900 border border-amber-500/30">
          <span class="text-amber-400 font-bold block">📍 8932 Bertha Palmer Blvd, Temple Terrace, FL 33617</span>
          <span class="text-stone-400 text-xs">Serving the local Tampa Bay community with pride daily.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CUSTOMER REVIEWS SECTION -->
  <section id="reviews" class="py-20 bg-[#0F0F0F]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
      <div>
        <h2 class="text-4xl sm:text-5xl font-heading font-black tracking-tight uppercase text-white">
          CUSTOMER <span class="text-amber-400">REVIEWS</span>
        </h2>
        <p class="text-stone-300 text-base mt-2">⭐⭐⭐⭐⭐ 4.9 out of 5 stars with 480+ local reviews</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div class="bg-[#161616] p-6 rounded-2xl border border-white/10 space-y-3">
          <div class="text-amber-400">⭐⭐⭐⭐⭐</div>
          <p class="text-stone-300 text-sm">"The lacy crisp crust on the smash patties is out of this world! Temple Terrace finally has a top-tier burger joint."</p>
          <span class="text-white font-bold text-xs block">— Marcus V.</span>
        </div>
        <div class="bg-[#161616] p-6 rounded-2xl border border-white/10 space-y-3">
          <div class="text-amber-400">⭐⭐⭐⭐⭐</div>
          <p class="text-stone-300 text-sm">"The dirty loaded fries with chopped smash burger and secret sauce is genuinely the best late-night bite in Florida."</p>
          <span class="text-white font-bold text-xs block">— Elena R.</span>
        </div>
        <div class="bg-[#161616] p-6 rounded-2xl border border-white/10 space-y-3">
          <div class="text-amber-400">⭐⭐⭐⭐⭐</div>
          <p class="text-stone-300 text-sm">"Saw them on Instagram @haddaburgerus and had to try it. Double bacon smash lived up to 100% of the hype!"</p>
          <span class="text-white font-bold text-xs block">— Jamal W.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- LOCATION & CONTACT SECTION -->
  <section id="location" class="py-20 bg-[#121212] border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-5 space-y-6">
        <h2 class="text-4xl font-heading font-black uppercase text-white">
          VISIT <span class="text-amber-400">HADDA BURGER</span>
        </h2>
        <div class="space-y-3 text-stone-300 text-sm">
          <p><strong>Address:</strong> 8932 Bertha Palmer Blvd, Temple Terrace, FL 33617</p>
          <p><strong>Phone:</strong> <a href="tel:8135554232" class="text-amber-400 hover:underline">(813) 555-HADDA</a></p>
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/haddaburgerus/" target="_blank" class="text-amber-400 hover:underline">@haddaburgerus</a></p>
          <p><strong>Hours:</strong> Sun-Thu 11am-10pm | Fri-Sat 11am-11pm</p>
        </div>
        <div class="pt-2">
          <a href="tel:8135554232" class="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold uppercase text-xs tracking-wider">
            Call for Takeout
          </a>
        </div>
      </div>

      <div class="lg:col-span-7 h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <iframe title="Hadda Burger Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.8483765103096!2d-82.3855!3d28.0385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c77d9c82f0ad%3A0x86985b8fae726487!2s8932%20Bertha%20Palmer%20Blvd%2C%20Temple%20Terrace%2C%20FL%2033617!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-[#0A0A0A] border-t border-white/10 py-10 text-center text-xs text-stone-500">
    <p>© 2026 Hadda Burger LLC. 8932 Bertha Palmer Blvd, Temple Terrace, FL 33617. All rights reserved.</p>
    <p class="mt-2 text-stone-400">"Had to Be Better." • Instagram: <a href="https://www.instagram.com/haddaburgerus/" target="_blank" class="text-amber-400">@haddaburgerus</a></p>
  </footer>

  <!-- ORDER MODAL & TOAST SCRIPTS -->
  <script>
    const MENU_DATA = {
      burgers: [
        { id: 'og', name: 'The Classic OG Hadda Smash', price: 11.99, desc: 'Dual Angus smash patties, crispy lacy edges, melted American cheese, caramelized onions & secret Hadda Sauce.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
        { id: 'bacon', name: 'Smoky Bacon & Cheddar Smash', price: 13.49, desc: 'Double smash patties, applewood thick-cut bacon, sharp cheddar, crispy fried onions & chipotle BBQ.', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=600&auto=format&fit=crop' },
        { id: 'diablo', name: 'Fiery Hadda Diablo (Spicy)', price: 12.99, desc: 'Charred fresh jalapeños, pepper jack cheese, habanero bacon jam & ghost pepper ranch on brioche.', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop' }
      ],
      sides: [
        { id: 'dirty-fries', name: 'Hadda Loaded Dirty Fries', price: 8.99, desc: 'Crispy skin-on golden fries topped with chopped smash beef, melted cheddar cheese & Hadda sauce.', img: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600&auto=format&fit=crop' },
        { id: 'truffle-fries', name: 'Truffle & Herb Parmesan Fries', price: 7.49, desc: 'Tossed in white truffle oil, freshly grated aged parmesan, fresh herbs & roasted garlic aioli.', img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=600&auto=format&fit=crop' }
      ],
      beverages: [
        { id: 'salted-caramel-shake', name: 'Salted Caramel Milkshake', price: 6.99, desc: 'Hand-spun vanilla bean ice cream with sea salt caramel swirls and whipped cream.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
        { id: 'oreo-shake', name: 'Double Oreo Blast Milkshake', price: 6.99, desc: 'Crushed Oreo cookies blended with real dairy custard and chocolate ganache drizzle.', img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop' }
      ],
      desserts: [
        { id: 'churros', name: 'Warm Cinnamon Churro Bites', price: 6.49, desc: 'Golden crispy churro bites with Mexican cinnamon sugar and warm melted Nutella dip.', img: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?q=80&w=600&auto=format&fit=crop' }
      ]
    };

    let currentCategory = 'burgers';
    let cart = [];

    function renderMenu() {
      const container = document.getElementById('menuGrid');
      const items = MENU_DATA[currentCategory] || [];
      container.innerHTML = items.map(item => \`
        <div class="bg-[#151515] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg">
          <img src="\${item.img}" alt="\${item.name}" class="w-full h-52 object-cover">
          <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <div class="flex justify-between items-start">
                <h3 class="font-heading font-black uppercase text-white text-lg">\${item.name}</h3>
                <span class="text-amber-400 font-black font-mono">$\${item.price.toFixed(2)}</span>
              </div>
              <p class="text-xs text-stone-300 mt-2">\${item.desc}</p>
            </div>
            <button onclick="addToCart('\${item.name}', \${item.price})" class="w-full py-2.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider">
              Add to Order
            </button>
          </div>
        </div>
      \`).join('');
    }

    function switchTab(cat) {
      currentCategory = cat;
      ['burgers', 'sides', 'beverages', 'desserts'].forEach(c => {
        const btn = document.getElementById('tab-' + c);
        if (btn) {
          if (c === cat) {
            btn.className = "px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md";
          } else {
            btn.className = "px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-stone-300 hover:text-white";
          }
        }
      });
      renderMenu();
    }

    function addToCart(name, price) {
      cart.push({ name, price });
      const badge = document.getElementById('cartCountBadge');
      if (badge) {
        badge.innerText = cart.length;
        badge.classList.remove('hidden');
      }
      alert('✓ Added ' + name + ' to your order!');
    }

    function openOrderModal() {
      const total = cart.reduce((s, i) => s + i.price, 0);
      alert('Order Online\\nItems in cart: ' + cart.length + '\\nTotal: $' + total.toFixed(2) + '\\n\\nPickup at: 8932 Bertha Palmer Blvd, Temple Terrace, FL');
    }

    // Initial render
    renderMenu();
  </script>
</body>
</html>`;
