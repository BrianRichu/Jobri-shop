export const deliveryOptions = [
  {
    id : '1',
    deliveryDays : 1,
    priceShillings : 400
  },
  {
    id : '2',
    deliveryDays : 3,
    priceShillings : 200,
  },
  {
    id : '3',
    deliveryDays : 7,
    priceShillings : 0
  }
]

export function getDeliveryOption(deliveryOptionId){
   let deliveryOption;

    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });
    if (!deliveryOption) {
      deliveryOption = deliveryOptions[0];
    }
    return deliveryOption;
}