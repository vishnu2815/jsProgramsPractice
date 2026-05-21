const productName = "iphone";
const actualPrice = 100000;
const discountPercentage = 10;
const discountAmount = (actualPrice * discountPercentage) / 100;
const finalPrice = actualPrice - discountAmount;

console.log(`Product: ${productName}`);
console.log(`Actual Price: ${actualPrice}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ${discountAmount}`);
console.log(`Final Price: ${finalPrice}`);
