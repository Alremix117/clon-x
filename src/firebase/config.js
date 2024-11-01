import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAB9XikOLd-dbOFvewlFLU-bRdYoGqButI",
  authDomain: "twitter-7f6a2.firebaseapp.com",
  projectId: "twitter-7f6a2",
  storageBucket: "twitter-7f6a2.firebasestorage.app",
  messagingSenderId: "879169014674",
  appId: "1:879169014674:web:0ee92db745795181b04f4b"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
