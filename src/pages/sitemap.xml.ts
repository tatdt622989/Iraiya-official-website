import { LOCALES, routeForLocale } from '../i18n/config';

export const prerender = true;

const site = 'https://iraiya.com';
const pagePaths = ['/', '/apps', '/labs', '/blog', '/services', '/contact'];

export function GET() {
  const urls = LOCALES.flatMap((locale) =>
    pagePaths.map((path) => `<url><loc>${new URL(routeForLocale(locale, path), site).toString()}</loc></url>`)
  ).join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
