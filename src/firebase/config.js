import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDubk9ue5xmtOkkDV6BWT5TzR-2cp1I_mg",
  authDomain: "twitter-ee79b.firebaseapp.com",
  projectId: "twitter-ee79b",
  storageBucket: "twitter-ee79b.firebasestorage.app",
  messagingSenderId: "95097823439",
  appId: "1:95097823439:web:943c24d85719d8644657ba"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
