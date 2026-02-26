import { cart, removeFromCart,  } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import {
  getDeliveryOption,
  calculateDeliveryDate,
} from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";

export function renderOrderSummary() {
  let cartSummaryHTML = "";

  //loop through the cart array and use each cartItem to get the other details

  cart.forEach((cartItem) => {
    //this code below gets the productId outside the cartItem
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    //update the date using the delivery option selected
    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const dateString = calculateDeliveryDate(deliveryOption);

    cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${dateString}
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
            <span>Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
  });

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

  //making the delete link active
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;

      removeFromCart(productId);

      //selects the correct element we want to delete
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`,
      );

      container.remove();
      renderPaymentSummary();
    });
  });
}