import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';


// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyAMJ-npAgY8ry6TUGMQ_wC6H_rsZ-G_P7I",
  authDomain: "pompeiaquizz.firebaseapp.com",
  projectId: "pompeiaquizz",
  storageBucket: "pompeiaquizz.appspot.com",
  messagingSenderId: "428224611669",
  appId: "1:428224611669:web:8d7271c51c5efd76695bdc"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }