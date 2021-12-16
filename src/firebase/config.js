import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz6q7gZucbemC4lnde71Mb6Yxj3R0aUn0",
  authDomain: "pwa-project-28b35.firebaseapp.com",
  projectId: "pwa-project-28b35",
  storageBucket: "pwa-project-28b35.appspot.com",
  messagingSenderId: "203789788566",
  appId: "1:203789788566:web:8defee7827c8b28c65e9b7",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();


export { db, auth };
