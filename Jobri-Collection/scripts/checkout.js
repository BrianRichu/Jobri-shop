import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart, clearCart } from "../data/cart.js";
import { getProduct } from "../data/products.js";
import { getDeliveryOption } from "../data/deliveryOptions.js";

// Render checkout summaries immediately
renderOrderSummary();
renderPaymentSummary();

document.addEventListener("DOMContentLoaded", () => {
  // Select the primary checkout button
  const btn = document.querySelector(".button-primary");

  // Exit early if button does not exist
  if (!btn) return;

  btn.addEventListener("click", () => {
    // Base WhatsApp message
    let message = "Hello, I would like to place an order:\n\n";

    // Initialize total accumulator
    let total = 0;

    // Handle empty cart case
    if (cart.length === 0) {
      message += "No items in cart.";
    } else {
      // Loop through each cart item
      cart.forEach((cartItem) => {
        // Get full product details using productId
        const product = getProduct(cartItem.productId);

        // Get delivery option using deliveryOptionId
        const deliveryOption = getDeliveryOption(
          cartItem.deliveryOptionId
        );

        // Calculate subtotal for this product
        const itemSubtotal =
          product.priceShillings * cartItem.quantity;

        // Extract delivery fee (fallback to 0 if undefined)
        const deliveryFee =
          deliveryOption?.priceShillings || 0;

        // Add both item subtotal and delivery fee to total
        total += itemSubtotal + deliveryFee;

        // Append formatted product details to message
        message += `Product: ${product.name}\n`;
        message += `Quantity: ${cartItem.quantity}\n`;
        message += `Items Total: Ksh ${itemSubtotal}\n`;
        message += `Delivery Fee: Ksh ${deliveryFee}\n`;
        message += `-----------------------------\n`;
      });

      // Append final total including delivery
      message += `\nTOTAL (Including Delivery): Ksh ${total}`;
    }

    // Encode message properly for URL usage
    const encodedMessage = encodeURIComponent(message);

    // Clear cart after order is prepared
    clearCart();

    // Replace page content with thank-you screen
    document.body.innerHTML = `
      <div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#faf7f4;'>
        <div style='background:#fff;padding:48px 32px;border-radius:24px;box-shadow:0 2px 16px rgba(0,0,0,0.08);text-align:center;'>
          <h1 style='color:#2b1e1a;font-size:2.2rem;margin-bottom:16px;'>Thank you for your order!</h1>
          <p style='font-size:1.2rem;color:#6b4f3f;margin-bottom:24px;'>Redirecting to WhatsApp...</p>
          <div style='margin:24px auto 0;width:48px;height:48px;border:6px solid #c8a27a;border-top:6px solid #2b1e1a;border-radius:50%;animation:spin 1s linear infinite;'></div>
        </div>
      </div>
      <style>
        /* Simple loader animation */
        @keyframes spin { 
          0% { transform: rotate(0deg);} 
          100% {transform: rotate(360deg);} 
        }
      </style>
    `;

    // Redirect to WhatsApp after short delay
    setTimeout(() => {
      window.location.href =
        `https://wa.me/254759871835?text=${encodedMessage}`;
    }, 1000);
  });
});