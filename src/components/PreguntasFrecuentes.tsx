import { useState } from 'react';
import { Plus, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, trackWhatsAppClick } from '../lib/analytics';

export function PreguntasFrecuentes() {
  // First item open by default for immediate preview
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto cuesta reparar un techo en Santiago?',
      answer:
        'Depende del origen de la filtración y de cuántos metros están comprometidos: sellar una unión de hojalatería no se parece en nada a cambiar un paño completo de cubierta. Por eso Techo Santiago no publica precios cerrados. La visita técnica cuesta $30.000, incluye diagnóstico en terreno y presupuesto por escrito, y se descuenta del trabajo si lo contratas.',
    },
    {
      question: '¿Atienden en mi comuna?',
      answer:
        'Techo Santiago trabaja principalmente en el sector oriente de Santiago (Lo Barnechea, Las Condes, Vitacura, La Reina, Peñalolén, El Arrayán, Huechuraba, Ñuñoa y Providencia), en Chicureo y en parcelas de agrado del Cajón del Maipo, Linderos y Mostazal. Fuera de esa zona se cotiza el traslado antes de agendar.',
    },
    {
      question: '¿En cuánto tiempo pueden ir a ver mi techo?',
      answer:
        'Normalmente entre 24 y 48 horas hábiles. En temporada de lluvia se prioriza a quienes tienen una filtración activa, así que si te está entrando agua, indícalo al escribir.',
    },
    {
      question: '¿Pueden cotizar solo con fotos?',
      answer:
        'Con fotos del techo y del daño interior se puede dar una orientación inicial, pero el presupuesto formal se entrega después de subir al techo. Cotizar sin ver es la forma más rápida de que después aparezcan costos que nadie previó.',
    },
    {
      question: '¿Trabajan cuando llueve?',
      answer:
        'Las emergencias sí, con soluciones de contención para frenar el paso del agua. La reparación definitiva se hace con el techo seco, porque casi ningún sellante ni membrana adhiere bien sobre una superficie mojada.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white text-[#3D4F57]" id="preguntas">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C8643B]">
            Dudas resueltas
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#16323F] mt-2 tracking-tight">
            Preguntas frecuentes sobre reparación de techos en Santiago
          </h2>
        </div>

        {/* Accessible Accordion List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className="border border-stone-200 rounded-[14px] overflow-hidden bg-[#F6F3EE]/40 transition-colors"
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-[#16323F] hover:text-[#C8643B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8643B]"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-stone-200 transition-transform duration-300 text-[#16323F] ${
                      isOpen ? 'rotate-45 text-[#C8643B]' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-[#3D4F57] leading-relaxed border-t border-stone-200/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('preguntas')}
            className="btn-shine inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B2A1A] font-bold text-base px-8 py-3.5 rounded-[12px] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
