// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-478ce.firebaseapp.com",
  projectId: "mern-estate-478ce",
  storageBucket: "mern-estate-478ce.firebasestorage.app",
  messagingSenderId: "1041198954610",
  appId: "1:1041198954610:web:3eabc67518756c4f5caaeb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);