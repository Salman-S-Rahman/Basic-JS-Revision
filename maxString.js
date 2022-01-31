var studentsName = ["Taskin", "Asghar", "Mohib Jan", "Afghan", "Taskin", "Asghar"];

var bigName = studentsName[0];

for (var i = 0; i < studentsName.length; i++) {
    var element = studentsName[i];
    if (element.length > bigName.length) {
        bigName = studentsName[i];
    }

}
console.log("Biggest Name : " + bigName);

// ================== biggest name in array ================= 