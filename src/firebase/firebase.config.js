// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEYIhMV0OtYJjtoxXK_D6PSR60i1x8BQg",
  authDomain: "react-dragon-news-16cae.firebaseapp.com",
  projectId: "react-dragon-news-16cae",
  storageBucket: "react-dragon-news-16cae.appspot.com",
  messagingSenderId: "298036125249",
  appId: "1:298036125249:web:273d1a41dcdd394797b0c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;