import { products } from "../data/products.js";
import { addToCart } from "../data/cart.js";

const PRODUCTS_PER_PAGE = 24;

let currentPage = 1;
let filteredProducts = [...products];
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.querySelector(".site-header");

/* Open mobile menu */
openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

/* Close mobile menu */
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

/* Shrink header on scroll */
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// ---------- Render Products ----------
function renderProducts() {
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  let productsHTML = "";

  productsToDisplay.forEach((product) => {
    productsHTML += `
      <div class="top-product">
        <img src="${product.image}" loading="lazy" onclick="window.location='productDetail.html?id=${product.id}'">
        <p class="product-name">${product.name}</p>
        <p class="product-price">ksh ${product.priceShillings}</p>
        <button 
          class="add-cart-button js-add-to-cart"
          data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>`;
  });

  document.querySelector(".js-top-products").innerHTML = productsHTML;

  renderPagination();
}

// ---------- Render Pagination ----------
function renderPagination() {
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  let paginationHTML = "";

  // Always show first page
  if (currentPage > 1) {
    paginationHTML += `<button class="pagination-button" data-page="1">1</button>`;
  }

  // Show previous page if not the first
  if (currentPage > 3) {
    paginationHTML += `<span>...</span>`;
  }

  // Determine start and end page for sliding window
  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(totalPages - 1, currentPage + 1);

  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += `<button class="pagination-button ${i === currentPage ? "active" : ""}" data-page="${i}">${i}</button>`;
  }

  // Show ellipsis if current page is far from last
  if (currentPage < totalPages - 2) {
    paginationHTML += `<span>...</span>`;
  }

  // Always show last page if more than 1
  if (totalPages > 1) {
    paginationHTML += `<button class="pagination-button ${currentPage === totalPages ? "active" : ""}" data-page="${totalPages}">${totalPages}</button>`;
  }

  document.querySelector(".js-pagination").innerHTML = paginationHTML;
}
// ---------- Global Click Handling ----------
document.addEventListener("click", (event) => {
  // Add to Cart
  const addButton = event.target.closest(".js-add-to-cart");
  if (addButton) {
    const productId = addButton.dataset.productId;
    addToCart(productId);
    return;
  }

  // Pagination Click
  const pageButton = event.target.closest(".pagination-button");
  if (pageButton) {
    currentPage = Number(pageButton.dataset.page);
    renderProducts();
  }
  // Scroll to top after rendering
  window.scrollTo({
    top: 0,
    behavior: "smooth", // smooth scrolling
  });
});

// ---------- Search ----------
const searchInput = document.getElementById("search-input");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    filteredProducts = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(query);
      const keywordMatch =
        product.keywords &&
        product.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query),
        );

      return nameMatch || keywordMatch;
    });

    currentPage = 1; // Reset to page 1 after search
    renderProducts();
  });
}

// Initial render
renderProducts();
