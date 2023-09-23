// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMIXfyXjLWnu19-l_ctK-yuTXVR9Snnhc",
  authDomain: "insta-clone-fcadb.firebaseapp.com",
  projectId: "insta-clone-fcadb",
  storageBucket: "insta-clone-fcadb.appspot.com",
  messagingSenderId: "653617760213",
  appId: "1:653617760213:web:2b6d0bbadf121c22f69f5c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
