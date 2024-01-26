import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBUS9a8N9kcYUN_HIf75VVBT1g53M0ixrA",
  authDomain: "instantchat-175f3.firebaseapp.com",
  projectId: "instantchat-175f3",
  storageBucket: "instantchat-175f3.appspot.com",
  messagingSenderId: "1015892079646",
  appId: "1:1015892079646:web:3c7c9075e0fef5a41aaa0f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);