import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA8IhP0URuw5ken1JfOXKYXHhbmWuptnEU",
  authDomain: "events-31355.firebaseapp.com",
  projectId: "events-31355",
  storageBucket: "events-31355.appspot.com",
  messagingSenderId: "595721062595",
  appId: "1:595721062595:web:3063145e874a1e69f97a76"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
