
import './style.css';
import plateImage from './plate.png';

export function renderHome () {
  const main = document.querySelector('#content')
  document.body.append(main);

  const title = document.createElement('h1')
  title.innerText = "The Punderful Plate";
  main.append(title);
  title.classList.add('.h1');
  
  const plate = new Image();
  plate.src = plateImage;
  main.appendChild(plate);

  const descriptionEl = document.createElement('div');
  main.append(descriptionEl);

  const description = document.createElement('p');
  main.append(description);
  description.innerText = `Welcome to The Punderful Plate, where every dish is served with a side of laughter! Our quirky and cozy eatery is a delightful haven for food enthusiasts and pun aficionados alike. Indulge in a culinary adventure that tantalizes your taste buds while tickling your funny bone. From our delectable "Punderful Pasta" to our "Hilarious Hamburgers," each menu item is crafted with a generous helping of wit and charm. Join us for a dining experience that promises to satisfy both your appetite and your sense of humor. Get ready to savor the flavor of pun-omenal cuisine in a setting that's sure to leave you grinning from ear to ear. Come for the food, stay for the puns!`

}
console.log("npm watch test");