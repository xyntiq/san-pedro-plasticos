import { SITE_CONFIG } from '../config/site';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildCanonicalUrl(pathname: string): string {
  const base = SITE_CONFIG.urlSitio.replace(/\/$/, '');
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${cleanPath}`;
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.nombreEmpresa,
    url: SITE_CONFIG.urlSitio,
    logo: `${SITE_CONFIG.urlSitio}/favicon.svg`,
    description: SITE_CONFIG.descripcion,
    email: SITE_CONFIG.email,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['Spanish'],
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.nombreEmpresa,
    url: SITE_CONFIG.urlSitio,
    description: SITE_CONFIG.descripcion,
    inLanguage: 'es',
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : buildCanonicalUrl(item.url),
    })),
  };
}

