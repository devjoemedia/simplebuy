// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqZHjsy6EEev7BDNv7bBZCeY3b0qujEUw",
  authDomain: "simplebuy-f30d4.firebaseapp.com",
  projectId: "simplebuy-f30d4",
  storageBucket: "simplebuy-f30d4.appspot.com",
  messagingSenderId: "81711023543",
  appId: "1:81711023543:web:4ed53aff6882f97b821432",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firebaseDB = getFirestore(app);

export default firebaseDB;
