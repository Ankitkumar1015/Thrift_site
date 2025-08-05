// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkr0rAdS0QI9tmCIy4ZyPhvdMjXDkdxYA",
  authDomain: "thriftstyle-7ef14.firebaseapp.com",
  projectId: "thriftstyle-7ef14",
  storageBucket: "thriftstyle-7ef14.appspot.com",
  messagingSenderId: "719169934420",
  appId: "1:719169934420:web:d77aad565bab7c0cc909c1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
