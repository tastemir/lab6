function calculateCircleArea(radius) {
  const PI = 3.14;
  const area = PI * (radius ** 2);
  return area;
}

const radius = 10;
const area = calculateCircleArea(radius);
console.log(area); 

function multiplyNumbers(num1, num2, num3) {
  const product = num1 * num2 * num3;
  return product;
}

const num1 = 22;
const num2 = 33;
const num3 = 44;
const product = multiplyNumbers(num1, num2, num3);
console.log(product); 

function isBetweenZeroAndOne(number) {
  return number > 0 && number < 1;
}

const number1 = 0.5;
const isBetween1 = isBetweenZeroAndOne(number1);
console.log(isBetween1); 

const number2 = 1.5;
const isBetween2 = isBetweenZeroAndOne(number2);
console.log(isBetween2); 

