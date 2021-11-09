import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALp1hpHHDRJTR3u_jr56CXxLvMxeTiWOc",
  authDomain: "g-insta-771bc.firebaseapp.com",
  projectId: "g-insta-771bc",
  storageBucket: "g-insta-771bc.appspot.com",
  messagingSenderId: "3533469312",
  appId: "1:3533469312:web:d130304c3ec4da75f15865",
  measurementId: "G-0PN1P9Q7ES",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();


export { app, db };
