import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnRCXQCbFYCwWNZyFl9L5IsthHDDNwxJY",
  authDomain: "vue-project-630a3.firebaseapp.com",
  projectId: "vue-project-630a3",
  storageBucket: "vue-project-630a3.appspot.com",
  messagingSenderId: "796602896473",
  appId: "1:796602896473:web:73f01d49a0898ef111a148",
  measurementId: "G-3T1BFEJHC5",
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
