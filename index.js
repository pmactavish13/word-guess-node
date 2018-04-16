var Word = require("./word.js");
var inquirer = require("inquirer");
var RandomWord = require("./randomWord.js")
var isLetter = require('is-letter');

var guessesCounter = 8
var guessesArray = []
var alphabet = genCharArray('a', 'z');
var TargetWord = "";



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

//populates letter array
function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

//*********************** PLAY GAME ***********************

//*************** GENERATE WORD AND SET UP SCREEN***************
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
    guessesArray = []
    TargetWord = new Word(wordToGuess);
    TargetWord.wordPlaceHolder();
    guessLetter(wordToGuess);
    //guessLetter(wordToGuess);
}

//**************** ACTIVE PLAY -PICK LETTRS *****************

// Guess a letter
function guessLetter(guessWord) {
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
            var letterGuessed = answer.yourGuess.toUpperCase;
            // check to see if letter already guessed
            if (guessesArray.indexOf(letterGuessed) !== -1) {
                console.log("You already guessed that letter.  Try Again.")
                TargetWord.wordPlaceHolder();
                guessLetter();
            } else {
                guesserArray.push(letterGuessed)
                if (TargetWord.splitRandomWord.indexOf(letterGuessed) === -1) {
                    guessesCounter--;
                    console.log("Incorrect Guess\n");
                    if (guessesCounter > 0) {
                        TargetWord.wordPlaceHolder();
                        guessLetter();
                    } else {
                        console.log("GAME OVER!!\n\nThe correct answer was " + guessWord + ".\n");
                        pickWord()
                    }
                } else {
                    TargetWord.guess(letterGuessed);
                    TargetWord.wordPlaceHolder();
                    if (TargetWord.guessState.indexOf("_") === -1) {
                        console.log("You Win!")
                        pickWord();
                    } else {
                        guessLetter()
                    }
                }
            }

        });
    }
}    