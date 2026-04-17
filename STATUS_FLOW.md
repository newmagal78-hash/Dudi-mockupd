# STATUS_FLOW — מילון סטטוסים אחיד

> קובץ זה הוא מקור האמת לשמות הסטטוסים במערכת.  
> כל מפתח, מעצב, ומסמך חייב להשתמש בדיוק באותם שמות.

---

## סטטוסי הזמנה

| קוד פנימי | שם בממשק (מסעדן) | שם בממשק (צוות + מנהל) | צבע |
|---|---|---|---|
| `WAITING_PICK` | ממתין לליקוט | ממתין לליקוט | צהוב / warning |
| `PICKING` | בליקוט | בליקוט | כחול / info |
| `IN_DELIVERY` | **בדרך אליך** | **בדרך ללקוח** | כחול / info |
| `DELIVERED` | סופק | סופק | ירוק / success |

> **חשוב:** הסטטוס `IN_DELIVERY` הוא הסטטוס היחיד עם שם שונה לפי קהל.  
> המסעדן רואה "בדרך אליך" — כי זה אישי ורלוונטי לו.  
> כל שאר השחקנים רואים "בדרך ללקוח" — כי הם צד של החברה.

---

## סטטוסי תשלום / חשבונית

| קוד פנימי | שם בממשק | צבע |
|---|---|---|
| `PENDING` | ממתין | כתום / warning |
| `PAID` | שולם | ירוק / success |
| `OVERDUE` | באיחור | אדום / danger |

---

## סטטוסי עובד (ביום עבודה)

| קוד פנימי | שם בממשק | צבע |
|---|---|---|
| `ACTIVE` | פעיל היום | ירוק |
| `INACTIVE` | לא פעיל | אפור |
| `PICKING` | בליקוט | כחול |
| `IN_DELIVERY` | בדרך ללקוח | כחול |

---

## פלטת צבעים לסטטוסים

```css
/* ממתין */
background: var(--color-background-warning);
color: var(--color-text-warning);

/* פעיל / בתהליך */
background: var(--color-background-info);
color: var(--color-text-info);

/* הושלם / שולם */
background: var(--color-background-success);
color: var(--color-text-success);

/* חוב / בעיה */
background: var(--color-background-danger);
color: var(--color-text-danger);

/* לא פעיל */
background: var(--color-background-secondary);
color: var(--color-text-secondary);
```
