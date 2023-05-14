import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCntfGwtTPkuLAXlEKgaipHVr6tXDTQcA",
  authDomain: "disney-plus-22227.firebaseapp.com",
  projectId: "disney-plus-22227",
  storageBucket: "disney-plus-22227.appspot.com",
  messagingSenderId: "780475923769",
  appId: "1:780475923769:web:7ac25cdcafd1d3150bbce8",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseDb = firebaseApp.firestore();
const firebaseAuth = firebase.auth();
const firebaseStorage = firebase.storage();
const firebaseAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebaseAuth, firebaseAuthProvider, firebaseDb, firebaseStorage };
