import { products } from "../data/products.js";

let productsHTML = "";

products.forEach((product)=>{
  productsHTML += `
  <div class="top-product">
          <img src="${product.image}">
          <p class="product-name">${product.name}</p>
          <p class="product-price">ksh ${product.priceShillings}</p>
          <button class="add-cart-button">Add to Cart</button>
        </div>`
})

document.querySelector('.js-top-products').innerHTML = productsHTML;