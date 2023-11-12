
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDQv2Zz_F0m7xrLYKcjDX6Rp7uF27i7mEY",
  authDomain: "proyecto-final-react-d7d66.firebaseapp.com",
  projectId: "proyecto-final-react-d7d66",
  storageBucket: "proyecto-final-react-d7d66.appspot.com",
  messagingSenderId: "831910483812",
  appId: "1:831910483812:web:e47b01e31e1425c3838c71"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);