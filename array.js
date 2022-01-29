var numbers = [11, 32, 98, 54, 38, 22, 89];

console.log(numbers.indexOf(5));

console.log(numbers.indexOf(32));

console.log(numbers.indexOf(89));

// ====== to know index of different element in array =======

var lengthOfNum = numbers.length;
console.log("Total Element In Array Is : " + lengthOfNum);

// ======== to know length of an array =====


var num = [11, 22, 33, 44, 55, 66, 77, 88, 99];
console.log("Before Replace = " + num);
num[5] = 555;
console.log("After Replace = " + num);