import { Building2, Warehouse } from 'lucide-react';

export function BandaEmpresas() {
  return (
    <section className="bg-[#F6F3EE] border-y border-stone-300/70 py-4 px-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-[#3D4F57]">
        <span className="font-semibold text-[#16323F]">
          ¿Es un edificio, una comunidad o un galpón?
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
          <a
            href="https://techoscorporativos.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[#16323F] hover:text-[#C8643B] transition-colors underline decoration-stone-400 hover:decoration-[#C8643B] underline-offset-4"
          >
            <Building2 className="w-4 h-4 text-[#C8643B]" aria-hidden="true" />
            <span>Edificios y comunidades → techoscorporativos.cl</span>
          </a>

          <span className="hidden sm:inline text-stone-300" aria-hidden="true">|</span>

          <a
            href="https://techosindustriales.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[#16323F] hover:text-[#C8643B] transition-colors underline decoration-stone-400 hover:decoration-[#C8643B] underline-offset-4"
          >
            <Warehouse className="w-4 h-4 text-[#C8643B]" aria-hidden="true" />
            <span>Galpones y bodegas → techosindustriales.cl</span>
          </a>
        </div>
      </div>
    </section>
  );
}
