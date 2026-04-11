const menuIcon=document.getElementById("menu-icon");
const nav= document.getElementById("nav");
const panierIcon=document.getElementById("toggle-cart");
const panierMenu=document.getElementById("MenuPanier");
menuIcon.addEventListener('click',()=>{
    nav.classList.toggle('active');
})
panierIcon.addEventListener('click',()=>{
    panierMenu.classList.toggle('active');
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function toggleMenu() {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  if (isOpen) {
    navMenu.querySelector('.nav-link').focus();
  }
}

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  }
});