import React from 'react';

interface HaddaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const HaddaLogo: React.FC<HaddaLogoProps> = ({ size = 'md', showText = true }) => {
  const badgeDimensions = {
    sm: 'w-9 h-9 text-xs',
    md: 'w-11 h-11 text-sm',
    lg: 'w-16 h-16 text-lg'
  }[size];

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  }[size];

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Circular Badge Logo based on screenshot */}
      <div
        className={`relative ${badgeDimensions} rounded-full flex items-center justify-center bg-[#18181B] border-2 border-amber-500/80 shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-transform duration-300 group-hover:scale-105`}
        title="Hadda Burger - Had to Be Better"
      >
        {/* Subtle decorative inner ring */}
        <div className="absolute inset-0.5 rounded-full border border-amber-400/30"></div>
        
        {/* Stylized 'H' with burger horizontal cutouts */}
        <div className="flex flex-col items-center justify-center font-black text-amber-400 font-serif leading-none tracking-tighter">
          <span className="font-extrabold tracking-tight">H</span>
        </div>

        {/* Outer mini circular text simulation dots */}
        <div className="absolute inset-0 rounded-full flex items-center justify-between px-0.5 pointer-events-none opacity-60">
          <span className="w-0.5 h-0.5 rounded-full bg-amber-400"></span>
          <span className="w-0.5 h-0.5 rounded-full bg-amber-400"></span>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className={`font-heading font-black tracking-widest text-white uppercase leading-none ${textSizes}`}>
            HADDA <span className="text-amber-400">BURGER</span>
          </div>
          <span className="text-[10px] tracking-wider text-stone-400 uppercase font-medium mt-0.5">
            Had to Be Better
          </span>
        </div>
      )}
    </div>
  );
};
