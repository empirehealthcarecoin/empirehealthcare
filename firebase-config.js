// Import the core Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

// Import Authentication and Firestore (Database)
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM7XdfrGcAgMDXRdfQTH-qLQsXNWLasR8",
  authDomain: "empire-healthcare-7a971.firebaseapp.com",
  projectId: "empire-healthcare-7a971",
  storageBucket: "empire-healthcare-7a971.firebasestorage.app",
  messagingSenderId: "816398917758",
  appId: "1:816398917758:web:f2e9eb081247108ee3382f",
  measurementId: "G-N0BWN08MX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Database
const auth = getAuth(app);
const db = getFirestore(app);

// Export them so your other pages can use them
export { auth, db };
