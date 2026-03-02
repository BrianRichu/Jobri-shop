// deliveryOptions.js
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

// Single delivery option
export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 0,       // days from today
    priceShillings: 400,   // delivery fee
  }
];

// Get the delivery option by id (fallback to first if not found)
export function getDeliveryOption(deliveryOptionId) {
  const option = deliveryOptions.find(opt => opt.id === deliveryOptionId);
  return option || deliveryOptions[0];
}

// Calculate expected delivery date
export function calculateDeliveryDate(deliveryOption) {
  const today = dayjs();
  let deliveryDate = today.add(deliveryOption.deliveryDays, "days");

  // Skip Sundays
  if (deliveryDate.format("dddd") === "Sunday") {
    deliveryDate = deliveryDate.add(1, "days");
  }

  return deliveryDate.format("dddd, MMMM D");
}