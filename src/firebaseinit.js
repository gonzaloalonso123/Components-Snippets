import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA7SSLae-hp82NOQ2syg3DKYVFcKDwelYU",
  authDomain: "gonzalo-236c9.firebaseapp.com",
  projectId: "gonzalo-236c9",
  storageBucket: "gonzalo-236c9.appspot.com",
  messagingSenderId: "32846831683",
  appId: "1:32846831683:web:751e37f424a18174c0b4f6",
  measurementId: "G-DKFYT39HHN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  db = getFirestore(app);
export default db;
