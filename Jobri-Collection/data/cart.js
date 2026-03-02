
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
  loadFromStorage();

  const index = cart.findIndex(
    item => item.productId === productId
  );

  if (index === -1) return;

  cart[index].quantity -= 1;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1); // mutate instead of reassign
  }

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
  // Mutate existing array to preserve module reference
  cart.length = 0;

  saveToLocalStorage();
}
