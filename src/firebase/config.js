import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC6A6du4I4R_rMuAVuRbJtZyuBeGhVFN_g",
  authDomain: "clondetwiter.firebaseapp.com",
  projectId: "clondetwiter",
  storageBucket: "clondetwiter.firebasestorage.app",
  messagingSenderId: "254036761568",
  appId: "1:254036761568:web:69e6ab6afa3d0cec632985"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
