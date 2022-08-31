import { myFunction } from './lib/index.js';
// eslint-disable-next-line import/no-cycle
import { home } from './components/Home.js';
import { register } from './components/Register.js';
import { login } from './components/Login.js';
import { timeline } from './components/Timeline.js';

myFunction();
const rootDiv = document.getElementById('root');
const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/timeline': timeline,
};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());
