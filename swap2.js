var x = 5;
var y = 7;

console.log("Before Swap x = " + x + " & y = " + y);

var temp = y;
y = x;
x = temp;

console.log("After Swap x = " + x + " & y = " + y);

// ============ one way ===============
var p = 5;
var q = 7;
console.log("Before Swap p = " + p + " & q = " + q);
p = p + q;
q = p - q;
p = p - q;
console.log("After Swap p = " + p + " & q = " + q);

// ============ another way ===============