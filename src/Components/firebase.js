import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZbvg-xhx3zmXZOMk--jZOzRPJNhrdEA8",
  authDomain: "twitt-bf2b4.firebaseapp.com",
  projectId: "twitt-bf2b4",
  storageBucket: "twitt-bf2b4.appspot.com",
  messagingSenderId: "837662296223",
  appId: "1:837662296223:web:9f0c9a8418b40f69debaaa",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
