import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBihtTQN9WT6Qc7njaukifrt9aHKF0VNmI",
  authDomain: "chatapp-d736b.firebaseapp.com",
  projectId: "chatapp-d736b",
  storageBucket: "chatapp-d736b.appspot.com",
  messagingSenderId: "518669125167",
  appId: "1:518669125167:web:c272ed30a3ae881036e8da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
