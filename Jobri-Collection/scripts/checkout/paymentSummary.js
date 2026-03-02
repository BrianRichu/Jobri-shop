import { cart, updateDeliveryOption } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import {
  getDeliveryOption,
  deliveryOptions,
  calculateDeliveryDate,
} from "../../data/deliveryOptions.js";
import { renderOrderSummary } from "./orderSummary.js";

function setDeliveryOptionForAll(deliveryOptionId) {
  cart.forEach((cartItem) => {
    cartItem.deliveryOptionId = deliveryOptionId;
  });
  // Persist selected delivery option in localStorage
  localStorage.setItem("selectedDeliveryOptionId", deliveryOptionId);
}

export function renderPaymentSummary() {
  const paymentSummaryContainer = document.querySelector(".js-payment-summary");

  // Hide payment summary if cart is empty
  if (cart.length === 0) {
    paymentSummaryContainer.innerHTML = "";
    return;
  }

  // On first render, check localStorage for selected delivery option
  const savedDeliveryOptionId = localStorage.getItem(
    "selectedDeliveryOptionId",
  );
  if (savedDeliveryOptionId) {
    cart.forEach((cartItem) => {
      cartItem.deliveryOptionId = savedDeliveryOptionId;
    });
  }

  //we are calculation the total cost of the items
  let productPriceShillings = 0;

  cart.forEach((cartItem) => {
    //calculation for total items
    const product = getProduct(cartItem.productId);
    productPriceShillings += product.priceShillings * cartItem.quantity;
  });

  // Get shipping cost from the first cart item's delivery option (same for all now)
  const deliveryOption = getDeliveryOption(cart[0].deliveryOptionId);
  const shippingPriceShillings = deliveryOption.priceShillings;

  const totalShillings = shippingPriceShillings + productPriceShillings;

  // Build delivery options HTML with radio buttons
  let deliveryOptionsHTML = "";
  deliveryOptions.forEach((deliveryOption) => {
    const dateString = calculateDeliveryDate(deliveryOption);
    const priceString =
      deliveryOption.priceShillings === 0
        ? "FREE"
        : `ksh ${deliveryOption.priceShillings}`;
    const isChecked =
      deliveryOption.id === cart[0].deliveryOptionId ? "checked" : "";

    deliveryOptionsHTML += `
      <div class="delivery-option js-delivery-option" data-delivery-option-id="${deliveryOption.id}">
        <input
          type="radio"
          name="global-delivery-option"
          value="${deliveryOption.id}"
          ${isChecked}
          class="delivery-option-input"
        >
        <div>
          <div class="delivery-option-date">
            ${dateString}
          </div>
          <div class="delivery-option-price">
            ${priceString} - Shipping
          </div>
        </div>
      </div>
    `;
  });

  const paymentSummaryHTML = `
    <div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items:</div>
            <div class="payment-summary-money">Ksh ${productPriceShillings}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">Ksh ${shippingPriceShillings}</div>
          </div>

          <div class="delivery-options-section">
           <div class="delivery-options-title">Standard Delivery Fee: </div>
           <div class="delivery-options">
             ${deliveryOptionsHTML}
           </div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">Ksh ${totalShillings}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
  `;
  paymentSummaryContainer.innerHTML = paymentSummaryHTML;

  // Add event listeners to delivery radio buttons
  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const deliveryOptionId = element.dataset.deliveryOptionId;
      setDeliveryOptionForAll(deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
