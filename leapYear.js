function leapYear(n) {
  if ((n % 4 == 0 && n % 100 !== 0) || n % 400 == 0) {
    console.log(n + " Is Leap Year");
  } else {
    console.log(n + " Is Leap Year");
  }
}

leapYear(2010);

// ========= without return the value =========

function leapYearCheck(n) {
  if ((n % 4 == 0 && n % 100 !== 0) || n % 400 == 0) {
    return n + " Is Leap Year";
  } else {
    return n + " Is Leap Year";
  }
}
var result = leapYearCheck(2011);
console.log(result);

// ========== with return value from function =============
