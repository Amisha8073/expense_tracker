// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBuR0yYnRV9EqUfteqLn8awSfrcre1taxA",
    authDomain: "expense-tracker-testing-ade3c.firebaseapp.com",
    databaseURL: "https://expense-tracker-testing-ade3c-default-rtdb.asia-southeast1.firebasedatabase.app", // Add this line
    projectId: "expense-tracker-testing-ade3c",
    storageBucket: "expense-tracker-testing-ade3c.appspot.com", // Corrected storageBucket
    messagingSenderId: "150180023351",
    appId: "1:150180023351:web:15e7be152174255ea643b2",
    measurementId: "G-HQ6MK84L0T"
};


// Initialize Firebase App
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully.");
} catch (error) {
  console.error("Error initializing Firebase:", error.message);
}

// Initialize Firebase services
let auth, database;
try {
  auth = getAuth(app);
  database = getDatabase(app);

  // Set session persistence globally to browserLocalPersistence
  auth.setPersistence(browserLocalPersistence).then(() => {
    console.log("Persistence set to browserLocalPersistence.");
  }).catch((error) => {
    console.error("Error setting persistence:", error.message);
  });

} catch (error) {
  console.error("Error initializing Firebase services:", error.message);
}

// Export the Firebase app and services
export { app, auth, database };