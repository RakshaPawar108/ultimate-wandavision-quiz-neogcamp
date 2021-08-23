const readLineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
var userName = readLineSync.question(chalk.bgYellow("What is your name? \n"));