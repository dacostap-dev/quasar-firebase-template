import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

// Agregar configuración firebase:
// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: 'AIzaSyAvALbXmvThrwMnS50WUeB_qDBGT7doBTg',
//   authDomain: 'viru-6fc64.firebaseapp.com',
//   projectId: 'viru-6fc64',
//   storageBucket: 'viru-6fc64.appspot.com',
//   messagingSenderId: '682497354056',
//   appId: '1:682497354056:web:9ec221da7ee1ce7cc6ab7d',
// };

console.log(process.env.AUTH_DOMAIN);
console.log(typeof process.env.AUTH_DOMAIN);

const firebaseConfig = {
  apiKey: process.env.API_KEY?.trim(),
  authDomain: process.env.AUTH_DOMAIN?.trim(),
  projectId: process.env.PROJECT_ID?.trim(),
  storageBucket: process.env.STORAGE_BUCKECT?.trim(),
  messagingSenderId: process.env.MESSAGING_SENDER_ID?.trim(),
  appId: process.env.APP_ID?.trim(),
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const firebaseAuth = getAuth(firebaseApp);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(firebaseApp);

// console.log({ auth, db });

export {
  firebaseAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  firestore,
};
