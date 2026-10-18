import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink, trackWhatsAppClick } from '../lib/analytics';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once user scrolls beyond ~350px (past hero header)
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 md:hidden print:hidden">
      <a
        href={createWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('flotante')}
        aria-label="Escribir por WhatsApp a Techo Santiago"
        className="animate-whatsapp-pulse flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-[#0B2A1A] shadow-xl hover:bg-[#20BA5A] transition-transform active:scale-90 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-8 h-8 fill-current" aria-hidden="true" />
      </a>
    </div>
  );
}
