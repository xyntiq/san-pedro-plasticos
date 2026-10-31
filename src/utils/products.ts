import { getCollection, type CollectionEntry } from 'astro:content';

export type ProductoEntry = CollectionEntry<'productos'>;

export async function getAllProducts(): Promise<ProductoEntry[]> {
  const productos = await getCollection('productos');
  return productos.sort((a, b) => a.data.orden - b.data.orden);
}

export async function getFeaturedProducts(limit = 4): Promise<ProductoEntry[]> {
  const productos = await getAllProducts();
  return productos.filter((p) => p.data.destacado).slice(0, limit);
}

export async function getProductsByCategory(
  categoria: 'ganchos' | 'llaveros' | 'colgadores'
): Promise<ProductoEntry[]> {
  const productos = await getAllProducts();
  return productos.filter((p) => p.data.categoria === categoria);
}

export async function getRelatedProducts(
  currentSlug: string,
  categoria: 'ganchos' | 'llaveros' | 'colgadores',
  limit = 3
): Promise<ProductoEntry[]> {
  const all = await getAllProducts();
  const sameCategory = all.filter(
    (p) => p.data.slug !== currentSlug && p.data.categoria === categoria
  );
  const others = all.filter(
    (p) => p.data.slug !== currentSlug && p.data.categoria !== categoria
  );
  return [...sameCategory, ...others].slice(0, limit);
}

