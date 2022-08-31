/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { loginUser, loginwithGoogle } from '../FirebaseConfiguration/firebaseAuth.js';

export const login = () => {
  const homeDiv = document.createElement('div');
  
  const hLogin = document.createElement('h1');
  const formDiv = document.createElement('div');
  const googleDiv = document.createElement('div');
  const formLogin = document.createElement('form');
  const buttonHome = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const bttonlogin = document.createElement('button');
  const bttngoogle = document.createElement('button');
  const imggoogle = new Image();
  imggoogle.src = './images/logingoogle.png';

  hLogin.textContent = 'Login';

  buttonHome.textContent = 'Regresar al Home';
  

  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Email');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Password');
  bttonlogin.textContent = 'Iniciar sesión';
  bttonlogin.setAttribute('type', 'submit');

  bttngoogle.textContent = 'Inicia sesión con Google';
  bttngoogle.setAttribute('type', 'button');

  homeDiv.classList.add('loginDiv');
  formLogin.classList.add('formLogin');
  

  formLogin.appendChild(hLogin);
  formLogin.appendChild(inputEmail);
  formLogin.appendChild(inputPassword);
  formLogin.appendChild(bttonlogin);
  formDiv.appendChild(formLogin);
  googleDiv.appendChild(bttngoogle);
  googleDiv.appendChild(buttonHome);
  homeDiv.appendChild(formDiv);
  homeDiv.appendChild(googleDiv);

  buttonHome.addEventListener('click', () => onNavigate('/'));

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    loginUser(inputEmail.value, inputPassword.value);
  });

  bttngoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginwithGoogle();
  });

  return homeDiv;
};
