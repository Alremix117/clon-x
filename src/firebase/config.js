import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA56UGBAOG1hK0sK9Q-PjKua8q5iPGOWs0",
  authDomain: "xcopia-247b1.firebaseapp.com",
  projectId: "xcopia-247b1",
  storageBucket: "xcopia-247b1.firebasestorage.app",
  messagingSenderId: "217064444356",
  appId: "1:217064444356:web:37301bd8796bed557d9491"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
