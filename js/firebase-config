// ============================================================
//  SmartVaad – Firebase Configuration
//  הדבק כאן את פרטי הפרויקט שלך מ-Firebase Console
// ============================================================

const firebaseConfig = {
   apiKey: "AIzaSyAxUn5V6pKAzkCA5xp-yLxkbd520EF-Yrs",
  authDomain: "smartvaad-f42f1.firebaseapp.com",
  projectId: "smartvaad-f42f1",
  storageBucket: "smartvaad-f42f1.firebasestorage.app",
  messagingSenderId: "19866240404",
  appId: "1:19866240404:web:f60d63118018b88ef5bb81",
  measurementId: "G-FRENZT81YV"
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

