// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-35d4c.firebaseapp.com",
  projectId: "ai-interview-35d4c",
  storageBucket: "ai-interview-35d4c.firebasestorage.app",
  messagingSenderId: "993392646854",
  appId: "1:993392646854:web:d5236c29ed8067990995c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);