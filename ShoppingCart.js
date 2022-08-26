/* Data */
let rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

let discounts = {
  // values are in percentages.
  Apple: 10,
};

let taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
};

let purchases = [
  {
    item: "Carrot",
    units: 20,
  },
  {
    item: "Apple",
    units: 2,
  },
  {
    item: "Guava",
    units: 1,
  },
];

/* Functions */
const getDiscountPercent = (productName) => (discounts[productName] || 0) / 100;

const getTaxPercent = (productName) => (taxes[productName] || 0) / 100;

const getUnitPrice = (itemName) => rates[itemName];

const getPrice = (lineItem) => lineItem.units * getUnitPrice(lineItem.item);

const getLineItemPrice = (lineItem) =>
  getPrice(lineItem) *
  (1 + getTaxPercent(lineItem.item) - getDiscountPercent(lineItem.item));

const getSum = (lineItems) =>
  lineItems.reduce((acc, lineItem) => acc + getLineItemPrice(lineItem), 0);

// Do not change below this line.
/* Main Function */
const main = () => {
  console.log("Total - Rs." + getSum(purchases));
};

main();
