import readlineSync from "readline-sync";
import chalk from "chalk";

// User's Current Score
var score = 0;

// High score
var highScores = [
  {
    name: "Ram",
    score: 3,
  },
  {
    name: "Sham",
    score: 5,
  },
  {
    name: "Hari",
    score: 4,
  },
];

// Questions with options and the Correct Answers
var questions = [
  {
    question:
      "How is JavaScript realted to TypeScript? \n A. Not Related \n B. JavaScript is the superset of TypeScript \n C. TypeScript is the superset of JavaScript \n D. None of these \n",
    answer: "C",
  },
  {
    question:
      "What is the file extension of Javascript? \n A. js \n B. ts \n C. py \n D. class \n",
    answer: "A",
  },
  {
    question: "What is the output of \n console.log(NaN == NaN); ?\n",
    answer: "false",
  },
  {
    question: `What is the output of \n console.log("b" + "a" + +"a" + "a"); ? \n`,
    answer: "banana",
  },
  {
    question: `What is the output of \n console.log(1 < 2 < 3); ? \n`,
    answer: "true",
  },
  {
    question: `What is the output of \n console.log(3 > 2 > 1); ? \n`,
    answer: "false",
  },
];

const name = getName();

/**
 * Gets the user's name.
 * @return {string} - The user's name.
 */
function getName() {
  return readlineSync.question(chalk.blue("What is your name? "));
}

/**
 * Prints the Welcome Message.
 */
function welcomeMessage() {
  console.log(chalk.cyan(`Welcome to the JavaScript Quiz! ${name}`));
}

/**
 * Shows the question.
 * @param {string} question - The question to be asked.
 * @param {string} answer - The correct answer.
 */
function showQuestion(question, answer) {
  var userAnswer = readlineSync.question(chalk.blue(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("right!\n"));
    score++;
  } else {
    console.log(chalk.red("wrong!\n"));
  }

  console.log(chalk.cyan("current score: "), score);
  console.log("-------------");
}

/**
 * Starts the quiz.
 * And shows the result (score) at the end.
 */
function startQuiz() {
  for (var i = 0; i < questions.length; i++) {
    showQuestion(questions[i].question, questions[i].answer);
  }
}

/**
 * Adds the user's score to the high scores.
 * Displays the high scores.
 */
function displayHighscore() {
  highScores.push({
    name: name,
    score: score,
  });

  console.log(chalk.bgCyan(` YAY! You SCORED: ${score} `));

  console.log(chalk.magentaBright("Check out the high scores."));

  highScores.map((score) =>
    console.log(chalk.cyanBright(score.name), " : ", score.score)
  );
}

welcomeMessage();
startQuiz();
displayHighscore();
