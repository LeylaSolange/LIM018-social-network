import {
  db, collection, addDoc, doc, onSnapshot, deleteDoc, getDoc, updateDoc,
} from './firebase.js';

export const savePost = (user, texto) => addDoc(collection(db, 'posts'), {
  text: texto,
  fecha: Date.now(),
  usuario: user,
});

export const ongetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePost = (id, textoeditado) => updateDoc(doc(db, 'posts', id), (textoeditado));
