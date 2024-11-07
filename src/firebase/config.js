import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyANZQ4YpumcpzsqdDMGKgxh1BpCrC9Z750",
  authDomain: "clon-x-5fc9d.firebaseapp.com",
  projectId: "clon-x-5fc9d",
  storageBucket: "clon-x-5fc9d.firebasestorage.app",
  messagingSenderId: "580899573469",
  appId: "1:580899573469:web:24821a50540c180b331534"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
