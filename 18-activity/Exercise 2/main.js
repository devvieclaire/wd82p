let testScore1 = parseInt(prompt("Test Score 1:"));
let testScore2 = parseInt(prompt("Test Score 2:"));
let testScore3 = parseInt(prompt("Test Score 3:"));

let averageScore = (testScore1 + testScore2 + testScore3) / 3;

averageScore = Math.round(averageScore);

document.write("Average Score: " + averageScore);
