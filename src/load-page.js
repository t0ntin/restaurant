import './style.css';
import plateImage from './plate.png';


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
  const plate = new Image();
  plate.src = plateImage;
  main.append(plate);
  const description = document.createElement('p');
  main.append(description);
  description.innerText = `Welcome to The Punderful Plate. Our quirky and cozy eatery is a delightful haven for food enthusiasts and pun aficionados alike. From our delectable "Punderful Pasta" to our "Hilarious Hamburgers," you will savor the flavor of pun-omenal cuisine. Come for the food, stay for the puns!`
}

function loadPage() {
  const main = document.querySelector('#content');
  
  main.append(createHeader());
  renderHome(main);
}


export default loadPage;

