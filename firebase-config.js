<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);
</script>
