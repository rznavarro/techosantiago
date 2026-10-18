/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problema } from './components/Problema';
import { Servicios } from './components/Servicios';
import { Obras } from './components/Obras';
import { PorQueElegirnos } from './components/PorQueElegirnos';
import { ComoFunciona } from './components/ComoFunciona';
import { Cobertura } from './components/Cobertura';
import { PreguntasFrecuentes } from './components/PreguntasFrecuentes';
import { CtaFinal } from './components/CtaFinal';
import { BandaEmpresas } from './components/BandaEmpresas';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EE] text-[#3D4F57]">
      {/* <!-- [FALTA: confirmar si la marca usa un color secundario. Solo se pudo extraer #16323F del sitio actual.] --> */}
      {/* <!-- [FALTA: confirmar tipografía de marca] --> */}

      {/* Header fijo y compacto con transición de scroll */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero: pantalla completa con Ken Burns, lluvia sutil, H1 único y franja de confianza */}
        <Hero />

        {/* 2. Problema: goteras, diagnóstico antes de presupuestar, 3 señales de alerta */}
        <Problema />

        {/* 3. Servicios: 6 tarjetas de servicio con cotización específica a WhatsApp y chips de materiales */}
        <Servicios />

        {/* 4. Obras Reales: 8 fotos con comuna, prueba social real sin testimonios inventados */}
        <Obras />

        {/* 5. Por qué elegirnos: foto real + lista de 6 compromisos clave */}
        <PorQueElegirnos />

        {/* 6. Cómo funciona: 3 pasos claros unidos por progreso de scroll + aviso de gotera activa */}
        <ComoFunciona />

        {/* 7. Cobertura: sector oriente, Chicureo y parcelas de agrado con horario visible */}
        <Cobertura />

        {/* 8. Preguntas Frecuentes: acordeón accesible con respuestas completas */}
        <PreguntasFrecuentes />

        {/* 9. CTA Final: llamado urgente con botón directo y formulario de 3 campos */}
        <CtaFinal />

        {/* 10. Banda Empresas: enlace a sitios especializados para comunidades e industrias */}
        <BandaEmpresas />
      </main>

      {/* 11. Footer: datos oficiales de la empresa, dirección, horario y contacto */}
      <Footer />

      {/* Botón flotante móvil de WhatsApp con pulso cada 6s */}
      <FloatingWhatsApp />
    </div>
  );
}
