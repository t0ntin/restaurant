import './style.css';
import plateImage from './plate.png';
import { renderMenu } from './menu';
import { renderContact } from './contact';

function createHeader(main) {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const title = document.createElement('h1');

  main.append(header);
  header.append(title);
  title.textContent = 'The Punderful Plate';
  header.append(nav);
  const sectionNames = ['Home', 'Menu', 'Contact'];
  for (let i = 0; i < 3; i++) {
    const button = document.createElement('button');
    button.innerText = sectionNames[i];
    nav.append(button);
  }
}

function createSection(main) {
  const section = document.createElement('section');
  main.append(section);
  return section;
}

function createFooter(main) {
  const footer = document.createElement('footer');
  main.append(footer);
}

function renderHome(section) {
  // const container = document.createElement('div');
  // section.append(container);
  const plate = new Image();
  plate.src = plateImage;
  section.append(plate);
  plate.classList.add('plate');
  const description = document.createElement('p');
  section.append(description);
    description.innerText = `Welcome to The Punderful Plate. Our quirky and cozy eatery is a delightful haven for food enthusiasts and pun aficionados alike. From our delectable "Punderful Pasta" to our "Hilarious Hamburgers," you will savor the flavor of pun-omenal cuisine. Come for the food, stay for the puns!`
}

function handleClick() {
  const section = document.querySelector('section');

  let activePage = {homeIsActive : true, menuIsActive : false};
  const nav = document.querySelector('nav');
  nav.addEventListener('click', function (event) {
    if (activePage.homeIsActive === true && event.target.innerText === 'Home') {
      return;
    } else 
      section.innerHTML = '';
      activePage.homeIsActive = true;
      renderHome(section);
    if (event.target.innerText === 'Menu'){
      section.innerHTML = '';
      renderMenu(section);
      activePage.homeIsActive = false;
    }
    if (event.target.innerText === 'Contact') {
      section.innerHTML = '';
      renderContact(section);
      activePage.homeIsActive = false;
    }
  });
}

function loadPage() {
  const main = document.querySelector('#content');
  
  createHeader(main);
  const section = createSection(main);
  renderHome(section);
  createFooter(main);
  handleClick();
}

export default loadPage;