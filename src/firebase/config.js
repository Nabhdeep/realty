// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import {getStorage , ref} from 'firebase/storage';
import {getFirestore , serverTimestamp} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId ,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

export const projectStorage = getStorage(app)
export const uploadRef = ref
export const projectFirestore = getFirestore(app)
export const  timestamp = serverTimestamp()


