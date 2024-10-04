// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM0dwLk4xK6oh22KIjIk0WwNnvtwlXym8",
  authDomain: "auth-45323.firebaseapp.com",
  projectId: "auth-45323",
  storageBucket: "auth-45323.appspot.com",
  messagingSenderId: "1042331075542",
  appId: "1:1042331075542:web:3c418342c39d16916e5a77",
  measurementId: "G-L4HZ0G2HQ3",
  databaseURL: "https://auth-45323-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);