

export function renderContact () {
  const section = document.querySelector('section');

  // contactParagraph.textContent = `test`
  
  
  
  const contactInfo = [`Email: info@punderfulplate.com`, `Phone: 123-456-7890`,`Address: 123 Pun Avenue, Foodville` ];
  for (let i = 0; i < contactInfo.length; i++) {
    const contactParagraph = document.createElement('p');
    section.append(contactParagraph);
    contactParagraph.innerText = contactInfo[i];
  }
  
}
