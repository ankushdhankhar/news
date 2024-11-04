// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv40_ul4FBbQPOqImBsPBPX3P_tST2RF0",
  authDomain: "wireup-fa74b.firebaseapp.com",
  databaseURL: "https://wireup-fa74b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wireup-fa74b",
  storageBucket: "wireup-fa74b.appspot.com",
  messagingSenderId: "306637600231",
  appId: "1:306637600231:web:06909fba1e57796c3f7942",
  measurementId: "G-HKK5R7DVPT"
};

// Initialize Firebase
const app = !getApps()?getApp():initializeApp(firebaseConfig);
export const db=getFirestore();