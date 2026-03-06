
// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBibrKKhQI9vscpJYcJ1g-FclFACZfmXM4",
  authDomain: "mxhsy-b429e.firebaseapp.com",
  projectId: "mxhsy-b429e",
  storageBucket: "mxhsy-b429e.firebasestorage.app",
  messagingSenderId: "987728913620",
  appId: "1:987728913620:web:1ca2de0bd5bef1e3168741",
  measurementId: "G-0S26FBBW3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();