import { cart, removeFromCart, updateDeliveryOption } from "../data/cart.js";
import { products } from "../data/products.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { deliveryOptions } from "../data/deliveryOptions.js";

function renderOrderSummary() {
  let cartSummaryHTML = "";

  //loop through the cart array and use each cartItem to get the other details

  cart.forEach((cartItem) => {
    //this code below gets the productId outside the cartItem
    const productId = cartItem.productId;

    //this variable saves the result
    let matchingProduct;

    //loop through the products array. now we check if the product id from the products array equals the product id from our cart and save it to matchingProduct variable.
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });

    //update the date using the delivery option selected
    const deliveryOptionId = cartItem.deliveryOptionId;

    let deliveryOption;

    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });
    if (!deliveryOption) {
      deliveryOption = deliveryOptions[0];
    }
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

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
            

     <!-- DELIVERY OPTIONS -->
     <div class="delivery-options">
       <div class="delivery-options-title">
          Choose a delivery option:
        </div>
       ${deliveryOptionsHTML(matchingProduct, cartItem)}
      </div>
    </div>
    </div>
  `;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let HTML = "";

    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");
      const priceString =
        deliveryOption.priceShillings === 0
          ? "FREE"
          : `ksh ${deliveryOption.priceShillings}`;

      //adding a default checked delivery option
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      HTML += `
     <div class="delivery-option js-delivery-option"
     data-product-id = "${matchingProduct.id}"
     data-delivery-option-id = "${deliveryOption.id}">
        <input
          type="radio"
          ${isChecked ? "checked" : ""}
          class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}"
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
    return HTML;
  }

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
    });
  });

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
    });
  });
}

renderOrderSummary();

//to update the delivery date in real time we had to enclose the whole code in a function in order to rerun it anytime we are selecting a new delivery date. it generated the whole order summary html each time the option is changed. this is a better way than using the dom. since it allows us to change the whole page not just one element
