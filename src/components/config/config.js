// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqlGRsgUuJeLT1VWWSEYWRwvhxHLohSP8",
  authDomain: "fir-project-8a357.firebaseapp.com",
  projectId: "fir-project-8a357",
  storageBucket: "fir-project-8a357.appspot.com",
  messagingSenderId: "564917682817",
  appId: "1:564917682817:web:7a5fec61dc7f3816c30380",
  measurementId: "G-FR2BBL7DV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)