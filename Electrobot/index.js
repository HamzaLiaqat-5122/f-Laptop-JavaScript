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
  products.forEach(product => {
    place.innerHTML += `
    <div class="items">
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
    `
  })
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
const heartBox = document.querySelector('.heart_box');
const emptyHeart = document.querySelector('.heart_empty');
const productHeartIcon = document.querySelectorAll('.products-price svg');
const productRemoveButton = document.querySelector('.heart_remove span:last-child');


productHeartIcon.forEach(icon => {

  icon.addEventListener("click", e => {

    if (e.target.getAttribute('fill') === '#22D3EE' && heartIcon.getAttribute('fill') === '#164E63') {
      e.target.setAttribute('fill', 'none');
      heartIcon.setAttribute('fill', 'none');
      heartBox.style.display = 'none';
      emptyHeart.style.display = 'block'
    } else {
      e.target.setAttribute('fill', '#22D3EE');
      heartIcon.setAttribute('fill', '#164E63');
      heartBox.style.display = 'block';
      emptyHeart.style.display = 'none'
    }

  })

  productRemoveButton.addEventListener("click", e => {
    if (heartBox.innerHTML === '') {
      heartBox.style.display = 'none';
      emptyHeart.style.display = 'block'
    } else {
      heartBox.style.display = 'block';
      emptyHeart.style.display = 'none'
    }
    e.target.parentNode.parentNode.parentNode.remove();
  })

})


heartIcon.addEventListener("click", e => {
  productDetailsSection.style.display = 'none'
  sensorsSection.style.display = 'none';
  allSections.style.display = 'none';
  wishlistSection.style.display = 'block'
})

// Wishlist or Heart Section Hide/unhide logic

// Shopping cart Hide/unhide logic 

const shoppingCartModal = document.querySelector('.shopping-bag');
const overlayBag = document.querySelector('.overlay-bag');
const cartIcon = document.querySelector('.cart');
const checkoutBag = document.querySelector('.checkout-bag');
const closeBag = document.querySelector('#closebag');


cartIcon.addEventListener("click", e => {
  shoppingCartModal.style.display = 'block';
  shoppingCartModal.style.zIndex = '1'
  shoppingCartModal.style.backgroundColor = 'rgb(141 146 158 / 65%)'
  overlayBag.style.right = '0%';
  checkoutBag.style.right = '0%';
  document.body.style.overflow = 'hidden'
  overlayBag.style.overflowY = 'scroll'
});

closeBag.addEventListener('click', e => {
  shoppingCartModal.style.display = 'none';
  shoppingCartModal.style.zIndex = '-1'
  shoppingCartModal.style.backgroundColor = 'rgb(141 146 158 / 65%)'
  overlayBag.style.right = '-100%';
  checkoutBag.style.right = '-100%';
  document.body.style.overflowY = 'scroll'
});

shoppingCartModal.addEventListener('click', e => {
  shoppingCartModal.style.display = 'none';
  shoppingCartModal.style.zIndex = '-1'
  shoppingCartModal.style.backgroundColor = 'rgb(141 146 158 / 65%)'
  overlayBag.style.right = '-100%';
  checkoutBag.style.right = '-100%';
  document.body.style.overflowY = 'scroll'
});


// Shopping cart Hide/unhide logic 


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
          })

          // Making breadCrumb Category Interactive



          const breadCrumbCategory = document.querySelector('.product-details-data-1spans span');

          breadCrumbCategory.addEventListener('click', e => {

            sensorProducts.innerHTML = '';

            const breadCrumbCategories = data.filter(prod => e.target.textContent.slice(3) === prod.category);

            allSections.style.display = 'none';
            productDetailsSection.style.display = 'none';
            sensorsSection.style.display = 'block';

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



}

showTrendingProducts(featuredProducts, featuredProductsContainer)

productDetailsFunction();


// Products Details Section logic


// Go To home button Logic 

const goToHomePageBtn = document.querySelector('.nav-logo');

goToHomePageBtn.addEventListener('click', e => {
  allSections.style.display = 'block';
  sensorsSection.style.display = 'none';
  wishlistSection.style.display = 'none';
  productDetailsSection.style.display = 'none'
});

// Go To home button Logic 
