import { AlertTriangle, Droplets, Wind, Waves, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, trackWhatsAppClick } from '../lib/analytics';

export function Problema() {
  const alertSigns = [
    {
      icon: Droplets,
      title: 'Manchas de humedad en el cielo o en los muros',
      description: 'El agua viaja por las cerchas o la losa antes de mostrarse. Donde cae la gota rara vez es donde entra el agua.',
    },
    {
      icon: Wind,
      title: 'Tejas quebradas, corridas o levantadas por el viento',
      description: 'Basta una teja desalineada o un traslapo vencido para que el viento filtre lluvia fina durante un temporal.',
    },
    {
      icon: Waves,
      title: 'Canaletas que se rebalsan o bajadas tapadas',
      description: 'Hojas y suciedad acumulada hacen que el agua rebase hacia el interior del entretecho o pudra los tapacanes.',
    },
  ];

  return (
    <section className="py-20 bg-[#F6F3EE] text-[#3D4F57]" id="problema">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8643B] mb-3">
            <AlertTriangle className="w-4 h-4" aria-hidden="true" />
            <span>Diagnóstico profesional</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#16323F] tracking-tight leading-tight">
            ¿Tienes una mancha en el cielo? La gotera casi nunca está justo ahí.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#3D4F57] leading-relaxed">
            La mayoría de las filtraciones no vienen de una plancha rota. Vienen de una unión mal sellada, un caballete corrido o una canaleta que se rebalsa hacia adentro. Por eso cotizar sin subir al techo es adivinar, y adivinar sale caro.
          </p>
        </div>

        {/* 3 Alert Warning Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {alertSigns.map((sign, index) => {
            const Icon = sign.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-[14px] border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[10px] bg-[#F6F3EE] flex items-center justify-center text-[#C8643B] mb-5 border border-stone-200/50">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#16323F] leading-snug">
                    {sign.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#3D4F57] leading-relaxed">
                    {sign.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <a
            href={createWhatsAppLink('Hola, Techo Santiago. Tengo una filtración en mi techo y necesito una revisión.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('problema')}
            className="btn-shine inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B2A1A] font-bold text-base px-7 py-3.5 rounded-[12px] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            <span>Cuéntanos qué te pasa por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
