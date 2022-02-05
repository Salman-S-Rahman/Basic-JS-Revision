for (var i = 1; i <= 50; i++) {
  const element = i;
  if (element % 3 == 0 && element % 5 == 0) {
    console.log("foobar");
  } else if (element % 3 == 0) {
    console.log("foo");
  } else if (element % 5 == 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}

// ========= given foo, bar & foobar output by condition 