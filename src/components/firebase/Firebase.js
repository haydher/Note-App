// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyDjA3tZ73LdEWt5KlTAogLdB72K45SGRpc",
 authDomain: "notes-app-88728.firebaseapp.com",
 projectId: "notes-app-88728",
 storageBucket: "notes-app-88728.appspot.com",
 messagingSenderId: "308237571050",
 appId: "1:308237571050:web:f6f8680f9eda8d2c471893",
 measurementId: "G-341WF3RXZ6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
