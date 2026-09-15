import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_DATA, HOURS_BY_DAY } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.8483765103096!2d-82.3855!3d28.0385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c77d9c82f0ad%3A0x86985b8fae726487!2s8932%20Bertha%20Palmer%20Blvd%2C%20Temple%20Terrace%2C%20FL%2033617!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus`;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    RESTAURANT_DATA.fullAddress
  )}`;

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#121212] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Person</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight uppercase text-white">
            LOCATION & <span className="text-amber-400">HOURS</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Stop by for hot-off-the-griddle smash burgers or call ahead for seamless counter pickup.
          </p>
        </div>

        {/* Two Column Layout: Details & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Hours Table */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address & Direct Call Action */}
            <div className="bg-[#18181B] border border-white/10 rounded-2xl p-6 space-y-5 shadow-xl">
              
              {/* Address Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-lg uppercase">
                    Hadda Burger
                  </h3>
                  <p className="text-stone-300 text-sm mt-1 leading-relaxed">
                    {RESTAURANT_DATA.address}<br />
                    {RESTAURANT_DATA.city}, {RESTAURANT_DATA.state} {RESTAURANT_DATA.zip}
                  </p>
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 mt-2 uppercase tracking-wider"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Click-to-Call Phone */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Call for Pickups</span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {RESTAURANT_DATA.displayPhone}
                    </span>
                  </div>
                </div>

                <a
                  href={`tel:${RESTAURANT_DATA.phone}`}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all"
                >
                  Call Now
                </a>
              </div>

            </div>

            {/* Operating Hours Table */}
            <div className="bg-[#18181B] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <h3 className="font-heading font-black text-sm uppercase text-white tracking-wider">
                    Store Hours
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Open Today</span>
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {HOURS_BY_DAY.map((h, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-1.5 px-2 rounded-lg transition-colors ${
                      h.isToday
                        ? 'bg-amber-500/10 border border-amber-500/30 font-bold text-amber-300'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {h.isToday && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                      <span>{h.day}</span>
                    </span>
                    <span className="font-mono">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed with Stylized Overlay */}
          <div className="lg:col-span-7 relative min-h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-stone-900">
            <iframe
              title="Hadda Burger Location Map - Temple Terrace, Florida"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '440px', filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(115%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>

            {/* Overlay card for quick navigation */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto bg-[#0F0F0F]/90 backdrop-blur-md border border-white/15 p-4 rounded-2xl shadow-2xl max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-black font-black flex items-center justify-center font-heading text-lg">
                  H
                </div>
                <div>
                  <h4 className="font-heading font-black text-white text-sm">Hadda Burger</h4>
                  <p className="text-[11px] text-stone-300">8932 Bertha Palmer Blvd</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-bold">Open until 10 PM</span>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-amber-400 hover:underline font-bold flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
