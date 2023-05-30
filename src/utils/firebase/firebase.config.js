// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyDtnK5nXEspzWEp5gZGP-0rv9qsNb_VT4o',
  authDomain: "stress-n-anxiety-blog.firebaseapp.com" ,
  projectId: "stress-n-anxiety-blog",
  storageBucket: "stress-n-anxiety-blog.appspot.com" ,
  messagingSenderId: 175471109946 ,
  appId: "1:175471109946:web:55766e8014e7fce62fd203",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;