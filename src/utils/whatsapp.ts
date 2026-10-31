import { WHATSAPP_NUMBER } from '../config/site';

export type WhatsAppMessagePreset = 'general' | 'mayorista' | 'catalogo' | 'producto';

export interface ProductWhatsAppParams {
  nombre: string;
  sku: string;
  detallado?: boolean;
}

export function getGeneralWhatsAppMessage(): string {
  return 'Hola, quiero consultar por productos plásticos de San Pedro. ¿Me pueden pasar información?';
}

export function getWholesaleWhatsAppMessage(): string {
  return 'Hola, quiero cotizar productos plásticos por cantidad para mi comercio. ¿Me ayudan?';
}

export function getProductWhatsAppMessage({
  nombre,
  sku,
  detallado = true,
}: ProductWhatsAppParams): string {
  if (detallado) {
    return `Hola, quiero consultar por ${nombre} - SKU ${sku}. ¿Me pasás precio, colores disponibles y cantidad mínima?`;
  }
  return `Hola, quiero consultar por el producto ${nombre} - SKU ${sku}. ¿Me pasás precio y disponibilidad?`;
}

export function buildWhatsAppUrl(
  customMessage?: string,
  phone: string = WHATSAPP_NUMBER
): string {
  const cleanPhone = phone.replace(/[^\d]/g, '');
  const message = customMessage?.trim() || getGeneralWhatsAppMessage();
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

