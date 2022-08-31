// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { registerUser } from '../FirebaseConfiguration/firebaseAuth.js';

export const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('registerDiv');
  const pRegister = document.createElement('h3');
  const formRegister = document.createElement('form');
  formRegister.classList.add('formRegister');
  const formDiv = document.createElement('div');
  const buttonHome = document.createElement('button');
  const inputEmailRegister = document.createElement('input');
  const inputPasswordRegister = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const inputnameUser = document.createElement('input');
  const imgDiv = document.createElement('div');
  const imgRegister = new Image();
  imgRegister.src = './images/manoscirculo.png';

  pRegister.textContent = 'INGRESA TUS DATOS Y CREA TU CUENTA';
  buttonHome.textContent = 'REGRESAR';

  inputnameUser.setAttribute('type', 'text');
  inputnameUser.classList.add('inputform');
  inputnameUser.setAttribute('placeholder', 'Nombre de Usuario');

  inputEmailRegister.setAttribute('type', 'email');
  inputEmailRegister.classList.add('inputform');
  inputEmailRegister.setAttribute('placeholder', 'Email');

  inputPasswordRegister.setAttribute('type', 'password');
  inputPasswordRegister.classList.add('inputform');
  inputPasswordRegister.setAttribute('placeholder', 'Password');

  buttonRegister.textContent = 'REGISTRAR';
  buttonRegister.setAttribute('type', 'submit');

  formDiv.classList.add('formDiv');
  buttonHome.classList.add('buttonHome');

  formRegister.appendChild(inputnameUser);
  formRegister.appendChild(inputEmailRegister);
  formRegister.appendChild(inputPasswordRegister);
  formRegister.appendChild(buttonRegister);
  formDiv.appendChild(pRegister);
  formDiv.appendChild(formRegister);
  formDiv.appendChild(buttonHome);
  imgDiv.appendChild(imgRegister);
  homeDiv.appendChild(imgDiv);
  homeDiv.appendChild(formDiv);

  buttonHome.addEventListener('click', () => onNavigate('/'));
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    sessionStorage.nameUser = inputnameUser.value;
    console.log(inputEmailRegister.value, inputPasswordRegister.value);

    registerUser(inputEmailRegister.value, inputPasswordRegister.value);
  });

  return homeDiv;
};
