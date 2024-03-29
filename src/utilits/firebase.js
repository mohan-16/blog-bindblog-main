// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "rich-chimera-416708.firebaseapp.com",
  projectId: "rich-chimera-416708",
  storageBucket: "rich-chimera-416708.appspot.com",
  messagingSenderId: "1019797266025",
  appId: "1:1019797266025:web:ecaeb2bf9f210d021cccf8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);