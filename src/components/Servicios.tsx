import {
  Wrench,
  Shield,
  Layers,
  Home,
  Flame,
  Pipette,
  MessageCircle,
} from 'lucide-react';
import { createWhatsAppLink, trackWhatsAppClick } from '../lib/analytics';

export function Servicios() {
  const services = [
    {
      id: 'filtraciones',
      title: 'Reparación de filtraciones',
      description: 'Encontramos el punto de entrada y reparamos solo lo necesario.',
      icon: Wrench,
      message: 'Hola, Techo Santiago. Necesito cotizar una reparación de filtraciones.',
    },
    {
      id: 'mantencion',
      title: 'Mantención preventiva',
      description: 'Limpieza, fijaciones, sellos y evacuación de aguas antes de las lluvias.',
      icon: Shield,
      message: 'Hola, Techo Santiago. Necesito cotizar una mantención preventiva.',
    },
    {
      id: 'impermeabilizacion',
      title: 'Impermeabilización',
      description: 'Membranas para techos, losas, terrazas y encuentros críticos.',
      icon: Layers,
      message: 'Hola, Techo Santiago. Necesito cotizar impermeabilización.',
    },
    {
      id: 'instalacion',
      title: 'Cambio e instalación de techos',
      description: 'Cubiertas nuevas con la pendiente, los traslapos y la hojalatería correctos. Obra nueva y ampliaciones.',
      icon: Home,
      message: 'Hola, Techo Santiago. Necesito cotizar cambio e instalación de techos.',
    },
    {
      id: 'aislacion',
      title: 'Aislación térmica',
      description: 'Corta el calor del verano y la condensación de los días fríos.',
      icon: Flame,
      message: 'Hola, Techo Santiago. Necesito cotizar aislación térmica.',
    },
    {
      id: 'hojalateria',
      title: 'Hojalatería y canaletas',
      description: 'Forros, canaletas, bajadas de agua, aleros y tapacanes bien resueltos.',
      icon: Pipette,
      message: 'Hola, Techo Santiago. Necesito cotizar hojalatería y canaletas.',
    },
  ];

  const materials = [
    'Teja colonial',
    'Teja de arcilla',
    'Teja chilena',
    'Teja asfáltica',
    'Techo americano',
    'Zinc emballetado',
    'Losas con membrana',
  ];

  return (
    <section className="py-20 bg-white text-[#3D4F57]" id="servicios">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C8643B]">
            Especialistas en techumbre
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#16323F] mt-2 tracking-tight">
            Servicios de techos en Santiago
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D4F57] leading-relaxed">
            Trabajamos la cubierta y todo lo que la acompaña: hojalatería, forros, canaletas, bajadas de agua, aleros y tapacanes.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#F6F3EE]/60 hover:bg-[#F6F3EE] p-7 rounded-[14px] border border-stone-200/80 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-[10px] bg-white flex items-center justify-center text-[#16323F] group-hover:text-[#C8643B] mb-5 border border-stone-200 shadow-2xs transition-colors">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#16323F] leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#3D4F57] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-200/80">
                  <a
                    href={createWhatsAppLink(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`servicio_${service.id}`)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#16323F] hover:text-[#C8643B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8643B] rounded py-1"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" aria-hidden="true" />
                    <span>Cotizar este servicio</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Materials list */}
        <div className="mt-14 pt-8 border-t border-stone-200 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#3D4F57]/80 mb-3">
            Materiales y cubiertas que trabajamos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[#16323F] font-medium">
            {materials.map((mat, idx) => (
              <span key={mat} className="inline-flex items-center">
                <span>{mat}</span>
                {idx < materials.length - 1 && (
                  <span className="text-[#C8643B] ml-3" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
