
import { products } from "../data/products.js";
import { addToCart } from "../data/cart.js";

function renderProducts(productList) {
  let productsHTML = "";
  productList.forEach((product) => {
    productsHTML += `
      <div class="top-product">
        <img src="${product.image}">
        <p class="product-name">${product.name}</p>
        <p class="product-price">ksh ${product.priceShillings}</p>
        <button class="add-cart-button js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
      </div>`;
  });
  document.querySelector(".js-top-products").innerHTML = productsHTML;

  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      addToCart(productId);
    });
  });
}

// Initial render
renderProducts(products);

// Search functionality
const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    const filtered = products.filter(product => {
      // Check name
      const nameMatch = product.name.toLowerCase().includes(query);
      // Check keywords
      const keywordMatch = product.keywords && product.keywords.some(keyword => keyword.toLowerCase().includes(query));
      return nameMatch || keywordMatch;
    });
    renderProducts(filtered);
  });
}
