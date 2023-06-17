// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGSaIh6Pa0jKBB5mBmutqp3KKFfTB1eMk",
  authDomain: "rn-fire-e9193.firebaseapp.com",
  projectId: "rn-fire-e9193",
  storageBucket: "rn-fire-e9193.appspot.com",
  messagingSenderId: "1051231799587",
  appId: "1:1051231799587:web:5e97794e99c5a951f8e496",
  measurementId: "G-3RVFHP488V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
