import { products, getProduct } from "../data/products.js";
import { addToCart } from "../data/cart.js";

// Grab product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

if (!productId) {
  document.body.innerHTML = "<p>Product not found.</p>";
} else {
  const product = getProduct(productId);
  if (!product) {
    document.body.innerHTML = "<p>Product not found.</p>";
  } else {
    // Render product info
    const nameEl = document.querySelector(".product-name");
    const priceEl = document.querySelector(".product-price");
    const imgEl = document.querySelector(".product-image img");
    const addButton = document.querySelector(".add-cart-button");
    const descEl = document.querySelector(".product-description p");

    nameEl.textContent = product.name;
    priceEl.textContent = `Ksh ${product.priceShillings}`;
    imgEl.src = product.image;
    imgEl.alt = product.name;
    addButton.textContent = "Add to Cart";
    addButton.dataset.productId = product.id;
    descEl.textContent = product.description;

    // Add to cart handler
    addButton.addEventListener("click", () => {
      addToCart(product.id);
    });
  }
}

const header = document.querySelector('.js-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// Accordion toggle for FAQs
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const plusSign = btn.querySelector("span");

    // Toggle visibility
    if (answer.style.display === "block") {
      answer.style.display = "none";
      plusSign.textContent = "+";
    } else {
      answer.style.display = "block";
      plusSign.textContent = "−"; // minus sign when open
    }
  });
});