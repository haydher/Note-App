import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
 apiKey: process.env.REACT_APP_APIKEY,
 authDomain: process.env.REACT_APP_AUTHDOMAIN,
 projectId: process.env.REACT_APP_PROJECTID,
 storageBucket: process.env.REACT_APP_STORAGEBUCKET,
 messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID,
 appId: process.env.REACT_APP_APPID,
 measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// initialize it only once
if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
