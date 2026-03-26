import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-35d4c.firebaseapp.com",
  projectId: "ai-interview-35d4c",
  storageBucket: "ai-interview-35d4c.firebasestorage.app",
  messagingSenderId: "993392646854",
  appId: "1:993392646854:web:d5236c29ed8067990995c7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();