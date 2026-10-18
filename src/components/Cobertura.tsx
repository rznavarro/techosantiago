import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, trackWhatsAppClick } from '../lib/analytics';

export function Cobertura() {
  const coverageZones = [
    {
      title: 'Sector oriente',
      description: 'Lo Barnechea, Las Condes, Vitacura, La Reina, Peñalolén, El Arrayán, Huechuraba, Ñuñoa y Providencia.',
    },
    {
      title: 'Chicureo y Colina',
      description: 'Casas y condominios con techos de teja y zinc.',
    },
    {
      title: 'Parcelas de agrado',
      description: 'Cajón del Maipo (El Melocotón), Linderos y Mostazal.',
    },
  ];

  return (
    <section className="relative py-20 bg-[#F6F3EE] text-[#3D4F57] overflow-hidden" id="cobertura">
      {/* Background Image with Gentle Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="https://techosantiago.cl/_astro/cobertura-servicio-techos-region-metropolitana.DEML37y__Z1XMEN9.webp"
          alt="Casa de alto estándar en la Región Metropolitana atendida por Techo Santiago"
          width="1920"
          height="800"
          loading="lazy"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            const target = e.target as HTMLElement;
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-[#F6F3EE]/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C8643B]">
            Área de atención técnica
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#16323F] mt-2 tracking-tight">
            ¿Llegamos a tu comuna?
          </h2>
        </div>

        {/* 3 Blocks */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {coverageZones.map((zone, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-xs p-7 rounded-[14px] border border-stone-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#F6F3EE] text-[#C8643B] flex items-center justify-center mb-4 border border-stone-200/50">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#16323F]">
                  {zone.title}
                </h3>
                <p className="mt-2 text-sm text-[#3D4F57] leading-relaxed">
                  {zone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Non-listed Comuna Note & Visible Working Hours */}
        <div className="mt-8 bg-white/95 backdrop-blur-xs p-6 rounded-[14px] border border-stone-200 max-w-3xl mx-auto text-center space-y-3">
          <p className="text-sm sm:text-base text-[#3D4F57] leading-relaxed">
            ¿Tu comuna no aparece? Escríbenos igual: puede que estemos trabajando cerca esa semana. Fuera de este radio cotizamos el traslado antes de agendar.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#16323F] pt-2 border-t border-stone-200/70">
            <Clock className="w-4 h-4 text-[#C8643B]" aria-hidden="true" />
            <span>Horario de atención: Lunes a viernes, 9:00 a 18:00</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={createWhatsAppLink('Hola, Techo Santiago. Quiero consultar si tienen cobertura en mi comuna.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cobertura')}
            className="btn-shine inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B2A1A] font-bold text-base px-8 py-3.5 rounded-[12px] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            <span>Consultar por mi comuna</span>
          </a>
        </div>
      </div>
    </section>
  );
}
