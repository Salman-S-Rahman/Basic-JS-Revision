var color = "red";
if (color == "white") {
  console.log("Color is white");
} else if (color == "blue") {
  console.log("Color is blue");
} else if (color == "green") {
  console.log("Color is green");
} else if (color == "red") {
  console.log("Color is red");
} else {
  console.log("Color is black");
}

// ======== switch is similar to if else condition ======
var color1 = "white";
switch (color1) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "green":
    console.log("Color is green");
    break;
  case "white":
    console.log("Color is white");
    break;
  default:
    console.log("Color is black");
}
