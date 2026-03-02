import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderOrderSummary } from "./orderSummary.js";

export function renderPaymentSummary() {
  const paymentSummaryContainer = document.querySelector(".js-payment-summary");

  // Hide payment summary if cart is empty
  if (cart.length === 0) {
    paymentSummaryContainer.innerHTML = "";
    return;
  }

  // Calculate total product cost
  let productPriceShillings = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceShillings += product.priceShillings * cartItem.quantity;
  });

  // Shipping cost (only one delivery option)
  const deliveryOption = getDeliveryOption(cart[0].deliveryOptionId);
  const shippingPriceShillings = deliveryOption.priceShillings;

  // Total including shipping
  const totalShillings = productPriceShillings + shippingPriceShillings;

  // Build the HTML
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

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">Ksh ${totalShillings}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  paymentSummaryContainer.innerHTML = paymentSummaryHTML;

  // Re-render order summary if needed
  renderOrderSummary();
}