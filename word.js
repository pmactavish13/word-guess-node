var Letter = require("./letter.js");

var Word = function (randomWord) {
    this.randomWord = randomWord.toUpperCase();
    this.splitRandomWord = this.randomWord.split("");
    this.letterArray = [];
    this.guessState = "";

    // constructs an object of Letter from letter.js for each letter
    for (var i = 0; i < this.splitRandomWord.length; i++) {
        var eachLetterObject = "";
        eachLetterObject = new Letter(this.splitRandomWord[i]);
        this.letterArray.push(eachLetterObject);

        // underscore or letter on screen
        this.wordPlaceHolder = function () {
            var letterUnderscore = "";
            for (var i = 0; i < this.letterArray.length; i++) {
                letterUnderscore += this.letterArray[i].showRightLetter();
            };
            this.guessState = letterUnderscore;
            console.log(this.guessState + "\n");
        };

        // check if guessed letter in word
        this.guess = function (letterGuessed) {
            for (var i = 0; i < this.letterArray.length; i++) {
                this.letterArray[i].checkLetter(letterGuessed);
            };
        };
    };
};

module.exports = Word;
