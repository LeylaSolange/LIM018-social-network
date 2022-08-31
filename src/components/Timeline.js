import {
  db, collection, addDoc, auth, signOut,
} from '../FirebaseConfiguration/firebase.js';
import { onNavigate } from '../main.js';
import { signOutUser } from '../FirebaseConfiguration/firebaseAuth.js';

export const timeline = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenida al Timeline';

  const sectionTimeline = document.createElement('section');
  const formPost = document.createElement('form');
  const inputPost = document.createElement('textarea');
  const bttnPost = document.createElement('button');
  const articlePost = document.createElement('article');
  const profile = document.createElement('aside');
  const bttnsignout = document.createElement('button');

  inputPost.setAttribute('type', 'text');
  inputPost.setAttribute('placeholder', 'Escribe tu publicación');
  bttnPost.textContent = 'Publicar';
  bttnPost.setAttribute('type', 'submit');
  articlePost.textContent = 'Hiii!';
  bttnsignout.textContent = 'Cerrar Sesión';

  formPost.appendChild(inputPost);
  formPost.appendChild(bttnPost);
  sectionTimeline.appendChild(articlePost);
  sectionTimeline.appendChild(formPost);
  profile.appendChild(bttnsignout);
  homeDiv.appendChild(sectionTimeline);
  homeDiv.appendChild(profile);

  formPost.addEventListener('submit', (x) => {
    x.preventDefault();
    console.log(inputPost.value);
    const Name = sessionStorage.nameUser;
    const nameGoo = sessionStorage.nameGoogle;

    if (nameGoo) {
      console.log(nameGoo);
      const docRef =  
      addDoc(collection(db, 'posts'), {
        text: inputPost.value,
        fecha: Date.now(),
        usuario: nameGoo,
      });
      console.log('Document written with ID: ', docRef.id);
    } if (Name) {
      console.log(Name);
      const docRef = addDoc(collection(db, 'posts'), {
        text: inputPost.value,
        fecha: Date.now(),
        usuario: Name,

      });
    }

    bttnsignout.addEventListener('click', (e) => {
      e.preventDefault();

      signOutUser();
    });
    // try {
    //   const docRef = addDoc(collection(db, 'posts'), {
    //     text: inputPost.value,
    //     fecha: Date.now(),
    //   });
    //   console.log('Document written with ID: ', docRef.id);
    // } catch (e) {
    //   console.error('Error adding document: ', e);
    // }
  });

  return homeDiv;
};
