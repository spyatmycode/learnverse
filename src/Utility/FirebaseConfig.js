// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7wXT6OPW2HpQPplK5uNdI3LA-JsLbMrk",
  authDomain: "learnverse-77f31.firebaseapp.com",
  projectId: "learnverse-77f31",
  storageBucket: "learnverse-77f31.appspot.com",
  messagingSenderId: "343015291493",
  appId: "1:343015291493:web:de0f2fd15046c47f80a48c",
  measurementId: "G-NM15KB8XLB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
const analytics = getAnalytics(app);