export interface CategoryInfo {
  slug: 'ganchos' | 'colgadores' | 'llaveros';
  nombre: string;
  nombreCorto: string;
  descripcion: string;
  beneficioClave: string;
}

export const SITE_CONFIG = {
  nombreEmpresa: 'San Pedro Plásticos',
  eslogan: 'Fábrica directa de productos plásticos para comercios y mayoristas',
  descripcion:
    'Fábrica de productos plásticos: ganchos para ropa, colgadores, perchas plásticas y muñecos tipo llavero. Venta mayorista y minorista con atención directa por WhatsApp.',
  telefono: '[Teléfono]',
  // Número numérico internacional para enlace wa.me (Reemplazar con el número real sin + ni espacios)
  whatsapp: '5491100000000',
  whatsappDisplay: '[Teléfono WhatsApp]',
  email: 'ventas@sanpedroplasticos.com',
  direccion: '[Dirección de la fábrica]',
  ciudad: '[Ciudad]',
  pais: '[País]',
  horarios: 'Lunes a Viernes de [08:00 a 17:00 hs] | Sábados de [08:00 a 12:00 hs]',
  urlSitio: 'https://sanpedroplasticos.com',
  imagenOG: '/og-image.png',
  redesSociales: {
    instagram: '',
    facebook: '',
  },
  metricasEditables: [
    {
      valor: '[Años de experiencia]',
      etiqueta: 'Trayectoria en fabricación plástica',
      detalle: 'Producción enfocada en artículos resistentes de alta rotación comercial.',
    },
    {
      valor: '[Cantidad de clientes]',
      etiqueta: 'Comercios y mayoristas abastecidos',
      detalle: 'Atención directa a bazares, tiendas de indumentaria y distribuidores.',
    },
    {
      valor: '100% Directo',
      etiqueta: 'Trato de fábrica sin intermediarios',
      detalle: 'Cotizaciones ágiles por volumen y seguimiento personalizado por WhatsApp.',
    },
    {
      valor: '[Zonas de entrega]',
      etiqueta: 'Cobertura y envíos coordinados',
      detalle: 'Retiro en planta o despacho coordinado según el volumen de tu pedido.',
    },
  ],
  categorias: [
    {
      slug: 'ganchos',
      nombre: 'Ganchos para Ropa',
      nombreCorto: 'Ganchos',
      descripcion:
        'Broches y ganchos plásticos de alta sujeción y resistencia para tender prendas. Ideales para bazares, supermercados y reventa por pack.',
      beneficioClave: 'Alta rotación en bazares y comercios de artículos del hogar',
    },
    {
      slug: 'colgadores',
      nombre: 'Colgadores y Perchas',
      nombreCorto: 'Colgadores',
      descripcion:
        'Perchas y colgadores plásticos reforzados para organizar exhibidores de tiendas de ropa, locales comerciales y uso doméstico diario.',
      beneficioClave: 'Estructura firme que no deforma las prendas ni se arquea',
    },
    {
      slug: 'llaveros',
      nombre: 'Llaveros y Muñecos Plásticos',
      nombreCorto: 'Llaveros',
      descripcion:
        'Muñecos plásticos tipo llavero con terminación prolija y variedad de colores. Excelentes para jugueterías, cotillón, promociones y venta por cantidad.',
      beneficioClave: 'Colores llamativos y excelente margen para revendedores',
    },
  ] satisfies CategoryInfo[],
} as const;

export type SiteConfig = typeof SITE_CONFIG;

