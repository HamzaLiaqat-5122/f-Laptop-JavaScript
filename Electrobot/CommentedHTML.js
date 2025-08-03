// Trending Products InnerHTML

`
    <div class="items">
    <div class="img-box">
      <img src="${product.url}" alt="">
    </div>
    <p>${product.title.length > 16 ? `${product.title.slice(0, 17)}...` : product.title}</p>
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

// Trending Products InnerHTML End..




bag_new.innerHTML = `  
    <div class="addedProductImage"> 
               <img src=${find_bag.url} alt="">
    </div>
    <div class="model-title">
        <div class="model_content">
          <span>${find_bag.title}</span>
          <span data-price =${find_bag.price}>$${find_bag.price}</span>
        </div>
        <div class="modeltext">
                <span>${find_bag.model}</span>
        </div>
        <div class="model_remove_price">
            <div class="quantity">
                <div class="show-text">
                    <span>1</span>
                    <i class="fa-solid fa-chevron-down" data-chevron = ${find_bag.id}></i>
                </div>
                <div class="innertext" data-innertext = ${find_bag.id}>
                            ${setspaninnertext(find_bag.items_in_stock)}
                </div>
            </div>
            <span data-bagRemove = ${find_bag.id}>Remove</span>
            </div>
        </div>`
form_new = document.createElement("div")
form_new.classList.add("checkout-form-product")
form_new.setAttribute("data-bRemove", find_bag.id)
form_new.innerHTML = `  
                            <div class="cfp-leftbox">
                            <div class="cfp-img">
                            <img src=${find_bag.url} alt="">
                            </div> <!-- cfp-img end-->
                            <div class="cfp-leftboxtext">
                            <h4>${find_bag.title}</h4>
                            <span class="cfp-modelNumber">${find_bag.model}</span>
                            <div class="quantity">
                        <div class="show-text">
                            <span>1</span>
                            <i class="fa-solid fa-chevron-down" data-formchevron = ${find_bag.id}></i>
                            </div> 
                        <div class="innertext" data-forminnertext = ${find_bag.id}>
                           ${setformspaninnertext(find_bag.items_in_stock)}
                           </div>
                           </div>
                           </div>
                           </div>
        <div class="cfp-rightbox">
            <span data-formprice =${find_bag.price}>$${find_bag.price}</span>
            <span  data-bagRemove = ${find_bag.id}>Remove</span>
            </div>                
                `


a.innerHTML = `
                      <div class="store-menusvg-components">
                        <div class="store-menusvg-components-data">
                            <div class="store-msc-data-leftimg">
                                <img src=${data[i].url} alt="not found" />
                            </div>
                            <!-- store-msc-data-leftimg end-->
                            <div class="store-msc-data-right">
                                <div class="store-msc-data-right1">
                                    <p>${data[i].category}</p>
                                    <div class="store-msc-data-right1Rating">
                                        <svg width="20" xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <span>${Math.floor(data[i].rating)}.00</span>
                                        <span>(${data[i].reviews} reviews)</span>
                                    </div>
                                    <!-- store-msc-data-right1Rating end-->
                                    <div class="store-msc-data-right1heart">
                                        <svg width="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            aria-hidden="true" class="h-6 w-6 text-cyan-400 cursor-pointer" data-heart=${data[i].id}>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                                            </path>
                                        </svg>
                                    </div>
                                    <!-- store-msc-data-right1heart end-->
                                    <span class="store-msc-right-transistor">${data[i].subcategory}</span>
                                </div>
                                <!-- store-msc-data-right1 end-->
                                <div class="store-msc-data-right2">
                                    <h1 data-products = ${data[i].id}>${data[i].title}</h1>
                                </div>
                                <!-- store-msc-data-right2 end-->
                                <div class="store-msc-data-right3">
                                    <p>${data[i].description.slice(0, 210)}...</p>
                                </div>
                                <div class="store-msc-data-right4">
                                    <span>$${data[i].price}</span>
                                </div>
                            </div>
                            <!-- store-msc-data-right end-->
                        </div>
                        </div>
    `


a.innerHTML = `
    <div class="img-box">
    <img src="${data[i].url}" alt="">
    </div>
    <p data-products = ${data[i].id}>${data[i].title.slice(0, 15)}...</p>
    <div class="products-rating">
    ${ProductsRatingStars(data[i].rating)}
    </div>
    <span>${data[i].reviews} reviews</span>
    <div class="products-price">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-cyan-400 cursor-pointer" data-heart = ${data[i].id}>
    <path stroke-linecap="round" stroke-linejoin="round"
    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
    </path>
    </svg>
    <span>$${data[i].price}</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-cyan-400 cursor-pointer" data-bag=${data[i].id}>
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z">
                            </path>
                    </svg>
                </div>
            </div>
    `


// Featured Product seciton 

productsPage$.innerHTML = `
        <div class="product-details" data-productdetailheart = ${find_attribute.id}>
         <div class="product-details-img">
          <img src= ${find_attribute.url} alt="">
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
        <span data-category = ${find_attribute.category}>/&nbsp; ${find_attribute.category}</span>
        <span data-subcategory = ${find_attribute.subcategory}>/&nbsp; ${find_attribute.subcategory}</span>
        </div>
                    <h2>${find_attribute.title}</h2>
                    <div class="product-details-data-2spans">
                    <span>$${find_attribute.price}</span>
                    <div class="product-details-stars">
                    ${ProductsRatingStars(find_attribute.rating)}
                    </div>
                    <span>${find_attribute.reviews} reviews</span>
                    </div>
                    <p>${find_attribute.description}</p>
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
                    <button class="product-details-data-button" data-bagPro = ${find_attribute.id} data-basket = "basket">Add to Basket</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-cyan-400 cursor-pointer" data-heart= ${find_attribute.id}>
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
                        <p>${find_attribute.description}</p>
                        </div>
                        <div class="customer-reviews-details" data-rSection= "rsection">
                        <div class="customer-rating">
                        <h2>Customer Reviews</h2>
                        <div class="customer-rating-star-reviews">
                        <div class="customer-giving-star">
                        ${ProductsRatingStars(find_attribute.rating)}
                        </div>
                        <span>Based on ${find_attribute.reviews} reviews
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
                        <div style= "width:${find_attribute.product_reviews.star_ratings[0].percentage}"></div>
                        </div>
                        <div class="customer-star-width">
                        <div style= "width:${find_attribute.product_reviews.star_ratings[1].percentage}"></div>
                        </div>
                        <div class="customer-star-width">
                      <div style= "width:${find_attribute.product_reviews.star_ratings[2].percentage}"></div>
                      </div>
                      <div class="customer-star-width">
                      <div style= "width:${find_attribute.product_reviews.star_ratings[3].percentage}"></div>
                      </div>
                      <div class="customer-star-width">
                      <div style= "width:${find_attribute.product_reviews.star_ratings[4].percentage}"></div>
                      </div>
                      </div>
                      <div class="star-percentage">
                      <span>${find_attribute.product_reviews.star_ratings[0].percentage}</span>
                      <span>${find_attribute.product_reviews.star_ratings[1].percentage}</span>
                      <span>${find_attribute.product_reviews.star_ratings[2].percentage}</span>
                    <span>${find_attribute.product_reviews.star_ratings[3].percentage}</span>
                    <span>${find_attribute.product_reviews.star_ratings[4].percentage}</span>
                    </div>
                    
                    </div>
                    <h3>Share your thoughts</h3>
                    <p>If you've used this product, share your thoughts with other customers</p>
                    <button>Write a review</button>
                    </div>
                    
                    <div class="customers-description">
                    ${customer_length(find_attribute.product_reviews.customer_reviews)}
                    </div>
                    `