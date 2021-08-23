const readLineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

function welcome(){
  var userName = readLineSync.question(chalk.bgYellow("What is your name? \n"));
  console.log(chalk.blue("Welcome ") + chalk.blue.bold(userName) + chalk.blue(" to THE ULTIMATE WANDAVISION QUIZ!!"))
}

var questions = [
  {
    question:"In episode 1 of WandaVision, who visited Wanda and Vision for a 90s sitcom-style dinner?",
    answer: "Mr Hart",
  },
  {
    question: "Why does Vision appear intoxicated in episode 2? (HINT: Give only the keyword)",
    answer: "Gum"
  },
  {
    question: "What is Monica Rambeau's fake name in episode 3?",
    answer:"Geraldine"
  },
  {
    question: "In episode 4, who discovers that the Hex is emitting broadcast signals similar to television signals?(HINT: Firstname Lastname)",
    answer: "Darcy Lewis"
  },
  {
    question: "What is the name of Billy and Tommy's dog in episode 5 who was found dead by Agnes?",
    answer: "Sparky"
  },
  {
    question: "In episode 6, while trick-or-treating, which powers did Tommy inherit?",
    answer: "Super Speed"
  },
  {
    question: "What is Agnes' real name?",
    answer: "Agatha Harkness"
  },
  {
    question: "Episode 8 begins with a scene of Agnes in 1693. What city is she in? (Only city name)",
    answer: "Salem"
  },
  {
    question: "What is 'Pietro's' real name found in episode 9?",
    answer: "Ralph Bohner"
  },
  {
    question: "By what name does Agnes refer to Wanda Maximoff in the final episode that has never been used in the MCU previously?",
    answer: "Scarlet Witch"
  },
  {
    question: "What type of magic does Agnes accuse Wanda of using to control Westview's residents?(Only one word)",
    answer: "Chaos"
  },
  {
    question: 'What is the name of the antidepressant advertised in episode 7?',
    answer: "Nexus"
  },
  {
    question: "What famous thought experiment does Vision use to convince White Vision of his true nature?(3 words)",
    answer: "Ship of Theseus"
  },
  {
    question: "What book is Wanda seen reading from in the post credits scene?(One word)",
    answer: "Darkhold"
  }
]

  function playQuiz(ques, ans) {
  var userAnswer = readLineSync.question(ques);

  if (userAnswer.toUpperCase() === ans.toUpperCase()) {
    console.log(chalk.greenBright("Right!"));
    score += 1;
  } else {
    console.log(chalk.redBright("Wrong!"));
  }
  console.log("Current Score: ", score)
  console.log("--------------------")
}

function game() {
  for(var i=0; i < questions.length; i++){
    var currQues = questions[i];
    playQuiz(currQues.question, currQues.answer);
  }
}

function displayScores(){
  console.log(chalk.blueBright("YAYYY!!! You scored "+ score))
}




welcome()
game()
displayScores()