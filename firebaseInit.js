// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKUf6hZgpeWixSrQVT9j9mHC_7zyrX81U",
    authDomain: "mathapp-rpl.firebaseapp.com",
    projectId: "mathapp-rpl",
    storageBucket: "mathapp-rpl.firebasestorage.app",
    messagingSenderId: "505386538767",
    appId: "1:505386538767:web:a3f29bd04e7854d0f8107a",
    measurementId: "G-BWZ1Y9F2QZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
