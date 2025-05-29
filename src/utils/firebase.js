// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "reactflix-f417f.firebaseapp.com",
  projectId: "reactflix-f417f",
  storageBucket: "reactflix-f417f.firebasestorage.app",
  messagingSenderId: "1039556327072",
  appId: "1:1039556327072:web:0c7243519f0fb8a5aefbc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();