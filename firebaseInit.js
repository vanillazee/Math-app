// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "api",
    authDomain: "domain",
    projectId: "project",
    storageBucket: "storage",
    messagingSenderId: "id",
    appId: "appId",
    measurementId: "measurement"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
