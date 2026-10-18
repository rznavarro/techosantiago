import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import {
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_RAW,
  createWhatsAppLink,
  trackPhoneClick,
  trackWhatsAppClick,
} from '../lib/analytics';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Obras', href: '#obras' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Preguntas', href: '#preguntas' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* <!-- [FALTA: logo en SVG o PNG de alta resolución] --> */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#16323F]/95 backdrop-blur-md shadow-md py-3'
            : 'bg-gradient-to-b from-[#16323F]/90 via-[#16323F]/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            {/* Zone 1: Logo & Brand Name */}
            <a
              href="#"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8643B] rounded-lg shrink-0"
              aria-label="Techo Santiago - Inicio"
            >
              <img
                src="https://techosantiago.cl/img/logo-techo-santiago-transparente.png"
                alt="Logo Techo Santiago"
                width="36"
                height="36"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain brightness-0 invert transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback styling if remote logo is unavailable
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-white text-xl sm:text-2xl tracking-tight">
                <strong className="font-bold font-display">Techo</strong>{' '}
                <span className="font-normal font-display">Santiago</span>
              </span>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/90">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C8643B] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Direct Phone & Primary WhatsApp CTA */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                onClick={() => trackPhoneClick('header')}
                className="flex items-center gap-2 text-sm font-medium text-white/95 hover:text-white transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8643B] rounded-md px-2 py-1"
                title="Llamar directamente a Techo Santiago"
              >
                <Phone className="w-4 h-4 text-[#C8643B]" aria-hidden="true" />
                <span>{PHONE_NUMBER_DISPLAY}</span>
              </a>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('header')}
                className="btn-shine inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B2A1A] font-semibold text-sm px-4 py-2.5 rounded-[10px] shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>

            {/* Mobile Controls (Phone Icon + Hamburger) */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                onClick={() => trackPhoneClick('header_mobile')}
                className="p-2.5 rounded-lg text-white bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8643B]"
                aria-label={`Llamar al ${PHONE_NUMBER_DISPLAY}`}
              >
                <Phone className="w-5 h-5 text-white" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-white bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8643B]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#16323F] border-t border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-white/90 hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                onClick={() => {
                  trackPhoneClick('mobile_menu');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-white/10 text-white font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#C8643B]" />
                <span>{PHONE_NUMBER_DISPLAY}</span>
              </a>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick('mobile_menu');
                  setMobileMenuOpen(false);
                }}
                className="btn-shine flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#25D366] text-[#0B2A1A] font-bold text-base shadow"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
