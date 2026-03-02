
export let cart = [];
loadFromStorage();

export function loadFromStorage (){
  const storedCart = JSON.parse(localStorage.getItem('cart'));

  // Filter out any null or malformed cart items
  cart = Array.isArray(storedCart) ? storedCart.filter(cartItem => cartItem && cartItem.productId) : [];
}

export function saveToLocalStorage (){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  loadFromStorage(); // Always get latest cart
  let matchingItem = cart.find(cartItem => productId === cartItem.productId);

  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      productId,
      quantity: 1,
      deliveryOptionId : '1'
    });
  }
  saveToLocalStorage();
  loadFromStorage(); // Ensure cart is up-to-date
}

export function removeFromCart(productId) {
  // Ensure cart is synced with storage
  loadFromStorage();

  // Find the item in the cart
  const cartItem = cart.find(
    item => item.productId === productId
  );

  // If item does not exist, exit early
  if (!cartItem) return;

  // Reduce quantity by 1
  cartItem.quantity -= 1;

  // If quantity reaches 0, remove the item completely
  if (cartItem.quantity <= 0) {
    cart = cart.filter(
      item => item.productId !== productId
    );
  }

  // Persist updated cart
  saveToLocalStorage();
}


//this function now updated the delivery date when page is refreshed
export function updateDeliveryOption(productId, deliveryOptionId){
  loadFromStorage();
  let matchingItem = cart.find(cartItem => productId === cartItem.productId);
  if (matchingItem) {
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToLocalStorage();
    loadFromStorage();
  }
}

// Clear the cart completely
export function clearCart() {
  cart = [];
  saveToLocalStorage();
  loadFromStorage();
}

// ...existing code...
