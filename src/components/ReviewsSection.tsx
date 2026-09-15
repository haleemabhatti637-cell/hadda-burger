import React from 'react';
import { Star, CheckCircle, Quote, MessageSquareHeart } from 'lucide-react';
import { REVIEWS_DATA, RESTAURANT_DATA } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Community Love</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight uppercase text-white">
            WHAT PEOPLE SAY ABOUT <span className="text-amber-400">HADDA</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Over 480+ local diners rate us 4.9 out of 5 stars in Temple Terrace and Tampa Bay.
          </p>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-stone-900/80 border border-white/10 rounded-full px-5 py-2 mt-4 shadow-xl">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-extrabold text-sm">{RESTAURANT_DATA.googleRating} / 5.0</span>
            <span className="text-stone-400 text-xs">({RESTAURANT_DATA.totalReviews} Google Reviews)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#151515] border border-white/10 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Stars & Verified */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-2.5 h-2.5" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Item */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-9 h-9 rounded-full object-cover border border-amber-400/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {rev.author}
                    </h4>
                    <span className="text-[10px] text-stone-500">{rev.date}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] uppercase font-semibold text-amber-400/80 block">Favorite:</span>
                  <span className="text-[10px] font-bold text-stone-300 truncate max-w-[110px] block">
                    {rev.favoriteItem}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Feedback Callout */}
        <div className="mt-12 text-center">
          <p className="text-stone-400 text-xs sm:text-sm">
            Tasted the crisp lacy difference? Tag us in your burger photos on Instagram{' '}
            <a
              href={RESTAURANT_DATA.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 font-bold hover:underline"
            >
              {RESTAURANT_DATA.instagramHandle}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
