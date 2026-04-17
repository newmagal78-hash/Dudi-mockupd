'use strict';

const SUPPORTED_LANGS = ['he', 'en', 'de', 'nl'];
const DEFAULT_LANG    = 'he';
const STORAGE_KEY     = 'sos_lang';

const translations = {
  he: {
    dir: 'rtl',
    header_title: 'מערכת חכמה לניהול הזמנות',
    header_subtitle: 'תהליכי עבודה ומחזור חיים של הזמנה',
    tag_setup: 'הקמה',
    phase1_title: 'שלב 1 — הקמה וניהול קטלוג',
    phase1_sub: 'הגדרת מוצרים · תמחור · קטלוג דיגיטלי',
    tag_rest: 'לקוח',
    phase2_title: 'שלב 2 — אזור מסעדן ואישור הזמנה',
    phase2_sub: 'הודעת וואטסאפ · אישור/עדכון הזמנה',
    tag_ops: 'תפעולי',
    phase3_title: 'שלב 3 — ניהול מלקטים ונהגים',
    phase3_sub: 'הרשמה ותפקידים · שיוך מסעדות',
    tag_transparent: 'שקיפות',
    phase4_title: 'שלב 4 — מעקב סטטוס בזמן אמת',
    phase4_sub: 'התקבלה ← ליקוט ← בנסיעה ← סופק',
    tag_mgmt: 'ניהולי',
    phase5_title: 'שלב 5 — דשבורד מנהל וחשבוניות',
    phase5_sub: 'ניתוח נתונים · היסטוריית חשבוניות'
  },
  en: {
    dir: 'ltr',
    header_title: 'Smart Order System',
    header_subtitle: 'Workflow & Order Lifecycle',
    tag_setup: 'Setup',
    phase1_title: 'Phase 1 — Catalog Management',
    phase1_sub: 'Product Definition · Pricing · Digital Catalog',
    tag_rest: 'Client',
    phase2_title: 'Phase 2 — Restaurant Portal',
    phase2_sub: 'WhatsApp Alerts · Order Confirmation',
    tag_ops: 'Ops',
    phase3_title: 'Phase 3 — Picking & Logistics',
    phase3_sub: 'Staff Roles · Restaurant Assignment',
    tag_transparent: 'Real-time',
    phase4_title: 'Phase 4 — Live Status Tracking',
    phase4_sub: 'Received → Picking → Driving → Delivered',
    tag_mgmt: 'Admin',
    phase5_title: 'Phase 5 — Manager Dashboard',
    phase5_sub: 'Data Analytics · Invoice History'
  },
  de: {
    dir: 'ltr',
    header_title: 'Intelligentes Bestellsystem',
    header_subtitle: 'Arbeitsablauf & Bestellzyklus',
    tag_setup: 'Einrichtung',
    phase1_title: 'Phase 1 — Katalogmanagement',
    phase1_sub: 'Produkte · Preise · Digitaler Katalog'
  },
  nl: {
    dir: 'ltr',
    header_title: 'Slim Bestelsysteem',
    header_subtitle: 'Workflow & Bestelcyclus',
    tag_setup: 'Installatie',
    phase1_title: 'Fase 1 — Catalogusbeheer',
    phase1_sub: 'Producten · Prijzen · Digitale Catalogus'
  }
};

function getLang() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
}

function switchLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  localStorage.setItem(STORAGE_KEY, lang);
  location.reload();
}

function applyTranslations() {
  const lang = getLang();
  const t = translations[lang];
  
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
}

function addSwitcher() {
  const nav = document.createElement('nav');
  nav.style = "position:fixed; top:0; left:0; right:0; background:#fff; border-bottom:1px solid #ddd; padding:10px; display:flex; justify-content:center; gap:10px; z-index:9999;";
  
  const langs = [
    { c: 'he', f: '🇮🇱', n: 'HE' },
    { c: 'en', f: '🇺🇸', n: 'EN' },
    { c: 'de', f: '🇩🇪', n: 'DE' },
    { c: 'nl', f: '🇳🇱', n: 'NL' }
  ];

  langs.forEach(l => {
    const btn = document.createElement('button');
    btn.innerHTML = `${l.f} ${l.n}`;
    btn.style = `cursor:pointer; border:1px solid #ccc; background:#f9f9f9; padding:5px 10px; border-radius:4px; font-weight:${getLang() === l.c ? 'bold' : 'normal'}`;
    btn.onclick = () => switchLanguage(l.c);
    nav.appendChild(btn);
  });

  document.body.prepend(nav);
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  addSwitcher();
});
