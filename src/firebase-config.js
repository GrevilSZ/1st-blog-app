import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq8JC-BNUMeJNGa9YEkxhiYriM6AKbnlI",
  authDomain: "blog-app-4faed.firebaseapp.com",
  projectId: "blog-app-4faed",
  storageBucket: "blog-app-4faed.appspot.com",
  messagingSenderId: "194424305877",
  appId: "1:194424305877:web:d9d9c6e60e386bd47c0a5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
