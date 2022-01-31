var studentsName = ["Taskin", "Asghar", "Mohib Jan", "Afghan", "Taskin", "Asghar"];

var bigName = studentsName[0];

for (var i = 0; i < studentsName.length; i++) {
    var element = studentsName[i];
    if (element.length > bigName.length) {
        bigName = studentsName[i];
    }

}
console.log("Biggest Name Is : " + bigName);

// ================== biggest name in array ================= 
var studentsName = ["Taskin", "Asghar", "Mohib Jan", "Afghan", "Taskin", "Asghar"];

var tinnyName = studentsName[0];

for (var i = 0; i < studentsName.length; i++) {
    var character = studentsName[i];

    if (character.length < tinnyName.length) {
        tinnyName = studentsName[i];

    }
}
console.log("Smallest Name Is : " + tinnyName);

// ================== smallest name in array ================= 