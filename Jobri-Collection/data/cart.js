export const cart = [];

export function addToCart(productId) {
  //checking if the product is already inside the cart
  let matchingItem;

  cart.forEach((cartItem) => {
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
    cart.push({
      productId,
      quantity: 1,
    });
  }
}
