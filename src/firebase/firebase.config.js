// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmynLY5rGA7PvZB3OfvZXIFKGg0A5L-Ko",
  authDomain: "the-news-dragon-bb81b.firebaseapp.com",
  projectId: "the-news-dragon-bb81b",
  storageBucket: "the-news-dragon-bb81b.appspot.com",
  messagingSenderId: "334729148800",
  appId: "1:334729148800:web:051c2c45b29dcc7b05a965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;