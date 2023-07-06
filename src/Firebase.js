// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFwyLnsOKWI3xSBVy9VE8z6gxC6vrURQ0",
  authDomain: "react-hooks-blog-aacb7.firebaseapp.com",
  projectId: "react-hooks-blog-aacb7",
  storageBucket: "react-hooks-blog-aacb7.appspot.com",
  messagingSenderId: "873716210918",
  appId: "1:873716210918:web:03e8e2fea4112cca182f27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
// export const firestore = getFirestore(app);
