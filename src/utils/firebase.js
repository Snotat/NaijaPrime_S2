// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtQtJt2Eh4B3luWiWb5sLxP05kE_4Vdzg",
  authDomain: "naijaprime.firebaseapp.com",
  projectId: "naijaprime",
  storageBucket: "naijaprime.appspot.com",
  messagingSenderId: "837992473335",
  appId: "1:837992473335:web:3669c39351f5244e8ae9f2",
  measurementId: "G-NCMV3ZNFXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;