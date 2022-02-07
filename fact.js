var factorial = 1;
for (var i = 1; i <= 5; i++) {
  var factorial = factorial * i;
}
console.log(factorial);

// ===== factorial in iterative way by loop =========

var factorial = 1;
var i = 1;
while (i <= 10) {
  factorial = factorial * i;
  i++;
}
console.log(factorial);

// ===== factorial in iterative way by while loop =========

function fact(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    var factorial = factorial * i;
  }
  return factorial;
}
var result = fact(5);
console.log(result);

// ===== factorial in iterative way by loop & function =========
