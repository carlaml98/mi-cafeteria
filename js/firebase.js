import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtA5AxDklUo8H445HuFQLrDuxN40Gq71w",
  authDomain: "mi-cafeteria-2da52.firebaseapp.com",
  projectId: "mi-cafeteria-2da52",
  storageBucket: "mi-cafeteria-2da52.firebasestorage.app",
  messagingSenderId: "548242943449",
  appId: "1:548242943449:web:44cb5d7ced2b4e84147dc8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);