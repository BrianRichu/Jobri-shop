function Cart(localStorageKey) {
  const cart = {
  cartItems : undefined,

  loadFromStorage(){
  this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

  if (!this.cartItems) {
  this.cartItems = [];
}
},

saveToLocalStorage(){
  localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
},

addToCart(productId) {
  //checking if the product is already inside the cart
  let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  //if the item is in the cart increase the quantity only
  if (matchingItem) {
    matchingItem.quantity++;
  }

  //if not in the cart then create the cart item object in the cart
  else {
    this.cartItems.push({
      productId,
      quantity: 1,
      deliveryOptionId : '1'
    });
  }

  this.saveToLocalStorage();
},

removeFromCart(productId) {
  this.cartItems = this.cartItems.filter(item => item.productId !== productId);
  this.saveToLocalStorage();
},

//this function now updated the delivery date when page is refreshed
updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  this.saveToLocalStorage();
}

}

return cart;
}

const cart = Cart('cart-oop');

const businessCart = Cart('business-cart-oop');



cart.loadFromStorage();

console.log(cart);
console.log(businessCart);
