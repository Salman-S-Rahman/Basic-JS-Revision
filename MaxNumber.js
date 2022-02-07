var rollNo = [4, 19, 45, 23, 32, 18, 16, 11, 7, 4, 2, 19, 23, 11, 4, 45];

var maxValue = rollNo[0];

for (var i = 0; i < rollNo.length; i++) {
  var element = rollNo[i];
  if (element > maxValue) {
    maxValue = element;
  }
}
console.log("Maximum value is = " + maxValue);

// ================ maximum value in array ==================
