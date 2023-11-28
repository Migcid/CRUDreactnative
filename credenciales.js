// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe3GEXC0rLAzEF-MM5TOG6y0vBei6Or7k",
  authDomain: "appcce-b8ea8.firebaseapp.com",
  projectId: "appcce-b8ea8",
  storageBucket: "appcce-b8ea8.appspot.com",
  messagingSenderId: "391694768892",
  appId: "1:391694768892:web:b599708be62a8df8e5d579"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase