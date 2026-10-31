import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      slug: z.string(),
      nombre: z.string(),
      categoria: z.enum(['ganchos', 'llaveros', 'colgadores']),
      descripcionCorta: z.string(),
      descripcionLarga: z.string(),
      imagenes: z.array(image()).min(1),
      especificaciones: z.object({
        material: z.string(),
        medidas: z.string(),
        peso: z.string(),
        presentacion: z.string(),
        usoRecomendado: z.string(),
        ventaMinima: z.string().optional(),
      }),
      beneficios: z
        .array(
          z.object({
            titulo: z.string(),
            descripcion: z.string(),
          })
        )
        .optional(),
      sku: z.string(),
      precio: z.union([z.literal('consultar'), z.number()]),
      stock: z.enum(['disponible', 'bajo-stock', 'consultar']),
      colores: z.array(z.string()),
      destacado: z.boolean().default(false),
      orden: z.number().default(99),
      seoTitle: z.string(),
      seoDescription: z.string(),
    }),
});

export const collections = {
  productos,
};

