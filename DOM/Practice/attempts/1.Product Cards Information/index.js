const products = [
  // Same product list as before
  {
    id: 1,
    name: "Classic White T-Shirt",
    description: "A comfortable and classic white t-shirt made from 100% cotton.",
    price: 19.99,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HyG5cGmcFLjI29LaWlnsrd2K4Fm7H0tV4g&s",
    category: "Apparel",
    stock: 150,
  },
  {
    id: 2,
    name: "Blue Denim Jeans",
    description: "Slim-fit blue denim jeans with a modern look and feel.",
    price: 49.99,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9exrR49DtwxjmR9Hqchm2ikFoGuienMtmw&s",
    category: "Apparel",
    stock: 80,
  },
  {
    id: 3,
    name: "Noise-Cancelling Headphones",
    description: "High quality noise-cancelling headphones for an immersive audio experience.",
    price: 129.99,
    imageUrl: "https://media.binglee.com.au/cdn-cgi/image/fit=scale-down,f=auto,w=1079/0/1/7/e/017ef5728561b812fd7904cdaae31d2395dacea0_wh1000xm4s_01_med.jpg",
    category: "Electronics",
    stock: 40,
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Feature-packed smart watch that monitors your activity and health.",
    price: 199.99,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawZteKyTRkG0iwq8CZwulBlPg3N2U__Bcqg&s",
    category: "Electronics",
    stock: 30,
  },
  {
    id: 5,
    name: "Coffee Maker",
    description: "Programmable coffee maker with a sleek design and easy-to-use interface.",
    price: 89.99,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfnu9GvbIrxy2oIVAEb1Yd1e-D09Knz5uJA&s",
    category: "Home Appliances",
    stock: 0,
  },
  {
    id: 6,
    name: "Denim White Sneakers",
    description: "Shoes that are designed to give you comfort and joy.",
    price: 39.99,
    imageUrl: "https://www.almas.pk/cdn/shop/files/CA182_5.jpg?v=1740725384",
    category: "Apparel",
    stock: 35,
  },
];

const productGrid = document.querySelector(".product-grid");
const favouriteSection = document.querySelector(".favourite-grid");
const cartSection = document.querySelector(".cart-grid");
const buttons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.querySelector("#sortSelect");
const navLinks = document.querySelectorAll(".nav-link");

let activeCategory = "all";
let favouriteProducts = [];
let cartProducts = [];

function displayProducts(filteredProducts) {
  productGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = "<p>No products found.</p>";
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <div class="card-top-icons">
        <button class="fav-btn" title="Add to favourites">❤️</button>
        <button class="cart-btn" title="Add to cart">🛒</button>
      </div>
      <img src="${product.imageUrl}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p class="description">${product.description}</p>
      <p class="price">$${product.price}</p>
      <p class="stock">Items in stock: ${product.stock}</p>
    `;

    const stockElement = productCard.querySelector(".stock");
    if (product.stock >= 100) stockElement.classList.add("high-stock");
    else if (product.stock > 50) stockElement.classList.add("normal-stock");
    else if (product.stock === 0) {
      stockElement.textContent = "Out of Stock";
      stockElement.classList.add("low-stock");
      stockElement.style.fontSize = "1.2rem";
      stockElement.style.fontWeight = "bold";
    } else stockElement.classList.add("low-stock");

    const favBtn = productCard.querySelector(".fav-btn");
    const cartBtn = productCard.querySelector(".cart-btn");

    // FAV TOGGLE
    favBtn.textContent = favouriteProducts.some(f => f.id === product.id) ? "💖" : "❤️";
    favBtn.addEventListener("click", () => {
      const exists = favouriteProducts.some(f => f.id === product.id);
      if (exists) {
        favouriteProducts = favouriteProducts.filter(f => f.id !== product.id);
        favBtn.textContent = "❤️";
      } else {
        favouriteProducts.push(product);
        favBtn.textContent = "💖";
      }
      updateFavouritesSection();
    });

cartBtn.addEventListener("click", () => {
  const exists = cartProducts.some(c => c.id === product.id);
  if (exists) {
    // Already in cart, update quantity
    addToCart(product);
  } else {
    cartProducts.push({ ...product, quantity: 1 });
    cartBtn.textContent = "✅";
  }
  updateCartSection();
});

    productGrid.appendChild(productCard);
  });
}

function updateFavouritesSection() {
  favouriteSection.innerHTML = "";
  if (favouriteProducts.length === 0) {
    favouriteSection.innerHTML = "<p>No favourite products yet.</p>";
    return;
  }

  favouriteProducts.forEach((product, index) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <div class="card-top-icons">
        <span style="font-size: 1.25rem;">💖</span>
        <button class="remove-btn" title="Remove from favourites">🗑️</button>
      </div>
      <img src="${product.imageUrl}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p class="description">${product.description}</p>
      <p class="price">$${product.price}</p>
      <p class="stock">Items in stock: ${product.stock}</p>
    `;
    card.querySelector(".remove-btn").addEventListener("click", () => {
      favouriteProducts.splice(index, 1);
      updateFavouritesSection();
      filterAndDisplayProducts();
    });
    favouriteSection.appendChild(card);
  });
}

// Function to update the cart with quantity and total price
function updateCartSection() {
  cartSection.innerHTML = "";
  if (cartProducts.length === 0) {
    cartSection.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartProducts.forEach((product, index) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <div class="card-top-icons">
        <span style="font-size: 1.25rem;">✅</span>
        <button class="remove-btn" title="Remove from cart">🗑️</button>
      </div>
      <img src="${product.imageUrl}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p class="description">${product.description}</p>
      <p class="price">$${(product.price * product.quantity).toFixed(2)}</p>
      <p class="stock">Items in stock: ${product.stock}</p>
      <div class="quantity-container">
        <label for="quantity-${product.id}">Quantity:</label>
        <input type="number" id="quantity-${product.id}" value="${product.quantity}" min="1" max="${product.stock}" />
      </div>
    `;

    const quantityInput = card.querySelector(`#quantity-${product.id}`);
    quantityInput.addEventListener("change", (e) => {
      const newQuantity = parseInt(e.target.value);
      if (newQuantity <= product.stock && newQuantity > 0) {
        product.quantity = newQuantity;
        updateCartSection();  // Re-render the cart
      }
    });

    card.querySelector(".remove-btn").addEventListener("click", () => {
      cartProducts.splice(index, 1);
      updateCartSection();
      filterAndDisplayProducts();
    });
    cartSection.appendChild(card);
  });
}

// Function to handle adding products to the cart with quantity update
function addToCart(product) {
  const existingProduct = cartProducts.find(p => p.id === product.id);
  if (existingProduct) {
    if (existingProduct.quantity < product.stock) {
      existingProduct.quantity += 1;
    }
  } else {
    product.quantity = 1; // Default quantity is 1
    cartProducts.push(product);
  }
  updateCartSection();
}
  

function getSortedProducts(list) {
  const sortValue = sortSelect.value;
  const sorted = [...list];

  if (sortValue === "price-low-high") sorted.sort((a, b) => a.price - b.price);
  else if (sortValue === "price-high-low") sorted.sort((a, b) => b.price - a.price);
  else if (sortValue === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortValue === "name-desc") sorted.sort((a, b) => b.name.localeCompare(a.name));
  else if (sortValue === "default") sorted.sort((a, b) => a.id - b.id);

  return sorted;
}

function filterAndDisplayProducts() {
  const search = searchInput.value.toLowerCase();

  let filtered = products.filter(p => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  displayProducts(getSortedProducts(filtered));
}

// Initial load
displayProducts(products);

// Filters
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.getAttribute("data-category");
    filterAndDisplayProducts();
  });
});

searchInput.addEventListener("input", filterAndDisplayProducts);
sortSelect.addEventListener("change", filterAndDisplayProducts);

// Tabs: All, Favourites, Cart
navLinks.forEach((nav) => {
  nav.addEventListener("click", () => {
    navLinks.forEach(n => n.classList.remove("active"));
    nav.classList.add("active");

    productGrid.classList.add("hide");
    favouriteSection.classList.add("hide");
    cartSection.classList.add("hide");

    if (nav.id === "favouritesLink") favouriteSection.classList.remove("hide");
    else if (nav.id === "cartLink") cartSection.classList.remove("hide");
    else productGrid.classList.remove("hide");
  });
});
