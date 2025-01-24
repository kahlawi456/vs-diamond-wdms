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
    authDomain: String(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
    //databaseURL will error if same as the others
    databaseURL: "https://vsdiamond-database-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: String(process.env.REACT_APP_FIREBASE_PROJECT_ID),
    storageBucket: String(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: String(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
    appId: String(process.env.REACT_APP_FIREBASE_APP_ID),
    measurementId: String(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default app;
export {auth} 