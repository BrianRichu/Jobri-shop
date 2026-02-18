import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";


export function renderPaymentSummary(){
  
  //we are calculation the total cost of the items
  let productPriceShillings = 0;
  let shippingPriceShillings = 0;

  cart.forEach((cartItem) => {
    //calculation for total items
    const product = getProduct(cartItem.productId);
    productPriceShillings += product.priceShillings * cartItem.quantity;

    //calculation for shipping cost
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceShillings += deliveryOption.priceShillings;

  });
  const totalShillings = shippingPriceShillings + productPriceShillings;

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
  `
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}

