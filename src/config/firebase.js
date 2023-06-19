
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCZlQPpk3vBKNcCZ34jqYsQJk8cfmosHnM",
  authDomain: "tiktok--jornada-b4e68.firebaseapp.com",
  projectId: "tiktok--jornada-b4e68",
  storageBucket: "tiktok--jornada-b4e68.appspot.com",
  messagingSenderId: "440558373784",
  appId: "1:440558373784:web:e451d7590bec95e85c79ed"
};


const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export default db;