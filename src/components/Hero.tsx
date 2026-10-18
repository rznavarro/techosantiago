import { MessageCircle, Phone, Camera, FileCheck2, ShieldCheck, Clock } from 'lucide-react';
import { RainEffect } from './RainEffect';
import {
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_RAW,
  createWhatsAppLink,
  trackPhoneClick,
  trackWhatsAppClick,
} from '../lib/analytics';

export function Hero() {
  const headlineWords = [
    'Reparación',
    'de',
    'techos',
    'en',
    'Santiago:',
    'encontramos',
    'por',
    'dónde',
    'entra',
    'el',
    'agua',
    'y',
    'la',
    'dejamos',
    'sellada',
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#16323F] text-white">
      {/* Background Image with Slow Ken Burns effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://techosantiago.cl/_astro/banner-temporal.ksMhmeBI_1TSd7A.webp"
          alt="Lluvia sobre una cubierta de techo en Santiago"
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover object-center animate-ken-burns scale-100"
          onError={(e) => {
            // Stylized fallback background if remote asset is temporarily unreachable
            const target = e.target as HTMLElement;
            target.style.display = 'none';
          }}
        />
        {/* Scrim Gradient Overlay: #16323F from 85% to 40% */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#16323F]/90 via-[#16323F]/75 to-[#16323F]/90" />
      </div>

      {/* Subtle Rain Canvas (max opacity 0.22) */}
      <RainEffect opacity={0.22} />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full text-center">
        {/* Kicker / Tagline with typographic separator */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#F6F3EE]/90 uppercase mb-5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/15">
          <span>Sector oriente</span>
          <span className="text-[#C8643B]" aria-hidden="true">·</span>
          <span>Chicureo</span>
          <span className="text-[#C8643B]" aria-hidden="true">·</span>
          <span>Parcelas de agrado</span>
        </div>

        {/* H1 Headline */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] text-balance">
          {headlineWords.map((word, idx) => (
            <span
              key={idx}
              className="inline-block mr-[0.28em] transition-all duration-300"
            >
              {word === 'sellada' ? (
                <span className="text-[#C8643B] underline decoration-[#C8643B]/60 decoration-wavy underline-offset-8">
                  {word}
                </span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        {/* Subtitle / Bajada */}
        <p className="mt-6 text-base sm:text-xl text-[#F6F3EE]/95 max-w-2xl mx-auto leading-relaxed font-normal">
          Teja, zinc o techo asfáltico. Un maestro sube a tu techo, ubica el punto real de la filtración y te entrega un presupuesto cerrado y por escrito.
        </p>

        {/* Primary CTA and Secondary Phone Link */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero')}
            className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B2A1A] font-bold text-lg px-8 py-4 rounded-[14px] shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
          >
            <MessageCircle className="w-6 h-6 fill-current shrink-0" aria-hidden="true" />
            <span>Cotizar por WhatsApp</span>
          </a>

          <a
            href={`tel:${PHONE_NUMBER_RAW}`}
            onClick={() => trackPhoneClick('hero')}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/90 hover:text-white transition-colors underline decoration-white/40 hover:decoration-white underline-offset-4 py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <Phone className="w-4 h-4 text-[#C8643B]" aria-hidden="true" />
            <span>o llama al {PHONE_NUMBER_DISPLAY}</span>
          </a>
        </div>

        {/* Microcopy below CTA */}
        <p className="mt-3.5 text-xs sm:text-sm text-white/80 font-medium">
          Visita técnica $30.000, se descuenta si haces el trabajo con nosotros.
        </p>
      </div>

      {/* Trust Strip (Franja de confianza: 4 items) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-[14px] bg-[#0F232D]/75 backdrop-blur-md border border-white/10 shadow-xl">
          <div className="flex items-center gap-3 p-2">
            <Camera className="w-5 h-5 text-[#C8643B] shrink-0" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium text-white/95 leading-snug">
              Más de 30 obras publicadas con foto y comuna
            </span>
          </div>

          <div className="flex items-center gap-3 p-2">
            <FileCheck2 className="w-5 h-5 text-[#C8643B] shrink-0" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium text-white/95 leading-snug">
              Presupuesto cerrado y por escrito
            </span>
          </div>

          <div className="flex items-center gap-3 p-2">
            <ShieldCheck className="w-5 h-5 text-[#C8643B] shrink-0" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium text-white/95 leading-snug">
              Garantía escrita en cada trabajo
            </span>
          </div>

          <div className="flex items-center gap-3 p-2">
            <Clock className="w-5 h-5 text-[#C8643B] shrink-0" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium text-white/95 leading-snug">
              Visita en 24 a 48 horas hábiles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
