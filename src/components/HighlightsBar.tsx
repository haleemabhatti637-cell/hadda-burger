import React from 'react';
import { Beef, Flame, Award, HeartHandshake, ShieldCheck } from 'lucide-react';

export const HighlightsBar: React.FC = () => {
  const highlights = [
    {
      icon: Beef,
      title: '100% Angus Beef',
      desc: 'Fresh, never frozen custom beef blend'
    },
    {
      icon: Flame,
      title: 'Crispy Smashed Edges',
      desc: 'Searing 500° griddle caramelization'
    },
    {
      icon: Award,
      title: 'Secret Hadda Sauce',
      desc: 'House-whipped daily with roasted aromatics'
    },
    {
      icon: HeartHandshake,
      title: 'Artisanal Brioche',
      desc: 'Toasted with sweet cream butter'
    },
    {
      icon: ShieldCheck,
      title: '4.9★ Local Rating',
      desc: 'Top-rated smash burger in Temple Terrace'
    }
  ];

  return (
    <div className="border-y border-white/10 bg-[#131313]/90 py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-stone-400 leading-tight mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
