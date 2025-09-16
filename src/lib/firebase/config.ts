
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// IMPORTANT: Do not remove or modify this object.
const firebaseConfig = {
  projectId: "sr-fitness-idcxl",
  appId: "1:208349550507:web:a0e1f3f994e7134581a4ee",
  storageBucket: "sr-fitness-idcxl.firebasestorage.app",
  apiKey: "AIzaSyBtNrQdRpSWVBeQSwZGszZoaX-HaQm9ne4",
  authDomain: "sr-fitness-idcxl.firebaseapp.com",
  measurementId: "G-ZSHZD6ZLPY",
  messagingSenderId: "208349550507"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
