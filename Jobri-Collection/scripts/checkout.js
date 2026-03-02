import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart, clearCart } from "../data/cart.js";
import { getProduct } from "../data/products.js";
import { getDeliveryOption } from "../data/deliveryOptions.js";

renderOrderSummary();
renderPaymentSummary();

// Place Order button logic
document.addEventListener("DOMContentLoaded", () => {
  // Try common button selectors
  let btn = document.querySelector(".button-primary");

  if (btn) {
    btn.addEventListener("click", () => {
      // Build WhatsApp message
      let message = "Hello, I would like to place an order:%0A";
      if (cart.length === 0) {
        message += "%0A(No items in cart)";
      } else {
        cart.forEach((cartItem) => {
          const product = getProduct(cartItem.productId);
          message += `%0A- ${product.name} x${cartItem.quantity} ksh ${product.priceShillings})`;
        });
      }
      // Optionally add total price
      let total = 0;
      if (cart.length === 0) {
        message += "(No items in cart)";
      } else {
        cart.forEach((cartItem) => {
          const product = getProduct(cartItem.productId);
          const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

          const itemSubtotal = product.priceShillings * cartItem.quantity;
          const deliveryFee = deliveryOption.priceShillings;

          total += itemSubtotal + deliveryFee;

          message += ` ${product.name}\n`;
          message += `  Quantity: ${cartItem.quantity}\n`;
          message += `  Item Total: Ksh ${itemSubtotal}\n`;
          message += `  Delivery:Ksh ${deliveryFee}\n`;
        });

        message += `%0A%0ATotal: Ksh ${total}`;
      }

      clearCart();
      // Show styled thank you message
      document.body.innerHTML = `
				<div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#faf7f4;'>
					<div style='background:#fff;padding:48px 32px;border-radius:24px;box-shadow:0 2px 16px rgba(0,0,0,0.08);text-align:center;'>
						<h1 style='color:#2b1e1a;font-size:2.2rem;margin-bottom:16px;'>Thank you for your order!</h1>
						<p style='font-size:1.2rem;color:#6b4f3f;margin-bottom:24px;'>You will now be redirected to WhatsApp to complete your order.</p>
						<div class='loader' style='margin:24px auto 0;width:48px;height:48px;border:6px solid #c8a27a;border-top:6px solid #2b1e1a;border-radius:50%;animation:spin 1s linear infinite;'></div>
					</div>
				</div>
				<style>
					@keyframes spin { 0% { transform: rotate(0deg);} 100% {transform: rotate(360deg);} }
				</style>
			`;
      setTimeout(() => {
        window.location.href = `https://wa.me/254759871835?text=${message}`;
      }, 1000);
    });
  }
});
