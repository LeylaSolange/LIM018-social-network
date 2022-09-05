// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
  GoogleAuthProvider, signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import {
  getFirestore, collection, addDoc, getDoc, doc, onSnapshot, deleteDoc, updateDoc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyD50-seZvyjwgNMOfYgHVOr7Yk1bNBwYHE',
  authDomain: 'miredsocial21-addc2.firebaseapp.com',
  projectId: 'miredsocial21-addc2',
  storageBucket: 'miredsocial21-addc2.appspot.com',
  messagingSenderId: '848971893789',
  appId: '1:848971893789:web:62e6cd3b4cf3e426808af4',
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export {
  createUserWithEmailAndPassword, auth, signInWithEmailAndPassword,
  provider, signInWithPopup, GoogleAuthProvider, collection, addDoc, db, signOut, doc,
  onSnapshot, deleteDoc, getDoc, updateDoc,
};
