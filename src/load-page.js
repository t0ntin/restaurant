import './style.css';
import plateImage from './plate.png';
import { renderMenu } from './menu';

function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('p');
  title.textContent = 'The Punderful Plate';
  header.append(title);
  header.appendChild(createNav());
  return header;
}

function createNav() {
  const nav = document.createElement('nav');  
  nav.append(createNavUl());
  return nav;
}

function createNavUl() {
  const navUl = document.createElement('ul');
  const liElements = createNavLi();
  liElements.forEach(li => {
    navUl.appendChild(li); 
  });
  return navUl;
}

function createNavLi() {
  const navHomeLi = document.createElement('li');
  navHomeLi.textContent = 'Home';

  const navMenuLi = document.createElement('li');
  navMenuLi.textContent = 'Menu';

  const navContactLi = document.createElement('li');
  navContactLi.textContent = 'Contact';

  return [navHomeLi, navMenuLi, navContactLi];
}

function renderHome(main) {
  let homeInfo = {isHomeLoaded : true};
  const bodyEl = document.createElement('div');
  main.append(bodyEl);
  const plate = new Image();
  plate.src = plateImage;
  bodyEl.append(plate);
  const description = document.createElement('p');
  bodyEl.append(description);
  description.innerText = `Welcome to The Punderful Plate. Our quirky and cozy eatery is a delightful haven for food enthusiasts and pun aficionados alike. From our delectable "Punderful Pasta" to our "Hilarious Hamburgers," you will savor the flavor of pun-omenal cuisine. Come for the food, stay for the puns!`
}


function createFooter(main) {
  const footer = document.createElement('footer');
  main.append(footer);
  footer.textContent = "test";
}

function loadPage() {
  const main = document.querySelector('#content');
        console.log("main element:", main);
  main.append(createHeader());
  renderHome(main);
  createFooter(main);
  renderMenu(main);
}

export default loadPage;

