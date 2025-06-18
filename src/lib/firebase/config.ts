
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log("--- Attempting to load Firebase Environment Variables ---");
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID; // Optional

console.log("NEXT_PUBLIC_FIREBASE_API_KEY:", apiKey);
console.log("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:", authDomain);
console.log("NEXT_PUBLIC_FIREBASE_PROJECT_ID:", projectId);
console.log("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:", storageBucket);
console.log("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:", messagingSenderId);
console.log("NEXT_PUBLIC_FIREBASE_APP_ID:", appId);
console.log("NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:", measurementId);
console.log("----------------------------------------------------");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

// Log the configuration object that will be used for initialization
console.log("Firebase configuration object being used by the app:", firebaseConfig);

// Developer-facing check to help with setup
if (
  !firebaseConfig.apiKey ||
  firebaseConfig.apiKey === "your_api_key" || // Check for common placeholder
  firebaseConfig.apiKey.includes("YOUR") || // Check for other common placeholder patterns
  firebaseConfig.apiKey.length < 10 // API keys are typically much longer
) {
  console.error(
    "CRITICAL FIREBASE SETUP ISSUE: API Key appears to be missing, a placeholder, or invalid."
  );
  console.error(
    "Please ensure all NEXT_PUBLIC_FIREBASE_... variables are correctly set in your .env file " +
    "with your *actual* Firebase project credentials (NOT placeholder values like 'your_api_key'). " +
    "After updating .env, you MUST restart your development server (e.g., stop and re-run `npm run dev`)."
  );
  console.error("Current API Key being used by the app: '", firebaseConfig.apiKey, "' (length: ", firebaseConfig.apiKey?.length, ")");
}
if (!firebaseConfig.authDomain || !firebaseConfig.projectId) {
   console.warn(
    "Firebase Auth Domain or Project ID might be missing. Please verify these in your .env file and Firebase console."
  );
}


// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

if (getApps().length === 0) {
  try {
    console.log("Initializing new Firebase app...");
    app = initializeApp(firebaseConfig);
    console.log("Firebase app initialized successfully.");
  } catch (e) {
    console.error("CRITICAL ERROR during Firebase initializeApp:", e);
    console.error("This usually means your firebaseConfig object is invalid, most likely due to incorrect environment variables in .env.");
    // Re-throw the error or handle it as appropriate for your app's startup
    throw e;
  }
  auth = getAuth(app);
  db = getFirestore(app);
} else {
  console.log("Using existing Firebase app instance.");
  app = getApp();
  // Ensure auth and db are initialized if the app already exists
  // This might re-trigger an error if the initial app was initialized with bad config
  try {
    auth = getAuth(app);
    db = getFirestore(app);
  } catch(e) {
    console.error("CRITICAL ERROR accessing services from existing Firebase app instance:", e);
    console.error("This could indicate the initial app initialization failed or used invalid config.");
    throw e;
  }
}

export { app, auth, db };
