/**
 * useSEO — injects page-specific <title>, <meta>, <link rel="canonical">,
 * Open Graph, Twitter Card and JSON-LD structured data into <head>.
 *
 * Usage:
 *   useSEO({
 *     title: 'Page Title | PathMakers Technologies',
 *     description: 'Meta description …',
 *     canonical: 'https://pathmakerstech.in/about',
 *     structuredData: { "@context": "…", … }
 *   });
 */

import { useEffect } from 'react';

const SITE_URL = 'https://pathmakerstech.in';
const SITE_NAME = 'PathMakers Technologies';
const DEFAULT_IMAGE = `${SITE_URL}/pmlogo.png`;

export default function useSEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  structuredData = null,
  noindex = false,
}) {
  useEffect(() => {
    // ── Title ─────────────────────────────────────────────────────────────
    if (title) document.title = title;

    // ── Helper: upsert <meta> ──────────────────────────────────────────────
    const setMeta = (selector, attr, value) => {
      if (!value) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const match = selector.match(/\[(.+?)="(.+?)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // ── Helper: upsert <link> ──────────────────────────────────────────────
    const setLink = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Standard meta ──────────────────────────────────────────────────────
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex,nofollow' : 'index,follow');

    // ── Canonical ──────────────────────────────────────────────────────────
    setLink('canonical', canonical);

    // ── Open Graph ─────────────────────────────────────────────────────────
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:site_name"]', 'content', SITE_NAME);

    // ── Twitter Card ───────────────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);

    // ── Structured Data (JSON-LD) ──────────────────────────────────────────
    const SCRIPT_ID = 'seo-structured-data';
    let existing = document.getElementById(SCRIPT_ID);
    if (structuredData) {
      if (!existing) {
        existing = document.createElement('script');
        existing.id = SCRIPT_ID;
        existing.type = 'application/ld+json';
        document.head.appendChild(existing);
      }
      existing.textContent = JSON.stringify(structuredData);
    } else if (existing) {
      existing.remove();
    }

    // ── Cleanup on unmount ─────────────────────────────────────────────────
    return () => {
      document.title = `${SITE_NAME} | Custom Software Development Company`;
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.setAttribute('content', 'index,follow');
    };
  }, [title, description, canonical, image, structuredData, noindex]);
}
