import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMJ-npAgY8ry6TUGMQ_wC6H_rsZ-G_P7I",
  authDomain: "pompeiaquizz.firebaseapp.com",
  projectId: "pompeiaquizz", 
  storageBucket: "pompeiaquizz.appspot.com",
  messagingSenderId: "428224611669",
  appId: "1:428224611669:web:8d7271c51c5efd76695bdc"
};

// var storage = firebase.storage()     ESTO LO HARÉ SEMANA QUE VIENE

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }