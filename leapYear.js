function leapYear(n) {
    if (n % 4 == 0 && n % 100 !== 0 || n % 400 == 0) {
        console.log(n + " Is Leap Year");
    } else {
        console.log(n + " Is Leap Year")
    }
}

leapYear(2010);


// ========= without return the value =========