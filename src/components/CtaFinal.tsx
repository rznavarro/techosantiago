import { useState, FormEvent } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { RainEffect } from './RainEffect';
import {
  WHATSAPP_BASE_URL,
  trackFormSubmit,
  trackWhatsAppClick,
} from '../lib/analytics';

export function CtaFinal() {
  const [nombre, setNombre] = useState('');
  const [comuna, setComuna] = useState('Lo Barnechea');
  const [problema, setProblema] = useState('');

  const comunas = [
    'Lo Barnechea',
    'Las Condes',
    'Vitacura',
    'La Reina',
    'Peñalolén',
    'Huechuraba',
    'Colina (Chicureo)',
    'El Arrayán',
    'Ñuñoa',
    'Providencia',
    'San José de Maipo',
    'Buin (Linderos)',
    'Mostazal',
    'Otra comuna',
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Construct tailored WhatsApp text
    const cleanNombre = nombre.trim() || 'Un cliente';
    const cleanProblema = problema.trim() || 'Necesito una revisión técnica de mi techo.';
    const message = `Hola, Techo Santiago. Mi nombre es ${cleanNombre}, vivo en ${comuna}. ${cleanProblema}`;

    trackFormSubmit(comuna);
    trackWhatsAppClick('cta_final_form');

    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-20 bg-[#16323F] text-white overflow-hidden" id="contacto">
      {/* Subtle Rain Canvas background */}
      <RainEffect opacity={0.16} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C8643B]">
            Atención rápida
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 tracking-tight">
            No esperes a que la gotera crezca
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-200 leading-relaxed">
            Escríbenos con una foto de tu techo y agendamos la visita. Diagnóstico en terreno y presupuesto por escrito por $30.000, descontable del trabajo.
          </p>

          {/* Big WhatsApp CTA Button */}
          <div className="mt-8 flex justify-center">
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
                'Hola, Techo Santiago. Necesito agendar una visita técnica para revisar mi techo.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('cta_final_button')}
              className="btn-shine inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B2A1A] font-bold text-lg px-9 py-4 rounded-[14px] shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-6 h-6 fill-current shrink-0" aria-hidden="true" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 3-Field Quick Contact Form */}
        <div className="mt-14 max-w-xl mx-auto bg-[#0F232D]/90 backdrop-blur-md p-6 sm:p-8 rounded-[16px] border border-white/10 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="font-display text-lg font-bold text-white">
              O completa tus datos y te abrimos el chat listo:
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre y apellido"
                className="w-full px-4 py-3 rounded-[10px] bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C8643B] focus:border-transparent text-sm transition-colors"
              />
            </div>

            <div>
              <label htmlFor="comuna" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                Comuna
              </label>
              <select
                id="comuna"
                name="comuna"
                value={comuna}
                onChange={(e) => setComuna(e.target.value)}
                className="w-full px-4 py-3 rounded-[10px] bg-[#16323F] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#C8643B] focus:border-transparent text-sm transition-colors"
              >
                {comunas.map((c) => (
                  <option key={c} value={c} className="bg-[#16323F] text-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="problema" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                ¿Qué está pasando?
              </label>
              <input
                type="text"
                id="problema"
                name="problema"
                required
                value={problema}
                onChange={(e) => setProblema(e.target.value)}
                placeholder="Ej.: mancha en el cielo del living cuando llueve"
                className="w-full px-4 py-3 rounded-[10px] bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C8643B] focus:border-transparent text-sm transition-colors"
              />
            </div>

            <button
              type="submit"
              className="btn-shine w-full mt-2 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B2A1A] font-bold text-base py-3.5 px-6 rounded-[10px] shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Send className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>Enviar por WhatsApp</span>
            </button>

            <p className="text-center text-xs text-stone-300 pt-2 font-medium">
              Respondemos de lunes a viernes de 9:00 a 18:00. Fuera de horario, el siguiente día hábil.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
