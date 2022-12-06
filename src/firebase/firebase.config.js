// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_in_apiKey,
  authDomain: import.meta.env.VITE_in_authDomain,
  projectId: import.meta.env.VITE_in_projectId,
  storageBucket: import.meta.env.VITE_in_storageBucket,
  messagingSenderId: import.meta.env.VITE_in_messagingSenderId,
  appId: import.meta.env.VITE_in_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
