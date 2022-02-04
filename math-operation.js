var price1 = 100;
var price2 = 5;

var sum = price1 + price2;
var difference = price1 - price2;
var multiplication = price1 * price2;
var division = price1 / price2;

console.log(sum);
console.log(difference);
console.log(multiplication);
console.log(division);

function divisionNumbers(number1, number2) {
  var division = number1 - number2;
  return division;
}

const result = divisionNumbers(50, 40);
console.log("After Division = " + result);
