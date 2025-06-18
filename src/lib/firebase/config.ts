
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log("\n\n--- Firebase Environment Variable Loading Check ---");
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID; // Optional

console.log("Loaded NEXT_PUBLIC_FIREBASE_API_KEY:", apiKey, `(Type: ${typeof apiKey}, Length: ${apiKey?.length})`);
console.log("Loaded NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:", authDomain, `(Type: ${typeof authDomain})`);
console.log("Loaded NEXT_PUBLIC_FIREBASE_PROJECT_ID:", projectId, `(Type: ${typeof projectId})`);
console.log("Loaded NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:", storageBucket, `(Type: ${typeof storageBucket})`);
console.log("Loaded NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:", messagingSenderId, `(Type: ${typeof messagingSenderId})`);
console.log("Loaded NEXT_PUBLIC_FIREBASE_APP_ID:", appId, `(Type: ${typeof appId})`);
console.log("Loaded NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:", measurementId, `(Type: ${typeof measurementId})`); // Optional, might be undefined
console.log("----------------------------------------------------\n");


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId, // Optional
};

// Log the configuration object that will be used for initialization
console.log("Firebase configuration object being used by the app:", firebaseConfig, "\n");


// Developer-facing check to help with setup
let hasConfigError = false;
const placeholderValues = ["your_api_key", "YOUR_API_KEY", "your_actual_api_key_here", "your-project-id", "YOUR_PROJECT_ID", "your_actual_project_id"];

if (
  !firebaseConfig.apiKey ||
  placeholderValues.some(p => firebaseConfig.apiKey?.includes(p)) ||
  typeof firebaseConfig.apiKey !== 'string' ||
  firebaseConfig.apiKey.length < 10 // API keys are typically much longer
) {
  console.error(
    "\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  );
  console.error(
    "CRITICAL FIREBASE SETUP ISSUE: NEXT_PUBLIC_FIREBASE_API_KEY is MISSING, a PLACEHOLDER, or INVALID."
  );
  console.error("Current API Key value loaded by the app: '", firebaseConfig.apiKey, "' (length: ", firebaseConfig.apiKey?.length, ")");
  hasConfigError = true;
}

if (
  !firebaseConfig.projectId ||
  placeholderValues.some(p => firebaseConfig.projectId?.includes(p)) ||
  typeof firebaseConfig.projectId !== 'string' ||
  firebaseConfig.projectId.length < 4 // Project IDs are typically at least 4 characters
) {
   console.error(
    "\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  );
  console.error(
    "CRITICAL FIREBASE SETUP ISSUE: NEXT_PUBLIC_FIREBASE_PROJECT_ID is MISSING, a PLACEHOLDER, or INVALID."
  );
  console.error("Current Project ID value loaded by the app: '", firebaseConfig.projectId, "'");
  hasConfigError = true;
}

if (hasConfigError) {
  const errorMessage = `
========================= CRITICAL FIREBASE CONFIGURATION ERROR =========================
Firebase initialization cannot proceed due to missing or invalid environment variables.
This is an ENVIRONMENT SETUP issue that YOU NEED TO FIX on your side.

Current problematic configuration loaded by the app:
  NEXT_PUBLIC_FIREBASE_API_KEY:     '${firebaseConfig.apiKey}' (length: ${firebaseConfig.apiKey?.length})
  NEXT_PUBLIC_FIREBASE_PROJECT_ID:  '${firebaseConfig.projectId}'

>>> ACTION REQUIRED TO FIX FIREBASE <<<
1.  **VERIFY YOUR \`.env\` FILE:** 
    *   It MUST be in the PROJECT ROOT directory (same level as package.json).
    *   It MUST contain the CORRECT, ACTUAL values for ALL \`NEXT_PUBLIC_FIREBASE_...\` variables from your Firebase project settings (Web app configuration).
    *   **NO PLACEHOLDERS ALLOWED** (e.g., 'your_api_key_here' or 'your-project-id' are WRONG).
    *   **NO TYPOS or extra spaces/quotes** around values (e.g., \`VAR=" value"\` is WRONG).
    *   Variable names MUST start with \`NEXT_PUBLIC_\` (e.g., \`NEXT_PUBLIC_FIREBASE_API_KEY\`).

2.  **RESTART YOUR NEXT.JS SERVER:** 
    *   After saving any changes to your \`.env\` file, YOU MUST STOP AND RESTART your Next.js development server (e.g., using Ctrl+C then \`npm run dev\` or similar).

3.  **CHECK CONSOLE LOGS AGAIN:** 
    *   Review the 'Loaded NEXT_PUBLIC_FIREBASE_...' logs above to see exactly what values your application is attempting to use *after restarting*.

The application will NOT work correctly until this Firebase configuration is fixed.
===================================================================================
`;
  console.error(errorMessage);
  // Throw an error to halt further execution with this bad config
  throw new Error("FATAL: Firebase configuration is invalid. Check server console for detailed instructions. You MUST fix your .env file and RESTART the server.");
}


// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

// This try-catch is a secondary safety net. 
// The `hasConfigError` check above should ideally catch issues before this.
try {
  if (getApps().length === 0) {
    console.log("Attempting to initialize new Firebase app with validated config...");
    app = initializeApp(firebaseConfig);
    console.log("Firebase app object initialized successfully.");
  } else {
    console.log("Using existing Firebase app instance.");
    app = getApp();
  }

  auth = getAuth(app);
  db = getFirestore(app);
  console.log("Firebase Auth and Firestore services obtained successfully.");

} catch (e: any) {
  // This catch block might still be hit if there's an extremely subtle config issue
  // not caught by the explicit checks, or if Firebase services are down.
  console.error("\nCRITICAL ERROR during Firebase initialization or service access (initializeApp, getAuth, or getFirestore):", e.message);
  if (e.code === 'auth/invalid-api-key' || e.message?.toLowerCase().includes('api key')) {
    console.error("This 'auth/invalid-api-key' or similar error strongly indicates that your NEXT_PUBLIC_FIREBASE_API_KEY is incorrect or not being loaded properly by Next.js, despite initial checks.");
  }
  console.error("Firebase could not be initialized. Please review the 'Firebase configuration object being used by the app' log and any 'CRITICAL FIREBASE SETUP ISSUE' messages above.");
  console.error("Ensure all required values in your .env file are correct and that you have RESTARTED YOUR SERVER after any .env changes.");
  
  // Re-throw to make it clear initialization failed.
  throw new Error(`Firebase service initialization failed: ${e.message}. Check server console and .env file.`);
}

export { app, auth, db };
