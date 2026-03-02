import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart, clearCart } from "../data/cart.js";
import { getProduct } from "../data/products.js";
import { getDeliveryOption } from "../data/deliveryOptions.js";

// Render checkout summaries
renderOrderSummary();
renderPaymentSummary();

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".button-primary");
  if (!btn) return;

  btn.addEventListener("click", () => {

    // Base message
    let message = "Hello, I would like to place an order:\n\n";

    let itemsTotal = 0;      // Sum of all products
    let deliveryTotal = 0;   // Delivery charge (applied once)

    if (cart.length === 0) {
      message += "No items in cart.";
    } else {

      // Loop through products only
      cart.forEach((cartItem, index) => {
        const product = getProduct(cartItem.productId);

        const itemSubtotal =
          product.priceShillings * cartItem.quantity;

        itemsTotal += itemSubtotal;

        message += `Product: ${product.name}\n`;
        message += `Quantity: ${cartItem.quantity}\n`;
        message += `Items Total: Ksh ${itemSubtotal}\n`;
        message += `-----------------------------\n`;

        // Capture delivery fee only once (assumes one delivery option per order)
        if (index === 0) {
          const deliveryOption = getDeliveryOption(
            cartItem.deliveryOptionId
          );
          deliveryTotal = deliveryOption?.priceShillings || 0;
        }
      });

      // Grand total calculation
      const grandTotal = itemsTotal + deliveryTotal;

      // Append summary section
      message += `\nItems Subtotal: Ksh ${itemsTotal}\n`;
      message += `Delivery Fee: Ksh ${deliveryTotal}\n`;
      message += `TOTAL (Including Delivery): Ksh ${grandTotal}`;
    }

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);

    // Clear cart after preparing order
    clearCart();

    // Replace page with thank-you screen
    document.body.innerHTML = `
      <div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#faf7f4;'>
        <div style='background:#fff;padding:48px 32px;border-radius:24px;box-shadow:0 2px 16px rgba(0,0,0,0.08);text-align:center;'>
          <h1 style='color:#2b1e1a;font-size:2.2rem;margin-bottom:16px;'>Thank you for your order!</h1>
          <p style='font-size:1.2rem;color:#6b4f3f;margin-bottom:24px;'>Redirecting to WhatsApp...</p>
          <div style='margin:24px auto 0;width:48px;height:48px;border:6px solid #c8a27a;border-top:6px solid #2b1e1a;border-radius:50%;animation:spin 1s linear infinite;'></div>
        </div>
      </div>
      <style>
        @keyframes spin { 
          0% { transform: rotate(0deg);} 
          100% {transform: rotate(360deg);} 
        }
      </style>
    `;

    // Redirect to WhatsApp
    setTimeout(() => {
      window.location.href =
        `https://wa.me/254759871835?text=${encodedMessage}`;
    }, 1000);
  });
});