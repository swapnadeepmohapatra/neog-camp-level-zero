import readlineSync from "readline-sync";
import chalk from "chalk";

// User's Current Score
var score = 0;

// Questions
var questions = [
  {
    question: "Where do I live? ",
    answer: "Bhubaneshwar",
  },
  {
    question: "What is my age? ",
    answer: "17",
  },
  {
    question: "Where do I study? ",
    answer: "DAV School",
  },
  {
    question: "What is my favourite stock broker? ",
    answer: "Zerodha",
  },
  {
    question: "What is my favourite food? ",
    answer: "Rice",
  },
];

// Get Name
function getName() {
  return readlineSync.question(chalk.blue("What is your name? "));
}

// Display welcome message
function welcomeMessage() {
  console.log(chalk.cyan(`Welcome to the quiz! ${getName()}`));
}

// Show question
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

// Start quiz
function startQuiz() {
  for (var i = 0; i < questions.length; i++) {
    showQuestion(questions[i].question, questions[i].answer);
  }

  console.log(chalk.bgCyan(` YAY! You SCORED: ${score} `));
}

welcomeMessage();
startQuiz();
