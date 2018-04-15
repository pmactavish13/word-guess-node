var Word = require("./word.js");
var inquirer = require("inquirer");
var RandomWord = require("./randomWord.js")
var isLetter = require('is-letter');
var guessesCounter = 8

//*********************** START SCREEN ***********************
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
        console.log("\nGOOD LUCK!\n");
        pickWord()
    } else {
        console.log("Maybe another time.")
    }
});

//*********************** PLAY GAME ***********************

// NPM random-words.js randomly chooses a word
function pickWord() {
    var randomWord = new RandomWord();
    randomWord = randomWord.randomWord;
    wordLength(randomWord);
}

// Check length of randomly chosen word
function wordLength(newRandomWord) {
    if (newRandomWord.length < 7) {
        pickWord();
    } else if (newRandomWord.length >= 7) {
        populateScreen(newRandomWord);
    }
}

// If randomly chosen word length > 7 setup initial screen
function populateScreen(wordToGuess) {
    word = new Word(wordToGuess);
    word.wordPlaceHolder();
    guessLetter(wordToGuess);
}

function guessLetter(guessWord) {
    guessesCounter--
    if (guessesCounter > 0) {
        inquirer.prompt([
            {
                name: "yourGuess",
                type: "input",
                message: "\nYou have " + guessesCounter + " guesses remaining.  Enter a Letter.\n",
                validate: function (value) {
                    if (isLetter(value)) {
                        return true;
                    } else {
                        return "Please enter a letter."
                    }
                }
            }
        ]).then(function (answer) {
            var letterGuessed = answer.yourGuess;
            word = new Word(guessWord,letterGuessed )
            word.guess()
            //word.wordPlaceHolder();

        });
    }
}
// this.guessesRemaining = 7;
// this.guessedLetters = [];

    // console.log(word)
    // console.log(word.randomWord)
    // console.log(word.splitRandomWord + " index")
    // console.log(word.wordPlaceHolder + " index")
    // console.log(word.guess + " index")
    // console.log(word.toString + " index")
