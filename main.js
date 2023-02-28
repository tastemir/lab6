function calculateCircleArea(radius) {
  const PI = 3.14;
  const area = PI * (radius ** 2);
  return area;
}

const radius = 3;
const area = calculateCircleArea(radius);
console.log(area); 

function multiplyNumbers(num1, num2, num3) {
  const product = num1 * num2 * num3;
  return product;
}

const number_1 = 5;
const number_2 = 1201;
const number_3 = 23;
const product = multiplyNumbers(number_1, number_2, number_3);
console.log(product); 

function isBetweenZeroAndOne(number) {
  return number > 0 && number < 1;
}

const number1 = 0.98;
const isBetween1 = isBetweenZeroAndOne(number1);
console.log(isBetween1); 

const number2 = 78;
const isBetween2 = isBetweenZeroAndOne(number2);
console.log(isBetween2); 
