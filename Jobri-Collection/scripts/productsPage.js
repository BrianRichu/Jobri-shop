import { products } from "../data/products.js";
import { cart } from "../data/cart.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
  <div class="top-product">
          <img src="${product.image}">
          <p class="product-name">${product.name}</p>
          <p class="product-price">ksh ${product.priceShillings}</p>
          <button class="add-cart-button js-add-to-cart" data-product-id = "${product.id}">Add to Cart</button>
        </div>`;
});

document.querySelector(".js-top-products").innerHTML = productsHTML;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;


    //checking if the product is already inside the cart
    let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    //if the item is in the cart increase the quantity only
    if (matchingItem) {
        matchingItem.quantity++;
      } 
      
      //if not in the cart then create the cart item object in the cart
      else {
        cart.push({
          productId,
          quantity: 1,
        });
      }
      //updating the cart quantity
      let cartQuantity = 0;
      cart.forEach((cartItem) =>{
        cartQuantity += cartItem.quantity;
      })
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  });
});


