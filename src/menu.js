
function clearMain(main, homeIsLoaded) {
  // if (homeIsLoaded === true) {
  //   return;
  // } else 
  // main.classlist.add('')
}


export function renderMenu () {
  const section = document.querySelector('section');

  const menuItemEl = document.createElement('p');
  menuItemEl.textContent = "This is the first item";
  section.append(menuItemEl);
  
}

