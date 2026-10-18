import {
  Search,
  FileText,
  ShieldCheck,
  HardHat,
  Sparkles,
  Receipt,
  MessageCircle,
} from 'lucide-react';
import { createWhatsAppLink, trackWhatsAppClick } from '../lib/analytics';

export function PorQueElegirnos() {
  const points = [
    {
      icon: Search,
      title: 'Diagnóstico antes que presupuesto',
      description: 'Primero encontramos el punto de entrada. Recién ahí cotizamos.',
    },
    {
      icon: FileText,
      title: 'Presupuesto cerrado y por escrito',
      description: 'Lo que firmas es lo que pagas. Si al desarmar aparece algo oculto, te avisamos con fotos y decides tú antes de seguir.',
    },
    {
      icon: ShieldCheck,
      title: 'Garantía escrita por trabajo',
      description: 'Indicada en el presupuesto según la intervención y el material.',
    },
    {
      icon: HardHat,
      title: 'Trabajo en altura con protocolo',
      description: 'Arnés, línea de vida y personal con su documentación al día.',
    },
    {
      icon: Sparkles,
      title: 'Dejamos todo limpio',
      description: 'Protegemos lo que está abajo, retiramos los escombros y entregamos el trabajo probado con agua.',
    },
    {
      icon: Receipt,
      title: 'Factura o boleta',
      description: 'Para personas, empresas, comunidades y administraciones.',
    },
  ];

  return (
    <section className="py-20 bg-[#F6F3EE] text-[#3D4F57]" id="por-que">
      {/* <!-- [FALTA: 1 foto real del equipo o de un maestro trabajando con arnés para la sección "Por qué elegirnos". Si no llega, usar la obra 2.] --> */}
      {/* <!-- [FALTA: duración típica de la garantía, si el cliente quiere publicarla] --> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-[16px] overflow-hidden shadow-lg border border-stone-300/80 bg-stone-200">
              <img
                src="https://techosantiago.cl/img/obras/reparacion-techo-teja-romana-vitacura-card.webp"
                alt="Maestro especialista trabajando en techo de teja romana en Vitacura"
                width="600"
                height="700"
                loading="lazy"
                className="w-full h-[440px] sm:h-[500px] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.opacity = '0.5';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16323F]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C8643B] bg-white/90 px-2.5 py-1 rounded-md">
                  Vitacura
                </span>
                <p className="mt-2 text-sm font-medium text-stone-100">
                  Inspección técnica en altura y reparación de cubierta en sector oriente.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Points List */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8643B]">
              Compromiso y seriedad
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#16323F] mt-2 tracking-tight">
              Por qué los dueños de casa nos llaman
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-[10px] bg-white text-[#C8643B] flex items-center justify-center shrink-0 border border-stone-200 shadow-2xs">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#16323F] leading-snug">
                        {pt.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#3D4F57] leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 pt-6 border-t border-stone-300/60">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('por_que')}
                className="btn-shine inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B2A1A] font-bold text-base px-7 py-3.5 rounded-[12px] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
