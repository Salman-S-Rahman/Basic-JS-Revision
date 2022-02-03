var words =
  "I am               Taskin Asghar. I am younger brother of Asghar Afghan";

var totalWord = 0;

for (var i = 0; i < words.length; i++) {
  var element = words[i];
  if (element == " " && words[i - 1] !== " ") {
    totalWord++;
  }
}
totalWord++;
console.log(totalWord);

// ============= total word count by js =============
