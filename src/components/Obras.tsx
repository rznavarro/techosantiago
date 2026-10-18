import { ExternalLink, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, trackWhatsAppClick } from '../lib/analytics';

export function Obras() {
  const obras = [
    {
      img: 'https://techosantiago.cl/img/obras/reparacion-techo-tejas-lo-barnechea-card.webp',
      title: 'Reparación de techo de tejas',
      comuna: 'Lo Barnechea',
      alt: 'Reparación de techo de tejas en Lo Barnechea',
    },
    {
      img: 'https://techosantiago.cl/img/obras/reparacion-techo-teja-romana-vitacura-card.webp',
      title: 'Reparación de techo de teja romana',
      comuna: 'Vitacura',
      alt: 'Reparación de techo de teja romana en Vitacura',
    },
    {
      img: 'https://techosantiago.cl/img/obras/reparacion-techo-emballetado-las-condes-card.webp',
      title: 'Reparación de zinc emballetado',
      comuna: 'Las Condes',
      alt: 'Reparación de techo de zinc emballetado en Las Condes',
    },
    {
      img: 'https://techosantiago.cl/img/obras/mantencion-techo-teja-asfaltica-el-arrayan-lo-barnechea-card.webp',
      title: 'Mantención de teja asfáltica',
      comuna: 'El Arrayán',
      alt: 'Mantención de techo de teja asfáltica en El Arrayán',
    },
    {
      img: 'https://techosantiago.cl/img/obras/reparacion-techo-teja-asfaltica-lo-barnechea-card.webp',
      title: 'Reparación de techo asfáltico',
      comuna: 'Lo Barnechea',
      alt: 'Reparación de techo asfáltico en Lo Barnechea',
    },
    {
      img: 'https://techosantiago.cl/img/obras/mantencion-techo-teja-colonial-parcela-chicureo.webp',
      title: 'Mantención de teja colonial',
      comuna: 'Chicureo',
      alt: 'Mantención de techo de teja colonial en parcela de Chicureo',
    },
    {
      img: 'https://techosantiago.cl/img/obras/aislacion-termica-techo-zinc-chicureo/1.webp',
      title: 'Aislación térmica de techo de zinc',
      comuna: 'Chicureo',
      alt: 'Aislación térmica de techo de zinc en Chicureo',
    },
    {
      img: 'https://techosantiago.cl/_astro/reparacion-teja-chilena-la-reina-alto.D4epdfQ8_Z1dEFlW.webp',
      title: 'Reparación de teja chilena',
      comuna: 'La Reina Alto',
      alt: 'Reparación de teja chilena en La Reina Alto',
    },
  ];

  return (
    <section className="py-20 bg-[#16323F] text-white" id="obras">
      {/* <!-- [FALTA: reseñas de Google con nombre y estrellas. Si no llegan, NO crear sección de testimonios.] --> */}
      {/* <!-- [FALTA: no aparece en el sitio. No mostrar ninguna cifra de años.] --> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C8643B]">
            Evidencia fotográfica en terreno
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            Obras reales, con foto y comuna
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            No prometemos: mostramos. Estos son algunos de los techos que hemos reparado y mantenido.
          </p>
        </div>

        {/* 8 Works Grid: 2 columns mobile, 4 columns desktop */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {obras.map((obra, index) => (
            <div
              key={index}
              tabIndex={0}
              className="group relative bg-[#0F232D] rounded-[14px] overflow-hidden border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-98 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8643B]"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-800">
                <img
                  src={obra.img}
                  alt={obra.alt}
                  loading="lazy"
                  width="400"
                  height="300"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  onError={(e) => {
                    // Fallback container when image fails or is unavailable
                    const imgEl = e.target as HTMLImageElement;
                    imgEl.style.opacity = '0.3';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F232D] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded bg-[#16323F]/85 backdrop-blur-xs text-white border border-white/15 transition-colors group-hover:bg-[#C8643B] group-hover:text-white">
                  {obra.comuna}
                </span>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-end">
                <h3 className="font-display text-sm sm:text-base font-semibold text-white group-hover:text-stone-100 transition-transform duration-200 group-hover:-translate-y-0.5 leading-snug">
                  {obra.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* External Link & CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://techosantiago.cl/proyectos/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/90 hover:text-white underline decoration-[#C8643B] hover:decoration-white underline-offset-4 transition-colors"
          >
            <span>Ver las 33 obras ejecutadas</span>
            <ExternalLink className="w-4 h-4 text-[#C8643B]" aria-hidden="true" />
          </a>

          <a
            href={createWhatsAppLink('Hola, Techo Santiago. Quiero que revisen mi techo.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('obras')}
            className="btn-shine inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B2A1A] font-bold text-base px-7 py-3.5 rounded-[12px] shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            <span>Quiero que revisen mi techo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
