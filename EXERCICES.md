# 📝 Feuille d'Exercices - Digitalia Store

## 🎯 Instructions Générales

- **Temps estimé :** 8-10 heures total
- **Prérequis :** Connaissance de base en HTML, CSS, JavaScript
- **Outils :** VS Code + Live Server extension
- **Livrable :** Store électronique fonctionnel

---

## 📊 Phase 1 : Structure et Données (2h)

### ✅ **Exercice 1.1 : Compléter le HTML**
**Fichier :** `index.html`
**Durée :** 30 min

**Mission :** Remplacer les TODO par les sections complètes

1. **Navigation dans le header :**
```html
<nav class="nav">
    <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#products">Produits</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
<div class="cart">
    <button class="cart-btn" onclick="toggleCart()">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-count">0</span>
    </button>
</div>
```

2. **Section Hero complète**
3. **Section Filtres avec boutons et recherche**
4. **Section Produits avec grille**
5. **Ajout des scripts à la fin**

### ✅ **Exercice 1.2 : Base de Données Produits**
**Fichier :** `js/data.js`
**Durée :** 90 min

**Mission :** Créer 10 produits répartis sur 4 catégories

**Contraintes :**
- 3 smartphones minimum
- 2-3 ordinateurs/laptops
- 2 tablettes
- 2-3 accessoires
- Prix réalistes (50€ - 2500€)
- Descriptions attractives
- 3-5 spécifications par produit

**Template à suivre :**
```javascript
{
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "smartphones",
    price: 1299,
    image: "📱",
    description: "Le smartphone le plus avancé d'Apple avec puce A17 Pro",
    specs: {
        "Écran": "6.7 pouces Super Retina XDR",
        "Processeur": "A17 Pro",
        "Stockage": "256GB",
        "Appareil photo": "48MP + 12MP + 12MP",
        "Autonomie": "Jusqu'à 29h vidéo"
    }
}
```

**🎯 Critères de réussite :**
- [ ] 10 produits créés
- [ ] 4 catégories représentées
- [ ] Données cohérentes et réalistes
- [ ] Pas d'erreur JavaScript dans la console

---

## 🎨 Phase 2 : Styles CSS (2-3h)

### ✅ **Exercice 2.1 : Navigation et Header**
**Fichier :** `css/style.css`
**Durée :** 45 min

**Mission :** Styliser complètement le header

**À implémenter :**
```css
/* Navigation */
.nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.cart-btn {
    background: none;
    border: 2px solid white;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
}

.cart-count {
    background: #ff4757;
    color: white;
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
}
```

### ✅ **Exercice 2.2 : Section Hero**
**Durée :** 45 min

**Mission :** Créer une belle section d'accueil

**Spécifications :**
- Dégradé de fond reprenant les couleurs du header
- Texte centré et hiérarchisé
- Bouton CTA avec hover effects
- Padding généreux (150px top, 100px bottom)

### ✅ **Exercice 2.3 : Grille de Produits**
**Durée :** 60 min

**Mission :** Système de grille responsive

**Contraintes :**
- CSS Grid avec `repeat(auto-fit, minmax(300px, 1fr))`
- Cards avec ombres et hover effects
- Images en haut, infos en bas
- Boutons d'action stylisés
- Responsive sur mobile (1 colonne)

### ✅ **Exercice 2.4 : Filtres et Recherche**
**Durée :** 30 min

**Mission :** Interface de filtrage attractive

---

## ⚙️ Phase 3 : JavaScript - Fonctionnalités de Base (3h)

### ✅ **Exercice 3.1 : Affichage des Produits**
**Fichier :** `js/app.js`
**Durée :** 90 min

**Mission :** Faire fonctionner l'affichage

**Fonctions à coder :**

```javascript
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    // TODO: Boucler sur productsToRender
    // TODO: Créer une card pour chaque produit
    // TODO: Ajouter au DOM
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // TODO: Créer le HTML de la carte
    // TODO: Gérer les événements click
    // TODO: Retourner l'élément
}
```

**🎯 Test de validation :**
- [ ] Les produits s'affichent correctement
- [ ] Les images (emojis) sont visibles
- [ ] Les prix sont formatés
- [ ] Pas d'erreur console

### ✅ **Exercice 3.2 : Système de Filtres**
**Durée :** 60 min

**Mission :** Filtrage par catégorie + recherche

```javascript
function filterProducts(category) {
    currentFilter = category;
    
    // TODO: Mettre à jour les boutons actifs
    // TODO: Filtrer les produits
    // TODO: Re-render l'affichage
}

function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // TODO: Combiner filtre + recherche
    // TODO: Rechercher dans nom et description
}
```

### ✅ **Exercice 3.3 : Gestion du Panier - Base**
**Durée :** 30 min

**Mission :** Ajout au panier fonctionnel

```javascript
function addToCart(productId) {
    // TODO: Trouver le produit
    // TODO: Vérifier s'il existe déjà
    // TODO: Ajouter ou incrémenter quantité
    // TODO: Mettre à jour UI
}

function updateCartUI() {
    // TODO: Mettre à jour le compteur
    // TODO: Calculer le total
}
```

---

## 🚀 Phase 4 : Fonctionnalités Avancées (2-3h)

### ✅ **Exercice 4.1 : Modal Détails Produit**
**Durée :** 60 min

**Mission :** Modal avec spécifications complètes

**Fonctionnalités :**
- Ouverture au clic sur carte ou bouton "Détails"
- Affichage des spécifications techniques
- Bouton "Ajouter au panier" dans le modal
- Fermeture par X ou clic extérieur

### ✅ **Exercice 4.2 : Panier Latéral Complet**
**Durée :** 90 min

**Mission :** Panier coulissant avec toutes les fonctions

**Fonctionnalités :**
- Ouverture/fermeture fluide (transition CSS)
- Liste des articles avec quantités
- Boutons +/- pour modifier quantités
- Bouton supprimer par article
- Calcul du total en temps réel
- Bouton "Commander" (simulation)

### ✅ **Exercice 4.3 : Persistance LocalStorage**
**Durée :** 30 min

**Mission :** Sauvegarder le panier

```javascript
function saveCartToStorage() {
    localStorage.setItem('digitalia-cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('digitalia-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}
```

### ✅ **Exercice 4.4 : Polish et UX**
**Durée :** 30 min

**Mission :** Améliorer l'expérience

**À ajouter :**
- Notifications toast (succès, erreur)
- Animations fluides (CSS transitions)
- Scroll automatique vers produits
- Loading states
- Gestion des cas d'erreur

---

## 🏆 Challenges Bonus (Optionnels)

### 🌟 **Challenge 1 : Tri des Produits**
Ajouter un système de tri (prix croissant/décroissant, nom A-Z)

### 🌟 **Challenge 2 : Favoris**
Système de favoris avec coeur cliquable et persistance

### 🌟 **Challenge 3 : Mode Sombre**
Toggle pour basculer entre thème clair/sombre

### 🌟 **Challenge 4 : Animations Avancées**
Intersection Observer pour animations au scroll

---

## ✅ Checklist de Validation Finale

### **Fonctionnalités Core**
- [ ] Affichage de tous les produits
- [ ] Filtrage par catégorie fonctionnel
- [ ] Recherche textuelle opérationnelle
- [ ] Ajout au panier sans erreur
- [ ] Modification des quantités
- [ ] Suppression d'articles du panier
- [ ] Calcul correct du total
- [ ] Persistance du panier (refresh)

### **Interface et UX**
- [ ] Design responsive (mobile/desktop)
- [ ] Transitions fluides
- [ ] Pas d'erreur JavaScript
- [ ] Interface intuitive
- [ ] Performance correcte

### **Code Quality**
- [ ] Code indenté et commenté
- [ ] Fonctions courtes et spécialisées
- [ ] Noms de variables explicites
- [ ] Pas de répétition de code
- [ ] Organisation logique des fichiers

---

## 🆘 Aide et Debugging

### **Erreurs Communes**

**1. "Cannot read property of undefined"**
```javascript
// ❌ Erreur
const product = products.find(p => p.id === id);
console.log(product.name); // Erreur si product undefined

// ✅ Solution
const product = products.find(p => p.id === id);
if (product) {
    console.log(product.name);
}
```

**2. "Element is null"**
```javascript
// ❌ Erreur
document.getElementById('wrong-id').innerHTML = 'test';

// ✅ Solution
const element = document.getElementById('correct-id');
if (element) {
    element.innerHTML = 'test';
}
```

### **Tips de Debug**
```javascript
// Vérifier les données chargées
console.log('Produits:', products);
console.log('Panier:', cart);

// Tracer l'exécution des fonctions
function addToCart(productId) {
    console.log('addToCart appelé avec:', productId);
    // ... reste du code
}

// Vérifier les éléments DOM
const grid = document.getElementById('products-grid');
console.log('Grid trouvée:', grid);
```

### **Ressources Utiles**
- [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

**💪 Bon courage et codez bien !**
