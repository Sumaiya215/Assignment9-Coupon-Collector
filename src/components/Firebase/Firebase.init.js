// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDNsqDFQ47QZSbuPe6F8s7wTEVwlQ9XAk",
  authDomain: "coupon-collecting-web.firebaseapp.com",
  projectId: "coupon-collecting-web",
  storageBucket: "coupon-collecting-web.firebasestorage.app",
  messagingSenderId: "813051546519",
  appId: "1:813051546519:web:1b2d625c6563273f7a12d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);