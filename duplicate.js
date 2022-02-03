var rollNo = [4, 19, 45, 23, 32, 18, 16, 11, 7, 4, 2, 19, 23, 11, 4, 45];

var duplicate = [];

for (var i = 0; i < rollNo.length; i++) {
  var element = rollNo[i];
  if (duplicate.indexOf(element) == -1) {
    duplicate.push(element);
  }
}

console.log(duplicate);

// ============ duplicate number removed from array ================

var name = ["Taskin", "Asghar", "Mohib Jan", "Afghan", "Taskin", "Asghar"];

var duplicate = [];
for (var i = 0; i < name.length; i++) {
  var element = name[i];
  if (duplicate.indexOf(element) == -1) {
    duplicate.push(element);
  }
}
console.log(duplicate);

// ============ duplicate string removed from array ================
