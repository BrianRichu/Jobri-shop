import { products } from "../data/products.js";
import { addToCart } from "../data/cart.js";


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
// ===============================
// CONFIG
// ===============================
const PRODUCTS_PER_PAGE = 16;

// Restore saved page or default to 1
let currentPage = Number(localStorage.getItem("currentPage")) || 1;
let filteredProducts = [...products];


// ===============================
// RENDER PRODUCTS
// ===============================
function renderProducts() {
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  // Safety reset if saved page is invalid
  if (currentPage > totalPages) {
    currentPage = 1;
    localStorage.setItem("currentPage", currentPage);
  }

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  let productsHTML = "";

  productsToDisplay.forEach((product) => {
    productsHTML += `
      <div class="top-product">
        <img src="${product.image}" loading="lazy"
          onclick="window.location='productDetail.html?id=${product.id}'">
        <p class="product-name">${product.name}</p>
        <p class="product-price">ksh ${product.priceShillings}</p>
        <button 
          class="add-cart-button js-add-to-cart"
          data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });

  document.querySelector(".js-top-products").innerHTML = productsHTML;

  renderPagination();
}


// ===============================
// RENDER PAGINATION
// ===============================
function renderPagination() {
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  if (totalPages <= 1) {
    document.querySelector(".js-pagination").innerHTML = "";
    return;
  }

  let paginationHTML = "";

  // If small page count → show all
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `
        <button class="pagination-button ${i === currentPage ? "active" : ""}" 
          data-page="${i}">
          ${i}
        </button>`;
    }
  } else {

    // Always show first page
    paginationHTML += `
      <button class="pagination-button ${currentPage === 1 ? "active" : ""}" 
        data-page="1">
        1
      </button>`;

    // Left ellipsis
    if (currentPage > 3) {
      paginationHTML += `<span class="ellipsis">...</span>`;
    }

    // Sliding window
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      paginationHTML += `
        <button class="pagination-button ${i === currentPage ? "active" : ""}" 
          data-page="${i}">
          ${i}
        </button>`;
    }

    // Right ellipsis
    if (currentPage < totalPages - 2) {
      paginationHTML += `<span class="ellipsis">...</span>`;
    }

    // Always show last page
    paginationHTML += `
      <button class="pagination-button ${currentPage === totalPages ? "active" : ""}" 
        data-page="${totalPages}">
        ${totalPages}
      </button>`;
  }

  document.querySelector(".js-pagination").innerHTML = paginationHTML;
}


// ===============================
// PAGINATION CLICK HANDLER
// ===============================
document.querySelector(".js-pagination").addEventListener("click", (e) => {
  const button = e.target.closest(".pagination-button");
  if (!button) return;

  currentPage = Number(button.dataset.page);

  // Save to localStorage
  localStorage.setItem("currentPage", currentPage);

  renderProducts();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ===============================
// INITIAL LOAD
// ===============================
renderProducts();


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
