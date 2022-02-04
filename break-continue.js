for (var i = 1; i <= 10; i++) {
  if (i == 6) {
    break;
  }
  console.log("From i to 5 = " + i);
}

// ========= when i = 6, loop will be break =====

var numbers = [10, 20, 22, 56, 78, 45, 67, 78, 92, 67, 74];
for (var i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element > 50) {
    break;
  }
  console.log(element);
}
console.log("Break End, Continue part start");

// ======= whenever i will be more than 50, loop will be stop ======

var number = [10, 20, 22, 56, 78, 45, 67, 78, 92, 67, 74];
for (var i = 0; i < number.length; i++) {
  const element = number[i];
  if (element > 50) {
    continue;
  }
  console.log(element);
}
// ======= whenever there is any value bigger than 50, remove them & loop will continue ======
