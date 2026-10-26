const menuIcon=document.getElementById("menu-icon");
const nav= document.getElementById("nav");
const panierIcon=document.getElementById("toggle-cart");
const panierMenu=document.getElementById("MenuPanier");
const IconFiltre=document.getElementById("IconFiltre");
const MenuFilter=document.getElementById("MenuFilter");
menuIcon.addEventListener('click',()=>{
    nav.classList.toggle('active');
})
panierIcon.addEventListener('click',()=>{
    panierMenu.classList.toggle('active');
})
const filtreButtons = document.querySelectorAll(".filtre1 button");
const filtreli = document.querySelectorAll("#MenuFilter li");
const filterableCards = document.querySelectorAll(".card-container .card");

let selectedCategory = "All"; 
let selectedType = "T";  
IconFiltre.addEventListener('click',()=>{
  MenuFilter.classList.toggle('active');
});
function filterCards() {
  filterableCards.forEach(card => {
    const cat = card.dataset.name;
    const type = card.dataset.type;

    const matchCategory = selectedCategory === "All" || cat === selectedCategory;
    const matchType = selectedType === "T" || type === selectedType;

    if (matchCategory && matchType) {
      card.classList.remove("hide");
    } 
    else {
      card.classList.add("hide");
    }
  });
}

filtreButtons.forEach(button => {
  button.addEventListener("click", e => {
    document.querySelector(".filtre1 .Active")?.classList.remove("Active");
    e.target.classList.add("Active");
    selectedCategory = e.target.dataset.name;
    filterCards();
  });
});

filtreli.forEach(li => {
  li.addEventListener("click", e => {
    selectedType = li.dataset.type;
    const principalSpan = document.getElementById("Principal");
    if (principalSpan) {
      principalSpan.textContent = li.textContent.trim();
    }
    filterCards();
  });
});
filterCards();
/*scrolled navbar*/
const header= document.getElementById("welcomeHeader");
const list= document.querySelectorAll(".list");
const navicon =document.getElementById("toggle-cart");
const imgnav= document.querySelector(".Logo");
const logopanier= document.querySelector(".logopanier");
window.addEventListener('scroll',()=>{
  header.classList.toggle('scrollednav', window.scrollY > 0);
    if (window.scrollY > 0) {
    header.classList.add('scrollednav');
    navicon.classList.add('scrolledlist');
    menuIcon.classList.add('scrolledlist');
    imgnav.src = "assets/logoedited.png";
    logopanier.src = "assets/editedpanier.png";
  } 
  else {
    header.classList.remove('scrollednav');
    navicon.classList.remove('scrolledlist');
    menuIcon.classList.remove('scrolledlist');
    imgnav.src = "assets/LogoDigitalia-removebg-preview.png";  
    logopanier.src = "assets/panierNavImage.png";
  }
});
window.addEventListener('scroll',()=>{
  list.forEach((a)=>{
    a.classList.toggle('scrolledlist', window.scrollY > 0);
  });
});
