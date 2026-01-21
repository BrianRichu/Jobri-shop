import { products } from "../data/products.js";
import { addToCart } from "../data/cart.js";

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
    addToCart(productId); 
  });
});
