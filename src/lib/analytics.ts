/**
 * Analytics and WhatsApp link generation helper for Techo Santiago
 * Dispatches events to window.dataLayer for Google Tag Manager / GA4
 */

export const PHONE_NUMBER_DISPLAY = '+56 9 8746 6011';
export const PHONE_NUMBER_RAW = '+56987466011';
export const WHATSAPP_BASE_URL = 'https://wa.me/56987466011';
export const EMAIL_ADDRESS = 'contacto@techosantiago.cl';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Track WhatsApp click with source location
 */
export function trackWhatsAppClick(ubicacion: string) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_click',
      ubicacion,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track direct phone call click with source location
 */
export function trackPhoneClick(ubicacion: string) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'phone_click',
      ubicacion,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track form submission with selected comuna
 */
export function trackFormSubmit(comuna: string) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_submit',
      comuna,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track email click
 */
export function trackEmailClick() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'email_click',
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Build prefilled WhatsApp link with URL-encoded message
 */
export function createWhatsAppLink(message?: string): string {
  const defaultText = 'Hola, Techo Santiago. Necesito cotizar un servicio de techos.';
  const text = message || defaultText;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
}
