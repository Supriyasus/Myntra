import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHkXWCyAoqbDIFrktIChCBDZ9PFqDhZpo",
  authDomain: "myntra-caf5a.firebaseapp.com",
  databaseURL: "https://myntra-caf5a-default-rtdb.firebaseio.com",
  projectId: "myntra-caf5a",
  storageBucket: "myntra-caf5a.appspot.com",
  messagingSenderId: "587327152703",
  appId: "1:587327152703:web:f0d7405887a12162210e8a",
  measurementId: "G-KRG587T715"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebaseApp.firestore();

export default db;
