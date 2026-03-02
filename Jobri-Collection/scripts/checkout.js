// checkout.js
import { cart, clearCart } from "../data/cart.js";
import { getProduct } from "../data/products.js";
import { getDeliveryOption, calculateDeliveryDate } from "../data/deliveryOptions.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";

// --- Render summaries on page load ---
renderOrderSummary();
renderPaymentSummary();

// --- Render Payment Summary ---
export function renderPaymentSummary() {
  const paymentSummaryContainer = document.querySelector(".js-payment-summary");

  if (cart.length === 0) {
    paymentSummaryContainer.innerHTML = "";
    return;
  }

  // Calculate total of items
  let itemsTotal = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    itemsTotal += product.priceShillings * cartItem.quantity;
  });

  // Get shipping info (only one delivery option)
  const deliveryOption = getDeliveryOption(cart[0].deliveryOptionId);
  const shippingFee = deliveryOption.priceShillings;
  const expectedDelivery = calculateDeliveryDate(deliveryOption);

  const grandTotal = itemsTotal + shippingFee;

  // Build summary HTML
  paymentSummaryContainer.innerHTML = `
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
      <div>Items:</div>
      <div class="payment-summary-money">Ksh ${itemsTotal}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; Handling:</div>
      <div class="payment-summary-money">Ksh ${shippingFee}</div>
    </div>

    <div class="payment-summary-row">
      <div>Expected Delivery:</div>
      <div class="payment-summary-money delivery-option-date">${expectedDelivery}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order Total:</div>
      <div class="payment-summary-money">Ksh ${grandTotal}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  renderOrderSummary();
}

// --- Place Order Button (works on first click) ---
document.addEventListener("click", (event) => {
  const button = event.target.closest(".place-order-button");
  if (!button) return;

  event.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Build WhatsApp message
  let message = "Hello, I would like to place an order:\n\n";
  let itemsTotal = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    const subtotal = product.priceShillings * cartItem.quantity;
    itemsTotal += subtotal;

    message += `Product: ${product.name}\n`;
    message += `Quantity: ${cartItem.quantity}\n`;
    message += `Item Total: Ksh ${subtotal}\n`;
    message += "-----------------------------\n";
  });

  const deliveryOption = getDeliveryOption(cart[0].deliveryOptionId);
  const shippingFee = deliveryOption.priceShillings;
  const grandTotal = itemsTotal + shippingFee;

  message += `Items Subtotal: Ksh ${itemsTotal}\n`;
  message += `Delivery Fee: Ksh ${shippingFee}\n`;
  message += `TOTAL (Including Delivery): Ksh ${grandTotal}\n`;
  message += `Expected Delivery: ${calculateDeliveryDate(deliveryOption)}\n`;

  const encodedMessage = encodeURIComponent(message);

  // Clear cart
  clearCart();

  // Show thank you screen
  document.body.innerHTML = `
    <div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#faf7f4;'>
      <div style='background:#fff;padding:48px 32px;border-radius:24px;box-shadow:0 2px 16px rgba(0,0,0,0.08);text-align:center;'>
        <h1 style='color:#2b1e1a;font-size:2.2rem;margin-bottom:16px;'>Thank you for your order!</h1>
        <p style='font-size:1.2rem;color:#6b4f3f;margin-bottom:24px;'>Redirecting to WhatsApp...</p>
        <div style='margin:24px auto 0;width:48px;height:48px;border:6px solid #c8a27a;border-top:6px solid #2b1e1a;border-radius:50%;animation:spin 1s linear infinite;'></div>
      </div>
    </div>
    <style>
      @keyframes spin { 0% { transform: rotate(0deg);} 100% {transform: rotate(360deg);} }
    </style>
  `;

  // Redirect to WhatsApp
  setTimeout(() => {
    window.location.href = `https://wa.me/254759871835?text=${encodedMessage}`;
  }, 1000);
});