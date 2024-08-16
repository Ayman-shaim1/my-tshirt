import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIEFZS0tgihNqqGxbmNOCsMJaG4nu9cXE",
  authDomain: "my-tshirt-c8f27.firebaseapp.com",
  projectId: "my-tshirt-c8f27",
  storageBucket: "my-tshirt-c8f27.appspot.com",
  messagingSenderId: "352596293567",
  appId: "1:352596293567:web:0b0d73402f4197a691930a",
  measurementId: "G-B4V38B6HZ5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;