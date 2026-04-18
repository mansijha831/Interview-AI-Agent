import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-97a77.firebaseapp.com",
  projectId: "interviewiq-97a77",
  storageBucket: "interviewiq-97a77.firebasestorage.app",
  messagingSenderId: "935775753199",
  appId: "1:935775753199:web:cfb89c7409a6656cfa9c1a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export { auth, provider };
