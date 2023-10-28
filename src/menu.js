
// export function renderMenu () {
//   const section = document.querySelector('section');
//   const menuItemEl = document.createElement('p');
//   menuItemEl.textContent = "This is the first item";
//   section.append(menuItemEl);
  
// }
import pastaImage from './pasta.webp';
import hamburgerImage from './hamburger.jpg';

function createMenuItem(imageSource, descriptionText) {
  const menuItem = document.createElement('div');
  const image = document.createElement('img');
  const description = document.createElement('p');

  image.src = imageSource;
  description.textContent = descriptionText;

  menuItem.appendChild(image);
  menuItem.appendChild(description);

  return menuItem;
}

export function renderMenu() {
  const section = document.querySelector('section');
  // const menuContainer = document.querySelector('#menu-container');

  const menuItems = [
      { imageSource: pastaImage, descriptionText: 'Get ready to twist your taste buds into delightful knots with our Punderful Pasta! Get entwined in a whirlwind of pasta-based pun-omenon!' },
      { imageSource: hamburgerImage, descriptionText: 'Prepare for a side-splitting, mouthwatering adventure with our Hilarious Hamburgers! Get ready to chuckle your way through the juiciest, most rib-tickling burgers in town. Our hilarious burgers are no joke — they\'re seriously delicious!"' },
  ];

  menuItems.forEach(item => {
      const menuItem = createMenuItem(item.imageSource, item.descriptionText);
      section.appendChild(menuItem);
  });
}



