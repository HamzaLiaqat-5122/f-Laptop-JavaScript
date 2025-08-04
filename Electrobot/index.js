import data from "./extractedData_v2.js";

// Hero section or Home page -- Trending Products..

const HomePageTrendingProductsGrid = document.querySelector('.product-container .products');

let trendingProducts = data.filter(product => product.trending === true);
let featuredProducts = data.filter(product => product.featured === true);


function displayStarRating(rating) {
  let sg = ``
  for (let i = 0; i < rating; i++) {
    sg += `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            aria-hidden="true" class="h-5 w-5 text-yellow-400">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
              clip-rule="evenodd"></path>
          </svg>
      `
  }
  return sg
}

function showTrendingProducts(products, place) {
  place.innerHTML = '';

  products.forEach(product => {
    place.innerHTML += `
      <div class="items" id="${product.id}">
        <div class="img-box">
          <img src="${product.url}" alt="">
        </div>
        <p class='products-title'>${product.title.length > 16 ? `${product.title.slice(0, 17)}...` : product.title}</p>
        <div class="products-rating">
          ${displayStarRating(Math.floor(product.rating))}
        </div>
        <span>${product.reviews} reviews</span>
        <div class="products-price">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-cyan-400 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
            </path>
          </svg>
          <span>$${product.price}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-cyan-400 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z">
            </path>
          </svg>
        </div>
      </div>
    `;
  });

  // Add to wishlist Part

  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  document.querySelectorAll('.products .items').forEach(item => {
    const id = item.id;
    if (wishlist.includes(id)) {
      const heartIcone = item.querySelector('.products-price svg');
      heartIcone.setAttribute('fill', '#22D3EE');
    }
  });

  AddToWishlist();
  updateCartIconColors();
  renderCartItems(data);
  updateCartTotalAmount();
}

showTrendingProducts(trendingProducts, HomePageTrendingProductsGrid);

// Hero section or Home page -- Trending Products..


// Sensors third nav link dynamic logic

const allSections = document.querySelector('.allsection');

const navListItems = document.querySelectorAll('.nav-menu ul > li');

const sensorsSection = document.querySelector('.sensors')

const sensorProducts = document.querySelector('.sensors .products')
const featuredProductsContainer = document.querySelector('.featured-container .products')

let sensorsData = data.filter(product => product.category === 'sensors');



navListItems[2].addEventListener("click", e => {

  sensorProducts.innerHTML = ''

  wishlistSection.style.display = 'none'
  allSections.style.display = 'none';
  sensorsSection.style.display = 'block';
  productDetailsSection.style.display = 'none'
  checkoutFormSection.style.display = 'none';
  storeSection.style.display = 'none';
  componentsGrid.style.display = 'none';

  navListItems[0].style.color = '#454D59';
  navListItems[0].style.borderBottom = 'none';
  navListItems[1].style.color = '#454D59';
  navListItems[1].style.borderBottom = 'none';

  const componentName = document.querySelector('.component-name');
  componentName.textContent = 'Sensors';

  const sensorsLengthSpan = document.querySelector('.component-length');
  sensorsLengthSpan.innerHTML = `(${sensorsData.length})`
  showTrendingProducts(sensorsData, sensorProducts)
  productDetailsFunction();
})



// Sensors third nav link dynamic logic


// Wishlist or Heart Section Hide/unhide logic

const wishlistSection = document.querySelector('.heart_container');
const heartIcon = document.querySelector('.heart');


heartIcon.addEventListener("click", e => {
  productDetailsSection.style.display = 'none'
  sensorsSection.style.display = 'none';
  allSections.style.display = 'none';
  wishlistSection.style.display = 'block';
  checkoutFormSection.style.display = 'none';
  storeSection.style.display = 'none';
  componentsGrid.style.display = 'none';

  navListItems[0].style.color = '#454D59';
  navListItems[0].style.borderBottom = 'none';
  navListItems[1].style.color = '#454D59';
  navListItems[1].style.borderBottom = 'none';
})

// Wishlist or Heart Section Hide/unhide logic


// Add to Wishlist Logic

const heartBox = document.querySelector('.heart_box');
const emptyHeart = document.querySelector('.heart_empty');


function AddToWishlist() {
  const heartIcons = document.querySelectorAll('.products-price svg:first-child');
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  heartIcons.forEach(icon => {
    icon.addEventListener("click", e => {
      const productId = e.target.closest('.items')?.id;
      if (!productId) return;

      const isAlreadyWishlisted = wishlist.includes(productId);
      const product = data.find(p => p.id === productId);

      if (isAlreadyWishlisted) {
        wishlist = wishlist.filter(id => id !== productId);
        e.target.setAttribute('fill', 'none');

        const heartItems = document.querySelectorAll('.heart_item');
        heartItems.forEach(item => {
          if (item.querySelector('.model_heart').textContent === productId) {
            item.remove();
          }
        });

      } else {
        wishlist.push(productId);
        e.target.setAttribute('fill', '#22D3EE');

        const existingItem = [...document.querySelectorAll('.heart_item')]
          .find(item => item.querySelector('.model_heart').textContent === productId);

        if (!existingItem) {
          const heartHTML = `
            <div class="heart_item">
              <div class="heart_img">
                <img src=${product.url} alt="">
              </div>
              <div class="heart_content">
                <div class="heart_price">
                  <span>${product.title}</span>
                  <span>$${product.price}</span>
                </div>
                <div class="model_heart">${product.id}</div>
                <div class="heart_remove">
                  <span>Qty: ${product.items_in_stock} available</span>
                  <span class='removeProduct' data-id='${product.id}'>Remove</span>
                </div>
              </div>
            </div>
          `;
          heartBox.innerHTML += heartHTML;
        }
      }

      if (wishlist.length === 0) {
        heartBox.style.display = 'none';
        emptyHeart.style.display = 'flex';
        heartIcon.setAttribute('fill', 'none');
      } else {
        heartBox.style.display = 'block';
        emptyHeart.style.display = 'none';
        heartIcon.setAttribute('fill', '#164e63');
      }

      localStorage.setItem('wishlist', JSON.stringify(wishlist));

      attachRemoveWishlistListeners();
    });
  });
}


function attachRemoveWishlistListeners() {
  const removeBtns = document.querySelectorAll('.removeProduct');

  removeBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      const productId = btn.dataset.id;

      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      wishlist = wishlist.filter(id => id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));

      const matchingIcons = document.querySelectorAll(`.products .items[id='${productId}'] .products-price svg:first-child`);
      matchingIcons.forEach(icon => icon.setAttribute('fill', 'none'));

      const heartItem = btn.closest('.heart_item');
      if (heartItem) heartItem.remove();

      if (wishlist.length === 0) {
        heartBox.style.display = 'none';
        emptyHeart.style.display = 'flex';
        heartIcon.setAttribute('fill', 'none');
      }
    });
  });
}






// productItems.forEach(item => {
//   let itemAttrFill = item.children[4].children[0].getAttribute('fill') || ''
//   // const productId = e.target.parentElement.parentElement.id;
//   // if (productId === item.id) {
//   //   item.children[4].children[0].setAttribute('fill', '#22D3EE');
//   // }

// })




// Add to Wishlist logic End


// Shopping cart Hide/unhide logic 

const shoppingCartModal = document.querySelector('.shopping-bag:not(.overlay-bag)');
const overlayBag = document.querySelector('.overlay-bag');
const cartIcon = document.querySelector('.cart');
const checkoutBag = document.querySelector('.checkout-bag');
const closeBag = document.querySelector('#closebag');


cartIcon.addEventListener("click", () => {
  shoppingCartModal.classList.add('active');
  overlayBag.style.right = '0%';
  checkoutBag.style.right = '0%';
  document.body.style.overflow = 'hidden';
  overlayBag.style.overflowY = 'scroll';


  navListItems[0].style.color = '#454D59';
  navListItems[0].style.borderBottom = 'none';
  navListItems[1].style.color = '#454D59';
  navListItems[1].style.borderBottom = 'none';
  componentsGrid.style.display = 'none';
});


function closeCartModal() {

  overlayBag.style.right = '-100%';
  checkoutBag.style.right = '-100%';

  setTimeout(() => {
    document.body.style.overflowY = 'scroll';
    shoppingCartModal.classList.remove('active');
  }, 1000);
}

closeBag.addEventListener('click', closeCartModal);

shoppingCartModal.addEventListener('click', (e) => {
  if (e.target === shoppingCartModal) {
    closeCartModal();
  }
});

const continueShopping = document.querySelector("#continueShopping span");
continueShopping.addEventListener("click", () => {
  closeCartModal();
});



// Shopping cart Hide/unhide logic End


// Add to Cart Logic

const noItemBagMessage = document.querySelector('.noitembag');
const itemsBagContainer = document.querySelector('.itemsbags')


function getCartItems() {
  return JSON.parse(localStorage.getItem('cartItems')) || [];
}

function setCartItems(items) {
  localStorage.setItem('cartItems', JSON.stringify(items));
}


function renderCartItems(data) {
  const noItemBagMessage = document.querySelector('.noitembag');
  const itemsBagContainer = document.querySelector('.itemsbags')
  const checkoutSectionGoBtn = document.querySelector('.checkout-section-goBtn');
  const cartIcon = document.querySelector(".cart");
  let cartQuantity = document.querySelector('.itemslength');

  const cartItems = getCartItems();
  itemsBagContainer.innerHTML = '';

  cartQuantity.textContent = cartItems.length;
  if (cartItems.length === 0) {
    noItemBagMessage.style.display = 'flex';
    checkoutSectionGoBtn.disabled = true;
    checkoutSectionGoBtn.style.opacity = '.5';
    checkoutSectionGoBtn.style.cursor = 'not-allowed'
    cartIcon.style.fill = 'none'
    return;
  }

  checkoutSectionGoBtn.disabled = false;
  checkoutSectionGoBtn.style.opacity = '1';
  checkoutSectionGoBtn.style.cursor = 'pointer'
  noItemBagMessage.style.display = 'none';
  cartIcon.style.fill = '#164E63'

  cartItems.forEach(productId => {
    const product = data.find(p => p.id === productId);
    if (!product) return;

    const itemHTML = `
      <div class="addedProductDetails" data-id="${product.id}">
        <div class="addedProductImage">
          <img src="${product.url}" alt="${product.title}">
        </div>
        <div class="model-title">
          <div class="model_content">
            <span>${product.title}</span>
            <span class='price' data-price="${product.price}">$${product.price}</span>
          </div>
          <div class="modeltext">
            <span>${product.id}</span>
          </div>
          <div class="model_remove_price">
            <div class="quantity">
              <div class="show-text">
                <span>1</span>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="innertext">
                                    <span><i class="tick fa-solid fa-check arrow-down"></i>1</span>
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
              </div>
            </div>
            <span class="remove-cart-item">Remove</span>
          </div>
        </div>
      </div>
    `;
    itemsBagContainer.insertAdjacentHTML('beforeend', itemHTML);

    document.body.addEventListener("click", function (e) {
      const quantityOption = e.target.closest(".innertext span:not(:first-child)");
      if (!quantityOption) return;

      const allQuantitySpans = document.querySelectorAll(".innerText span");

      allQuantitySpans.forEach(span => {
        span.addEventListener("click", e => {
          const clickedSpan = e.currentTarget;

          if (!clickedSpan.classList.contains('fa-check')) {

            allQuantitySpans.forEach(s => s.classList.remove('fa-solid', 'fa-check', 'arrow-down'));

            clickedSpan.classList.add('fa-solid', 'fa-check', 'arrow-down');
          }
        });
      });


      const selectedQuantity = parseInt(quantityOption.textContent);
      const cartItem = quantityOption.closest(".addedProductDetails");

      const showText = cartItem.querySelector(".show-text span");
      showText.textContent = selectedQuantity;

      // Remove tick icon from all spans
      const QuantitySpans = cartItem.querySelectorAll(".innertext span");
      QuantitySpans.forEach(span => {
        const icon = span.querySelector("i");
        if (icon) icon.remove();
      });

      // Add tick icon to selected span
      quantityOption.innerHTML = `<i class="tick fa-solid fa-check arrow-down"></i>${selectedQuantity}`;

      const priceElement = cartItem.querySelector(".price");
      const originalPrice = parseFloat(priceElement.dataset.price);
      const newPrice = (originalPrice * selectedQuantity).toFixed(2);
      priceElement.textContent = `$${newPrice}`;

      cartItem.querySelector(".innertext").style.display = 'none';

      updateCartTotalAmount();
      updateCartItemsLength();
    });
  });

  function updateCartItemsLength() {
    const allQuantitySpans = document.querySelectorAll('.show-text span');

    const totalItems = [...allQuantitySpans].reduce((acc, span) => {
      const qty = parseInt(span.textContent);
      return acc + (isNaN(qty) ? 0 : qty);
    }, 0);

    document.querySelector('.itemslength').textContent = totalItems;
  }



  document.addEventListener('DOMContentLoaded', () => {
    let activeDropdown = null;

    document.addEventListener('click', e => {
      const showText = e.target.closest('.show-text');
      const isInnerText = e.target.closest('.innertext');

      if (showText) {
        const parent = showText.closest('.addedProductDetails');
        const innerText = parent.querySelector('.innertext');

        if (activeDropdown === innerText) {
          innerText.style.display = 'none';
          activeDropdown = null;
        } else {

          if (activeDropdown) activeDropdown.style.display = 'none';

          innerText.style.display = 'block';
          activeDropdown = innerText;
        }

      } else if (!isInnerText) {
        if (activeDropdown) {
          activeDropdown.style.display = 'none';
          activeDropdown = null;
        }
      }
    });
  });


  attachRemoveListeners();
}

function attachRemoveListeners() {
  document.querySelectorAll('.remove-cart-item').forEach(btn => {
    btn.addEventListener('click', e => {
      const productCard = e.target.closest('.addedProductDetails');
      const productId = productCard.dataset.id;

      const cartIcon = document.querySelector('.cart');

      let cartItems = getCartItems();
      cartItems = cartItems.filter(id => id !== productId);
      setCartItems(cartItems);

      productCard.remove();

      if (cartItems.length === 0) {
        noItemBagMessage.style.display = 'flex';
      }

      updateCartIconColors();
      renderCartItems(data);
      updateCartTotalAmount();
    });
  });
}



document.body.addEventListener('click', function (e) {
  const clickedIcon = e.target.closest('.products-price svg:last-child');
  if (!clickedIcon) return;

  const productEl = clickedIcon.closest('.items');
  if (!productEl) return;

  const productId = productEl.id;
  let cartItems = getCartItems();

  const isInCart = cartItems.includes(productId);

  if (isInCart) {
    cartItems = cartItems.filter(id => id !== productId);
  } else {
    cartItems.push(productId);
  }

  setCartItems(cartItems);
  updateCartIconColors();
  renderCartItems(data);
  updateCartTotalAmount();
});


function updateCartIconColors() {
  const cartItems = getCartItems();

  document.querySelectorAll('.items').forEach(productEl => {
    const productId = productEl.id;

    const cartIcone = productEl.querySelector('.products-price svg:last-child');
    if (!cartIcone) return;

    if (cartItems.includes(productId)) {
      cartIcone.style.fill = '#22D3EE';
    } else {
      cartIcone.style.fill = 'none';
    }
  });
}

// cart Pricing 

function updateCartTotalAmount() {
  const cartProductPrices = document.querySelectorAll('.model_content span:last-child');

  const total = [...cartProductPrices].reduce((acc, price) => {
    if (price) {
      const text = price.textContent.trim();
      const number = Number(text.startsWith('$') ? text.slice(1) : text);
      return acc + (isNaN(number) ? 0 : number);
    }
    return acc;
  }, 0);

  const cartTotalAmountSpan = document.querySelector('#totalBuyProductPrice');
  cartTotalAmountSpan.textContent = `$${total.toFixed(2)}`;
}


// cart Pricing Ends

// Add to Cart Logic Ends


// Products Details Section logic

const productDetailsSection = document.querySelector('.product-details-section')
function productDetailsFunction() {
  const productsTitles = document.querySelectorAll('.products-title');
  const productDetailsPage = document.querySelector('.products-page')

  productsTitles.forEach(productsTitle => {
    productsTitle.addEventListener("click", e => {
      sensorsSection.style.display = 'none';
      allSections.style.display = 'none';
      productDetailsSection.style.display = 'block';
      document.documentElement.scrollTop = 0;

      data.forEach(product => {
        if (e.target.textContent === `${product.title.slice(0, 17)}...` || e.target.textContent === product.title) {
          productDetailsPage.innerHTML = `
        <div class="product-details" data-productdetailheart = ${product.id}>
         <div class="product-details-img">
          <img src= ${product.url} alt="">
          </div>

         <div class="product-details-data">
           <div class="product-details-data-1spans">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        aria-hidden="true" data-home = "home">
        <path
        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
        </path>
        <path
        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
        </path>
              </svg>
        <span data-category = ${product.category}>/&nbsp; ${product.category}</span>
        <span data-subcategory = ${product.subcategory}>/&nbsp; ${product.subcategory}</span>
        </div>
                    <h2>${product.title}</h2>
                    <div class="product-details-data-2spans">
                    <span>$${product.price}</span>
                    <div class="product-details-stars">
                    ${displayStarRating(Math.floor(product.rating))}
                    </div>
                    <span>${product.reviews} reviews</span>
                    </div>
                    <p>${product.description}</p>
                    <div class="product-details-data-3spans">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    aria-hidden="true" class="w-5 h-5 text-green-500" >
                    <path fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"></path>
                    </svg></span>
                    <span>In stock and ready to ship
                    </div>
                    <div class="product-details-data-heartbasket">
                    <button class="product-details-data-button" data-bagPro = ${product.id} data-basket = "basket">Add to Basket</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-cyan-400 cursor-pointer" data-heart= ${product.id}>
                    <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                    </path>
                    </svg>
                    </div>
                    </div>
                    </div>
                    
                    <div class="product-details-customer">
                    <div class="product_reviews">
                    <span data-reviews = "reviews">Reviews</span>
                    <span data-description = "description">Description</span>
                    </div>
                        <div class="product_description" data-dSection = "dSection">
                        <p>${product.description}</p>
                        </div>
                        <div class="customer-reviews-details" data-rSection= "rsection">
                        <div class="customer-rating">
                        <h2>Customer Reviews</h2>
                        <div class="customer-rating-star-reviews">
                        <div class="customer-giving-star">
                        ${displayStarRating(Math.floor(product.rating))}
                        </div>
                        <span>Based on ${product.reviews} reviews
                        </span>
                        </div>
                        <div class="customer-rating-percentage">
                        <div class="star-number">
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        </div>
                        <div class="customer-rating-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        aria-hidden="true" class="h-6 w-6 text-yellow-400">
                        <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        aria-hidden="true" class="h-6 w-6 text-yellow-400">
                        <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"></path>
                        </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    aria-hidden="true" class="h-6 w-6 text-yellow-400">
                    <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        aria-hidden="true" class="h-6 w-6 text-yellow-400">
                        <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        aria-hidden="true" class="h-6 w-6 text-yellow-400">
                        <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"></path>
                        </svg>
                        </div>
                        <div class="customer-star-length">
                        <div class="customer-star-width">
                        <div style= "width:${product.product_reviews.star_ratings[0].percentage}"></div>
                        </div>
                        <div class="customer-star-width">
                        <div style= "width:${product.product_reviews.star_ratings[1].percentage}"></div>
                        </div>
                        <div class="customer-star-width">
                      <div style= "width:${product.product_reviews.star_ratings[2].percentage}"></div>
                      </div>
                      <div class="customer-star-width">
                      <div style= "width:${product.product_reviews.star_ratings[3].percentage}"></div>
                      </div>
                      <div class="customer-star-width">
                      <div style= "width:${product.product_reviews.star_ratings[4].percentage}"></div>
                      </div>
                      </div>
                      <div class="star-percentage">
                      <span>${product.product_reviews.star_ratings[0].percentage}</span>
                      <span>${product.product_reviews.star_ratings[1].percentage}</span>
                      <span>${product.product_reviews.star_ratings[2].percentage}</span>
                    <span>${product.product_reviews.star_ratings[3].percentage}</span>
                    <span>${product.product_reviews.star_ratings[4].percentage}</span>
                    </div>
                    
                    </div>
                    <h3>Share your thoughts</h3>
                    <p>If you've used this product, share your thoughts with other customers</p>
                    <button>Write a review</button>
                    </div>
                    
                    <div class="customers-description">

                    </div>
                    `

          // Generating Customer Reviews

          let customersDescription = document.querySelector('.customers-description');
          for (let i = 0; i < product.product_reviews.customer_reviews.length; i++) {
            let customerReviewsData = product.product_reviews.customer_reviews[i];
            customersDescription.innerHTML += `
                                            <div class="customers">
                                              <div class="customer-content">
                                                <img src="${customerReviewsData.avatar_url}" alt="Customer Photo" />
                                                <div class="customer-name-rating">
                                                  <h4>${customerReviewsData.customer_name}</h4>
                                                  <div class="customer-giving-rating">
                                                    ${displayStarRating(customerReviewsData.rating)}
                                                  </div>
                                                </div>
                                              </div>
                                              <p>${customerReviewsData.comments}</p>
                                            </div>
 `
          }

          // Making customer reviews and Description List Items Active

          const productDetailsLi = document.querySelectorAll('.product_reviews span');
          const CustomerReviewsDetails = document.querySelector('.customer-reviews-details');
          const productDescription = document.querySelector('.product_description');

          productDetailsLi[0].addEventListener('click', e => {
            productDetailsLi[1].style.color = '#111827';
            productDetailsLi[1].style.borderBottom = 'none';
            productDetailsLi[0].style.color = '#22D3EE'
            productDetailsLi[0].style.borderBottom = '2px solid #22D3EE'
            CustomerReviewsDetails.style.display = 'flex';
            productDescription.style.display = 'none';
          })

          productDetailsLi[1].addEventListener('click', e => {
            productDetailsLi[0].style.color = '#111827';
            productDetailsLi[0].style.borderBottom = 'none';
            productDetailsLi[1].style.color = '#22D3EE';
            productDetailsLi[1].style.borderBottom = '2px solid #22D3EE';
            CustomerReviewsDetails.style.display = 'none';
            productDescription.style.display = 'flex';
          })


          // Making breadCrumb Home Icon Interactive

          const breadCrumbHomeIcon = document.querySelector('.product-details-data-1spans svg');

          breadCrumbHomeIcon.addEventListener("click", e => {
            allSections.style.display = 'block';
            sensorsSection.style.display = 'none';
            wishlistSection.style.display = 'none';
            productDetailsSection.style.display = 'none'
            checkoutFormSection.style.display = 'none';
            storeSection.style.display = 'none';
          })

          // Making breadCrumb Category Interactive


          const breadCrumbCategory = document.querySelector('.product-details-data-1spans span');

          breadCrumbCategory.addEventListener('click', e => {

            sensorProducts.innerHTML = '';

            const breadCrumbCategories = data.filter(prod => e.target.textContent.slice(3) === prod.category);

            allSections.style.display = 'none';
            productDetailsSection.style.display = 'none';
            sensorsSection.style.display = 'block';
            checkoutFormSection.style.display = 'none';
            storeSection.style.display = 'none';

            const sensorsLengthSpan = document.querySelector('.component-length');
            const componentName = document.querySelector('.component-name');

            sensorsLengthSpan.innerHTML = `(${breadCrumbCategories.length})`
            componentName.textContent = e.target.textContent.slice(3)

            showTrendingProducts(breadCrumbCategories, sensorProducts);
            productDetailsFunction();
          })

          // making breadCrumb SubCategory Interactive

          const breadCrumbSubCategory = document.querySelector('.product-details-data-1spans span:nth-child(3)');

          breadCrumbSubCategory.addEventListener('click', e => {

            sensorProducts.innerHTML = '';

            const breadCrumbSubCategories = data.filter(prod => e.target.textContent.slice(3) === prod.subcategory);

            allSections.style.display = 'none';
            productDetailsSection.style.display = 'none';
            sensorsSection.style.display = 'block';
            checkoutFormSection.style.display = 'none';
            storeSection.style.display = 'none';

            const sensorsLengthSpan = document.querySelector('.component-length');
            const componentName = document.querySelector('.component-name');

            sensorsLengthSpan.innerHTML = `(${breadCrumbSubCategories.length})`
            componentName.textContent = e.target.textContent.slice(3)

            showTrendingProducts(breadCrumbSubCategories, sensorProducts);
            productDetailsFunction();
          })

        } // if statement

      })
    })

  })

  AddToWishlist();
  updateCartIconColors();
  renderCartItems(data);
  updateCartTotalAmount();
}

showTrendingProducts(featuredProducts, featuredProductsContainer);

productDetailsFunction();


// Products Details Section logic



// CheckOut Form Hide / Unhide Logic

const checkoutFormSection = document.querySelector(".checkout-form");
const checkoutSectionGoBtn = document.querySelector('.checkout-section-goBtn');

checkoutSectionGoBtn.addEventListener("click", e => {
  allSections.style.display = 'none';
  sensorsSection.style.display = 'none';
  wishlistSection.style.display = 'none';
  productDetailsSection.style.display = 'none'
  storeSection.style.display = 'none';
  checkoutFormSection.style.display = 'block';
})

// CheckOut Form Hide / Unhide Logic End



// Store section Hide / Unhide Logic


const storeSection = document.querySelector('.store');
const goToStoreBtn = document.querySelector(".go-to-StoreBtn");

function goToStore() {
  storeSection.style.display = 'block';
  allSections.style.display = 'none';
  sensorsSection.style.display = 'none';
  wishlistSection.style.display = 'none';
  productDetailsSection.style.display = 'none'
  checkoutFormSection.style.display = 'none';
}

navListItems[3].addEventListener('click', e => {
  goToStore();
});

goToStoreBtn.addEventListener("click", e => {
  goToStore();
})


// Store section Hide / Unhide Logic Ends


// Store: store-category 3 "+" icon onclick logic

const storeCategory3Filters = document.querySelectorAll(".store-filtersSelection");

storeCategory3Filters.forEach(filter => {
  filter.addEventListener("click", e => {
    if (e.target.textContent === '+') {
      e.target.parentElement.nextElementSibling.style.display = 'block';
      if (e.target.previousElementSibling.textContent === 'Rating') {
        e.target.parentElement.nextElementSibling.style.display = 'flex';
      }
      e.target.textContent = '-'
    } else {
      e.target.parentElement.nextElementSibling.style.display = 'none';
      e.target.textContent = '+'
    }
  });
});

// Store: store-category 3 "+" icon onclick logic Ends


// Store: sort button on click to Hide / unhide modal

const storeProductsSortBtn = document.querySelector('.store-sort-button');
const storeProductsSortSvg = storeProductsSortBtn.nextElementSibling;
const storeProductsSortModal = document.querySelector('.store-sort-button-div');

function storeSortClick() {
  const isOpen = storeProductsSortModal.style.display === 'flex';
  storeProductsSortModal.style.display = isOpen ? 'none' : 'flex';
}

// Toggle modal on button click
storeProductsSortBtn.addEventListener("click", () => {
  storeSortClick();
});

storeProductsSortSvg.addEventListener("click", () => {
  storeSortClick();
});

// Close modal if clicking outside it
document.addEventListener("click", (e) => {
  if (
    storeProductsSortModal.style.display === 'flex' &&
    !storeProductsSortModal.contains(e.target) &&
    e.target !== storeProductsSortBtn && e.target !== storeProductsSortSvg
  ) {
    storeProductsSortModal.style.display = 'none';
  }
});

// Store: sort button on click to Hide / unhide modal


// Store: Right part By default products display

const storeRightProducts = document.querySelector('.store .products');
const paginationDiv = document.querySelector('.store-slider-number');
const previous = document.querySelector('.store-last-sliderprevious');
const next = document.querySelector('.store-last-slidernext');
const productsPerPage = 9;

let spansLengthInPagination = Math.ceil(data.length / productsPerPage);

// 1. Create pagination spans
for (let i = 1; i <= spansLengthInPagination; i++) {
  const paginationSpan = document.createElement("span");
  paginationSpan.textContent = i;
  paginationSpan.style.display = 'block';
  paginationDiv.append(paginationSpan);
}

const storePaginationSpans = document.querySelectorAll(".store-slider-number span");

if (storePaginationSpans.length > 0) {
  storePaginationSpans[0].classList.add('active');
}

if (storePaginationSpans.length > 6) {
  storePaginationSpans[5].textContent = '...';
  storePaginationSpans[5].classList.add('disabled');
}

function updatePaginationEllipsis(clickedIndex) {
  if (storePaginationSpans.length <= 6) return; 

  if ([4, 5, 7].includes(clickedIndex)) {
    if (storePaginationSpans[1]) {
      storePaginationSpans[1].textContent = '...';
      storePaginationSpans[1].classList.add('disabled');
    }
    if (storePaginationSpans[5]) {
      storePaginationSpans[5].textContent = '6';
      storePaginationSpans[5].classList.remove('disabled');
    }
  } else if ([1, 2, 3].includes(clickedIndex)) {
    if (storePaginationSpans[1]) {
      storePaginationSpans[1].textContent = '2';
      storePaginationSpans[1].classList.remove('disabled');
    }
    if (storePaginationSpans[5]) {
      storePaginationSpans[5].textContent = '...';
      storePaginationSpans[5].classList.add('disabled');
    }
  }
}

storePaginationSpans.forEach((span) => {
  span.addEventListener('click', () => {
    const clickedText = span.textContent;

    if (clickedText === '...') return;

    storePaginationSpans.forEach(s => s.classList.remove('active'));
    span.classList.add('active');

    const clickedIndex = parseInt(clickedText);
    
    if (!isNaN(clickedIndex)) {
      updatePaginationEllipsis(clickedIndex); 
      showProductsByPage(clickedIndex);
    }
  });
});

function showProductsByPage(pageNumber) {
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = data.slice(startIndex, endIndex);

  storeRightProducts.innerHTML = '';
  showTrendingProducts(currentProducts, storeRightProducts);
}

previous.addEventListener("click", () => {
  const activeSpan = document.querySelector(".store-slider-number span.active");
  const prevSpan = activeSpan?.previousElementSibling;

  if (prevSpan && prevSpan.textContent !== '...') {
    const prevPage = parseInt(prevSpan.textContent);
    if (!isNaN(prevPage)) {
      activeSpan.classList.remove("active");
      prevSpan.classList.add("active");

      showProductsByPage(prevPage);
      updatePaginationEllipsis(prevPage);
    }
  }
});

next.addEventListener("click", () => {
  const activeSpan = document.querySelector(".store-slider-number span.active");
  const nextSpan = activeSpan?.nextElementSibling;

  if (nextSpan && nextSpan.textContent !== '...') {
    const nextPage = parseInt(nextSpan.textContent);
    if (!isNaN(nextPage)) {
      activeSpan.classList.remove("active");
      nextSpan.classList.add("active");

      showProductsByPage(nextPage);
      updatePaginationEllipsis(nextPage);
    }
  }
});

showProductsByPage(1);
productDetailsFunction();


// Store: Right part By default products display end


// Store: Right part search product Logic



// Store: Right part search product Logic Ends

// components first NavLink Logic
const componentsGrid = document.querySelector(".components");


navListItems[0].addEventListener("click", e => {
  componentsGrid.innerHTML = '';
  sensorProducts.innerHTML = ''

  navListItems[0].style.color = '#22D3EE';
  navListItems[0].style.borderBottom = '2px solid #22D3EE';
  navListItems[1].style.color = '#454D59';
  navListItems[1].style.borderBottom = 'none';
  componentsGrid.style.display = 'grid'

  componentsGrid.innerHTML = `
      <div class="component-items" data-subcategory="transistors">
        <img src="https://media.istockphoto.com/id/1057911984/photo/electronic-transistor-isolated.jpg?b=1&s=612x612&w=0&k=20&c=Yo6xShmYmkS-EJzuBrIPk561gqwFcQ63aWgnS8blCLQ=" alt="">
        <div class="component-content">
            <p class='subcategory-name'>Transistors</p>
            <p>Shop now</p>
        </div>
    </div>

    <div class="component-items" data-subcategory="capacitors">
        <img src="https://media.gettyimages.com/photos/collection-of-capacitors-against-a-white-background-picture-id172962646?k=20&m=172962646&s=612x612&w=0&h=ES1R7bMMDkR5r3Xp3CnJD-GJTaWLtL8aQ4e-wi-Aaxo=" alt="">
        <div class="component-content">
            <p class='subcategory-name'>Capacitors</p>
            <p>Shop now</p>
        </div>
    </div>

    <div class="component-items" data-subcategory="inductors">
        <img src="https://qph.fs.quoracdn.net/main-qimg-d7ec636623ea2d1081f16042a4aabd38-c" alt="">
        <div class="component-content">
            <p class='subcategory-name'>Inductors</p>
            <p>Shop now</p>
        </div>
    </div>

    <div class="component-items" data-subcategory="leds">
        <img src="https://media.gettyimages.com/photos/high-angle-view-of-led-lights-against-white-background-picture-id1157527318?k=20&m=1157527318&s=612x612&w=0&h=LyjPCH4bSngY-LtXpphg1eKmrfMo0FICYpd_1OTISnM=" alt="">
        <div class="component-content">
            <p class='subcategory-name'>Leds</p>
            <p>Shop now</p>
        </div>
        </div>
        `
})


// components first NavLink Logic End


// components second NavLink Logic


navListItems[1].addEventListener("click", e => {

  componentsGrid.innerHTML = '';
  sensorProducts.innerHTML = ''

  navListItems[1].style.color = '#22D3EE';
  navListItems[1].style.borderBottom = '2px solid #22D3EE';
  navListItems[0].style.color = '#454D59';
  navListItems[0].style.borderBottom = 'none';
  componentsGrid.style.display = 'grid'

  componentsGrid.innerHTML = `
      <div class="component-items" data-subcategory="arduino" >
        <img src="https://c1.wallpaperflare.com/preview/107/530/442/electronics-arduino-diy.jpg" alt="">
        <div class="component-content">
            <p class='subcategory-name'>Arduino</p>
            <p>Shop now</p>
        </div>
    </div>

    <div class="component-items" data-subcategory="esp series">
        <img src="https://everybitelectronics.co.uk/wp-content/uploads/2020/04/ESP32.jpg" alt="">
        <div class="component-content">
            <p class='subcategory-name'>Esp series</p>
            <p>Shop now</p>
        </div>
    </div>

    <div class="component-items" data-subcategory="raspberri pi">
        <img src="https://c4.wallpaperflare.com/wallpaper/672/858/376/raspberry-pi-computer-macro-wallpaper-preview.jpg" alt="">
        <div class="component-content">
            <p class='subcategory-name'>Raspberri pi</p>
            <p>Shop now</p>
        </div>
    </div>

    <div class="component-items" data-subcategory="stm32">
        <img src="https://th.bing.com/th/id/OIP.HC9F52kRLNEhyd5W5b0BmQHaHP?pid=ImgDet&rs=1" alt="">
        <div class="component-content">
            <p class='subcategory-name'>Stm 32</p>
            <p>Shop now</p>
        </div>
    </div>
  `
})



componentsGrid.addEventListener("click", e => {
  const componentItem = e.target.closest('.component-items');
  if (!componentItem) return;

  const selectedSubcategory = componentItem.dataset.subcategory;

  const filteredSubcategoryProducts = data.filter(
    product => product.subcategory === selectedSubcategory
  );

  if (filteredSubcategoryProducts.length > 0) {
    allSections.style.display = 'none';
    wishlistSection.style.display = 'none';
    sensorsSection.style.display = 'block';
    checkoutFormSection.style.display = 'none';
    productDetailsSection.style.display = 'none';
    componentsGrid.style.display = 'none';

    const componentName = document.querySelector('.component-name');
    componentName.textContent = selectedSubcategory;

    const sensorsLengthSpan = document.querySelector('.component-length');
    sensorsLengthSpan.innerHTML = `(${filteredSubcategoryProducts.length})`

    showTrendingProducts(filteredSubcategoryProducts, sensorProducts);
    productDetailsFunction();
  }

});




// components second NavLink Logic End

// Go To home button Logic 

const goToHomePageBtn = document.querySelector('.nav-logo');

goToHomePageBtn.addEventListener('click', e => {
  allSections.style.display = 'block';
  sensorsSection.style.display = 'none';
  wishlistSection.style.display = 'none';
  productDetailsSection.style.display = 'none'
  checkoutFormSection.style.display = 'none';
  storeSection.style.display = 'none';
  componentsGrid.style.display = 'none'

  navListItems[0].style.color = '#454D59';
  navListItems[0].style.borderBottom = 'none';
  navListItems[1].style.color = '#454D59';
  navListItems[1].style.borderBottom = 'none';
});

// Go To home button Logic 


attachRemoveWishlistListeners();
window.addEventListener('DOMContentLoaded', () => {
  updateCartIconColors();
  renderCartItems(data);

});


const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
if (wishlist.length === 0) {
  heartBox.style.display = 'none';
  emptyHeart.style.display = 'flex';
  heartIcon.setAttribute('fill', 'none');
} else {
  heartBox.style.display = 'block';
  emptyHeart.style.display = 'none';
  heartIcon.setAttribute('fill', '#164e63');
}
