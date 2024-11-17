// src/services/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';

// Your Firebase config (get it from your Firebase Console)
 
  const firebaseConfig = {
    apiKey: "AIzaSyD4v_PVpDogDjJLl5KvxPsW8vNrJ_yLQLU",
    authDomain: "authenhack-2a74d.firebaseapp.com",
    projectId: "authenhack-2a74d",
    storageBucket: "authenhack-2a74d.firebasestorage.app",
    messagingSenderId: "193196323285",
    appId: "1:193196323285:web:96fa11566d5f1ccab1cd5c",
    measurementId: "G-9NLLD3NYHS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Get auth and firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setDoc, getDoc };
