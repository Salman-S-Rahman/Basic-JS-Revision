var numbers = [22, 25, 27, 65, 87, 37];
var studentsInfo = {
  name: "Taskin Asghar",
  study: {
    uni: "AIUB",
    subject: "EEE",
  },
};

const myInfo = `My name is ${studentsInfo.name} & I'm ${numbers[1]} years old. I study at ${studentsInfo.study.uni} in ${studentsInfo.study.subject}`;

console.log(myInfo);
