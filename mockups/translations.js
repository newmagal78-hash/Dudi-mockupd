'use strict';

const SUPPORTED_LANGS = ['he', 'en', 'de', 'nl'];
const DEFAULT_LANG    = 'he';
const STORAGE_KEY     = 'sos_lang';

const translations = {
  he: {
    dir: 'rtl',
    lang_label: 'עברית',
    status_waiting: 'ממתין לליקוט',
    status_picking: 'בליקוט',
    status_delivery: 'בדרך אליך',
    status_delivery_mgr: 'בדרך ללקוח',
    status_delivered: 'סופק',
    status_paid: 'שולם',
    status_pending: 'ממתין',
    status_debt: 'חוב פתוח',
    status_active: 'פעיל היום',
    status_inactive: 'לא פעיל',
    system_active: 'מערכת פעילה',
    btn_confirm: 'אשר הזמנה',
    btn_edit: 'ערוך הזמנה',
    btn_send_update: 'שלח עדכון',
    btn_voice: 'הקלטה קולית',
    btn_start_pick: 'התחל ליקוט',
    btn_finish_pick: 'הזמנה לוקטה',
    btn_missing_item: 'פריט חסר',
    btn_delivered: 'סופק',
    btn_navigate: 'ניווט (Waze)',
    btn_details: 'פירוט',
    btn_all_orders: 'כל ההזמנות',
    btn_invoices: 'חשבוניות',
    btn_edit_rest: 'עריכה',
    btn_remind: 'שלח תזכורת',
    btn_mark_paid: 'סמן כשולם',
    btn_manage: 'נהל שיוך',
    btn_download_pdf: 'הורד PDF',
    btn_payment_info: 'פרטי תשלום',
    btn_new_order: 'הזמנה חדשה',
    btn_open: 'פתח ←',
    btn_to_collect: 'לגביה',
    whatsapp_auto: 'וואטסאפ אוטומטי',
    whatsapp_greeting: 'שלום! קיבלנו את הזמנתך',
    whatsapp_detail: 'להלן הפירוט:',
    your_order: 'ההזמנה שלך',
    pickup_requested: 'איסוף מבוקש',
    tomorrow_at: 'מחר',
    confirmed_msg: 'אושר! תקבל עדכונים בוואטסאפ',
    change_received: 'השינוי התקבל! ההזמנה עודכנה',
    edit_placeholder: 'למשל: הסר גבינה, הוסף 2 לימונים...',
    or_separator: '— או —',
    my_orders: 'ההזמנות שלי',
    personal_area: 'אזור אישי',
    track_order: 'מעקב הזמנה',
    realtime_status: 'סטטוס בזמן אמת',
    filter_all: 'הכל',
    received_confirmed: 'התקבלה ואושרה',
    waiting_label: 'ממתין',
    driver_label: 'נהג',
    eta_label: 'צפי הגעה',
    minutes_label: "דק'",
    sim_btn_delivery: 'סטטוס: בדרך אליך',
    month_jan: 'ינואר', month_feb: 'פברואר', month_mar: 'מרץ',
    month_apr: 'אפריל', month_may: 'מאי', month_jun: 'יוני',
    month_jul: 'יולי', month_aug: 'אוגוסט', month_sep: 'ספטמבר',
    month_oct: 'אוקטובר', month_nov: 'נובמבר', month_dec: 'דצמבר',
    tab_invoices: 'חשבוניות',
    tab_orders_nav: 'הזמנות שלי',
    tab_profile: 'פרופיל',
    tab_by_order: 'לפי הזמנה',
    tab_monthly: 'חודשי מאוחד',
    monthly_total: 'סה"כ החודש',
    pending_payment: 'ממתין לתשלום',
    total_year: 'סה"כ 2026',
    total_pending_all: 'ממתין סה"כ',
    invoice_label: 'חשבונית',
    item_col: 'פריט',
    qty_col: 'כמות',
    price_col: 'מחיר',
    total_col: 'סה"כ',
    total_to_pay: 'סה"כ לתשלום',
    total_paid_label: 'סה"כ ששולם',
    api_note: 'מחירים מסונכרנים מתוכנת הנהלת החשבונות',
    orders_label: 'הזמנות',
    items_label: 'פריטים',
    picker_role: 'מלקט + נהג',
    active_today: 'פעיל היום',
    waiting_pick_stat: 'ממתין לליקוט',
    currently_picking: 'בליקוט כרגע',
    delivered_today: 'סופק היום',
    tab_picking: 'ליקוט',
    tab_delivery: 'משלוח',
    tab_done: 'הושלם',
    currently_picking_label: 'בליקוט כרגע',
    waiting_to_pick: 'ממתין לליקוט',
    mark_items: 'סמן פריטים שנאספו:',
    of_items: 'מתוך',
    items_word: 'פריטים',
    no_delivery_msg: 'אין הזמנות מוכנות למשלוח. יופיעו כאן לאחר סיום ליקוט.',
    delivery_note_label: 'תעודת משלוח',
    pickup_time: 'איסוף:',
    finish_pick_btn: 'הזמנה לוקטה',
    missing_item_btn: 'פריט חסר',
    completed_section: 'הושלם',
    manager_title: 'דשבורד מנהל',
    tab_orders: 'הזמנות',
    tab_restaurants: 'מסעדות',
    tab_collect: 'גביה',
    tab_team: 'צוות',
    search_rest: 'חפש מסעדה...',
    pickup_hour: 'שעת איסוף',
    amount_label: 'סכום',
    delivered_at: 'סופק בשעה',
    completed_count: 'הושלמו',
    active_count: 'פעילות',
    open_debt: 'חוב פתוח',
    recent_orders: 'הזמנות אחרונות',
    total_debt_label: 'סה"כ חוב',
    last_order: 'הזמנה אחרונה',
    last_payment: 'תשלום אחרון',
    date_label: 'תאריך',
    total_open_debts: 'סה"כ חובות פתוחים',
    orders_today: 'הזמנות היום',
    delivered_word: 'סופק',
    linked_rests: 'מסעדות משויכות',
    open_invoices_count: 'חשבוניות פתוחות',
    updated_label: 'מעודכן',
    phases_title: 'מפת שלבי פיתוח המערכת',
    phases_sub: '6 שלבים · כל שלב עומד בפני עצמו',
    tag_base: 'בסיס', tag_simple: 'פשוט לתפעול', tag_ops: 'תפעולי',
    tag_transparent: 'שקיפות', tag_mgmt: 'ניהולי', tag_auto: 'אוטומציה',
    phase1_title: 'שלב 1 — בוט קולי וקליטת הזמנות',
    phase1_sub: 'מענה קולי חכם · זיהוי שפה · תמלול הזמנה',
    phase2_title: 'שלב 2 — אזור מסעדן ואישור הזמנה',
    phase2_sub: 'הודעת וואטסאפ · אישור/עדכון הזמנה',
    phase3_title: 'שלב 3 — ניהול מלקטים ונהגים',
    phase3_sub: 'הרשמה ותפקידים · שיוך מסעדות',
    phase4_title: 'שלב 4 — מעקב סטטוס בזמן אמת',
    phase4_sub: 'התקבלה → ליקוט → בנסיעה → סופק',
    phase5_title: 'שלב 5 — דשבורד מנהל החברה',
    phase5_sub: 'כל ההזמנות · כל המסעדות · גביה',
    phase6_title: 'שלב 6 — הנהלת חשבונות אוטומטית',
    phase6_sub: 'API לחשבוניות · חשבונית אוטומטית',
    legend_text: 'שלבים 1–4 הם ליבת המערכת · שלבים 5–6 מרחיבים אותה',
    index_title: 'מערכת הזמנות חכמה לליקוט ומשלוח',
    index_sub: 'אפיון ומוקאפים אינטראקטיביים · אפריל 2026',
    spec_complete: 'אפיון הושלם',
    mockups_section: 'מוקאפים אינטראקטיביים',
    docs_section: 'מסמכי אפיון',
  },

  en: {
    dir: 'ltr', lang_label: 'English',
    status_waiting: 'Awaiting Picking', status_picking: 'Picking',
    status_delivery: 'On the Way', status_delivery_mgr: 'Out for Delivery',
    status_delivered: 'Delivered', status_paid: 'Paid', status_pending: 'Pending',
    status_debt: 'Open Balance', status_active: 'Active Today',
    status_inactive: 'Inactive', system_active: 'System Active',
    btn_confirm: 'Confirm Order', btn_edit: 'Edit Order',
    btn_send_update: 'Send Update', btn_voice: 'Voice Recording',
    btn_start_pick: 'Start Picking', btn_finish_pick: 'Order Picked',
    btn_missing_item: 'Missing Item', btn_delivered: 'Delivered',
    btn_navigate: 'Navigate (Waze)', btn_details: 'Details',
    btn_all_orders: 'All Orders', btn_invoices: 'Invoices',
    btn_edit_rest: 'Edit', btn_remind: 'Send Reminder',
    btn_mark_paid: 'Mark as Paid', btn_manage: 'Manage Assignment',
    btn_download_pdf: 'Download PDF', btn_payment_info: 'Payment Details',
    btn_new_order: 'New Order', btn_open: 'Open →', btn_to_collect: 'Collections',
    whatsapp_auto: 'Automatic WhatsApp',
    whatsapp_greeting: 'Hello! We received your order',
    whatsapp_detail: 'Here are the details:',
    your_order: 'Your Order', pickup_requested: 'Requested Pickup',
    tomorrow_at: 'Tomorrow',
    confirmed_msg: "Confirmed! You'll receive WhatsApp updates",
    change_received: 'Change received! Order updated',
    edit_placeholder: 'E.g.: Remove cheese, add 2 lemons...',
    or_separator: '— or —', my_orders: 'My Orders',
    personal_area: 'Personal Area', track_order: 'Track Order',
    realtime_status: 'Real-time Status', filter_all: 'All',
    received_confirmed: 'Received & Confirmed', waiting_label: 'Waiting',
    driver_label: 'Driver', eta_label: 'ETA', minutes_label: 'min',
    sim_btn_delivery: 'Status: On the Way',
    month_jan:'January', month_feb:'February', month_mar:'March',
    month_apr:'April', month_may:'May', month_jun:'June',
    month_jul:'July', month_aug:'August', month_sep:'September',
    month_oct:'October', month_nov:'November', month_dec:'December',
    tab_invoices: 'Invoices', tab_orders_nav: 'My Orders', tab_profile: 'Profile',
    tab_by_order: 'Per Order', tab_monthly: 'Monthly Summary',
    monthly_total: 'This Month Total', pending_payment: 'Pending Payment',
    total_year: 'Total 2026', total_pending_all: 'Total Pending',
    invoice_label: 'Invoice', item_col: 'Item', qty_col: 'Qty',
    price_col: 'Price', total_col: 'Total', total_to_pay: 'Total Due',
    total_paid_label: 'Total Paid',
    api_note: 'Prices synced from accounting software',
    orders_label: 'Orders', items_label: 'Items',
    picker_role: 'Picker + Driver', active_today: 'Active Today',
    waiting_pick_stat: 'Awaiting Picking', currently_picking: 'Currently Picking',
    delivered_today: 'Delivered Today', tab_picking: 'Picking',
    tab_delivery: 'Delivery', tab_done: 'Completed',
    currently_picking_label: 'Currently Picking',
    waiting_to_pick: 'Awaiting Picking',
    mark_items: 'Mark collected items:', of_items: 'of', items_word: 'items',
    no_delivery_msg: 'No orders ready for delivery. Will appear here after picking.',
    delivery_note_label: 'Delivery Note', pickup_time: 'Pickup:',
    finish_pick_btn: 'Order Picked', missing_item_btn: 'Missing Item',
    completed_section: 'Completed',
    manager_title: 'Manager Dashboard', tab_orders: 'Orders',
    tab_restaurants: 'Restaurants', tab_collect: 'Collections', tab_team: 'Team',
    search_rest: 'Search restaurant...', pickup_hour: 'Pickup Time',
    amount_label: 'Amount', delivered_at: 'Delivered at',
    completed_count: 'Completed', active_count: 'Active', open_debt: 'Open Balance',
    recent_orders: 'Recent Orders', total_debt_label: 'Total Debt',
    last_order: 'Last Order', last_payment: 'Last Payment', date_label: 'Date',
    total_open_debts: 'Total Open Balances', orders_today: 'Orders Today',
    delivered_word: 'Delivered', linked_rests: 'Linked Restaurants',
    open_invoices_count: 'Open Invoices', updated_label: 'Up to date',
    phases_title: 'System Development Roadmap',
    phases_sub: '6 phases · Each phase is independent',
    tag_base: 'Foundation', tag_simple: 'Easy to use', tag_ops: 'Operations',
    tag_transparent: 'Transparency', tag_mgmt: 'Management', tag_auto: 'Automation',
    phase1_title: 'Phase 1 — Voice Bot & Order Intake',
    phase1_sub: 'Smart voice response · Language detection · Transcription',
    phase2_title: 'Phase 2 — Restaurant Portal & Confirmation',
    phase2_sub: 'WhatsApp message · Confirm/edit order',
    phase3_title: 'Phase 3 — Picker & Driver Management',
    phase3_sub: 'Registration & roles · Restaurant assignment',
    phase4_title: 'Phase 4 — Real-time Status Tracking',
    phase4_sub: 'Received → Picking → En Route → Delivered',
    phase5_title: 'Phase 5 — Manager Dashboard',
    phase5_sub: 'All orders · All restaurants · Collections',
    phase6_title: 'Phase 6 — Automated Accounting',
    phase6_sub: 'Invoice API · Auto-invoice on confirmation',
    legend_text: 'Phases 1–4 are the core · Phases 5–6 extend the system',
    index_title: 'Smart Order Management System',
    index_sub: 'Design specification & interactive mockups · April 2026',
    spec_complete: 'Spec Complete', mockups_section: 'Interactive Mockups',
    docs_section: 'Specification Documents',
  },

  de: {
    dir: 'ltr', lang_label: 'Deutsch',
    status_waiting: 'Wartet auf Kommissionierung', status_picking: 'In Kommissionierung',
    status_delivery: 'Unterwegs zu Ihnen', status_delivery_mgr: 'Unterwegs zum Kunden',
    status_delivered: 'Geliefert', status_paid: 'Bezahlt', status_pending: 'Ausstehend',
    status_debt: 'Offener Saldo', status_active: 'Heute aktiv',
    status_inactive: 'Inaktiv', system_active: 'System aktiv',
    btn_confirm: 'Bestelling bestätigen', btn_edit: 'Bestellung bearbeiten',
    btn_send_update: 'Änderung senden', btn_voice: 'Sprachaufnahme',
    btn_start_pick: 'Kommissionierung starten',
    btn_finish_pick: 'Bestellung kommissioniert',
    btn_missing_item: 'Artikel fehlt', btn_delivered: 'Geliefert',
    btn_navigate: 'Navigation (Google Maps)', btn_details: 'Details',
    btn_all_orders: 'Alle Bestellungen', btn_invoices: 'Rechnungen',
    btn_edit_rest: 'Bearbeiten', btn_remind: 'Erinnerung senden',
    btn_mark_paid: 'Als bezahlt markieren', btn_manage: 'Zuweisung verwalten',
    btn_download_pdf: 'PDF herunterladen', btn_payment_info: 'Zahlungsdetails',
    btn_new_order: 'Neue Bestellung', btn_open: 'Öffnen →', btn_to_collect: 'Inkasso',
    whatsapp_auto: 'Automatische WhatsApp',
    whatsapp_greeting: 'Hallo! Wir haben Ihre Bestellung erhalten',
    whatsapp_detail: 'Hier sind die Details:',
    your_order: 'Ihre Bestellung', pickup_requested: 'Gewünschte Abholzeit',
    tomorrow_at: 'Morgen',
    confirmed_msg: 'Bestätigt! Sie erhalten Updates per WhatsApp',
    change_received: 'Änderung erhalten! Bestellung aktualisiert',
    edit_placeholder: 'Z.B.: Käse entfernen, 2 Zitronen hinzufügen...',
    or_separator: '— oder —', my_orders: 'Meine Bestellungen',
    personal_area: 'Persönlicher Bereich', track_order: 'Bestellung verfolgen',
    realtime_status: 'Echtzeit-Status', filter_all: 'Alle',
    received_confirmed: 'Empfangen & bestätigt', waiting_label: 'Wartend',
    driver_label: 'Fahrer', eta_label: 'Voraussichtl. Ankunft', minutes_label: 'Min.',
    sim_btn_delivery: 'Status: Unterwegs zu Ihnen',
    month_jan:'Januar', month_feb:'Februar', month_mar:'März',
    month_apr:'April', month_may:'Mai', month_jun:'Juni',
    month_jul:'Juli', month_aug:'August', month_sep:'September',
    month_oct:'Oktober', month_nov:'November', month_dec:'Dezember',
    tab_invoices: 'Rechnungen', tab_orders_nav: 'Bestellungen', tab_profile: 'Profil',
    tab_by_order: 'Pro Bestellung', tab_monthly: 'Monatliche Zusammenfassung',
    monthly_total: 'Gesamtbetrag diesen Monat', pending_payment: 'Ausstehende Zahlung',
    total_year: 'Gesamt 2026', total_pending_all: 'Gesamt ausstehend',
    invoice_label: 'Rechnung', item_col: 'Artikel', qty_col: 'Menge',
    price_col: 'Preis', total_col: 'Gesamt', total_to_pay: 'Zu zahlender Betrag',
    total_paid_label: 'Bezahlter Betrag',
    api_note: 'Preise aus der Buchhaltungssoftware synchronisiert',
    orders_label: 'Bestellungen', items_label: 'Artikel',
    picker_role: 'Kommissionierer + Fahrer', active_today: 'Heute aktiv',
    waiting_pick_stat: 'Wartet auf Kommissionierung',
    currently_picking: 'Wird gerade kommissioniert', delivered_today: 'Heute geliefert',
    tab_picking: 'Kommissionierung', tab_delivery: 'Lieferung', tab_done: 'Abgeschlossen',
    currently_picking_label: 'Wird gerade kommissioniert',
    waiting_to_pick: 'Wartet auf Kommissionierung',
    mark_items: 'Gesammelte Artikel markieren:', of_items: 'von', items_word: 'Artikeln',
    no_delivery_msg: 'Keine Bestellungen für Lieferung bereit. Erscheinen nach Kommissionierung.',
    delivery_note_label: 'Lieferschein', pickup_time: 'Abholung:',
    finish_pick_btn: 'Bestellung kommissioniert', missing_item_btn: 'Artikel fehlt',
    completed_section: 'Abgeschlossen',
    manager_title: 'Manager-Dashboard', tab_orders: 'Bestellungen',
    tab_restaurants: 'Restaurants', tab_collect: 'Inkasso', tab_team: 'Team',
    search_rest: 'Restaurant suchen...', pickup_hour: 'Abholzeit',
    amount_label: 'Betrag', delivered_at: 'Geliefert um',
    completed_count: 'Abgeschlossen', active_count: 'Aktiv', open_debt: 'Offener Saldo',
    recent_orders: 'Letzte Bestellungen', total_debt_label: 'Gesamtschuld',
    last_order: 'Letzte Bestellung', last_payment: 'Letzte Zahlung', date_label: 'Datum',
    total_open_debts: 'Gesamte offene Salden', orders_today: 'Bestellungen heute',
    delivered_word: 'Geliefert', linked_rests: 'Zugewiesene Restaurants',
    open_invoices_count: 'Offene Rechnungen', updated_label: 'Aktuell',
    phases_title: 'System-Entwicklungsfahrplan',
    phases_sub: '6 Phasen · Jede Phase ist unabhängig',
    tag_base: 'Grundlage', tag_simple: 'Einfach zu bedienen', tag_ops: 'Betrieb',
    tag_transparent: 'Transparenz', tag_mgmt: 'Management', tag_auto: 'Automatisierung',
    phase1_title: 'Phase 1 — Sprachbot & Bestellungsaufnahme',
    phase1_sub: 'Intelligente Sprachansage · Spracherkennung · Transkription',
    phase2_title: 'Phase 2 — Restaurantbereich & Bestätigung',
    phase2_sub: 'WhatsApp-Nachricht · Bestellung bestätigen/bearbeiten',
    phase3_title: 'Phase 3 — Kommissionierer & Fahrerverwaltung',
    phase3_sub: 'Registrierung & Rollen · Restaurantzuweisung',
    phase4_title: 'Phase 4 — Echtzeit-Statusverfolgung',
    phase4_sub: 'Empfangen → Kommissionierung → Unterwegs → Geliefert',
    phase5_title: 'Phase 5 — Manager-Dashboard',
    phase5_sub: 'Alle Bestellungen · Alle Restaurants · Inkasso',
    phase6_title: 'Phase 6 — Automatisierte Buchhaltung',
    phase6_sub: 'Rechnungs-API · Automatische Rechnung bei Bestätigung',
    legend_text: 'Phasen 1–4 sind der Kern · Phasen 5–6 erweitern das System',
    index_title: 'Intelligentes Bestellmanagementsystem',
    index_sub: 'Design-Spezifikation & interaktive Mockups · April 2026',
    spec_complete: 'Spezifikation abgeschlossen',
    mockups_section: 'Interaktive Mockups', docs_section: 'Spezifikationsdokumente',
  },

  nl: {
    dir: 'ltr', lang_label: 'Nederlands',
    status_waiting: 'Wacht op verzameling', status_picking: 'Wordt verzameld',
    status_delivery: 'Onderweg naar u', status_delivery_mgr: 'Onderweg naar klant',
    status_delivered: 'Geleverd', status_paid: 'Betaald', status_pending: 'In afwachting',
    status_debt: 'Openstaand saldo', status_active: 'Vandaag actief',
    status_inactive: 'Inactief', system_active: 'Systeem actief',
    btn_confirm: 'Bestelling bevestigen', btn_edit: 'Bestelling bewerken',
    btn_send_update: 'Wijziging verzenden', btn_voice: 'Spraakopname',
    btn_start_pick: 'Verzameling starten', btn_finish_pick: 'Bestelling verzameld',
    btn_missing_item: 'Artikel ontbreekt', btn_delivered: 'Geleverd',
    btn_navigate: 'Navigeren (Google Maps)', btn_details: 'Details',
    btn_all_orders: 'Alle bestellingen', btn_invoices: 'Facturen',
    btn_edit_rest: 'Bewerken', btn_remind: 'Herinnering sturen',
    btn_mark_paid: 'Markeren als betaald', btn_manage: 'Toewijzing beheren',
    btn_download_pdf: 'PDF downloaden', btn_payment_info: 'Betalingsgegevens',
    btn_new_order: 'Nieuwe bestelling', btn_open: 'Openen →', btn_to_collect: 'Incasso',
    whatsapp_auto: 'Automatische WhatsApp',
    whatsapp_greeting: 'Hallo! We hebben uw bestelling ontvangen',
    whatsapp_detail: 'Hier zijn de details:',
    your_order: 'Uw bestelling', pickup_requested: 'Gewenste ophaaltijd',
    tomorrow_at: 'Morgen',
    confirmed_msg: 'Bevestigd! U ontvangt updates via WhatsApp',
    change_received: 'Wijziging ontvangen! Bestelling bijgewerkt',
    edit_placeholder: 'Bijv.: Kaas verwijderen, 2 citroenen toevoegen...',
    or_separator: '— of —', my_orders: 'Mijn bestellingen',
    personal_area: 'Persoonlijk gebied', track_order: 'Bestelling volgen',
    realtime_status: 'Realtime status', filter_all: 'Alles',
    received_confirmed: 'Ontvangen & bevestigd', waiting_label: 'Wachten',
    driver_label: 'Chauffeur', eta_label: 'Verwachte aankomst', minutes_label: 'min.',
    sim_btn_delivery: 'Status: Onderweg naar u',
    month_jan:'Januari', month_feb:'Februari', month_mar:'Maart',
    month_apr:'April', month_may:'Mei', month_jun:'Juni',
    month_jul:'Juli', month_aug:'Augustus', month_sep:'September',
    month_oct:'Oktober', month_nov:'November', month_dec:'December',
    tab_invoices: 'Facturen', tab_orders_nav: 'Bestellingen', tab_profile: 'Profiel',
    tab_by_order: 'Per bestelling', tab_monthly: 'Maandelijks overzicht',
    monthly_total: 'Totaal deze maand', pending_payment: 'Openstaande betaling',
    total_year: 'Totaal 2026', total_pending_all: 'Totaal openstaand',
    invoice_label: 'Factuur', item_col: 'Artikel', qty_col: 'Aantal',
    price_col: 'Prijs', total_col: 'Totaal', total_to_pay: 'Te betalen bedrag',
    total_paid_label: 'Betaald bedrag',
    api_note: 'Prijzen gesynchroniseerd vanuit boekhoudsoftware',
    orders_label: 'Bestellingen', items_label: 'Artikelen',
    picker_role: 'Verzamelaar + Chauffeur', active_today: 'Vandaag actief',
    waiting_pick_stat: 'Wacht op verzameling',
    currently_picking: 'Wordt momenteel verzameld', delivered_today: 'Vandaag geleverd',
    tab_picking: 'Verzameling', tab_delivery: 'Levering', tab_done: 'Voltooid',
    currently_picking_label: 'Wordt momenteel verzameld',
    waiting_to_pick: 'Wacht op verzameling',
    mark_items: 'Markeer verzamelde artikelen:', of_items: 'van', items_word: 'artikelen',
    no_delivery_msg: 'Geen bestellingen klaar voor levering. Verschijnen hier na verzameling.',
    delivery_note_label: 'Leveringsbon', pickup_time: 'Ophalen:',
    finish_pick_btn: 'Bestelling verzameld', missing_item_btn: 'Artikel ontbreekt',
    completed_section: 'Voltooid',
    manager_title: 'Manager Dashboard', tab_orders: 'Bestellingen',
    tab_restaurants: 'Restaurants', tab_collect: 'Incasso', tab_team: 'Team',
    search_rest: 'Restaurant zoeken...', pickup_hour: 'Ophaaltijd',
    amount_label: 'Bedrag', delivered_at: 'Geleverd om',
    completed_count: 'Voltooid', active_count: 'Actief', open_debt: 'Openstaand saldo',
    recent_orders: 'Recente bestellingen', total_debt_label: 'Totale schuld',
    last_order: 'Laatste bestelling', last_payment: 'Laatste betaling', date_label: 'Datum',
    total_open_debts: 'Totale openstaande saldi', orders_today: 'Bestellingen vandaag',
    delivered_word: 'Geleverd', linked_rests: 'Gekoppelde restaurants',
    open_invoices_count: 'Openstaande facturen', updated_label: 'Bijgewerkt',
    phases_title: 'Systeem ontwikkelingsroadmap',
    phases_sub: '6 fasen · Elke fase is onafhankelijk',
    tag_base: 'Basis', tag_simple: 'Eenvoudig', tag_ops: 'Operaties',
    tag_transparent: 'Transparantie', tag_mgmt: 'Management', tag_auto: 'Automatisering',
    phase1_title: 'Fase 1 — Spraakbot & Bestellingsopname',
    phase1_sub: 'Slimme spraakrespons · Taaldetectie · Transcriptie',
    phase2_title: 'Fase 2 — Restaurantportaal & Bevestiging',
    phase2_sub: 'WhatsApp-bericht · Bestelling bevestigen/bewerken',
    phase3_title: 'Fase 3 — Verzamelaar & Chauffeurbeheer',
    phase3_sub: 'Registratie & rollen · Restauranttoewijzing',
    phase4_title: 'Fase 4 — Realtime statustracking',
    phase4_sub: 'Ontvangen → Verzameling → Onderweg → Geleverd',
    phase5_title: 'Fase 5 — Manager Dashboard',
    phase5_sub: 'Alle bestellingen · Alle restaurants · Incasso',
    phase6_title: 'Fase 6 — Geautomatiseerde boekhouding',
    phase6_sub: 'Factuur-API · Automatische factuur bij bevestiging',
    legend_text: 'Fasen 1–4 zijn de kern · Fasen 5–6 breiden het systeem uit',
    index_title: 'Slim bestellingsbeheersysteem',
    index_sub: 'Ontwerpspecificatie & interactieve mockups · April 2026',
    spec_complete: 'Specificatie voltooid',
    mockups_section: 'Interactieve Mockups', docs_section: 'Specificatiedocumenten',
  },
};

// ─── Engine ───────────────────────────────────────────────────────────────────

function getLang() {
  const s = localStorage.getItem(STORAGE_KEY);
  return SUPPORTED_LANGS.includes(s) ? s : DEFAULT_LANG;
}

function t(key) {
  const lang = getLang();
  return (translations[lang] && translations[lang][key]) ||
         translations[DEFAULT_LANG][key] || key;
}

function switchLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  const tr = translations[lang];
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', tr.dir);
  document.body.setAttribute('dir', tr.dir);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = tr[key] || translations[DEFAULT_LANG][key] || key;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = tr[key] || translations[DEFAULT_LANG][key] || key;
  });
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const active = btn.getAttribute('data-lang-btn') === lang;
    btn.classList.toggle('ls-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, dir: tr.dir } }));
}

// ─── Language switcher bar ────────────────────────────────────────────────────

const LANG_META = [
  { code: 'he', flag: '🇮🇱', short: 'עב' },
  { code: 'en', flag: '🇬🇧', short: 'EN' },
  { code: 'de', flag: '🇩🇪', short: 'DE' },
  { code: 'nl', flag: '🇳🇱', short: 'NL' },
];

function buildPageHeader(config) {
  config = config || {};

  // Inject styles once
  if (!document.getElementById('ls-styles')) {
    var s = document.createElement('style');
    s.id = 'ls-styles';
    s.textContent = [
      '.i18n-header{display:flex;align-items:center;justify-content:space-between;',
      'gap:12px;flex-wrap:wrap;background:#fff;border-bottom:1px solid #e5e7eb;',
      'padding:10px 20px;position:sticky;top:0;z-index:100;}',
      '.i18n-header-title{font-size:14px;font-weight:600;color:#111827;}',
      '.i18n-header-sub{font-size:12px;color:#9ca3af;margin-top:2px;}',
      '.lang-switcher{display:flex;align-items:center;gap:2px;background:#f3f4f6;',
      'border-radius:8px;padding:3px;}',
      '.lang-switcher [data-lang-btn]{display:inline-flex;align-items:center;gap:4px;',
      'border:none;background:transparent;border-radius:6px;padding:4px 10px;',
      'font-size:12px;font-weight:500;color:#6b7280;cursor:pointer;white-space:nowrap;',
      'font-family:inherit;line-height:1;transition:background .15s,color .15s;}',
      '.lang-switcher [data-lang-btn]:hover{background:#e5e7eb;color:#111827;}',
      '.lang-switcher [data-lang-btn].ls-active{background:#fff;color:#1d4ed8;',
      'box-shadow:0 1px 3px rgba(0,0,0,.1);}',
    ].join('');
    document.head.appendChild(s);
  }

  var header = document.createElement('div');
  header.className = 'i18n-header';

  // Title block
  var info = document.createElement('div');
  if (config.titleKey) {
    var title = document.createElement('div');
    title.className = 'i18n-header-title';
    title.setAttribute('data-i18n', config.titleKey);
    title.textContent = t(config.titleKey);
    info.appendChild(title);
  }
  if (config.subtitleKey) {
    var sub = document.createElement('div');
    sub.className = 'i18n-header-sub';
    sub.setAttribute('data-i18n', config.subtitleKey);
    sub.textContent = t(config.subtitleKey);
    info.appendChild(sub);
  }
  header.appendChild(info);

  // Language switcher
  var nav = document.createElement('nav');
  nav.className = 'lang-switcher';
  nav.setAttribute('aria-label', 'Language');
  var currentLang = getLang();
  LANG_META.forEach(function(l) {
    var btn = document.createElement('button');
    btn.setAttribute('data-lang-btn', l.code);
    btn.setAttribute('aria-pressed', String(currentLang === l.code));
    btn.textContent = l.flag + ' ' + l.short;
    if (currentLang === l.code) btn.classList.add('ls-active');
    btn.onclick = function() { switchLanguage(l.code); };
    nav.appendChild(btn);
  });
  header.appendChild(nav);

  document.body.insertBefore(header, document.body.firstChild);
}

// ─── Auto-init ────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  switchLanguage(getLang());
});
