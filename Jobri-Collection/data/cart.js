export let cart = [
  {
    productId : 'p10',
    quantity : 1
  },{
    productId : 'p11',
    quantity : 2
  }
];

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

export function removeFromCart(productId){
  //create new array
  const newCart = [];

  //loop through the cart
  cart.forEach((cartItem) => {

    //add the items into the new array expect the one we are deleting
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  })
  //replace the old cart with the new cart
  cart = newCart;
}
