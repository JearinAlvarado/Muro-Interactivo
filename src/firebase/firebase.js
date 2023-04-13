import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAuqUvYuy6-yX5OxADxclYEm2px5nXUZak",
    authDomain: "muro-interactivo-e2063.firebaseapp.com",
    projectId: "muro-interactivo-e2063",
    storageBucket: "muro-interactivo-e2063.appspot.com",
    messagingSenderId: "896766769652",
    appId: "1:896766769652:web:2e2a43aa5d66d826ede1a1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);

export const storage = getStorage(app);