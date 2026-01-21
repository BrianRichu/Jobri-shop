import { cart } from "../data/cart.js";
import { products } from "../data/products.js";


let cartSummaryHTML = '';

//loop through the cart array and use each cartItem to get the other details

cart.forEach((cartItem)=>{


//this code below gets the productId outside the cartItem
const productId = cartItem.productId;


//this variable saves the result
let matchingProduct;


//loop through the products array. now we check if the product id from the products array equals the product id from our cart and save it to matchingProduct variable.
products.forEach((product)=>{
  if(product.id === productId){
    matchingProduct = product;
  }
})

  cartSummaryHTML += `
    <div class="cart-item-container">
          <div class="delivery-date">
            Delivery date: Monday, March 18
          </div>

          <div class="cart-item-details-grid">
            <img
              class="product-image"
              src="${matchingProduct.image}"
              alt="Product Image"
            >

            <div class="cart-item-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>

              <div class="product-price">
              ksh ${matchingProduct.priceShillings}
              </div>

              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link link-primary">
                  Delete
                </span>
              </div>
            </div>
            

            <!-- DELIVERY OPTIONS -->
            <div class="delivery-options" data->
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>

              <div class="delivery-option">
                <input
                  type="radio"
                  checked
                  class="delivery-option-input"
                  name="delivery-option-${matchingProduct.id}"
                >
                <div>
                  <div class="delivery-option-date">
                    Monday, March 18
                  </div>
                  <div class="delivery-option-price">
                    Free Shipping
                  </div>
                </div>
              </div>

              <div class="delivery-option">
                <input
                  type="radio"
                  class="delivery-option-input"
                  name="delivery-option-${matchingProduct.id}"
                >
              <div>
                 
                <div class="delivery-option-date">
                    Friday, March 15
                  </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
               </div>
             </div>
          </div>

          <div class="delivery-option">
              <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}"
              >
              <div>
                <div class="delivery-option-date">
                    Wednesday, March 13
                 </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;