// ============================================================
//  SmartVaad – Firebase Configuration
//  הדבק כאן את פרטי הפרויקט שלך מ-Firebase Console
// ============================================================

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth      = firebase.auth();
const db        = firebase.firestore();
const storage   = firebase.storage();

// ============================================================
//  Firestore Data Structure
// ============================================================
//
//  buildings/{buildingId}
//    - name, address, adminUid, isPremium, monthlyFee, createdAt
//
//  buildings/{buildingId}/tenants/{tenantId}
//    - name, apartment, phone, email, notes, createdAt
//
//  buildings/{buildingId}/payments/{paymentId}
//    - tenantId, tenantName, apartment, amount, month, year
//    - status: 'paid' | 'partial' | 'debt'
//    - paidAt, notes
//
//  buildings/{buildingId}/messages/{messageId}
//    - content, type ('all'|'specific'|'debtors')
//    - targetTenants: [], sentAt, openedBy: []
//
//  buildings/{buildingId}/requests/{requestId}
//    - title, description, apartment, reportedBy
//    - urgency: 'urgent'|'medium'|'low'
//    - status: 'open'|'in_progress'|'done'
//    - createdAt, resolvedAt
//
//  buildings/{buildingId}/documents/{docId}
//    - name, type, url, size, uploadedAt
// ============================================================

