// Firebase Configuration
// Replace these values with your Firebase project configuration

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js';

// TODO: Replace with your Firebase config
// Get this from Firebase Console > Project Settings > General > Your apps
const firebaseConfig = {
    apiKey: "AIzaSyD93ZOQZIcyhZ5YOjhpdPRgWS5BFgsLKdY",
    authDomain: "upi-system-a6a9e.firebaseapp.com",
    projectId: "upi-system-a6a9e",
    storageBucket: "upi-system-a6a9e.firebasestorage.app",
    messagingSenderId: "408622527578",
    appId: "1:408622527578:web:6dec2a653517bfad7fd463",
    measurementId: "G-HGRKHBM6F9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

