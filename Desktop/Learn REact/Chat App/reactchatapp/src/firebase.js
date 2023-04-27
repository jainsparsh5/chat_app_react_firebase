import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAetNRIHX62fPf6bVdSWOcKhA0MJfQPH2k",
  authDomain: "reactchatapp-4a862.firebaseapp.com",
  projectId: "reactchatapp-4a862",
  storageBucket: "reactchatapp-4a862.appspot.com",
  messagingSenderId: "867423082515",
  appId: "1:867423082515:web:b5abad080fcbb4476d87e6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
