// === MENU BURGER ===
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");
menuIcon?.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// === PANIER (CART) ===
const panierIcon = document.getElementById("toggle-cart");
const panierMenu = document.getElementById("MenuPanier");
panierIcon?.addEventListener('click', () => {
  panierMenu.classList.toggle('active');
});