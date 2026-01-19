import { products } from "../data/products.js";
import { cart } from "../data/cart.js";

let productsHTML = "";

products.forEach((product)=>{
  productsHTML += `
  <div class="top-product">
          <img src="${product.image}">
          <p class="product-name">${product.name}</p>
          <p class="product-price">ksh ${product.priceShillings}</p>
          <button class="add-cart-button js-add-to-cart" data-product-id = "${product.id}">Add to Cart</button>
        </div>`
})

document.querySelector('.js-top-products').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click', ()=>{
    const productId = button.dataset.productId;

    let matchingItem;

    //check first if the item is in the cart
    cart.forEach((cartItem)=>{
      if(productId===cartItem.productId){
        matchingItem = cartItem;
      }
    })
    //if item is in the cart just increase the quantity
    if(matchingItem){
      matchingItem.quantity ++;
    }
    //if the item is not in the cart create new item object and add it to the cart
    else{
      cart.push({
      productId,
      quantity : 1
    })
    }
    console.log(cart)
  })
})

