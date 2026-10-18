import { MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';
import {
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_RAW,
  EMAIL_ADDRESS,
  trackPhoneClick,
  trackEmailClick,
} from '../lib/analytics';

export function Footer() {
  return (
    <footer className="bg-[#16323F] text-stone-300 border-t border-white/10 pt-16 pb-12">
      {/* <!-- [FALTA: Instagram / Facebook / perfil de Google Business] --> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://techosantiago.cl/img/logo-techo-santiago-transparente.png"
                alt="Logo Techo Santiago"
                width="36"
                height="36"
                className="w-8 h-8 object-contain brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-white text-xl tracking-tight">
                <strong className="font-bold font-display">Techo</strong>{' '}
                <span className="font-normal font-display">Santiago</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Reparación, cambio, mantención, instalación e impermeabilización de techos en Santiago y la Región Metropolitana.
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400 pt-2">
              <Shield className="w-4 h-4 text-[#C8643B]" aria-hidden="true" />
              <span>Personal con documentación al día y trabajo en altura seguro</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Contacto
            </h4>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER_RAW}`}
                  onClick={() => trackPhoneClick('footer')}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C8643B] shrink-0" aria-hidden="true" />
                  <span>{PHONE_NUMBER_DISPLAY}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  onClick={trackEmailClick}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C8643B] shrink-0" aria-hidden="true" />
                  <span>{EMAIL_ADDRESS}</span>
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8643B] shrink-0 mt-0.5" aria-hidden="true" />
                <span>La Capitanía 80, oficina 108, Las Condes, Santiago</span>
              </li>
            </ul>
          </div>

          {/* Horario & Cobertura */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Horario & Cobertura
            </h4>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C8643B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block font-medium text-white">Lunes a viernes</span>
                  <span className="text-stone-300">9:00 a 18:00</span>
                </div>
              </li>

              <li className="pt-2 text-xs leading-relaxed text-stone-300">
                <strong className="text-white block font-medium mb-1">Zona de atención:</strong>
                Sector oriente, Chicureo y parcelas de agrado (Cajón del Maipo, Linderos, Mostazal).
              </li>
            </ul>
          </div>

          {/* Legal and Commercial Notice */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Transparencia
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Visita técnica $30.000 con diagnóstico en terreno y presupuesto por escrito. Se descuenta del monto final al realizar el trabajo.
            </p>
            <p className="text-xs text-stone-400">
              Emitimos factura y boleta para particulares, administraciones y empresas.
            </p>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 text-center sm:text-left">
          <p>© 2026 Techo Santiago. Todos los derechos reservados.</p>
          <p>techosantiago.cl</p>
        </div>
      </div>
    </footer>
  );
}
