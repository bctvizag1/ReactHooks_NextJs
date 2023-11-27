// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDapq8i9PBvU9hzqoX_yuVWw4qqxPdAw-8",
  authDomain: "fir-prj1-cf728.firebaseapp.com",
  projectId: "fir-prj1-cf728",
  storageBucket: "fir-prj1-cf728.appspot.com",
  messagingSenderId: "1033710261364",
  appId: "1:1033710261364:web:fba16e74ce5a57709b6d21",
  measurementId: "G-5F56KWLCCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
