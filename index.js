var Word = require("./word.js");
var inquirer = require("inquirer");
var randomWord = require('random-words');
var isLetter = require('is-letter');

inquirer.prompt([
    {
        name: "playWordGuess",
        type: "confirm",
        message: "\n************************** Welcome to Word Guess **************************\n" +
            "\nA word is randomly selected using npm.js random-words." +
            "\nUnderscores will be shown on your sreen so you can see how many letters are in the word." +
            "\nEnter a letter at the prompt." +
            "\nIf the letter you guessed is in the word, it will replace the underscore." +
            "\nIf you get all the letters in the word before you guess 7 incorrect letters, you WIN!" +
            "\n\n***************************************************************************" +
            "\n\nWould you like to play?",
        default: true
    }
]).then(function (answer) {
    if (answer.playWordGuess === true) {
        this.guessesRemaining = 7;
        this.guessedLetters = [];
        console.log("Good Luck!")
        startGame()
    } else {
        console.log("Maybe another time.")
    }
});

function startGame() {
    console.log(randomWord());
};


