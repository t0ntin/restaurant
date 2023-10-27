import './style.css';
import plateImage from './plate.png';
import { renderMenu } from './menu';

function createHeader(main) {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const title = document.createElement('p');

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

function renderSection(section) {
  const plate = new Image();
  plate.src = plateImage;
  section.append(plate);
  const description = document.createElement('p');
  section.append(description);
    description.innerText = `Welcome to The Punderful Plate. Our quirky and cozy eatery is a delightful haven for food enthusiasts and pun aficionados alike. From our delectable "Punderful Pasta" to our "Hilarious Hamburgers," you will savor the flavor of pun-omenal cuisine. Come for the food, stay for the puns!`
}

function handleClick() {
  // let activePage = {homeIsActive : true};
  const nav = document.querySelector('nav');
  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      console.log("test");
      
    }
  });
}

function loadPage() {
  const main = document.querySelector('#content');
  
  createHeader(main);
  const section = createSection(main);
  renderSection(section);
  createFooter(main);
  handleClick();
}

export default loadPage;

