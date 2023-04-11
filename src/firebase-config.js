import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA6ubORwdV3PobuWmyhtml1lvsvoscBnUA",
  authDomain: "murointeractivo-16847.firebaseapp.com",
  projectId: "murointeractivo-16847",
  storageBucket: "murointeractivo-16847.appspot.com",
  messagingSenderId: "47299386858",
  appId: "1:47299386858:web:0d73c1a15cbd6bc119e693"
  };

const app = initializeApp(firebaseConfig)
export const auth= getAuth(app);
export const db = getFirestore(app)