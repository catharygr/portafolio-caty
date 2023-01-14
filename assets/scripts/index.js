const nav = document.querySelector('#main-nav')
const list = nav.querySelector('ul');
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
const button = burgerClone.querySelector('button');

// Toggle aria-expanded attribute
button.addEventListener('click', e => {
  // aria-expanded="true" Indica que el menú está abierto actualmente
  const isOpen = button.getAttribute('aria-expanded') === "true"
  button.setAttribute('aria-expanded', !isOpen);
});

//Ocultar la lista al presionar escape
nav.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    button.setAttribute('aria-expanded', false);
  }
});

// Agregar el botón a la página
nav.insertBefore(burgerClone, list);


// Función para cerrar el menú para que se cierre si el enlace es un almohadilla
function cerrarMenu() {
  button.setAttribute('aria-expanded', 'false');
}