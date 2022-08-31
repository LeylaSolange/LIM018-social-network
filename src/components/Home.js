// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  const imgLogoDiv = document.createElement('div');
  const imgLogo = new Image();
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const imgVicDiv = document.createElement('div');
  const imgVic1 = new Image();
  const welcome = document.createElement('p');
  const bttnDiv = document.createElement('div');
  imgLogo.src = './images/mujerescorazon.png';
  imgVic1.src = './images/Victoria01.png';

  welcome.textContent = '¡Bienvenida a un espacio seguro!';
  welcome.classList.add('tittlePage');

  buttonRegister.textContent = 'Regístrate';
  buttonRegister.classList.add('buttonsHome');
  buttonLogin.textContent = 'Inicia sesión';
  buttonLogin.classList.add('buttonsHome');

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  imgLogoDiv.appendChild(imgLogo);
  imgVicDiv.appendChild(imgVic1);
  bttnDiv.appendChild(buttonRegister);
  bttnDiv.appendChild(buttonLogin);
  homeDiv.appendChild(imgLogoDiv);
  homeDiv.appendChild(imgVicDiv);
  homeDiv.appendChild(welcome);
  homeDiv.appendChild(bttnDiv);
  homeDiv.appendChild(imgLogoDiv);

  homeDiv.classList.add('homeDiv');

  return homeDiv;
};
