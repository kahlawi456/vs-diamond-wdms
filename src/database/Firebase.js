// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMNwnNGwp-7h5EHT918sQ5mB4oJ8HBF8Y",
  authDomain: "vsdiamond-database.firebaseapp.com",
  projectId: "vsdiamond-database",
  storageBucket: "vsdiamond-database.firebasestorage.app",
  messagingSenderId: "52182365318",
  appId: "1:52182365318:web:74010295228bcb7af6cd07",
  measurementId: "G-8LTJYLRRTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth} 