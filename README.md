# 🏢 SmartVaad — ניהול ועד בית חכם

SaaS לניהול ועד בית: גביה, דיירים, הודעות, קריאות שירות ומסמכים.

---

## 📁 מבנה הפרויקט

```
smartvaad/
├── index.html              ← דף נחיתה + כניסה/הרשמה
├── dashboard.html          ← לוח הבקרה המלא (SPA)
├── js/
│   └── firebase-config.js ← הגדרות Firebase שלך
├── firestore.rules         ← חוקי אבטחה ל-Firestore
├── firestore.indexes.json  ← אינדקסים ל-Firestore
└── README.md
```

---

## 🚀 התקנה — 5 דקות

### שלב 1: Firebase Console

1. לך ל-[console.firebase.google.com](https://console.firebase.google.com)
2. בחר את פרויקט **smartvaad** שיצרת
3. הוסף **Web App** (לחץ `</>`)
4. **העתק את firebaseConfig** שמופיע

### שלב 2: עדכן js/firebase-config.js

פתח את `js/firebase-config.js` והחלף את הערכים:

```javascript
const firebaseConfig = {
  apiKey:            "AIza...",       // ← מ-Firebase Console
  authDomain:        "smartvaad.firebaseapp.com",
  projectId:         "smartvaad",
  storageBucket:     "smartvaad.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123..."
};
```

### שלב 3: הפעל Authentication

Firebase Console → **Authentication** → **Sign-in method** → הפעל:
- ✅ Email/Password
- ✅ Google

### שלב 4: הפעל Firestore

Firebase Console → **Firestore Database** → **Create database**
- בחר **Start in test mode** (לפיתוח)
- לאחר מכן העתק את `firestore.rules` לקונסול

### שלב 5: העלה לאוויר

#### אופציה א' — Firebase Hosting (מומלץ, חינם)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

#### אופציה ב' — כל hosting סטטי
העלה את כל הקבצים ל-Netlify / Vercel / GitHub Pages

---

## 🎯 פיצ'רים קיימים

### חינמי (כולם)
- ✅ התחברות עם Email + Google
- ✅ ניהול דיירים מלא (הוספה, מחיקה, חיפוש)
- ✅ שליחת הודעות לדיירים (כולם / חייבים / ספציפי)
- ✅ קריאות שירות עם עדיפויות ועדכון סטטוס
- ✅ ניהול מסמכים (קישורי Google Drive)
- ✅ לוח מודעות לדיירים
- ✅ מעקב תשלומים בסיסי
- ✅ קישור ציבורי לבניין
- ✅ תמיכה במספר בניינים

### Pro (₪29/חודש — בקרוב)
- 💎 סליקת כרטיסי אשראי (Tranzila / PayPlus)
- 💎 תזכורות SMS אוטומטיות (Twilio / InfoBip)
- 💎 תזכורות WhatsApp
- 💎 דוח PDF חודשי אוטומטי
- 💎 ייצוא לאקסל

---

## 🏗️ ארכיטקטורת Firestore

```
buildings/{buildingId}
  ├── name, address, adminUid, isPremium, monthlyFee
  ├── tenants/{tenantId}
  │     name, apartment, phone, email, notes
  ├── payments/{paymentId}
  │     tenantId, tenantName, apartment, amount
  │     month, year, status (paid/partial/debt)
  ├── messages/{messageId}
  │     content, type (all/debtors/specific)
  │     sentAt, openedBy[]
  ├── requests/{requestId}
  │     title, description, apartment
  │     urgency (urgent/medium/low)
  │     status (open/in_progress/done)
  ├── documents/{docId}
  │     name, type, url, uploadedAt
  ├── bulletin/{bulletinId}
  │     category, title, description, contact
  └── activity/{activityId}
        icon, title, subtitle, at
```

---

## 📱 השלבים הבאים המומלצים

1. **הוסף SMS** — Twilio Israel / InfoBip עבור תזכורות חוב
2. **הוסף סליקה** — PayPlus או Tranzila עבור תשלום אונליין
3. **דף ציבורי לבניין** — `/public/building/:slug` ללא כניסה
4. **Mobile App** — React Native / PWA
5. **Multi-tenant billing** — Stripe עבור גביית ה-₪29

---

## 💰 מודל עסקי

| תכונה            | חינמי | Pro (₪29/חודש) |
|------------------|-------|----------------|
| דיירים           | ∞     | ∞              |
| הודעות           | ✅    | ✅             |
| קריאות שירות     | ✅    | ✅             |
| מסמכים           | ✅    | ✅             |
| מעקב תשלומים     | ✅    | ✅             |
| סליקת אשראי      | ❌    | ✅             |
| SMS אוטומטי      | ❌    | ✅             |
| דוח PDF          | ❌    | ✅             |
| ייצוא אקסל       | ❌    | ✅             |

**פוטנציאל**: 10,000 בניינים × ₪29 = **₪290,000/חודש**

---

Built with ❤️ using Firebase + Vanilla JS
