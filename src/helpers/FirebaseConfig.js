import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";ß
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc7j2oj_TWHIZZuppKBwxhRuujj87VMzk",
  authDomain: "inftable-1.firebaseapp.com",
  projectId: "inftable-1",
  storageBucket: "inftable-1.appspot.com",
  messagingSenderId: "1006147752475",
  appId: "1:1006147752475:web:713e07143855f66f0b9ebe",
  measurementId: "G-5LSKN67KS7",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// auth
export const auth = getAuth(app);
// auth end

export const db = getFirestore();
