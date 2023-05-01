// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFUOZJusPGuInnRAS3QFEZ81_u3IQ0qpU",
  authDomain: "fir-101-4ad52.firebaseapp.com",
  projectId: "fir-101-4ad52",
  storageBucket: "fir-101-4ad52.appspot.com",
  messagingSenderId: "620978643522",
  appId: "1:620978643522:web:9eab939ee4bde3506a03db",
  measurementId: "G-PC9LKP84F8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);
