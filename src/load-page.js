

import { renderHome } from "./home";

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

function loadPage() {
  const main = document.querySelector('#content');
  
  main.append(createHeader());
  renderHome();
}
// TRYING TO CREATE LIS INSIDE UL. *****

export default loadPage;


// function loadPage() {
//   const main = document.querySelector('#content')

//   const nav = document.createElement('nav');
//   main.append(nav);
  
//   const navUl = document.createElement('ul');
//   nav.append(navUl);

//   const navHomeLi = document.createElement('li');
//   navUl.append(navHomeLi);
//   navHomeLi.textContent = 'Home';

//   const navMenuLi = document.createElement('li');
//   navUl.append(navMenuLi);
//   navMenuLi.textContent = 'Menu';

//   const navContactLi = document.createElement('li');
//   navUl.append(navContactLi);
//   navContactLi.textContent = 'Contact';

//   const title = document.createElement('h1')
//   nav.append(title);
//   title.innerText = "The Punderful Plate";
  
  
  
// }
