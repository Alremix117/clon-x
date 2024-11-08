import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDjcNRQWu2xb8z1cJCBZAz6Hlul-Rkl980",
  authDomain: "twitter-clone-9d88b.firebaseapp.com",
  projectId: "twitter-clone-9d88b",
  storageBucket: "twitter-clone-9d88b.firebasestorage.app",
  messagingSenderId: "318507338176",
  appId: "1:318507338176:web:50b91c192c92778d336025"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
