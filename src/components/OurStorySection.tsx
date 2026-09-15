import React from 'react';
import { Sparkles, Flame, CheckCircle, Heart } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const OurStorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#121212] relative overflow-hidden border-t border-white/5">
      {/* Background design accents */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image Collage / Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image: Searing smash patty on griddle */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=900&auto=format&fit=crop"
                  alt="Gourmet smash burger cooking on hot griddle at Hadda Burger"
                  className="w-full h-96 sm:h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span>The 500° Smash Technique</span>
                  </div>
                  <h4 className="text-xl font-heading font-black text-white">
                    Maximum Maillard Caramelization
                  </h4>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-stone-900/95 border border-amber-500/40 p-5 rounded-2xl shadow-2xl backdrop-blur-md max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-black text-amber-400 text-xl font-heading">
                    100%
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">Certified Angus</h5>
                    <p className="text-stone-400 text-xs mt-0.5">Never frozen. Hand ground.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text Column: Brand Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Brand Story</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight uppercase text-white leading-tight">
              WE BELIEVED FAST BURGERS <br />
              <span className="text-amber-400">HAD TO BE BETTER.</span>
            </h2>

            <div className="space-y-4 text-stone-300 text-base leading-relaxed">
              <p>
                In an era of lukewarm fast food, dry frozen pucks, and factory-made sauces, 
                we built <strong className="text-white">Hadda Burger</strong> with a singular obsession: 
                to bring high-energy, restaurant-caliber gourmet smash burgers to our neighbors here in 
                <strong className="text-amber-300"> Temple Terrace, Florida</strong>.
              </p>
              <p>
                The name says it all. We tasted what was out there and said: <em className="text-amber-400">it had to be better</em>. 
                Better beef, better crust, better buns, and genuine warmth every time you walk through our doors.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900/60 border border-white/5">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Lacy Crispy Edges</h4>
                  <p className="text-stone-400 text-xs mt-0.5">Heavy cast-iron smashes creating crunchy caramelized borders.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900/60 border border-white/5">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Secret Hadda Sauce</h4>
                  <p className="text-stone-400 text-xs mt-0.5">Crafted with roasted garlic, smoked paprika, and dill pickles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900/60 border border-white/5">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Real Butter Brioche</h4>
                  <p className="text-stone-400 text-xs mt-0.5">Golden, pillowy soft, griddled with sweet cream butter.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900/60 border border-white/5">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Community First</h4>
                  <p className="text-stone-400 text-xs mt-0.5">Proudly serving Bertha Palmer Blvd and Temple Terrace foodies.</p>
                </div>
              </div>
            </div>

            {/* Instagram Social Callout */}
            <div className="pt-2 flex items-center gap-4 text-xs sm:text-sm text-stone-400">
              <span>Follow the sizzling journey:</span>
              <a
                href={RESTAURANT_DATA.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold hover:underline"
              >
                {RESTAURANT_DATA.instagramHandle}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
