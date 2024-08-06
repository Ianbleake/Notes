// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV4y-tkHTbWFmhIBlqFf4-Ce7X7UOcLdQ",
  authDomain: "portafolio-14498.firebaseapp.com",
  projectId: "portafolio-14498",
  storageBucket: "portafolio-14498.appspot.com",
  messagingSenderId: "795179494654",
  appId: "1:795179494654:web:e4176b06d3a9a83ed5c9af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)