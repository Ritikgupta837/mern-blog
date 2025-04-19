// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9ec4f.firebaseapp.com",
  projectId: "mern-blog-9ec4f",
  storageBucket: "mern-blog-9ec4f.firebasestorage.app",
  messagingSenderId: "504288691418",
  appId: "1:504288691418:web:c8dc7e1729440c7e8051e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
