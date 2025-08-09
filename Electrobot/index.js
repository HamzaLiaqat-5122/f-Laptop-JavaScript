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

let isAltLayout = false;

function showTrendingProducts(products, place) {
  const storeSection = document.querySelector('.store');
  if (isAltLayout) {
    place.style.display = 'flex';
    place.style.flexDirection = 'column';
  } else {
    place.style.display = 'grid';
    if (storeSection.style.display === 'block') {
      place.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
  }

  place.innerHTML = '';

  products.forEach(product => {
    if (!isAltLayout) {
      // Default display grid card
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
    } else {
      // other card one per row
      place.innerHTML += `
        <div class="store-menusvg-components">
          <div class="store-menusvg-components-data">
            <div class="store-msc-data-leftimg">
              <img src="${product.url}" alt="not found" />
            </div>
            <div class="store-msc-data-right">
              <div class="store-msc-data-right1">
                <p>${product.category}</p>
                <div class="store-msc-data-right1Rating">
                  <svg width="20" xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>${Math.floor(product.rating)}.00</span>
                  <span>(${product.reviews} reviews)</span>
                </div>
                <div class="store-msc-data-right1heart">
                  <svg width="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true" class="h-6 w-6 text-cyan-400 cursor-pointer" data-heart="${product.id}">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                </div>
                <span class="store-msc-right-transistor">${product.subcategory}</span>
              </div>
              <div class="store-msc-data-right2">
                <h1 data-products="${product.id}" class='products-title'>${product.title}</h1>
              </div>
              <div class="store-msc-data-right3">
                <p>${product.description.slice(0, 210)}...</p>
              </div>
              <div class="store-msc-data-right4">
                <span>$${product.price}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  });

  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  document.querySelectorAll('.products .items, .store-menusvg-components').forEach(item => {
    const id = item.id || item.querySelector('[data-heart]')?.getAttribute('data-heart');
    if (wishlist.includes(id)) {
      const heartIcon = item.querySelector('[data-heart]');
      if (heartIcon) heartIcon.setAttribute('fill', '#22D3EE');
    }
  });

  AddToWishlist();
  updateCartIconColors();
  renderCartItems(data);
  updateCartTotalAmount(data);
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


function updateTickIcon(innerTextDiv, selectedQuantity) {

  innerTextDiv.querySelectorAll('i.fa-check').forEach(icon => icon.remove());

  const spans = innerTextDiv.querySelectorAll('span');
  spans.forEach(span => {

    if (span.textContent.trim() === String(selectedQuantity)) {
      const tickIcon = document.createElement('i');
      tickIcon.className = 'fa-solid fa-check';
      tickIcon.style.marginRight = '5px';

      span.prepend(tickIcon);
    }
  });
}

function renderCartItems(data) {
  const noItemBagMessage = document.querySelector('.noitembag');
  const itemsBagContainer = document.querySelector('.itemsbags');
  const checkoutSectionGoBtn = document.querySelector('.checkout-section-goBtn');
  const formNoItemContainer = document.querySelector('.formnoitems');
  const formRightSection = document.querySelector('.formright');
  const cartIcon = document.querySelector(".cart");
  const cartQuantity = document.querySelector('.itemslength');
  const formItems = document.querySelector("#form_items");

  const cartItems = getCartItems();

  itemsBagContainer.innerHTML = '';
  formItems.innerHTML = '';

  if (cartItems.length === 0) {
    noItemBagMessage.style.display = 'flex';
    checkoutSectionGoBtn.disabled = true;
    checkoutSectionGoBtn.style.opacity = '.5';
    checkoutSectionGoBtn.style.cursor = 'not-allowed';
    formNoItemContainer.style.display = 'flex';
    formRightSection.style.display = 'none';
    cartIcon.style.fill = 'none';
    cartQuantity.textContent = '0';
    updateCartIconColors();
    updateCartTotalAmount(data);
    return;
  }

  noItemBagMessage.style.display = 'none';
  checkoutSectionGoBtn.disabled = false;
  checkoutSectionGoBtn.style.opacity = '1';
  checkoutSectionGoBtn.style.cursor = 'pointer';
  formNoItemContainer.style.display = 'none';
  formRightSection.style.display = 'block';
  cartIcon.style.fill = '#164E63';

  const totalQuantity = cartItems.reduce((acc, item) => acc + (Number(item.quantity) || 0), 0);

  cartQuantity.textContent = totalQuantity;

  cartItems.forEach(({ id: productId, quantity }) => {
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
            <span class='price' data-price="${product.price}">$${Number(product.price).toFixed(2)}</span>
          </div>
          <div class="modeltext">
            <span>${product.id}</span>
          </div>
          <div class="model_remove_price">
            <div class="quantity">
              <div class="show-text">
                <span>${quantity}</span>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="innertext" style="display:none;">
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

    const checkoutHTML = `
      <div class="checkout-form-product" data-id="${product.id}">
        <div class="cfp-leftbox">
          <div class="cfp-img">
            <img src="${product.url}" alt="">
          </div>  
          <div class="cfp-leftboxtext">
            <h4>${product.title}</h4>
            <span class="cfp-modelNumber">${product.id}</span>
            <div class="quantity">
              <div class="show-text">
                <span>${quantity}</span>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="innertext" style="display:none;">
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
          </div> 
        </div>  
        <div class="cfp-rightbox">
          <span class="checkout-price" data-price="${product.price}">$${Number(product.price).toFixed(2)}</span>
          <span class="remove-checkout-item" data-id="${product.id}">Remove</span>
        </div>
      </div>
    `;
    formItems.insertAdjacentHTML('beforeend', checkoutHTML);
  });

  cartItems.forEach(({ id: productId, quantity }) => {

    const addedProduct = itemsBagContainer.querySelector(`.addedProductDetails[data-id="${productId}"]`);
    if (addedProduct) {
      const innerTextDiv = addedProduct.querySelector('.innertext');
      if (innerTextDiv) {
        updateTickIcon(innerTextDiv, quantity);
      }
    }

    const checkoutProduct = formItems.querySelector(`.checkout-form-product[data-id="${productId}"]`);
    if (checkoutProduct) {
      const innerTextDiv = checkoutProduct.querySelector('.innertext');
      if (innerTextDiv) {
        updateTickIcon(innerTextDiv, quantity);
      }
    }
  });

  attachQuantityListeners();
  attachRemoveListeners();
  attachCheckoutRemoveListeners();

  updateCartTotalAmount(data);
  updateCheckoutSummary(data);

}

function attachQuantityListeners() {
  document.querySelectorAll('.addedProductDetails, .checkout-form-product').forEach(item => {
    const showText = item.querySelector('.show-text');
    const innerText = item.querySelector('.innertext');


    showText.addEventListener('click', () => {
      document.querySelectorAll('.innertext').forEach(div => {
        if (div !== innerText) div.style.display = 'none';
      });

      innerText.style.display = innerText.style.display === 'block' ? 'none' : 'block';
    });

    innerText.querySelectorAll('span').forEach(span => {
      span.addEventListener('click', e => {
        const selectedQuantity = parseInt(e.target.textContent);
        const productId = item.dataset.id;

        let cartItems = getCartItems();
        const idx = cartItems.findIndex(i => i.id === productId);
        if (idx > -1) {
          cartItems[idx].quantity = selectedQuantity;
          setCartItems(cartItems);
        }

        updateTickIcon(innerText, selectedQuantity);

        innerText.style.display = 'none';
        renderCartItems(data);
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.show-text') && !e.target.closest('.innertext')) {
      document.querySelectorAll('.innertext').forEach(div => {
        div.style.display = 'none';
      });
    }
  });
}


function attachRemoveListeners() {
  document.querySelectorAll('.remove-cart-item').forEach(btn => {
    btn.addEventListener('click', e => {
      const productCard = e.target.closest('.addedProductDetails');
      const productId = productCard.dataset.id;

      let cartItems = getCartItems();
      cartItems = cartItems.filter(i => i.id !== productId);
      setCartItems(cartItems);

      renderCartItems(data);
      updateCartIconColors();
    });
  });
}

function attachCheckoutRemoveListeners() {
  document.querySelectorAll('.remove-checkout-item').forEach(btn => {
    btn.addEventListener('click', e => {
      const productId = e.target.dataset.id;

      let cartItems = getCartItems();
      cartItems = cartItems.filter(i => i.id !== productId);
      setCartItems(cartItems);

      renderCartItems(data);
    });
  });
}

function updateCartIconColors() {
  const cartItems = getCartItems();

  document.querySelectorAll('.items').forEach(productEl => {
    const productId = productEl.id;
    const cartIcon = productEl.querySelector('.products-price svg:last-child');
    if (!cartIcon) return;

    if (cartItems.some(item => item.id === productId)) {
      cartIcon.style.fill = '#22D3EE';
    } else {
      cartIcon.style.fill = 'none';
    }
  });

  const mainCartIcon = document.querySelector('.cart');
  if (mainCartIcon) {
    mainCartIcon.style.fill = cartItems.length > 0 ? '#164E63' : 'none';
  }
}


function updateCartTotalAmount(data) {
  const cartItems = getCartItems();
  let total = 0;

  cartItems.forEach(({ id, quantity }) => {
    const product = data.find(p => p.id === id);
    if (product) total += product.price * quantity;
  });

  const cartTotalAmountSpan = document.querySelector('#totalBuyProductPrice');
  if (cartTotalAmountSpan) {
    cartTotalAmountSpan.textContent = `$${total.toFixed(2)}`;
  }
}


document.body.addEventListener('click', function (e) {
  const clickedIcon = e.target.closest('.products-price svg:last-child');
  if (!clickedIcon) return;

  const productEl = clickedIcon.closest('.items');
  if (!productEl) return;

  const productId = productEl.id;
  let cartItems = getCartItems();

  const index = cartItems.findIndex(item => item.id === productId);
  if (index > -1) {
    // Remove item from cart
    cartItems.splice(index, 1);
  } else {
    cartItems.push({ id: productId, quantity: 1 });
  }

  setCartItems(cartItems);
  updateCartIconColors();
  renderCartItems(data);
});


function updateCheckoutSummary(data) {
  
  const cStandard = document.querySelector('.c-standard');
  const cExpress = document.querySelector('.c-express');
  
  const cartItems = getCartItems();
  
  let subtotal = 0;
  cartItems.forEach(({ id, quantity }) => {
    const product = data.find(p => p.id === id);
    if (product) subtotal += product.price * quantity;
  });
  
  
  let shipping = 0;

  if (cStandard.classList.contains('c-deliveryjsclass')) {
    shipping = 5
  } else if (cExpress.classList.contains('c-deliveryjsclass')) {
    shipping = 16;
  }

  const taxes = subtotal * 0.10;

  const total = subtotal + shipping + taxes;

  const subtotalEl = document.querySelector('.c-subtotal-price');
  const shippingEl = document.querySelector('.c-shipping-price');
  const taxesEl = document.querySelector('.c-taxes-price');
  const totalEl = document.querySelector('.c-total-price');

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = `$${shipping.toFixed(2)}`;
  if (taxesEl) taxesEl.textContent = `$${taxes.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
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
      storeSection.style.display = 'none';
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
            isAltLayout = false;

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
            isAltLayout = false;

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
  updateCartTotalAmount(data);
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
  closeCartModal();
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
let filteredData = [...data];


let spansLengthInPagination = Math.ceil(data.length / productsPerPage);

// 1. Create pagination spans
function updatePagination() {
  paginationDiv.innerHTML = '';

  spansLengthInPagination = Math.ceil(filteredData.length / productsPerPage);

  for (let i = 1; i <= spansLengthInPagination; i++) {
    const paginationSpan = document.createElement("span");
    paginationSpan.textContent = i;
    paginationSpan.style.display = 'block';
    paginationDiv.append(paginationSpan);
  }

  const storePaginationSpansUpdated = document.querySelectorAll(".store-slider-number span");

  if (storePaginationSpansUpdated.length > 0) {
    storePaginationSpansUpdated[0].classList.add('active');
  }

  if (storePaginationSpansUpdated.length > 6) {
    storePaginationSpansUpdated[5].textContent = '...';
    storePaginationSpansUpdated[5].classList.add('disabled');
  }

  storePaginationSpansUpdated.forEach((span) => {
    span.addEventListener('click', () => {
      const clickedText = span.textContent;

      if (clickedText === '...') return;

      storePaginationSpansUpdated.forEach(s => s.classList.remove('active'));
      span.classList.add('active');

      const clickedIndex = parseInt(clickedText);

      if (!isNaN(clickedIndex)) {
        updatePaginationEllipsis(clickedIndex);
        showProductsByPage(clickedIndex);
      }
    });
  });
}


function updatePaginationEllipsis(clickedIndex) {
  const storePaginationSpans = document.querySelectorAll('.store-slider-number span')
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

function showProductsByPage(pageNumber) {
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredData.slice(startIndex, endIndex);

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
updatePagination();
productDetailsFunction();


// Store: Right part By default products display end


// Store: Right part search product Logic

const storeSearchFilter = document.querySelector('#store_filter')

storeSearchFilter.addEventListener("input", () => {
  resetRatingStars();
  let typedText = storeSearchFilter.value.trim().toLowerCase();

  filteredData = data.filter(product =>
    product.title.toLowerCase().includes(typedText)
  );

  updatePagination();
  showProductsByPage(1);
  productDetailsFunction();
});


// Store: Right part search product Logic Ends


// Store: Sensors Category onclick logic + filter cancel button

const sensorTypes = document.querySelectorAll('.sensors-types h4');

sensorTypes.forEach(sensor => {
  sensor.addEventListener("click", e => {
    resetRatingStars();
    activeSensor = e.target.textContent.toLowerCase();

    brandCheckboxes.forEach(cb => cb.checked = false);
    categoryCheckboxes.forEach(cb => cb.checked = false);

    selectedBrands = [];
    selectedCategories = [];

    filteredData = data.filter(product => product.subcategory === activeSensor);

    updatePagination();
    showProductsByPage(1);
    productDetailsFunction();
  });
});



// filter cancel button:

const storeCancelFilter = document.querySelector('.store-filtercancel-btn');
storeCancelFilter.addEventListener('click', () => {
  resetRatingStars();
  storeSearchFilter.value = '';
  activeSensor = null;
  selectedBrands = [];
  selectedCategories = [];

  brandCheckboxes.forEach(cb => cb.checked = false);
  categoryCheckboxes.forEach(cb => cb.checked = false);

  filteredData = [...data];
  updatePagination();
  showProductsByPage(1);
  productDetailsFunction();
});



// Store: Sensors Category onclick logic + filter cancel button Ends 

// Store: sort button modal inside filters on click logic 


const storeSortOptions = document.querySelectorAll('.store-sort-button-div h4, .store-sort-button-div p');

storeSortOptions.forEach((option, index) => {
  option.addEventListener('click', () => {
    switch (index) {
      case 0: // Most Popular
        filteredData = data.filter(product => product.trending === true);
        break;
      case 1: // Featured
        filteredData = data.filter(product => product.featured === true);
        break;
      case 2: // Best Rating
        filteredData = data.filter(product => product.rating === '5');
        break;
      case 3: // Price: Low to High
        filteredData = [...data].sort((a, b) => a.price - b.price);
        break;
      case 4: // Price: High to Low
        filteredData = [...data].sort((a, b) => b.price - a.price);
        break;
    }

    updatePagination();
    showProductsByPage(1);
    productDetailsFunction();

    storeProductsSortModal.style.display = 'none';
  });
});


// Store: sort button modal inside filters on click logic end


// Store: products card display change svg logic

isAltLayout = false;

const defaultSvg = `
<svg class='store-sort-window' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
     aria-hidden="true" class="h-5 w-5">
  <path fill-rule="evenodd" 
        d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" 
        clip-rule="evenodd">
  </path>
</svg>
`;

const altSvg = `
<svg class='store-sort-window' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
     aria-hidden="true" class="h-5 w-5">
  <path fill-rule="evenodd" 
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" 
        clip-rule="evenodd">
  </path>
</svg>
`;

const sortIcon = document.querySelector('#sortIconContainer');

sortIcon.addEventListener('click', () => {
  isAltLayout = !isAltLayout;
  sortIcon.innerHTML = isAltLayout ? altSvg : defaultSvg;
  showProductsByPage(1);
  productDetailsFunction();
});


// Store: products card display change svg logic Ends

// Store: Brand CheckBoxes Logic start

const brandCheckboxes = document.querySelectorAll('.store-brand-items input[type="checkbox"]');

brandCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    resetRatingStars();
    activeSensor = null;

    selectedBrands = Array.from(brandCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.nextElementSibling.textContent.toLowerCase());

    applyCombinedFilters();
  });
});



// Store: Brand CheckBoxes Logic start 

const categoryCheckboxes = document.querySelectorAll('.store-category-item input[type="checkbox"]');

let activeSensor = null;
let selectedBrands = [];
let selectedCategories = [];

categoryCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    resetRatingStars();
    activeSensor = null;

    selectedCategories = Array.from(categoryCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase());

    applyCombinedFilters();
  });
});



function applyCombinedFilters() {

  if (selectedBrands.length === 0 && selectedCategories.length === 0) {
    filteredData = data;
  } else {
    filteredData = data.filter(product => {
      const brandMatch = selectedBrands.includes(product.brand.toLowerCase());
      const categoryMatch = selectedCategories.includes(product.category.toLowerCase());

      return brandMatch || categoryMatch;
    });
  }

  updatePagination();
  showProductsByPage(1);
  productDetailsFunction();
}

// Store: Brand CheckBoxes Logic Ends 

// Store: Show Products By Rating Logic

const ratingStars = document.querySelectorAll('.storestaricon');

function resetRatingStars() {
  ratingStars.forEach(s => {
    const icon = s.querySelector('i');
    if (!icon) return;
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    icon.style.color = '';
  });
}

ratingStars.forEach((star, index) => {
  star.addEventListener('click', () => {

    ratingStars.forEach((s, i) => {
      const icon = s.querySelector('i');
      if (!icon) return;

      if (i <= index) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        icon.style.color = '#FACC15';
      } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        icon.style.color = '';
      }
    });

    brandCheckboxes.forEach(cb => cb.checked = false);
    categoryCheckboxes.forEach(cb => cb.checked = false);
    selectedBrands = [];
    selectedCategories = [];
    activeSensor = null;

    const selectedRating = index + 1;
    filteredData = data.filter(product => Number(product.rating) <= selectedRating);

    updatePagination();
    showProductsByPage(1);
    productDetailsFunction();
  });
});


// Store: Show Products By Rating Logic Ends

// Store: Price Range Slider Logic Starts

// Price Range Slider Elements
const slider1 = document.getElementById('slider-01');
const slider2 = document.getElementById('slider-02');
const range1 = document.getElementById('range1');
const range2 = document.getElementById('range2');

let minPrice = parseInt(slider1.value);
let maxPrice = parseInt(slider2.value);


function updatePriceRange(e) {
  let slider1Val = parseInt(slider1.value);
  let slider2Val = parseInt(slider2.value);

  if (slider1Val >= slider2Val) {
    slider1Val = slider2Val;
    slider1.value = slider1Val;
  }

  if (slider2Val <= slider1Val) {
    slider2Val = slider1Val;
    slider2.value = slider2Val;
  }

  minPrice = slider1Val;
  maxPrice = slider2Val;

  range1.textContent = `$${minPrice.toFixed(1)}`;
  range2.textContent = `$${maxPrice}`;

  applyPriceFilter();
}

function applyPriceFilter() {

  brandCheckboxes.forEach(cb => cb.checked = false);
  categoryCheckboxes.forEach(cb => cb.checked = false);
  selectedBrands = [];
  selectedCategories = [];
  activeSensor = null;

  filteredData = data.filter(product =>
    product.price >= minPrice && product.price <= maxPrice
  );

  updatePagination();
  showProductsByPage(1);
  productDetailsFunction();
}

slider1.addEventListener('input', updatePriceRange);
slider2.addEventListener('input', updatePriceRange);
slider1.addEventListener('input', resetRatingStars);
slider2.addEventListener('input', resetRatingStars);


// Store: Price Range Slider Logic Ends

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


// Checkout Form Validation Logic Starts

// 1. Delivery Method Logic

const cStandard = document.querySelector('.c-standard');
const cExpress = document.querySelector('.c-express ');


cStandard.style.cursor = 'pointer';
cExpress.style.cursor = 'pointer';

cStandard.addEventListener("click", e => {
  if (cExpress.classList.contains('c-deliveryjsclass')) {
    cExpress.classList.remove('c-deliveryjsclass');
  }
  cStandard.classList.add('c-deliveryjsclass');
  updateCheckoutSummary(data);
});

cExpress.addEventListener("click", e => {
  if (cStandard.classList.contains('c-deliveryjsclass')) {
    cStandard.classList.remove('c-deliveryjsclass');
  }
  cExpress.classList.add('c-deliveryjsclass');
  updateCheckoutSummary(data); 
});


// Checkout Form Validation Logic Ends

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
