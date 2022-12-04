const nav = document.querySelector('#main-nav')
const list = nav.querySelector('ul');
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
const button = burgerClone.querySelector('button');

// Toggle aria-expanded attribute
button.addEventListener('click', e => {
  // aria-expanded="true" signals that the menu is currently open
  const isOpen = button.getAttribute('aria-expanded') === "true"
  button.setAttribute('aria-expanded', !isOpen);
});

// Hide list on keydown Escape
nav.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    button.setAttribute('aria-expanded', false);
  }
});

// Add the button to the page
nav.insertBefore(burgerClone, list);