
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  authDomain: "line-clone-3d980.firebaseapp.com",
  projectId: "line-clone-3d980",
  storageBucket: "line-clone-3d980.appspot.com",
  messagingSenderId: "938848709417",
  appId: "1:938848709417:web:e249fc1ae57af0d1dc6538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }