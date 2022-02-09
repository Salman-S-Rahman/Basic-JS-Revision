function inchiToFeet(n) {
  inchi = 12 * n;
  return inchi;
}

var result = inchiToFeet(3);
console.log(result);

// ============ with return value =============

function feet(n) {
  inchi = 12 * n;
  console.log(n + " inchi = " + inchi + " Feet");
}

feet(4);

// ============ with return value =============
