const rL = require("readline-sync");
const chalk = require("chalk");
const { questions, highScore } = require("./data.js");

var score = 0, usrName = "";

//function to print question and check answers
function game(index, question, options, answer) {
  console.log("\n--------------------------------------\n");
  console.log(chalk.cyanBright(`${index + 1}. ${question}`));
  var usrAns = rL.keyInSelect(options, "Enter: ");
  if (usrAns === answer) {
    console.log(chalk.green("\nYayy! You got that one 🤩"));
    score += 2;
  } else {
    console.log(chalk.redBright("\nOops! You are wrong 🙁"));
    score ? --score : score;
  }
  console.log(chalk.whiteBright.bold(`Your current score is: ${score}`));
}

//function to get name of user
function getName() {
  return rL.question("Please enter your name: ");
}


// start of the program
console.log(chalk.rgb(255, 236, 25).bgBlack.underline.bold("HOW WELL DO YOU KNOW ME?\n"));
console.log(chalk.rgb(255, 236, 25)("Here's a little quiz about me, let's see if you can get all answers correct 😜\n\n"));

while ((usrName = getName().trim()) === "")
  console.log(chalk.red.bold("Please enter your name without blank space!\n"));

console.log(chalk.cyanBright(`\n\nWelcome ${usrName} 😃\n\n`));

console.log(`Rules of the game:\n 
1. There are total 10 questions
2. Enter the number displayed before the option
3. For each correct answer you will get 2 points
4. For each wrong answer 1 point will be deducted`);

for (var i = 0; i < questions.length; i++)
  game(i, questions[i].question, questions[i].options, questions[i].answer);

console.log(chalk.rgb(255, 236, 25).bold(`\n\nYour final score is: ${score}\n\n`));

for (var i = 0; i < highScore.length; i++) {
  if (score >= highScore[i].score) {
    highScore.splice(i, 0, {
      name: usrName,
      score
    })
    console.log(chalk.rgb(191, 9, 232)("Congratulations!🎉 You made it into the score board!\n\n"));
    break;
  }
}
if (highScore.length < 3 && score > 5) {
  console.log(chalk.rgb(191, 9, 232)("Wow! You did well!👏\n\n"));
}

console.log(chalk.rgb(255, 236, 25)("Score board:"));
highScore.forEach(e => {
  console.log(`${e.name}: ${e.score}`);
});
console.log("\n\nThank you for taking the quiz ❤️ ❤️");


