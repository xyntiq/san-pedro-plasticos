export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const CATEGORY_LABELS: Record<'ganchos' | 'llaveros' | 'colgadores', string> = {
  ganchos: 'Ganchos para Ropa',
  colgadores: 'Colgadores y Perchas',
  llaveros: 'Llaveros Plásticos',
};

export const STOCK_CONFIG: Record<
  'disponible' | 'bajo-stock' | 'consultar',
  { label: string; badgeClass: string; dotClass: string; schemaUrl: string }
> = {
  disponible: {
    label: 'Stock disponible',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    dotClass: 'bg-emerald-500',
    schemaUrl: 'https://schema.org/InStock',
  },
  'bajo-stock': {
    label: 'Bajo stock - Consultar',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    dotClass: 'bg-amber-500',
    schemaUrl: 'https://schema.org/LimitedAvailability',
  },
  consultar: {
    label: 'Producción a pedido / Consultar',
    badgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
    dotClass: 'bg-sky-500',
    schemaUrl: 'https://schema.org/PreOrder',
  },
};

export const COLOR_SWATCH_MAP: Record<string, string> = {
  Negro: '#1F2937',
  Blanco: '#F9FAFB',
  Azul: '#0A4D68',
  Celeste: '#0EA5E9',
  Turquesa: '#088395',
  Verde: '#22C55E',
  'Verde Lima': '#65A30D',
  Naranja: '#FF6B35',
  Fucsia: '#EC4899',
  Rosa: '#F472B6',
  Rojo: '#EF4444',
  Amarillo: '#EAB308',
  Surtidos: 'linear-gradient(135deg, #EC4899 0%, #22C55E 35%, #0EA5E9 70%, #FF6B35 100%)',
};

