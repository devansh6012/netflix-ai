// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "netflixgpt-6e513.firebaseapp.com",
  projectId: "netflixgpt-6e513",
  storageBucket: "netflixgpt-6e513.firebasestorage.app",
  messagingSenderId: "328521666875",
  appId: "1:328521666875:web:fab0582b434d986998e71e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();