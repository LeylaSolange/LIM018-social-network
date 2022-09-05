import {
  db, collection, addDoc, auth, signOut, onSnapshot,
} from '../FirebaseConfiguration/firebase.js';
import { onNavigate } from '../main.js';
import { signOutUser } from '../FirebaseConfiguration/firebaseAuth.js';
import {
  savePost, ongetPost, deletePost, getPost, updatePost,
} from '../FirebaseConfiguration/firestore.js';

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
  const divmuro = document.createElement('div');
  const divmodal = document.createElement('div');

  inputPost.setAttribute('type', 'text');
  inputPost.setAttribute('placeholder', 'Escribe tu publicación');
  bttnPost.textContent = 'Publicar';
  bttnPost.setAttribute('type', 'submit');
  articlePost.textContent = 'Hiii!';
  bttnsignout.textContent = 'Cerrar Sesión';

  const modalstr = `
  <div class="editform" id ="editform" style="display: none">
      <form>
      <textarea class="inputEdit"> </textarea>
      <button type="submit">Guardar</button>
      </form>
      </div>
       `;
  divmodal.innerHTML = modalstr;
  const editform = divmodal.querySelector('.editform');

  formPost.appendChild(inputPost);
  formPost.appendChild(bttnPost);
  sectionTimeline.appendChild(articlePost);
  sectionTimeline.appendChild(formPost);
  profile.appendChild(bttnsignout);
  homeDiv.appendChild(sectionTimeline);
  homeDiv.appendChild(divmodal);
  homeDiv.appendChild(divmuro);
  homeDiv.appendChild(profile);

  ongetPost((querySnapshot) => {
    let html = '';

    querySnapshot.forEach((doc) => {
      const post = doc.data();

      // eslint-disable-next-line no-template-curly-in-string
      html += `
      <div>
       <h3> ${post.usuario}</h3>  
       <p> ${post.text} </p>
       <button class='btnEdit' data-id="${doc.id}"> Editar </button>
       <button class='btndelete' data-id="${doc.id}"> Borrar </button>
      </div>
      `;
    });
    divmuro.innerHTML = html;

    const btnsdelete = divmuro.querySelectorAll('.btndelete');

    btnsdelete.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        deletePost(event.target.dataset.id);
      });
    });

    const btnsEditPost = divmuro.querySelectorAll('.btnEdit');
    const inputEdit = divmodal.querySelector('.inputEdit');
    // let id = '';

    btnsEditPost.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getPost(e.target.dataset.id);
        console.log(e.target.dataset.id);
        const pEdit = doc.data();
        localStorage.setItem('idPost', doc.id);
        inputEdit.value = pEdit.text;

        editform.style.display = 'block';
      });
    });
    editform.addEventListener('submit', (o) => {
      o.preventDefault();
      const newPost = inputEdit.value;
      console.log(newPost);

      const idEdit = localStorage.getItem('idPost');
      console.log(idEdit);

      updatePost(idEdit, { text: newPost });

      editform.style.display = 'none';
    });
  });

  formPost.addEventListener('submit', (x) => {
    x.preventDefault();
    const Name = sessionStorage.nameUser;
    const nameGoo = sessionStorage.nameGoogle;

    if (!inputPost.value.trim()) {
      return;
    }

    if (nameGoo) {
      savePost(nameGoo, inputPost.value);
    } if (Name) {
      savePost(Name, inputPost.value);
    }

    inputPost.value = '';
  });
  bttnsignout.addEventListener('click', (e) => {
    e.preventDefault();

    signOutUser();
  });

  return homeDiv;
};
