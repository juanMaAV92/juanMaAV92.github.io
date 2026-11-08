// Sitemap con las dos versiones de cada página enlazadas por hreflang.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { DEFAULT_LANG, LANGS, localeUrl } from '../i18n/site';

const PAGES: { path: string; priority: string }[] = [
  { path: '/', priority: '1.0' },
  { path: '/pdf-tool', priority: '0.8' },
  { path: '/steer', priority: '0.8' },
  { path: '/cuentas-claras', priority: '0.8' },
  { path: '/mermaid-styler', priority: '0.7' },
  { path: '/pulso', priority: '0.6' },
  { path: '/go-utils', priority: '0.5' },
  { path: '/kotlin-utils', priority: '0.5' },
];

export const GET: APIRoute = async () => {
  const docs = await getCollection('steer-docs');
  const docPaths = docs.map((d) => ({
    path: d.slug === 'getting-started' ? '/steer/docs' : `/steer/docs/${d.slug}`,
    priority: '0.4',
  }));
  const urls = [...PAGES, ...docPaths].flatMap(({ path, priority }) =>
    LANGS.map((lang) => {
      const alternates = [
        ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${localeUrl(l, path)}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${localeUrl(DEFAULT_LANG, path)}"/>`,
      ].join('\n');
      return `  <url>\n    <loc>${localeUrl(lang, path)}</loc>\n${alternates}\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    }),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
