# Digitalia - Store Électronique 🛒

## 📚 Projet de Formation - Store Électronique

Bienvenue dans le projet **Digitalia** ! Ce projet est conçu pour vous apprendre à développer un store électronique complet en utilisant **HTML, CSS et JavaScript vanilla**.

## 🎯 Objectifs Pédagogiques

À la fin de ce projet, vous saurez :
- ✅ Structurer une application web moderne
- ✅ Créer des interfaces responsive avec CSS Grid et Flexbox
- ✅ Manipuler le DOM avec JavaScript
- ✅ Gérer un état d'application (panier d'achat)
- ✅ Implémenter des fonctionnalités de recherche et filtrage
- ✅ Utiliser le LocalStorage pour la persistance
- ✅ Créer des interactions utilisateur fluides

## 🚀 Démarrage Rapide

1. **Ouvrir le projet**
   - Ouvrez le dossier `digitalia` dans VS Code
   - Installez l'extension "Live Server" si ce n'est pas déjà fait
   - Clic droit sur `index.html` → "Open with Live Server"

2. **Structure actuelle**
   ```
   digitalia/
   ├── index.html      # Structure HTML de base (à compléter)
   ├── css/
   │   └── style.css   # Styles de base (à étendre)
   ├── js/
   │   ├── data.js     # Données produits (à remplir)
   │   └── app.js      # Logique métier (à développer)
   └── README.md       # Ce fichier
   ```

## 📋 Exercices à Réaliser

### **Phase 1 : Structure et Données (1-2h)**

#### 🔹 Exercice 1.1 : Compléter la Structure HTML
**Fichier :** `index.html`

**Objectif :** Ajouter les sections manquantes dans `<main>`

**À implémenter :**
```html
<!-- Section Hero -->
<section class="hero" id="home">
    <div class="container">
        <div class="hero-content">
            <h2>Découvrez les Dernières Innovations Électroniques</h2>
            <p>Des smartphones aux ordinateurs portables, trouvez tous vos appareils électroniques préférés</p>
            <button class="cta-btn" onclick="scrollToProducts()">Voir nos produits</button>
        </div>
    </div>
</section>

<!-- Filtres -->
<section class="filters" id="products">
    <!-- TODO: Ajouter les boutons de filtres et la barre de recherche -->
</section>

<!-- Grille des Produits -->
<section class="products">
    <!-- TODO: Ajouter la grille des produits -->
</section>
```

#### 🔹 Exercice 1.2 : Créer la Base de Données Produits
**Fichier :** `js/data.js`

**Objectif :** Créer au moins 8-10 produits électroniques

**Exemple de produit à créer :**
```javascript
{
    id: 1,
    name: "iPhone 15 Pro",
    category: "smartphones",
    price: 1199,
    image: "📱",
    description: "Le dernier iPhone avec puce A17 Pro",
    specs: {
        "Écran": "6.1 pouces Super Retina XDR",
        "Processeur": "A17 Pro",
        "Stockage": "128GB, 256GB, 512GB, 1TB"
    }
}
```

**Catégories à couvrir :**
- `smartphones` (3-4 produits)
- `laptops` (2-3 produits)
- `tablets` (2 produits)  
- `accessories` (2-3 produits)

### **Phase 2 : Styles et Interface (2-3h)**

#### 🔹 Exercice 2.1 : Styles de la Navigation
**Fichier :** `css/style.css`

**À ajouter :**
```css
/* Navigation */
.nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav a:hover {
    color: #ffd700;
}

/* Bouton Panier */
.cart-btn {
    /* TODO: Styler le bouton panier */
}
```

#### 🔹 Exercice 2.2 : Section Hero
**Objectif :** Créer une belle section d'accueil avec dégradé

#### 🔹 Exercice 2.3 : Grille de Produits
**Objectif :** Créer une grille responsive pour afficher les produits

```css
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.product-card {
    /* TODO: Styler les cartes produits */
}
```

### **Phase 3 : Fonctionnalités JavaScript (3-4h)**

#### 🔹 Exercice 3.1 : Affichage des Produits
**Fichier :** `js/app.js`

**Fonctions à implémenter :**
```javascript
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('products-grid');
    // TODO: Générer et afficher les cartes produits
}

function createProductCard(product) {
    // TODO: Créer un élément DOM pour une carte produit
    // Retourner l'élément créé
}
```

#### 🔹 Exercice 3.2 : Système de Filtrage
```javascript
function filterProducts(category) {
    // TODO: Filtrer les produits par catégorie
    // Mettre à jour l'affichage
}

function searchProducts() {
    // TODO: Recherche textuelle dans nom/description
}
```

#### 🔹 Exercice 3.3 : Gestion du Panier
```javascript
function addToCart(productId) {
    // TODO: Ajouter produit au panier
    // Gérer les quantités
}

function updateCartUI() {
    // TODO: Mettre à jour compteur et contenu du panier
}
```

### **Phase 4 : Fonctionnalités Avancées (2-3h)**

#### 🔹 Exercice 4.1 : Modal Détails Produit
#### 🔹 Exercice 4.2 : Panier Latéral
#### 🔹 Exercice 4.3 : Persistance LocalStorage
#### 🔹 Exercice 4.4 : Animations et Transitions

## 🎨 Design Guidelines

### **Palette de Couleurs**
- **Primaire :** `#667eea` (Bleu dégradé)
- **Secondaire :** `#764ba2` (Violet)
- **Accent :** `#ffd700` (Doré)
- **Succès :** `#28a745` (Vert)
- **Danger :** `#dc3545` (Rouge)
- **Texte :** `#333` (Gris foncé)
- **Background :** `#f8f9fa` (Gris clair)

### **Typographie**
- **Famille :** `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- **Hiérarchie :** h1 (1.8rem), h2 (2.5rem), h3 (1.3rem)

### **Espacement**
- **Grille :** `gap: 2rem`
- **Padding intérieur :** `1rem - 2rem`
- **Marges :** `1rem - 3rem`

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
    /* Styles mobile */
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
    /* Styles tablet */
}

/* Desktop */
@media (min-width: 1025px) {
    /* Styles desktop */
}
```

## 🛠️ Fonctionnalités à Implémenter

### **Fonctionnalités de Base**
- [ ] Affichage de la grille de produits
- [ ] Filtrage par catégorie  
- [ ] Recherche textuelle
- [ ] Ajout au panier
- [ ] Gestion des quantités
- [ ] Calcul du total
- [ ] Interface responsive

### **Fonctionnalités Avancées**
- [ ] Modal détails produit
- [ ] Panier latéral coulissant
- [ ] Persistance LocalStorage
- [ ] Notifications utilisateur
- [ ] Animations fluides
- [ ] Scroll automatique
- [ ] Gestion des erreurs

## 🔧 Conseils de Développement

### **Bonnes Pratiques**
1. **Commencez petit :** Une fonctionnalité à la fois
2. **Testez régulièrement :** Utilisez la console du navigateur
3. **Code propre :** Indentez et commentez votre code
4. **Mobile-first :** Pensez responsive dès le début
5. **Fonctions pures :** Évitez les effets de bord quand possible

### **Debug et Test**
```javascript
// Utilisez console.log pour débugger
console.log('Produits chargés:', products);
console.log('Panier actuel:', cart);

// Testez vos fonctions dans la console
renderProducts();
addToCart(1);
```

### **Organisation du Code**
- **HTML :** Structure sémantique claire
- **CSS :** Organisé par composants
- **JS :** Fonctions courtes et spécialisées

## 📈 Critères d'Évaluation

| Critère | Poids | Description |
|---------|-------|-------------|
| **Fonctionnalité** | 40% | Toutes les fonctions marchent |
| **Code Quality** | 25% | Code propre et commenté |
| **Design** | 20% | Interface attractive et responsive |
| **UX** | 15% | Expérience utilisateur fluide |

## � Aide et Resources

### **Documentation**
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript ES6+](https://javascript.info/)

### **Outils Utiles**
- **VS Code Extensions :** Live Server, Auto Rename Tag, Bracket Pair Colorizer
- **Browser DevTools :** F12 pour inspecter et débugger
- **Validation :** W3C Markup Validator

### **En Cas de Blocage**
1. Vérifiez la console JavaScript (F12)
2. Relisez attentivement les TODO dans le code
3. Testez sur une version simple d'abord
4. Demandez de l'aide à votre formateur

---

**Bonne chance et amusez-vous bien ! 🚀**

*N'hésitez pas à être créatifs et à ajouter vos propres fonctionnalités une fois les bases implémentées.*
```

## 🚀 Extensions Possibles

### **Développement Futur**
1. **Backend Integration**
   - API REST pour les produits
   - Base de données (MongoDB/PostgreSQL)
   - Authentification utilisateur

2. **Fonctionnalités E-commerce**
   - Système de paiement (Stripe/PayPal)
   - Gestion des commandes
   - Système de livraison

3. **PWA Features**
   - Service Worker
   - Notifications push
   - Mode hors-ligne

4. **Analytics & SEO**
   - Google Analytics
   - Meta tags dynamiques
   - Schema.org markup

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Distribué sous licence MIT. Voir `LICENSE` pour plus d'informations.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
