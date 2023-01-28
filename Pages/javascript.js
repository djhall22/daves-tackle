function add7(number) {
  let num7 = number + 7;
  return num7;
}

console.log(add7(5));
console.log(add7(10));

function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

console.log(multiply(2, 2));

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize("bILL"));
