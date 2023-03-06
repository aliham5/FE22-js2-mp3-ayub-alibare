// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0OiwBj0iuzjWDtgS3waXp1ZrPw0QeM8I",
  authDomain: "storemp3-e6b39.firebaseapp.com",
  databaseURL: "https://storemp3-e6b39-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "storemp3-e6b39",
  storageBucket: "storemp3-e6b39.appspot.com",
  messagingSenderId: "391014420244",
  appId: "1:391014420244:web:55538d47d457ddb89a7c01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

console.log(database)
