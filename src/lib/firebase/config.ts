
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log("--- Firebase Environment Variable Loading Check ---");
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID; // Optional

console.log("Loaded NEXT_PUBLIC_FIREBASE_API_KEY:", apiKey);
console.log("Loaded NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:", authDomain);
console.log("Loaded NEXT_PUBLIC_FIREBASE_PROJECT_ID:", projectId);
console.log("Loaded NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:", storageBucket);
console.log("Loaded NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:", messagingSenderId);
console.log("Loaded NEXT_PUBLIC_FIREBASE_APP_ID:", appId);
console.log("Loaded NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:", measurementId);
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
let hasConfigError = false;
if (
  !firebaseConfig.apiKey ||
  firebaseConfig.apiKey === "your_api_key" || // Check for common placeholder
  firebaseConfig.apiKey.includes("YOUR") || // Check for other common placeholder patterns
  firebaseConfig.apiKey.length < 10 // API keys are typically much longer
) {
  console.error(
    "\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  );
  console.error(
    "CRITICAL FIREBASE SETUP ISSUE: NEXT_PUBLIC_FIREBASE_API_KEY is missing, a placeholder, or invalid."
  );
  console.error("Current API Key value loaded by the app: '", firebaseConfig.apiKey, "' (length: ", firebaseConfig.apiKey?.length, ")");
  hasConfigError = true;
}
if (!firebaseConfig.projectId || firebaseConfig.projectId.includes("YOUR") || firebaseConfig.projectId.length < 4) {
   console.error(
    "\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  );
  console.error(
    "CRITICAL FIREBASE SETUP ISSUE: NEXT_PUBLIC_FIREBASE_PROJECT_ID is missing, a placeholder, or invalid."
  );
  console.error("Current Project ID value loaded by the app: '", firebaseConfig.projectId, "'");
  hasConfigError = true;
}

if (hasConfigError) {
  console.error(
    "\nACTION REQUIRED: Please ensure your .env file (in the project root) contains the correct values for ALL NEXT_PUBLIC_FIREBASE_... variables, copied from your Firebase project settings (Web app configuration)."
  );
  console.error(
    "After creating or updating the .env file, you MUST RESTART your Next.js development server (e.g., stop and re-run `npm run dev`)."
  );
  console.error(
    "The application WILL NOT function correctly until these environment variables are properly set."
  );
  console.error(
    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n"
  );
}


// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

if (getApps().length === 0) {
  try {
    console.log("Attempting to initialize new Firebase app...");
    app = initializeApp(firebaseConfig);
    console.log("Firebase app initialized successfully.");
  } catch (e: any) {
    console.error("\nCRITICAL ERROR during Firebase initializeApp:", e.message);
    console.error("This usually means your Firebase configuration object (derived from .env variables) is invalid OR some essential values are missing/undefined.");
    console.error("Review the 'Firebase configuration object being used by the app:' log above and your .env file. Ensure all required values are correct and then RESTART YOUR SERVER.");
    throw e; // Re-throw to make it clear initialization failed
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
  } catch(e: any) {
    console.error("\nCRITICAL ERROR accessing services from existing Firebase app instance:", e.message);
    console.error("This could indicate the initial app initialization failed or used invalid config.");
    throw e;
  }
}

export { app, auth, db };
