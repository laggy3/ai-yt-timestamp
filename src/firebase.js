// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Pull all sensitive values from environment variables to avoid hard-coding secrets.
const firebaseConfig = {
  apiKey: process.env.AI_YT_TIMESTAMP_API_KEY || "",
  authDomain: process.env.AI_YT_TIMESTAMP_AUTH_DOMAIN || "",
  projectId: process.env.AI_YT_TIMESTAMP_PROJECT_ID || "",
  storageBucket: process.env.AI_YT_TIMESTAMP_STORAGE_BUCKET || "",
  messagingSenderId: process.env.AI_YT_TIMESTAMP_MESSAGING_SENDER_ID || "",
  appId: process.env.AI_YT_TIMESTAMP_APP_ID || "",
  measurementId: process.env.AI_YT_TIMESTAMP_MEASUREMENT_ID || ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);