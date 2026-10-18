import { useState, useEffect, useRef } from 'react';
import { Camera, CalendarCheck, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, trackWhatsAppClick } from '../lib/analytics';

export function ComoFunciona() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from when top enters view to when bottom leaves view
      const total = rect.height;
      const current = windowHeight - rect.top;
      const progress = Math.min(Math.max(current / (total + windowHeight * 0.5), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Escríbenos con una foto',
      description:
        'Mándanos por WhatsApp una foto del techo y de la mancha por dentro. Con eso ya adelantamos la mitad del diagnóstico.',
      icon: Camera,
    },
    {
      num: '02',
      title: 'Visita técnica y presupuesto escrito',
      description:
        'Un maestro sube, revisa cubierta, hojalatería y canaletas, y te explica qué encontró. Visita: $30.000, descontable si haces el trabajo.',
      icon: CalendarCheck,
    },
    {
      num: '03',
      title: 'Reparación y entrega probada',
      description:
        'Coordinamos el día, protegemos tu casa, retiramos escombros y te entregamos el trabajo probado con agua.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 bg-white text-[#3D4F57]" id="como-funciona" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C8643B]">
            Paso a paso sin sorpresas
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#16323F] mt-2 tracking-tight">
            Así de simple: de la gotera al techo sellado
          </h2>
        </div>

        {/* 3 Steps with Timeline */}
        <div className="mt-16 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-1 bg-stone-200 z-0">
            <div
              className="h-full bg-[#C8643B] transition-all duration-300 origin-left"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#F6F3EE] p-8 rounded-[14px] border border-stone-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-4xl font-extrabold text-[#C8643B]">
                        {step.num}
                      </span>
                      <div className="w-12 h-12 rounded-[10px] bg-white text-[#16323F] flex items-center justify-center border border-stone-200 shadow-2xs">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#16323F] leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#3D4F57] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Priority Emergency Note */}
        <div className="mt-12 max-w-2xl mx-auto p-5 rounded-[12px] bg-[#16323F] text-white flex items-start gap-4 shadow-md">
          <AlertCircle className="w-6 h-6 text-[#C8643B] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h4 className="font-display text-base font-bold text-white">
              ¿Te está entrando agua ahora?
            </h4>
            <p className="mt-1 text-sm text-stone-300">
              Dilo al escribir y priorizamos tu visita para acudir a la brevedad con soluciones de contención.
            </p>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-10 text-center">
          <a
            href={createWhatsAppLink('Hola, Techo Santiago. Necesito agendar una visita técnica para revisar mi techo.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('como_funciona')}
            className="btn-shine inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B2A1A] font-bold text-base px-8 py-3.5 rounded-[12px] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            <span>Agendar mi visita por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
