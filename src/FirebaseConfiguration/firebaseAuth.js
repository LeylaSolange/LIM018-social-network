import {
  auth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, provider, signOut,
} from './firebase.js';
import { onNavigate } from '../main.js';

export const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);

    onNavigate('/login');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);

    // ..
  });

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    if (user) {
      onNavigate('/timeline');
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export const loginwithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);

      // The signed-in user info.
      const user = result.user;

      console.log(user);
      sessionStorage.nameGoogle = user.displayName;
      onNavigate('/timeline');
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};
export const signOutUser = () => signOut(auth)
  .then(() => {
    onNavigate('/');
    sessionStorage.clear();
  }).catch((error) => {
  // An error happened.
  });
