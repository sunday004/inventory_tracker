// Import the functions you need from the SDKs you need
require("dotenv").config({ path: "/env.local" });

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "inventory-management-79af3.firebaseapp.com",
  projectId: "inventory-management-79af3",
  storageBucket: "inventory-management-79af3.appspot.com",
  messagingSenderId: "344980353682",
  appId: "1:344980353682:web:3a2e5829d77d0d267eac4b",
  measurementId: "G-1LQFK1F130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}
