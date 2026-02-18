import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 0,
    priceShillings: 400,
  },
  {
    id: "2",
    deliveryDays: 2,
    priceShillings: 200,
  },
  {
    id: "3",
    deliveryDays: 5,
    priceShillings: 0,
  },
];

export function getDeliveryOption(deliveryOptionId) {
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

export function calculateDeliveryDate(deliveryOption) {
  const today = dayjs();
  const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
  let dateString;

  if (deliveryDate.format('dddd') === 'Sunday') {
    dateString = deliveryDate.add(1 , "days").format('dddd, MMMM D');
  }else{
    dateString = deliveryDate.format('dddd, MMMM D');
  }

  return dateString;
}
